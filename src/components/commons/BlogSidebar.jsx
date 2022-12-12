const BlogSidebar = () => {
    return (<div className="blog__sidebar">
        <div className="blog__sidebar__search">
            <form action="#">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                    <span className="icon_search" />
                </button>
            </form>
        </div>
        <div className="blog__sidebar__item">
            <h4>Categories</h4>
            <ul>
                <li>
                    <a href="#">All</a>
                </li>
                <li>
                    <a href="#">Beauty (20)</a>
                </li>
                <li>
                    <a href="#">Food (5)</a>
                </li>
                <li>
                    <a href="#">Life Style (9)</a>
                </li>
                <li>
                    <a href="#">Travel (10)</a>
                </li>
            </ul>
        </div>
        <div className="blog__sidebar__item">
            <h4>Recent News</h4>
            <div className="blog__sidebar__recent">
                <a href="#" className="blog__sidebar__recent__item">
                    <div className="blog__sidebar__recent__item__pic">
                        <img src={"./src/assets/img/blog/sidebar/sr-1.jpg"} alt="" />
                    </div>
                    <div className="blog__sidebar__recent__item__text">
                        <h6>
                            09 Kinds Of Vegetables
              <br /> Protect The Liver
            </h6>
                        <span>MAR 05, 2019</span>
                    </div>
                </a>
                <a href="#" className="blog__sidebar__recent__item">
                    <div className="blog__sidebar__recent__item__pic">
                    <img src={"./src/assets/img/blog/sidebar/sr-2.jpg"} alt="" />
                    </div>
                    <div className="blog__sidebar__recent__item__text">
                        <h6>
                            Tips You To Balance
              <br /> Nutrition Meal Day
            </h6>
                        <span>MAR 05, 2019</span>
                    </div>
                </a>
                <a href="#" className="blog__sidebar__recent__item">
                    <div className="blog__sidebar__recent__item__pic">
                    <img src={"./src/assets/img/blog/sidebar/sr-3.jpg"} alt="" />
                    </div>
                    <div className="blog__sidebar__recent__item__text">
                        <h6>
                            4 Principles Help You Lose <br />
              Weight With Vegetables
            </h6>
                        <span>MAR 05, 2019</span>
                    </div>
                </a>
            </div>
        </div>
        <div className="blog__sidebar__item">
            <h4>Search By</h4>
            <div className="blog__sidebar__item__tags">
                <a href="#">Apple</a>
                <a href="#">Beauty</a>
                <a href="#">Vegetables</a>
                <a href="#">Fruit</a>
                <a href="#">Healthy Food</a>
                <a href="#">Lifestyle</a>
            </div>
        </div>
    </div>
    )
}

export default BlogSidebar;