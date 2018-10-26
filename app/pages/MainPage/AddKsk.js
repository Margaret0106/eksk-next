import React, {Component} from 'react';
import Icons from '../../components/Icons';
import FeedbackForm from '../../components/Formold';
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
    }      
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