import React, {Component} from 'react';
import Icons from '../../components/Icons';
import FeedbackForm from '../../components/Form';
import classnames from 'classnames';
import getFormData from '../../utils/getFormData'
import 'isomorphic-fetch'

import _ from 'lodash'


// const getFormData = object => Object.keys(object).map((key) => {
//     return encodeURIComponent(key) + '=' + encodeURIComponent(object[key]);
//   }).join('&');

  
class AddKsk extends Component {
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
                    [event.target.getAttribute('name')]: event.target.value
                }          
            },
            function() {
              console.log('onchange', this.state.formData)
            }
          )
      }

        // e.preventDefault()
        // const formData = new FormData(e.target)
        // console.log('data', formData)

        // fetch(`http://dev.e-kck.kz/api/v1/landing/search`, {
        // method: 'get',
        // headers: {
        //     'Accept': 'application/json, text/plain, */*',
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(data)
        // }).then((res) => {
        // res.status === 200 ? this.setState({ submitted: true }) : ''
        // })
    
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
            <section className="section section6">
                <div className="container">
                <div className="feedback-content">
                    <div className="section-left">
                    <h2>Сделайте свою <br/> жизнь проще </h2>
                    <p>С приложением станет горазде легче решать бытовые проблемы</p>
                    <div className="download-apps">
                        <p>Скачайте приложение, оно бесплатное</p>
                        <div className="app-links">
                        <a href="" className="app-link">
                            {Icons('apple')}  App Store
                        </a>
                        <a href="" className="app-link">
                            {Icons('google')} Google Play
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="section-right">
                    <h2>Напишите нам, если вашего <br/> КСК нет в базе </h2>
                    <FeedbackForm/>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default AddKsk