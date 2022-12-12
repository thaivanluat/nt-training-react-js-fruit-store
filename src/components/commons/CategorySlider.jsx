const CategorySlider = () => {
    return (<>
        {/* Categories Section */}
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        {/* 4x3 */}
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                data-setbg="img/categories/cat-1.jpg"
                                style={{
                                    backgroundImage: `url("./src/assets/img/categories/cat-1.jpg")`,
                                }}
                            >
                                <h5>
                                    <a href="#">Fresh Fruit</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                data-setbg="img/categories/cat-2.jpg"
                                style={{
                                    backgroundImage: `url("./src/assets/img/categories/cat-2.jpg")`,
                                }}
                            >
                                <h5>
                                    <a href="#">Dried Fruit</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                data-setbg="img/categories/cat-3.jpg"
                                style={{
                                    backgroundImage: `url("./src/assets/img/categories/cat-3.jpg")`,
                                }}
                            >
                                <h5>
                                    <a href="#">Vegetables</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                data-setbg="img/categories/cat-4.jpg"
                                style={{
                                    backgroundImage: `url("./src/assets/img/categories/cat-4.jpg")`,
                                }}
                            >
                                <h5>
                                    <a href="#">Fruit Drinks</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div
                                className="categories__item set-bg"
                                data-setbg="img/categories/cat-5.jpg"
                                style={{
                                    backgroundImage: `url("./src/assets/img/categories/cat-5.jpg")`,
                                }}
                            >
                                <h5>
                                    <a href="#">Fresh Meat</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Categories Section END */}
    </>
    )
}

export default CategorySlider;