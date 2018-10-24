import React, {Component} from 'react';
import Icons from '../../components/Icons';
import classnames from 'classnames'
import 'isomorphic-fetch'
import _ from 'lodash'

class AddKsk extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            formValues: {}
        }        
    }   
    _handleChange = (event) => {
        const {formValues} = this.state;
            this.setState({
                formValues: {
                    ...formValues,
                    [event.target.getAttribute('name')]: event.target.value
                }          
            },
            function() {
              console.log('onchange', this.state.formValues)
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
        const formData = new FormData(event.target)   
        console.log('formValues', JSON.stringify(formData))        
        fetch(`http://eksk-landing.rocketfirm.net/api/v1/feedback/create`, {
          method: 'post',      
          headers: {        
            'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'                             
          },          //   body: JSON.stringify(formData)
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
                    <form className="form-transparent form-flex" onSubmit={ this._handleSubmit }>
                        <div className="form-group form-group--half">
                        <input onChange={this._handleChange} type="text" name="email" className="form-control" placeholder="Почта"/>
                        </div>
                        <div className="form-group form-group--half">
                        <input onChange={this._handleChange} type="text" name="city" className="form-control" placeholder="Город"/>
                        </div>
                        <div className="form-group">
                        <input onChange={this._handleChange} type="text" name="street" className="form-control" placeholder="Улица"/>
                        </div>
                        <button type="submit" className="btn btn--transparent">Отправить заявку {Icons('arrow')} </button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default AddKsk