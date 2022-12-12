const Banner = () => {
    return (<>
        {/* Banner */}
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src={"./src/assets/img/banner/banner-1.jpg"} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src={"./src/assets/img/banner/banner-2.jpg"} alt="" />
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner END */}
    </>
    )
}

export default Banner