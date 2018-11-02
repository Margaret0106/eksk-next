import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import i18n from '../../i18n'

const LanguageSwitch = ({ router }) => (
  <div className="lang-menu">
    <ul>
      <li>
        <Link href={`${router.pathname}`}>
          <a onClick={() => i18n.changeLanguage('ru')}>Ру</a>
        </Link>
      </li>
      <li>
        <Link href={`${router.pathname}?lng=de`}>
          <a onClick={() => i18n.changeLanguage('de')}>Ққ</a>
        </Link>    
      </li> 
    </ul>
  </div>
)

export default withRouter(LanguageSwitch)