const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars" />
                                <span>All Departments</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="#">Fresh Meat</a>
                                </li>
                                <li>
                                    <a href="#">Vegetables</a>
                                </li>
                                <li>
                                    <a href="#">Fruit &amp; Nut Gifts</a>
                                </li>
                                <li>
                                    <a href="#">Fresh Berries</a>
                                </li>
                                <li>
                                    <a href="#">Ocean Foods</a>
                                </li>
                                <li>
                                    <a href="#">Butter &amp; Eggs</a>
                                </li>
                                <li>
                                    <a href="#">Fastfood</a>
                                </li>
                                <li>
                                    <a href="#">Fresh Onion</a>
                                </li>
                                <li>
                                    <a href="#">Papayaya &amp; Crisps</a>
                                </li>
                                <li>
                                    <a href="#">Oatmeal</a>
                                </li>
                                <li>
                                    <a href="#">Fresh Bananas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                    <span className="arrow_carrot-down" />
                                    </div>
                                    <input type="text" placeholder="What are you looking for?" />
                                    <button type="submit" className="site-btn">
                                        SEARCH
                  </button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone" />
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>704-768-7449</h5>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="hero__item set-bg"
                            style={{
                                backgroundImage: `url("./src/assets/img/hero/banner.jpg")`,
                            }}
                        >
                            <div className="hero__text">
                                <span>FRESH FRUIT</span>
                                <h2>
                                    Vegetable <br />
                  100% Organic
                </h2>
                                <p>Free Pickup and Delivery Available</p>
                                <a href="#" className="primary-btn">
                                    SHOP NOW
                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;