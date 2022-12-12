const ContactSection = () => {
    return <>
        {/* Contact Section Begin */}
        <section className="contact spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_phone" />
                            <h4>Phone</h4>
                            <p>704-768-7449</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_pin_alt" />
                            <h4>Address</h4>
                            <p>1317 Harry Place 28204 NC</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_clock_alt" />
                            <h4>Open time</h4>
                            <p>10:00 am - 23:00 pm</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_mail_alt" />
                            <h4>Email</h4>
                            <p>info@ogami.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Section END */}
    </>

}

export default ContactSection;