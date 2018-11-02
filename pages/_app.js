


import LanguageSwitch from '../components/LanguageSwitch'

import App, {Container} from 'next/app'
import React from 'react'
// import withReduxStore from '../lib/with-redux-store'
import {initializeStore} from '../store'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { I18n as I18nR, I18nextProvider } from 'react-i18next'
import initialI18nInstance from '../i18n'

class MyApp extends App {
  render () {
    const { Component, pageProps, store } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}
    console.log('props', pageProps)
    return (
      <Container>
        <I18nextProvider
          i18n={i18n || initialI18nInstance}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
        >
          <Provider store={store}>
            <React.Fragment>
              <I18nR ns='common' wait>
                {t => <h1>{t('common:integrates_react-i18next')}</h1>}
              </I18nR>
              <LanguageSwitch />
              <Component {...pageProps} />
            </React.Fragment>
          </Provider>
        </I18nextProvider>
      </Container>
    )
  }
}

export default withRedux(initializeStore)(MyApp)