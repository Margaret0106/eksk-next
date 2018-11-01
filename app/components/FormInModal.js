import React, {Component} from 'react'
import Icons from './Icons';
import classnames from 'classnames';
import getFormData from '../utils/getFormData'
import {connect} from 'react-redux';
import 'isomorphic-fetch'
import {Field, reduxForm, reset, SubmissionError} from 'redux-form'

const validate = values => {
  
  const errors = {}
  if (!values.city) {
    errors.city = 'Не ввели город'
  }
  if (!values.email) {
    errors.email = 'Не ввели почту'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильно ввели почту'
  }
  if (!values.street) {
    errors.street = 'Не ввели улицу'
  }
  return errors
}


const InputHalf = ({
  input,
  label,
  type,
  placeholder,
  meta: {
    touched,
    error
  }
}) => (
  <div
    className={classnames('form-group form-group--half', {
    error: touched && error,
    success: touched && !error
  })}>
    <input
      {...input}
      type={type}
      className="form-control"
      placeholder={placeholder}/> 
  </div>
)

const Input = ({
  input,
  label,
  type,
  placeholder,
  meta: {
    touched,
    error
  }
}) => (

  <div
    className={classnames('form-group', {
    error: touched && error,
    success: touched && !error
  })}>
    <input
      {...input}
      type={type}
      className="form-control"
      placeholder={placeholder}/>
  </div>
)

class FeedbackFormModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
        successModalOpen: false,
        fetching: false,
        successMessage: null
    }
  }

  componentWillReceiveProps () {
    // console.log ('componentWillReceiveProps', this.props)
  }

  _handleSubmit = (values) => {
    
    // event.preventDefault();
    const { dispatch, form, stop } = this.props
    const formData = values   

    fetch(`http://eksk-landing.rocketfirm.net/api/v1/feedback/create`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: getFormData(formData)
    }).then((res) => res.json()).then((data) => {
      // console.log('data', data);
      if (data.success) {
        this.setState({
          successMessage: 'Заявка успешно отправлена'
        }, function() {
          setTimeout(() => {
            dispatch(reset(form))
            this.setState({
              successMessage: null
            })
          }, 3000);
        }) 
        
        
      } else {

      }      
       
        
    })
  };
  render () {    
    const {handleSubmit, pristine, reset, submitting, errors, isTouched} = this.props    
    
    return (
      <form className="form-transparent form-flex" onSubmit={handleSubmit(this._handleSubmit)}>
        <Field name="email" type="email" component={InputHalf} placeholder="Почта"/>
        <Field name="city" type="text" component={InputHalf} placeholder="Город"/>
        <Field name="street" type="text" component={Input} placeholder="Улица"/>        
        <button type="submit" disabled={submitting} className="btn btn--transparent">Отправить заявку {Icons('arrow')}
        </button>     
        <div className="form-messages">           
          {isTouched && errors &&
            Object.keys(errors).map((item, i) => ( 
              <div className="error-message" key={i}>{errors[item]}</div>               
            ))
          }  
          {this.state.successMessage && 
            <div className="success-message">{this.state.successMessage}</div>
          }          
        </div>   
      </form>
    )
  }  
}

const mapStateToProps = state => { 
  const {
    form: {
      syncValidation2: {
        syncErrors,
        fields
      }
    }
  } = state
  const errors = syncErrors ? Object.keys(syncErrors).reduce((carry, key) => {
    const item = syncErrors[key]
    if (fields && fields[key]) {
      if (!fields[key].active && (fields[key].visited || fields[key].touched)) {
        carry[key] = item
      }
    }
    return carry
  }, {}) : {}
  return {
    errors,
    isTouched:  state.form.syncValidation2.anyTouched
  };
};


export default reduxForm({
  form: 'syncValidation2', // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(connect(mapStateToProps)(FeedbackFormModal))

