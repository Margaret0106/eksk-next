import React, {Component} from 'react';
import Layout from '../app/common/MyLayout.js'

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <main className="main inner-page">
          <div className="container">
            <div className="page-content">
              <h1>Приложение ЕКСК</h1>
              <div className="page-content--flex">
                <div className="page-content--left">
                  <div className="big-text">
                    <p>Она спроектировано для облегчения коммуникации между жителями комплекса и
                      сотрудниками КСК</p>
                  </div>
                  <p>В админ-панели есть разграничение прав доступа (директор КСК видит всё, а
                    исполнитель — только необходимое ему). Работать с заявками удобно и на
                    настольном компьютере или ноутбуке, и через мобильный телефон.</p>
                  <p>Для реализации государственных требований, в админ-панель встроен механизм
                    подготовки и сдачи отчетов. Чтобы сделать отчет, достаточно нажать три кнопки!</p>
                    <figure>
                        <img src="/static/images/about.jpg" />
                        <figcaption>Офис команды разработки</figcaption>
                    </figure>
                    <p>Для реализации государственных требований,  в админ-панель встроен механизм подготовки и сдачи отчетов. Чтобы сделать отчет, достаточно нажать три кнопки!</p>
                </div>
                <div className="page-content--right">
                  <div className="facts-list">
                    <div className="fact-item">
                      <div className="fact-item__number">
                      50 000
                      </div>
                      <div className="fact-item__text">
                      пользователей <br/> ежемесячно
                      </div>
                    </div>
                    <div className="fact-item">
                      <div className="fact-item__number">
                        10
                      </div>
                      <div className="fact-item__text">
                      человек <br/>в команде
                      </div>
                    </div>
                    <div className="fact-item">
                      <div className="fact-item__number">
                       2
                      </div>
                      <div className="fact-item__text">
                      года длилась <br/>разработка
                      </div>
                    </div>
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