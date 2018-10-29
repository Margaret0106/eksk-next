import React, {Component} from 'react';
import {Collapse, Button, CardBody, CardHeader, Card} from 'reactstrap';
import faqs from '../data/faqs';
import classnames from 'classnames';
import {Accordion, AccordionItem} from 'react-sanfona';
import Layout from '../app/common/MyLayout.js'

class AboutPage extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      activeCard: '1'
    };
  }

  setActiveCard = (item) => {
    if (item.id == this.state.activeCard) {
      this.setState({
        activeCard: null
      })
    }
    else {
      this.setState({
        activeCard: item.id 
      })
    }
    
  }

  render() {
    return (
      <Layout>
        <main className="main inner-page">
          <div className="container">
            <div className="page-content page-content--full">
              <h1>Частые вопросы</h1>

              <div className="faq-accordion">
                {faqs.map((el, i) => {
                  return (
                    <Card key={el.id}>
                      <CardHeader className={classnames({active: this.state.activeCard === el.id})} 
                                  onClick={this.setActiveCard.bind(this, el)}>
                        {el.question} 
                        <div className="card-indicator">
                          <span></span>
                          <span></span>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={this.state.activeCard === el.id }>
                        <CardBody>
                          {el.answer}
                        </CardBody>
                      </Collapse>
                    </Card>
                    )
                  })
                }

              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default AboutPage