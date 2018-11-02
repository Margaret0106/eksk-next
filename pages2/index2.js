import React, {Component} from 'react';
import Layout from '../app/common/MyLayout.js'
import TopMain from '../app/pages/MainPage/TopMain.js'
import Problems from '../app/pages/MainPage/Problems.js'
import Steps from '../app/pages/MainPage/Steps.js'
import Reviews from '../app/pages/MainPage/Reviews.js'
import Facts from '../app/pages/MainPage/Facts.js'
import CheckKsk from '../app/pages/MainPage/CheckKsk.js'
import AddKsk from '../app/pages/MainPage/AddKsk.js'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import AOS from 'aos'
import {connect} from 'react-redux';
import { withI18next } from '../lib/withI18next'
import { withNamespaces } from 'react-i18next';



class Page extends Component {
  
  constructor(props){
    super(props);      
  }  

  componentDidMount(){
    console.log('componentDidMount', this.props)
    // console.log('props', this.props)
    AOS.init({
      duration : 2000
    })
  }

  componentDidUpdate(prevProps) {
    // console.log('prevProps', prevProps)
  }

  render () {  
    const {t} = this.props
    console.log(this.props.i18n.language)
    return (      
    <Layout data={this.props.hash}>
      <h1>{t('welcome')}</h1>
      <p>{t('common:integrates_react-i18next')}</p>
      <p>{t('sample_test')}</p>
      <TopMain/>
      <main className="main main-page">
        <div className="container">
          <Problems/>
          <Steps/>
          <Reviews/>
          <Facts data={this.props.pageData}/>
          <CheckKsk data={this.props.data}/>        
        </div>
        <AddKsk/>
      </main>
    </Layout>
    )    
  }  
};

Page.getInitialProps = async ( {query} ) => {    

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
  return {data: ekskJson.data, pageData: contentJson.data, query: query}
}

function mapStateToProps(state) {
  return {activeClass: state.classReducer.activeClass};
}


export default  connect(mapStateToProps)(withI18next(['home', 'common'])(Page));
