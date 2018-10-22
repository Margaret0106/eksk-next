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
import "../node_modules/aos/src/sass/aos.scss"
import "../styles/main.scss"
import {connect} from 'react-redux';


class Page extends Component {
  
  constructor(props){
    super(props);      
  }
  componentDidMount(){
    console.log('props', this.props)
    AOS.init({
      duration : 2000
    })
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps)
  }


  render () {
    console.log('page props', this.props.activeClass)
    return (
    <Layout>
      <TopMain/>
      <main className="main">
        <div className="container">
          <Problems/>
          <Steps/>
          <Reviews/>
          <Facts data={this.props.data}/>
          <CheckKsk data={this.props.data}/>        
        </div>
        <AddKsk/>
      </main>
    </Layout>
    )    
  }  
};

Page.getInitialProps = async ({ req }) => {
  
  // const res = await fetch(`http://dev.e-kck.kz/api/v1/landing/search/?city=${ads}&address=${das}`, {
  const res = await fetch(`http://dev.e-kck.kz/api/v1/data`, {
    headers: {
      'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'
    }
  })
  const json = await res.json()
  console.log('data', json.data)
  return {data: json.data}
}

function mapStateToProps(state) {
  return {activeClass: state.activeClass};
}


export default connect(mapStateToProps) (Page);
