import React, {Component} from 'react';
import Layout from '../app/common/MyLayout.js'

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <main className="main inner-page contacts-page">
          <div className="container">
            <div className="page-content">
              <h1>Контакты</h1>

              <div className="big-text">
                <p>Приходите обсудить детали или просто в навестить. Наши офисы расположены в
                  Астане и Алматы</p>
              </div>
              <div className="contacts-list">
                <div className="contacts-list__item">
                  <div className="contact-type">
                    <span>пишите</span>
                    <p>
                      <a href="mailto:eksk@mobileksk.kz">eksk@mobileksk.kz</a>
                    </p>
                  </div>
                  <div className="contact-type">
                    <span>звоните</span>
                    <p>
                      <a href="tel:+7 707 454 7864">+7 707 454 7864</a>
                    </p>
                  </div>
                </div>
                <div className="contacts-list__item">
                  <div className="contacts-list__title">Астана</div>
                  <div className="contacts-list__text">ул. Тлендиева 184/2, БЦ Седьмой Континент 3 этаж, офис 112
                    <a href="tel:+7 707 454 7864">+7 707 454 7864</a>
                  </div>
                </div>
                <div className="contacts-list__item">
                  <div className="contacts-list__title">Алматы</div>
                  <div className="contacts-list__text">ул. Конаева 4/1, БЦ Конаев 5 этаж, офис 98
                    <a href="tel:+7 787 646 7920">+7 787 646 7920</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default AboutPage