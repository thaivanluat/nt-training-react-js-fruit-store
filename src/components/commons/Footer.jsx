const Footer = () => {
    return (
        <footer className="footer spad">
            <div className="container">
            <div className="row">
            {/* Logo & About */}
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                <div className="footer__about__logo">
                    <a href="./index.html">
                    <img src={"./src/assets/img/logo.png"} alt="" />
                    </a>
                </div>
                <ul>
                    <li>Address: 1317 Harry Place 28204 NC</li>
                    <li>Phone: 704-768-7449</li>
                    <li>Email: info@ogani.com</li>
                </ul>
                </div>
            </div>
            {/* Useful links */}
            <div className="col-lg-4 offset-lg-1 col-md-6 col-sm-6">
                <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                    <li>
                    <a href="#">About Us</a>
                    </li>
                    <li>
                    <a href="#">About Our Shop</a>
                    </li>
                    <li>
                    <a href="#">Secure Shopping</a>
                    </li>
                    <li>
                    <a href="#">Delivery infomation</a>
                    </li>
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                    <a href="#">Our Sitemap</a>
                    </li>
                </ul>
                <ul>
                    <li>
                    <a href="#">Who Are We</a>
                    </li>
                    <li>
                    <a href="#">Our Services</a>
                    </li>
                    <li>
                    <a href="#">Projects</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                    <li>
                    <a href="#">Innovation</a>
                    </li>
                    <li>
                    <a href="#">Testimonials</a>
                    </li>
                </ul>
                </div>
            </div>
            {/* Newsletter Join */}
            <div className="col-lg-4 col-md-12">
                <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <form action="#">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="site-btn">
                    Subscribe
                    </button>
                </form>
                <div className="footer__widget__social">
                    <a href="#">
                    <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                    <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                    <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                    <i className="fa fa-pinterest" />
                    </a>
                </div>
                </div>
            </div>
            </div>
            {/* Copyright & Cards */}
            <div className="row">
            <div className="col-lg-12">
                <div className="footer__copyright">
                <div className="footer__copyright__text">
                    <p>
                    Copyright © All rights reserved | <b>TK</b>
                    </p>
                </div>
                <div className="footer__copyright__payment">
                    <img src={"./src/assets/img/payment-item.png"} alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;