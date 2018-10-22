import React, {Component} from 'react';
import classNames from 'classnames'
import Autosuggest from 'react-autosuggest';
import 'isomorphic-fetch'
import _ from 'lodash'

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  }, {
    name: 'Elm',
    year: 2012
  }

];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (data, value) => {
  const inputValue = value
    .trim()
    .toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : data.filter(lang => lang.title.toLowerCase().slice(0, inputLength) === inputValue);
};

// When suggestion is clicked, Autosuggest needs to populate the input based on
// the clicked suggestion. Teach Autosuggest how to calculate the input value
// for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.title}
  </div>
);

class CheckKsk extends Component {


  constructor(props) {
    super(props);
    // Autosuggest is a controlled component. This means that you need to provide an
    // input value and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest, and they are
    // initially empty because the Autosuggest is closed.

    this.inputs = {
      name: { error: false, success: false },
      email: { error: false, success: false }      
    }

   
    this.state = {
      value: '',
      cities: this.props.data.cities,
      suggestions: [],
      submitting: false,
      submitted: false,

      formData: {},
      successModalOpen: false,
      states: this.inputs,
      fetching: false
    };
  }
  setStatePromise = (state) => {
      return new Promise((resolve) => {
          this.setState(state, resolve)
      })
  }

  hideSuccesModal = () => { 
      this.setState({ successModalOpen: false }) 
  }


  componentDidMount() {
    // let {cities} = this.props.data;
    console.log('cities', this.state.cities)
  }

  onChange = (event, {newValue, method}) => {
    this.setState({value: newValue});
  };

  onSuggestionSelected = (event, { method }) => {
      console.log('here')
    if (method === 'enter') {
      event.preventDefault();
    }
  };

  // Autosuggest will call this function every time you need to update
  // suggestions. You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({value}) => {
    this.setState({suggestions: getSuggestions(this.state.cities, value)});
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []});
  };


  _handleChange = (event) => {
    const {formData} = this.state;
        this.setState({
            formData: {
                ...formData,
                [event.target.getAttribute('name')]: event.target.value
            }
    })
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    
    let city = encodeURI(this.state.value)
    let address = encodeURI(this.state.formData.address)

    console.log('formData', city, address)
    fetch(`https://dev.e-kck.kz/api/v1/landing/search/?city=${city}&address=${address}`, {
      method: 'get',      
      headers: {        
        'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'                               
      },     
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    })
  };

  // submit (e) {
  //   e.preventDefault()
  //   const formData = new FormData(e.target)
  //   console.log('data', formData)

    // fetch(`http://dev.e-kck.kz/api/v1/landing/search`, {
    //   method: 'get',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then((res) => {
    //   res.status === 200 ? this.setState({ submitted: true }) : ''
    // })
  // }

  render() {

    const { formData,  update, loading, autoComplete} = this.state;

    const { successModalOpen, states, fetching } = this.state
    const inputClasses = _.mapValues(states, ({ error, success }) => (classNames('input-container', { error: error, success: success })))
    const buttonClass = classNames({ fetching: fetching })

    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Город',
      name: 'city',
      value,
      className: 'form-control',
      onChange: this.onChange,
      autoComplete: 'off'
    };

    return (
      <section className="section section5">
        <div className="map">
          <img src="/static/images/map.png" alt=""/>
        </div>
        <div className="check-form">
          <p>Проверьте поддержку
            <br/>приложения в вашем КСК</p>
          <form className="form-inline" onSubmit={ this._handleSubmit }>
            <div className="form-group">
              {/* <input className="form-control selectpicker" placeholder="Город"/>  */}
              <Autosuggest 
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}                 
                />
            </div>
            <div className="form-group">
              <input name='address'
                     type="text" 
                     className="form-control" 
                     id="" 
                     placeholder="Адрес"
                     onChange={this._handleChange}/>
            </div>

            <button type="submit" disabled={ fetching } className="btn btn--primary">Проверить</button>
          </form>
          {/* <div
                    className={ successModalOpen ? 'succes' : 'error' }
                    onClose={ this.hideSuccesModal }
                >
                    <p> Сообщение отправлено </p>
                </div> */}
        </div>
      </section>
    )
  }
}

export default CheckKsk