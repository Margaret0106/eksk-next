import React, {Component} from 'react';
import classnames from 'classnames'
import Autosuggest from 'react-autosuggest';
import Select from 'react-select';
import Icons from '../../components/Icons';
import 'isomorphic-fetch'
import _ from 'lodash'
import Downshift from 'downshift'
import { dim } from '../../../node_modules/ansi-colors';


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (data, value) => {
  const inputValue = value
    .trim()
    .toLowerCase();
  const inputLength = inputValue.length;  
  return inputLength === 0
    ? []
    : data.filter(city => city.title.toLowerCase().slice(0, inputLength) === inputValue);
};

// When suggestion is clicked, Autosuggest needs to populate the input based on
// the clicked suggestion. Teach Autosuggest how to calculate the input value
// for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
let renderSuggestion = suggestion => (
  <div>
    {suggestion.title}
  </div>
);

class CheckKsk extends Component {

  constructor(props) {
    super(props);
    this.inputs = {
      name: { error: false, success: false },
      email: { error: false, success: false }      
    }   
    this.state = {
      value: '',
      cities: this.props.data.cities,
      noMatchesMessage: false,
      suggestions: [],
      submitting: false,
      submitted: false,
      formData: {},
      kskModalOpen: false,
      states: this.inputs,
      fetching: false,
      ksk: null, 
      successKsk: false,
      kskCityId: null
    };
  }
  setStatePromise = (state) => {
      return new Promise((resolve) => {
          this.setState(state, resolve)
      })
  }

  hideKskModal = () => { 
      this.setState({ kskModalOpen: false }) 
  }

  componentDidMount() {   
    console.log('cities', this.state.cities)
  }

  onChange = (event, {newValue, method}) => {    
    this.setState({value: newValue});
    if (getSuggestions(this.state.cities, newValue).length) {
      this.setState({noMatchesMessage: false})
    }
    else {
      this.setState({noMatchesMessage: true})
    }   
    if (newValue.length == 0) {
      this.setState({noMatchesMessage: false})
    } 
  };

  onBlur = (event, { highlightedSuggestion }) => {    
    console.log('highlightedSuggestion', highlightedSuggestion)    
    if (this.state.noMatchesMessage) {
      this.setState({value: ''});  
    }
    this.setState({noMatchesMessage: false})
  }; 

  // Autosuggest will call this function every time you need to update
  // suggestions. You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({value}) => {   
    this.setState({suggestions: getSuggestions(this.state.cities, value)});
  };

  onSuggestionSelected = (event, { method }) => {
    console.log('here')
    if (method === 'enter') {
      event.preventDefault();
    }
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
        },
        function() {
          console.log('onchange', this.state.formData.street)
        }
      )
  }

  _handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('beforesend', this.state.value, this.state.formData.street)   
    let city = encodeURI(this.state.value)
    let street = encodeURI(this.state.formData.street)
    let number = encodeURI(this.state.formData.house)
    fetch(`https://dev.e-kck.kz/api/v1/landing/search/?city=${city}&street=${street}&number=${number}`, {
      method: 'get',      
      headers: {        
        'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'                      
      },     
    }).then((res) => res.json()).then((data) => {
      console.log('data', data);      
      data.data && data.data.ksk ? 
        this.setState({ 
          successKsk: true, 
          ksk: data.data.ksk.title,
          kskCityId: data.data.city.id  
        }) : this.setState({ 
          successKsk: false, 
          ksk: null,
          kskCityId: null         
      }) 
      data.data ?
        this.setState({           
          kskModalOpen: true,
          kskCityId: _.findKey(this.props.cities, { 'title': 'Астана'})
        }) : this.setState({
          kskModalOpen: false
        })
      console.log('kskModalOpen', this.state.kskModalOpen, this.state.ksk)
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

    const { selectedOption, kskCityId, noMatchesMessage, kskModalOpen, states, fetching, value, suggestions, ksk, successKsk } = this.state
    const inputClasses = _.mapValues(states, ({ error, success }) => (classnames('input-container', { error: error, success: success })))
    const buttonClass = classnames({ fetching: fetching })

    const inputProps = {
      placeholder: 'Город',
      name: 'city',
      value,
      className: 'form-control',
      onChange: this.onChange,
      onBlur: this.onBlur,
      autoComplete: 'off'
    };    

    return (
      <section className="section section5">
        <div className="map">
          <img src="/static/images/map.png" alt=""/>
            <div className={ classnames(
                'ksk-modal',
                { 'ksk-modal--open': kskModalOpen == true},
                { 'ksk-modal--success': successKsk == true, 'ksk-modal--error': successKsk == false},
                { [`ksk-modal--city${kskCityId}`] : this.state.kskCityId}
              ) }>
              {
                successKsk ? (
                  <div>
                    <p>КСК «{ksk}» <br/><span>работает</span>  с приложением</p>                
                    <div className="app-links app-links--dark">
                      <a href="" className="app-link">
                        {Icons('apple')}
                        App Store
                      </a>
                      <a href="" className="app-link">
                        {Icons('google')}
                        Google Play
                      </a>
                    </div>
                  </div>                  
              ) :
              ( 
                <div>
                  <p>Ваш КСК  <br/><span>не работает</span>  с приложением</p>
                </div>                
              )
            }   
            </div>
        </div>
        <div className="check-form">
          <p>Проверьте поддержку
            <br/>приложения в вашем КСК</p>
          <form className="form-inline" onSubmit={ this._handleSubmit }>
            <div className="form-group">             
              <Autosuggest 
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}                 
                />
                {noMatchesMessage && 
                  <div className="no-matches">Города нет в списке</div>
                } 
            </div>
            <div className="form-group">
              <input name='street'
                     type="text" 
                     className="form-control" 
                     id="" 
                     placeholder="Улица"
                     onChange={this._handleChange}/>
            </div>
            <div className="form-group">
              <input name='house'
                     type="text" 
                     className="form-control" 
                     id="" 
                     placeholder="Дом"
                     onChange={this._handleChange}/>
            </div>

            <button type="submit" disabled={ fetching } className="btn btn--primary">Проверить</button>
          </form>

        </div>
      </section>
    )
  }
}

export default CheckKsk