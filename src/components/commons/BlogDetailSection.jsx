const BlogDetailSection = () => {
    return (

        <>
            <div className="blog__details__text">
                <img src={"./src/assets/img/blog/details/details-pic.jpg"} alt="" />
                <p>
                    Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula
                    elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus
                    convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis
                    at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie
                    malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec
                    sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                    feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
    </p>
                <h3>
                    The corner window forms a place within a place that is a resting point
                    within the large space.
    </h3>
                <p>
                    The study area is located at the back with a view of the vast nature.
                    Together with the other buildings, a congruent story has been managed in
                    which the whole has a reinforcing effect on the components. The use of
                    materials seeks connection to the main house, the adjacent stables
    </p>
            </div>
            <div className="blog__details__content">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="blog__details__author">
                            <div className="blog__details__author__pic">
                                <img src={"./src/assets/img/blog/details/details-author.jpg"} alt="" />
                            </div>
                            <div className="blog__details__author__text">
                                <h6>Michael Scofield</h6>
                                <span>Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog__details__widget">
                            <ul>
                                <li>
                                    <span>Categories:</span> Food
            </li>
                                <li>
                                    <span>Tags:</span> All, Trending, Cooking, Healthy Food, Life
              Style
            </li>
                            </ul>
                            <div className="blog__details__social">
                                <a href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-google-plus" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-envelope" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default BlogDetailSection;