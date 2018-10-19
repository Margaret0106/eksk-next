import React, {Component} from 'react';
import Icons from '../../components/Icons';

class CheckKsk extends Component {
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
                    <form className="form-transparent form-flex">
                        <div className="form-group form-group--half">
                        <input type="text" className="form-control" placeholder="Почта"/>
                        </div>
                        <div className="form-group form-group--half">
                        <input type="text" className="form-control" placeholder="Город"/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Улица"/>
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

export default CheckKsk