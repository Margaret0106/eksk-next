import React, {Component} from 'react';
import Link from 'next/link'
import classnames from 'classnames'
import { withRouter } from 'next/router'

import i18n from '../../i18n'

class LanguageSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      lang: this.props
    };
  }
 

 render () { 
  const {router, language} = this.props
  console.log('sww', language)
 
  return (   
    <div className="lang-menu">
      <ul>
        <li className={classnames({active: language == 'ru'})}>
          <Link href={`${router.pathname}`}>
            <a onClick={() => i18n.changeLanguage('ru')}>Ру</a>
          </Link>
        </li>
        <li className={classnames({active: language == 'de'})}>
          <Link href={`${router.pathname}?lng=de`}>
            <a onClick={() => i18n.changeLanguage('de')}>Ққ</a>
          </Link>    
        </li> 
      </ul>
    </div>
  )
 }
  
}



export default withRouter(LanguageSwitch)
