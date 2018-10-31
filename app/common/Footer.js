import Link from 'next/link'
import RfLink from './RfLink'

const Footer = () => (
    
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="copyright">
                        © Электронное КСК 2017–2018
                    </div>
                    <ul className="footer-menu">
                        <Link href="/contacts">
                            <li className="footer-menu__item"><a href="/contacts" className="footer-menu__link">Контакты</a></li>
                        </Link>
                        <Link href="/faq">
                            <li className="footer-menu__item"><a href="/faq" className="footer-menu__link">FAQ</a></li>
                        </Link>
                        <Link href="/about">
                            <li className="footer-menu__item"><a href="/about" className="footer-menu__link">О приложении</a></li>
                        </Link>                    
                    </ul>
                    <div className="copyright-logo">
                        <RfLink/>
                    </div>
                </div>
            </div>
        </footer>
)

export default Footer