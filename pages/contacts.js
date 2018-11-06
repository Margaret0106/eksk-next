import React, {Component} from 'react';
import Layout from '../app/common/MyLayout.js'
import { translate } from 'react-i18next'

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const contacts = this.props.lng == 'ru' ? this.props.pageData.RU.contacts : this.props.pageData.KZ.contacts
    console.log('faqs' ,this.props)
    return (
      <Layout>
        <main className="main inner-page contacts-page">
          <div className="container">
            <div className="page-content">
              <h1>{contacts.title}</h1>
              <div className="big-text">
                <div dangerouslySetInnerHTML= {{__html: contacts.description}} />              
              </div>
              <div className="contacts-list">
                <div className="contacts-list__item">
                  <div className="contact-type">
                    <span>пишите</span>
                    <p>
                      <a href="mailto:eksk@mobileksk.kz">{contacts.email}</a>
                    </p>
                  </div>
                  <div className="contact-type">
                    <span>звоните</span>
                    <p>
                      <a href="tel:+7 707 454 7864">{contacts.phone}</a>
                    </p>
                  </div>
                </div>
                {contacts.cities && contacts.cities.map((el, i) => {
                  return (

                    <div key={el.id} className="contacts-list__item">
                      <div className="contacts-list__title">{el.title}</div>
                      <div className="contacts-list__text">{el.address}
                        <a href="tel:+7 707 454 7864">{el.phone}</a>
                      </div>
                    </div>                    
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

export default translate(['home', 'common']) (AboutPage)