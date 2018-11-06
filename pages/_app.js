


import LanguageSwitch from '../components/LanguageSwitch'

import App, {Container} from 'next/app'
import React from 'react'
// import withReduxStore from '../lib/with-redux-store'
import {initializeStore} from '../store'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { I18n as I18nR, I18nextProvider } from 'react-i18next'
import initialI18nInstance from '../i18n'
import {setContent} from '../store'

class MyApp extends App {

  static async getInitialProps ({ ctx, query} ) {
  
    const ekskRes = await fetch(`https://dev.e-kck.kz/api/v1/data/`, {  
      method: 'get', 
      headers: {
        'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'
      }
    })
    const ekskJson = await ekskRes.json() 
    
    const contentRes = await fetch(`https://eksk-landing.rocketfirm.net/api/v1/page/index`, {
      method: 'get', 
      headers: {
        'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'
      }
    })

    const contentJson = await contentRes.json() 

    ctx.store.dispatch(setContent(contentJson.data))

    return {pageProps: {data: ekskJson.data, pageData: contentJson.data, query: query}}
  }

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
              <Component {...pageProps} />
            </React.Fragment>
          </Provider>
        </I18nextProvider>
      </Container>
    )
  }
}

export default withRedux(initializeStore)(MyApp)