const ProductDetail = () => {
    return (

        <>
            {/* Product Details Section Begin */}
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__item">
                                    <img
                                        className="product__details__pic__item--large"
                                        src={"./src/assets/img/product/details/product-details-1.jpg"}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__text">
                                <h3>Vegetable’s Package</h3>
                                <div className="product__details__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half-o" />
                                    <span>(18 reviews)</span>
                                </div>
                                <div className="product__details__price">$50.00</div>
                                <p>
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                    dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                                    vehicula elementum sed sit amet dui. Proin eget tortor risus.
            </p>
                                <div className="product__details__quantity">
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input type="text" defaultValue={1} />
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">
                                    ADD TO CARD
            </a>
                                <a href="#" className="heart-icon">
                                    <span className="icon_heart_alt" />
                                </a>
                                <ul>
                                    <li>
                                        <b>Availability</b> <span>In Stock</span>
                                    </li>
                                    <li>
                                        <b>Shipping</b>{" "}
                                        <span>
                                            01 day shipping. <samp>Free pickup today</samp>
                                        </span>
                                    </li>
                                    <li>
                                        <b>Weight</b> <span>0.5 kg</span>
                                    </li>
                                    <li>
                                        <b>Share on</b>
                                        <div className="share">
                                            <a href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-pinterest" />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                {/* Bootstrap Dynamic Tabs */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#tabs-1"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            Description
                </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tabs-2"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Information
                </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tabs-3"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Reviews <span>(1)</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                                amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                                                eget tortor risus. Vivamus suscipit tortor eget felis
                                                porttitor volutpat. Vestibulum ac diam sit amet quam
                                                vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                eget malesuada. Vivamus suscipit tortor eget felis porttitor
                                                volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                                                porttitor at sem. Praesent sapien massa, convallis a
                                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                                                amet quam vehicula elementum sed sit amet dui. Vestibulum
                                                ante ipsum primis in faucibus orci luctus et ultrices
                                                posuere cubilia Curae; Donec velit neque, auctor sit amet
                                                aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                                                risus.
                  </p>
                                            <p>
                                                Praesent sapien massa, convallis a pellentesque nec, egestas
                                                non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Mauris blandit aliquet elit, eget tincidunt nibh
                                                pulvinar a. Cras ultricies ligula sed magna dictum porta.
                                                Cras ultricies ligula sed magna dictum porta. Sed porttitor
                                                lectus nibh. Mauris blandit aliquet elit, eget tincidunt
                                                nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
                                                elementum sed sit amet dui. Sed porttitor lectus nibh.
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                                amet dui. Proin eget tortor risus.
                  </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>
                                                Praesent sapien massa, convallis a pellentesque nec, egestas
                                                non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Mauris blandit aliquet elit, eget tincidunt nibh
                                                pulvinar a. Cras ultricies ligula sed magna dictum porta.
                                                Cras ultricies ligula sed magna dictum porta. Sed porttitor
                                                lectus nibh. Mauris blandit aliquet elit, eget tincidunt
                                                nibh pulvinar a.
                  </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                                amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                                                eget tortor risus. Vivamus suscipit tortor eget felis
                                                porttitor volutpat. Vestibulum ac diam sit amet quam
                                                vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                eget malesuada.
                  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Details Section END */}
        </>

    )
}

export default ProductDetail;