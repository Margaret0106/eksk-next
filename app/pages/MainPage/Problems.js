import React, {Component} from 'react';
import { TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import problems from '../../../data/problems';
import ProblemSlide from './ProblemSlide.js';

class Problems extends Component {
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
            <section className="section section1"> 
                <div className="section-half">
                    <div className="iphone-perfomance">
                        <img src="/static/images/iphone.png" alt=""/>
                        <TabContent activeTab={this.state.activeTab}>
                            {
                                problems.map((el, i) => {
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
                <div className="section-half">                
                    <div className="section-content">
                        <h2>С приложением легче решать бытовые проблемы</h2>
                        <p>Меняйте свой жилой <br/>комплекс к лучшему</p>
                    </div>
                    <div className="swiper-container problems-slider">
                        <ul className="swiper-wrapper problems-list">
                            {
                                problems.map((el, i) => (
                                    <ProblemSlide 
                                        onClick={this.toggle} 
                                        className={classnames('swiper-slide', 'problems-list__item', { active: this.state.activeTab === el.id})} 
                                        key={el.id} 
                                        {...el}
                                    />)
                                )
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Problems