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
      formData: {}
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

    fetch(`http://eksk-landing.rocketfirm.net/en/api/v1/feedback/create`, {
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
    return (
        <form
            ref="el => this.form = el"
            className="form-transparent form-flex"
            onSubmit={this._handleSubmit}>
            <div className="form-group form-group--half">
            <input
                onChange={this._handleChange}
                type="text"
                name="email"
                className="form-control"
                placeholder="Почта"/>
            </div>
            <div className="form-group form-group--half">
            <input
                onChange={this._handleChange}
                type="text"
                name="city"
                className="form-control"
                placeholder="Город"/>
            </div>
            <div className="form-group">
            <input
                onChange={this._handleChange}
                type="text"
                name="street"
                className="form-control"
                placeholder="Улица"/>
            </div>
            <button type="submit" className="btn btn--transparent">Отправить заявку {Icons('arrow')}
            </button>
        </form>
        )
    }
}
export default FeedbackForm