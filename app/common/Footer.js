import RfLink from './RfLink'

const Footer = () => (
    <div>
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                <div className="copyright">
                    © Электронное КСК 2017–2018
                </div>
                <ul className="footer-menu">
                    <li className="footer-menu__item"><a href="" className="footer-menu__link">Контакты</a></li>
                    <li className="footer-menu__item"><a href="" className="footer-menu__link">FAQ</a></li>
                    <li className="footer-menu__item"><a href="" className="footer-menu__link">О приложении</a></li>
                </ul>
                <div className="copyright-logo">
                    <RfLink/>
                </div>
                </div>

            </div>
            </footer>
    </div>
)

export default Footer