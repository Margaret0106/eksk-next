import React, {Component} from 'react';


class Facts extends Component {
    constructor(props) {
        super(props);  
    }  
    
    componentDidMount() {
        console.log('facts', this.props);
    }
       
    render() {         

        return (
            <section className="section section4">
                <h2>Присутствие <br/>в Казахстане</h2>
                <div className="facts-list">
                    <div className="fact-item">
                        <div className="fact-item__number">
                            600
                        </div>
                        <div className="fact-item__text">
                            КСК <br/>в базе
                        </div>
                    </div>
                    <div className="fact-item">
                        <div className="fact-item__number">
                            4
                        </div>
                        <div className="fact-item__text">
                            города <br/>поддерживаются
                        </div>
                    </div>
                    <div className="fact-item">
                        <div className="fact-item__number">
                            7 000
                        </div>
                        <div className="fact-item__text">
                            заявок <br/>обработано
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default Facts