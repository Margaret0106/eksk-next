import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Head>
          <title>EKSK Landing</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }  
}

export default Layout