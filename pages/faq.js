import React, {Component} from 'react';
import {Collapse, Button, CardBody, CardHeader, Card} from 'reactstrap';
import faqs from '../data/faqs';
import classnames from 'classnames';
import {Accordion, AccordionItem} from 'react-sanfona';
import Layout from '../app/common/MyLayout.js'
import { translate } from 'react-i18next'

class FaqPage extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      activeCard: 1
    };
  }

  setActiveCard = (item) => {
    const activeCard = item.id == this.state.activeCard ? null : item.id;     
    this.setState({
      activeCard
    })
  }

  render() {
    const faqs = this.props.lng == 'ru' ? this.props.pageData.RU.faqs : this.props.pageData.KZ.faqs
    console.log('faqs' ,this.props)
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
                        {el.id}. {el.question}
                        <div className="card-indicator">
                          <span></span>
                          <span></span>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={this.state.activeCard === el.id }>
                        <CardBody>
                          <div dangerouslySetInnerHTML= {{__html: el.answer}} />
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

export default translate(['home', 'common'])(FaqPage)