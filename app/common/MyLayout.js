import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import "../../node_modules/aos/src/sass/aos.scss"
import "../../styles/main.scss"

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
        <Header data={this.props.query}/>
        {this.props.children}
        <Footer />
      </div>
    )
  }  
}

export default Layout