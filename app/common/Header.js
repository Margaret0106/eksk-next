import React, {Component} from 'react';
import Link from 'next/link'
import {initializeStore} from '../../store'
import {store, actionTypes, reducer} from '../../store'


const linkStyle = {
  marginRight: 15
}

const stateRedux = store.getState();

class Header extends Component {

  constructor(props) {
    super(props);
    this.changeBodyClass = this
      .changeBodyClass
      .bind(this);
    this.state = {
      activeClass: 'citizen-page',      
    };
  }

  changeBodyClass = (className) => {
    document.body.classList.remove('partner-page', 'represent-page', 'citizen-page');
    document.body.classList.add(className);
    if (this.state.activeClass !== className) {
        this.setState({
            activeClass: className
        });
        console.log(className)
        if (className === 'represent-page') {
            store.dispatch({type: actionTypes.REPRESENT});
            console.log(store.getState())
        }
        else if (className === 'partner-page') {
            store.dispatch({type: actionTypes.PARTNER});
            console.log(store.getState())
        }
        else if (className === 'citizen-page') {
            store.dispatch({type: actionTypes.CITIZEN});
            console.log(store.getState())
        }        
    }
  }

  render() {
    return (
      <div>
        {/* <Link href="/">
                <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                <a style={linkStyle}>About</a>
                </Link> */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <a href="">
                  <svg
                    width="100"
                    height="42"
                    viewBox="0 0 100 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.32 0H5.67C4.16703 0.00264374 2.72638 0.600866 1.66362 1.66362C0.600866 2.72638 0.00264374 4.16703 0 5.67L0 36.37C0.0131675 37.866 0.616032 39.2964 1.67766 40.3506C2.73928 41.4047 4.17393 41.9974 5.67 42H22.32C23.8178 42.0001 25.255 41.4085 26.3188 40.3541C27.3826 39.2997 27.9868 37.8677 28 36.37V5.67C27.9974 4.1653 27.3978 2.72314 26.3328 1.6601C25.2679 0.597052 23.8247 -2.33196e-06 22.32 0V0Z"
                      fill="url(#paint0_linear)"/>
                    <path
                      d="M41.6201 26.61V14.3H49.2301L48.8601 16.24H43.7101V19.4H48.5401L48.1901 21.29H43.7101V24.67H49.2301L48.8601 26.61H41.6201Z"
                      fill="#282828"/>
                    <path
                      d="M22.19 5.27002H5.8C5.05465 5.27792 4.34251 5.57957 3.81825 6.10944C3.294 6.63931 2.99996 7.35463 3 8.10002V32.67C2.99996 33.4154 3.294 34.1307 3.81825 34.6606C4.34251 35.1905 5.05465 35.4921 5.8 35.5H9L20 40.81V35.5H22.14C22.5142 35.504 22.8854 35.4337 23.2322 35.2933C23.579 35.1528 23.8946 34.945 24.1605 34.6818C24.4265 34.4186 24.6377 34.1053 24.7817 33.76C24.9258 33.4147 25 33.0442 25 32.67V8.10002C25 7.35291 24.7046 6.6361 24.1782 6.10595C23.6518 5.57579 22.9371 5.2753 22.19 5.27002ZM21.33 10.44V11.73H18.24V10.44H21.33ZM15.53 10.44V11.73H12.45V10.44H15.53ZM9.74 27.44H6.66V27.79H9.74V31.31H6.66V26.12H9.74V27.44ZM9.74 19.62H6.66V20H9.74V23.5H6.66V18.28H9.74V19.62ZM6.66 15.62V10.44H9.74V11.73H6.66V12.08H9.74V15.65L6.66 15.62ZM15.53 31.3H12.45V27.81H15.53V31.3ZM15.53 27.43H12.45V26.12H15.53V27.43ZM15.53 23.43H12.45V20H15.53V23.43ZM15.53 19.58H12.45V18.28H15.53V19.58ZM12.45 15.58V12.08H15.53V15.65L12.45 15.58ZM21.33 31.26H18.24V27.81H21.33V31.26ZM21.33 27.39H18.24V26.12H21.33V27.39ZM21.33 23.39H18.24V20H21.33V23.39ZM21.33 19.54H18.24V18.28H21.33V19.54ZM18.24 15.54V12.08H21.33V15.65L18.24 15.54Z"
                      fill="white"/>
                    <path
                      d="M10.75 2.21997H17.3C17.4989 2.21997 17.6897 2.29899 17.8303 2.43964C17.971 2.58029 18.05 2.77106 18.05 2.96997C18.05 3.16888 17.971 3.35965 17.8303 3.5003C17.6897 3.64095 17.4989 3.71997 17.3 3.71997H10.75C10.5511 3.71997 10.3603 3.64095 10.2197 3.5003C10.079 3.35965 10 3.16888 10 2.96997C10 2.77106 10.079 2.58029 10.2197 2.43964C10.3603 2.29899 10.5511 2.21997 10.75 2.21997Z"
                      fill="#009C7F"/>
                    <path
                      d="M65.5999 21.27L63.9999 23.06V26.6H61.8799V14.29H63.9999V20.2L69.2999 14.29H71.9999L66.9999 19.73L71.9999 26.6H69.4299L65.5999 21.27Z"
                      fill="#282828"/>
                    <path
                      d="M73.84 20.46C73.8008 19.6265 73.931 18.7937 74.2229 18.012C74.5147 17.2303 74.9621 16.5159 75.5379 15.912C76.1137 15.3082 76.8061 14.8274 77.573 14.4987C78.34 14.1701 79.1656 14.0004 80 14C81.2442 13.9199 82.4775 14.2753 83.4883 15.0051C84.4991 15.735 85.2245 16.7938 85.54 18L83.54 18.66C83.3594 17.8698 82.9048 17.1691 82.2568 16.6822C81.6088 16.1953 80.8092 15.9536 80 16C79.4384 16.0115 78.8851 16.1383 78.3745 16.3726C77.8639 16.6068 77.4069 16.9435 77.0318 17.3617C76.6568 17.7799 76.3716 18.2707 76.1942 18.8037C76.0167 19.3366 75.9506 19.9004 76 20.46C75.9543 21.0237 76.0262 21.5908 76.2113 22.1252C76.3964 22.6597 76.6906 23.1498 77.0752 23.5645C77.4598 23.9791 77.9264 24.3093 78.4454 24.5341C78.9644 24.7588 79.5244 24.8732 80.09 24.87C80.9157 24.8946 81.7257 24.6407 82.3896 24.1491C83.0535 23.6576 83.5326 22.9569 83.75 22.16L85.66 22.78C85.3341 23.9929 84.6049 25.0588 83.5925 25.8021C82.5802 26.5455 81.3449 26.9221 80.09 26.87C79.2497 26.8918 78.4139 26.7396 77.6351 26.423C76.8563 26.1065 76.1514 25.6324 75.5645 25.0305C74.9777 24.4286 74.5215 23.7119 74.2248 22.9254C73.928 22.1389 73.797 21.2995 73.84 20.46Z"
                      fill="#282828"/>
                    <path
                      d="M93.2 21.27L91.56 23.06V26.6H89.48V14.29H91.56V20.2L96.86 14.29H99.6L94.6 19.73L99.6 26.6H97L93.2 21.27Z"
                      fill="#282828"/>
                    <path
                      d="M55.8798 21.71C55.7194 21.7121 55.5603 21.6813 55.4124 21.6193C55.2644 21.5574 55.1308 21.4657 55.0198 21.35C54.9038 21.2371 54.812 21.1017 54.7501 20.9521C54.6882 20.8025 54.6575 20.6418 54.6598 20.48C54.6546 20.318 54.6821 20.1566 54.7405 20.0055C54.7989 19.8543 54.8871 19.7164 54.9998 19.6C55.1128 19.4848 55.2485 19.3942 55.3982 19.334C55.5479 19.2738 55.7085 19.2452 55.8698 19.25C56.031 19.2458 56.1914 19.2746 56.3411 19.3348C56.4907 19.395 56.6264 19.4853 56.7398 19.6C56.9576 19.8393 57.0783 20.1513 57.0783 20.475C57.0783 20.7986 56.9576 21.1106 56.7398 21.35C56.5115 21.5782 56.2026 21.7075 55.8798 21.71Z"
                      fill="#282828"/>
                    <path d="M21.0499 35.5H17.6899V35.79H21.0499V35.5Z" fill="url(#paint1_linear)"/>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="13.59"
                        y1="0.68"
                        x2="14.42"
                        y2="42.53"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#35B98E"/>
                        <stop offset="1" stopColor="#47BB8F"/>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="77.1283"
                        y1="45.8385"
                        x2="88.4179"
                        y2="45.8385"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#35B98E"/>
                        <stop offset="1" stopColor="#47BB8F"/>
                      </linearGradient>
                    </defs>
                  </svg>

                </a>
              </div>
              <div className="slogan">
                Зу-зу етiп жөндейміз
              </div>
              <div className="main-tabs">
                <ul className="main-tabs-ul">
                  <li className="active" onClick={() => {this.changeBodyClass('citizen-page')}}>                  
                    <a href="#citizen-page">Жителям</a>
                  </li>
                  <li onClick={() => {this.changeBodyClass('represent-page')}}>
                    <a href="#represent-page">Представителям КСК</a>
                  </li>
                  <li onClick={() => {this.changeBodyClass('partner-page')}}>
                    <a href="#partner-page">Партнерам</a>
                  </li>
                </ul>
                <select className="select" name="" id="">
                  <option value="#citizen-page">
                    Жителям
                  </option>
                  <option value="#represent-page">
                    Представителям КСК
                  </option>
                  <option value="#partner-page">
                    Партнерам
                  </option>
                </select>
              </div>
              <div className="lang-menu">
                <ul>
                  <li className="active">
                    <a href="">Ру</a>
                  </li>
                  <li>
                    <a href="">Ққ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }

}

export default Header