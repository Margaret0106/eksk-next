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

  /**
   * Them main function that validates the form and fills in the error messages.
   * @returns bool Returns a boolean showing if the form is valid for submission or not.
   **/
  validate = () => {

    const invalidities = [];   
    console.log('here onValidate', invalidities)

    //this.formEl is a reference in the component to the form DOM element.
    const formEl = this.formEl;
    const formLength = formEl.length;

    /*
    * The checkValidity() method on a form runs the 
    * html5 form validation of its elements and returns the result as a boolean.
    * It returns 'false' if at least one of the form elements does not qualify,
    * and 'true', if all form elements are filled with valid values.
    */
   
    if (formEl.checkValidity() === false) { 
      for (let i = 0; i < formLength - 1; i++) {
        //the i-th child of the form corresponds to the forms i-th input element
        const elem = formEl[i];
        /*
        * errorLabel placed next to an element is the container we want to use 
        * for validation error message for that element
        */    
       
        elem.setCustomValidity('') 
       
        const errorContainer = elem.parentNode.parentNode.querySelector(".form-messages");
        // const errorLabel = document.createElement("div");
        // errorLabel.className = `error-${elem.name}`
        
        /*
        * A form element contains also any buttuns contained in the form.
        * There is no need to validate a button, so, we'll skip that nodes.
        */
        if (elem.nodeName.toLowerCase() !== "button") {
          /*
          * Each note in html5 form has a validity property. 
          * It contains the validation state of that element.
          * The elem.validity.valid property indicates whether the element qualifies its validation rules or no.
          * If it does not qualify, the elem.validationMessage property will contain the localized validation error message.
          * We will show that message in our error container if the element is invalid, and clear the previous message, if it is valid.
          */
          if (!elem.validity.valid) {            
            console.log('invalid', elem.validity)
            if (elem.validity.typeMismatch) {
                elem.setCustomValidity(`Неверный формат поля ${elem.placeholder}`) 
            } 
            else if (elem.validity.valueMissing)  {             
              elem.setCustomValidity(`Заполните поле ${elem.placeholder}`)              
            } 
            else {
              elem.setCustomValidity('')
            } 
                     
            invalidities.push(elem.validationMessage)
            
          } else {
            console.log('valid', elem.validity)            
          }
        }
                    
        let errorsList = invalidities.reduce((result, item) => {
          // Add a string to the result for the current item. This syntax is using template literals.
          result += `<li>${item}</li>`;          
          // Always return the result in the reduce callback, it will be the value or result in the next iteration.
          return result;
        }, '');  

        errorContainer.innerHTML = errorsList;   

      }
      //Return 'false', as the formEl.checkValidity() method said there are some invalid form inputs.
      return false;

    } else {
      //The form is valid, so we clear all the error messages
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        const errorContainer = elem.parentNode.parentNode.querySelector(".form-messages");
        // const errorLabel = elem.parentNode.parentNode.querySelector(`.error-${elem.name}`);
        if (elem.nodeName.toLowerCase() !== "button") {
          errorContainer.innerHTML = ""
        }
      }

      //Return 'true', as the form is valid for submission
      return true;
    }
  };



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

  _handleSubmit = () => {
    // event.preventDefault();
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

    /**
  * This is the method that is called on form submit.
  * It stops the default form submission process and proceeds with custom validation.
  **/
 submitHandler = event => {
  console.log('here onSubmit')
  event.preventDefault();

  //If the call of the validate method was successful, we can proceed with form submission. Otherwise we do nothing.
  if (this.validate()) {    
    this._handleSubmit();
  }

  this.setState({ isValidated: true });
};


  render() {

    const {isValidated} = this.state

    return (
        <form
            //ref="el => this.form = el"
            className={classnames('form-transparent form-flex', { 'was-validated': isValidated == true})}
            //onSubmit={this._handleSubmit}
            noValidate
            ref={form => (this.formEl = form)}
            onSubmit={this.submitHandler}  onInput={isValidated ? this.submitHandler : undefined}
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