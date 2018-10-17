import React, {Component} from 'react';


class CheckKsk extends Component {
    constructor(props) {
        super(props);          
    }    
     
    render() {  

        return (
            <section className="section section5">
                <div className="map">
                    <img src="/static/images/map.png" alt=""/>
                </div>
                <div className="check-form">
                    <p>Проверьте поддержку <br/>приложения в вашем КСК</p>
                    <form className="form-inline">
                        <div className="form-group">
                            {/* <select name="" id="" title="Город" data-placeholder="Город" className="selectpicker">
                            <option value="Астана">Астана</option>
                            <option value="Алматы">Алматы</option>
                            <option value="Актобе">Актобе</option>
                            </select> */}
                            <input className="form-control selectpicker" placeholder="Город"/>
                            {/* <script> */}
                            {/* let options = {
                                data: ["Алматы", "Астана", "Караганда", "Актау"]
                            } */}
                            {/* </script> */}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="" placeholder="Адрес"/>
                        </div>
                        <button type="submit" className="btn btn--primary">Проверить</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default CheckKsk