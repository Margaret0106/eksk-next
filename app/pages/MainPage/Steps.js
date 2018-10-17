import React, {Component} from 'react';
import { TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import steps from '../../../data/steps';
import StepSlide from './StepSlide.js';

class Steps extends Component {
    constructor(props) {
        super(props);    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {        
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render() {        
        return (
            <section className="section section2">
                <div className="section-half">
                    <div className="section-content">
                    <h2>Как это работает на практике</h2>
                    <p>Представьте, что у вас на этаже сгорела лампочка, а ваш сын сильно боится темноты</p>
                    </div>
                    <ul className="steps-list">
                        {
                            steps.map((el, i) => (
                                <StepSlide 
                                    onClick={this.toggle} 
                                    className={classnames('steps-list__item', { active: this.state.activeTab === el.id})} 
                                    key={el.id} 
                                    {...el}
                                />)
                            )
                        }                        
                    </ul>
                </div>
                <div className="section-half">
                    <div className="iphone-perfomance">
                    <img src="/static/images/iphone.png" alt=""/>
                        <TabContent activeTab={this.state.activeTab}>
                            {
                                steps.map((el, i) => {
                                    return (
                                        <TabPane tabId={el.id} key={el.id}>
                                            <img src={el.image} alt=""/>
                                        </TabPane>
                                    )  
                                })
                            }
                        </TabContent>   
                    </div>
                </div>
            </section>
        )
    }
}

export default Steps