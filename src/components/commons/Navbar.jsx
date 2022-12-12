import { useLocation, NavLink } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

	const getActiveClass = (path) => {
		return location.pathname === path ? "active" : "";
	};

	const getSubPageActive = () => {
		const pagesRoutes = [
			"/shop-detail",
			"/shopping-cart",
			"/check-out",
			"/blog-detail",
		];
		return pagesRoutes.includes(location.pathname) ? "active" : "";
	};

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            {/* Left side of header */}
                            <div className="header__top__left">
                                <ul>
                                    <li>
                                        <i className="fa fa-envelope" /> info@ogani.com
                    </li>
                                    <li>Free shipping for all orders over $50</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            {/* Right side of header */}
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src={"./src/assets/img/language.png"} alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down" />
                                    <ul>
                                        <li>
                                            <a href="#">Spanish</a>
                                        </li>
                                        <li>
                                            <a href="#">English</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <a href="#">
                                        <i className="fa fa-user" /> Login
                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="./index.html">
                                <img src={"./src/assets/img/logo.png"} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className={getActiveClass("/")}>
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li className={getActiveClass("/shop")}>
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>

                                <li className={getSubPageActive()}>
                                    <a href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li>
                                            <NavLink to="/shop-detail">Shop Details</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/shopping-cart">Shoping Cart</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/checkout">Check Out</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/blog-detail">Blog Details</NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className={getActiveClass("/blog")}>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>

                                <li className={getActiveClass("/contact")}>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-heart" /> <span>1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-shopping-bag" /> <span>3</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="header__cart__price">
                                <span>$10.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hamburger__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
        </header>

    )
}

export default Navbar