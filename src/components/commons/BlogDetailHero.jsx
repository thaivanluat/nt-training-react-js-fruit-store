const BlogDetailHero = () => {
    return (
        <>
            {/* Blog Details Hero */}
            <section
                className="blog-details-hero set-bg"
                style={{
                    backgroundImage: `url("./src/assets/img/blog/details/details-hero.jpg")`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog__details__hero__text">
                                <h2>The Moment You Need To Remove Garlic From The Menu</h2>
                                <ul>
                                    <li>By Michael Scofield</li>
                                    <li>January 14, 2019</li>
                                    <li>8 Comments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Details Hero END */}
        </>
    )
}

export default BlogDetailHero;