import React, {Component} from 'react';
import Icons from './Icons';
import classnames from 'classnames';
import getFormData from '../utils/getFormData'
import 'isomorphic-fetch'
import _ from 'lodash'


class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      isValidated: false
    }    
  }

  _handleChange = (event) => {
    const {formData} = this.state;
    this.setState({
      formData: {
        ...formData,
        [
          event
            .target
            .getAttribute('name')
        ]: event.target.value
      }
    }, function () {
      console.log('onchange', this.state.formData)
    })
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const formData = this.state.formData
    console.log('formData', JSON.stringify(formData))

    fetch(`http://eksk-landing.rocketfirm.net/api/v1/feedback/create`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: getFormData(formData)
    }).then((res) => res.json()).then((data) => {
      console.log('data', data);
    })
  };  

  render() {

    const {isValidated} = this.state

    return (
        <form
            //ref="el => this.form = el"
            className={classnames('form-transparent form-flex')}
            //onSubmit={this._handleSubmit}           
            onSubmit={this._handleSubmit} 
            >
            <div className="form-group form-group--half">
              <input
                  onChange={this._handleChange}
                  type="email"
                  name="email"
                  className="form-control email-input"
                  required={true}
                  placeholder="Почта" 
                                 
                  />               
            </div>
            <div className="form-group form-group--half">
              <input
                onChange={this._handleChange}
                type="text"
                name="city"
                required={true}
                className="form-control"
                placeholder="Город"
                data-required-message="Нужно заполнить город"
                />                
            </div>
            <div className="form-group">
            <input
                onChange={this._handleChange}
                type="text"
                name="street"
                required={true}
                className="form-control"
                placeholder="Улица"/>                
            </div>
            <button type="submit" className="btn btn--transparent">Отправить заявку {Icons('arrow')}
            </button>
            <div className="form-messages">

            </div>
        </form>
        )
    }
}
export default FeedbackForm