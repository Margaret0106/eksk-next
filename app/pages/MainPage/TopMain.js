import Icons from '../../components/Icons';
import React, {Component} from 'react';
import {store, representClass, citizenClass, partnerClass} from '../../../store'
import classnames from 'classnames'
import {connect} from 'react-redux';
import { translate } from 'react-i18next'

class TopMain extends Component {
  // export default class TopMain extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      ...props,
      activeClass: props.activeClass
    };
  }

  componentDidMount() {
    console.log('state', this.state);
  }

  render() {
    const {activeClass, t} = this.props
    console.log('top active class', activeClass)
    console.log('top main props', this.props)

    return (
      <div className="top-main-wrapper">
        <div className="top-main">
          <div className="container">
            <div className="top-main__content">
              <div className="section-left">
                {activeClass === 'citizen-page'
                  ? (
                    <div className='tab-pane citizen-block active' id="citizen-page">
                      <h1>{t('welcome')}</h1>
                      <p>{t('common:integrates_react-i18next')}</p>
                      <h2>Упрощаем общение
                        <br/>
                        между КСК и жителями</h2>
                      <p>Отправляйте заявки, получайте отчеты и организуйте собрания с соседями</p>
                      <div className="download-apps">
                        <p>Скачайте приложение, оно бесплатное</p>
                        <div className="app-links">
                          <a href="" className="app-link">
                            {Icons('apple')}
                            App Store
                          </a>
                          <a href="" className="app-link">
                            {Icons('google')}
                            Google Play
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                  : activeClass === 'represent-page' ? (
                    <div className='tab-pane represent-block active' id="represent-page">
                      <h2>Присоединяйтесь к цифровизации!</h2>
                      <div className="tab-pane__content">
                        <div className="tab-pane__left">
                          <div className="big-text">
                            <p>Для сотрудников КСК мы разработали специальную админ-панель, удобную для
                              отработки запросов жильцов.</p>
                          </div>
                          <p>В админ-панели есть разграничение прав доступа (директор КСК видит всё, а
                            исполнитель — только необходимое ему). Работать с заявками удобно и на
                            настольном компьютере или ноутбуке, и через мобильный телефон.</p>
                          <p>Для реализации государственных требований, в админ-панель встроен механизм
                            подготовки и сдачи отчетов. Чтобы сделать отчет, достаточно нажать три кнопки!</p>
                        </div>
                        <div className="tab-pane__right">
                          <div className="facts-list">
                            <div className="fact-item">
                              <div className="fact-item__number">
                                900
                              </div>
                              <div className="fact-item__text">
                                жильцов
                                <br/>
                                зарегистрировано
                              </div>
                            </div>
                            <div className="fact-item">
                              <div className="fact-item__number">
                                4
                              </div>
                              <div className="fact-item__text">
                                города
                                <br/>поддерживаются
                              </div>
                            </div>
                            <div className="fact-item">
                              <div className="fact-item__number">
                                10 000
                              </div>
                              <div className="fact-item__text">
                                заявок обработано
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ): (
                  <div className='tab-pane partner-block active' id="partner-page">
                    <h2>Сотрудничаем с бизнесом</h2>
                    <div className="tab-pane__content">
                      <div className="tab-pane__left">
                        <div className="big-text">
                          <p>Ежедневно сервисом пользуются тысячи казахстансцев, жильцов многоквартирных
                            домов.
                          </p>
                        </div>
                        <p>В приложении удобная сегментация пользователей по городам, районам города и
                          даже конкретным ЖК!</p>
                        <p>Готовы рассмотреть сотрудничество по интеграции ваших товаров или услуг в
                          наше приложение.</p>
                      </div>
                      <div className="tab-pane__right">
                        <div className="facts-list">
                          <div className="fact-item">
                            <div className="fact-item__number">
                              50 000
                            </div>
                            <div className="fact-item__text">
                              посетителей
                              <br/>ежемесячно
                            </div>
                          </div>
                          <div className="fact-item">
                            <div className="fact-item__number">
                              4
                            </div>
                            <div className="fact-item__text">
                              города
                              <br/>поддерживаются
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
}

              </div>
              <div className="phone-block">
                <img
                  src="/static/images/iphone-cut.png"
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1000"/>
              </div>
            </div>
          </div>
        </div>

        <div className="svg-border"></div>
        <div className="phone-messages">
          <div className="container">
            <div
              className="message accepted"
              id="message1"
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-duration="1000">
              {Icons('alert')}
              <div className="message-text">
                <p>Вашу заявку взяли в работу</p>
                <span>КСК "Айдар"</span>
              </div>
            </div>
            <div
              className="message process"
              id="message2"
              data-aos="fade-left"
              data-aos-delay="1100"
              data-aos-duration="1000">
              {Icons('orange')}
              <div className="message-text">
                <p>Сгорела лампочка</p>
                <span>рассматриваем</span>
              </div>
            </div>
            <div
              className="message done"
              id="message3"
              data-aos="fade-down"
              data-aos-delay="1200"
              data-aos-duration="1000">
              {Icons('ok')}
              <div className="message-text">
                <p>Давайте установим шлагбаум во дворе, надоело!</p>
                <span>исполнено</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}
function mapStateToProps(state) {
  return {activeClass: state.classReducer.activeClass};
}

export default translate(['home', 'common'])(connect(mapStateToProps)(TopMain));