const Map = () => {
    return (<>
        {/* Map */}
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10962.792225115849!2d15.6691062!3d46.6129698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cb1d6206b041%3A0x80c71d39fbc13e9!2sHarry%20Pl%2C%20Thonotosassa%2C%20FL%2033527%2C%20USA!5e0!3m2!1sen!2ssi!4v1592214730014!5m2!1sen!2ssi"
                width={600}
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
            />
            <div className="map-inside">
                <i className="icon_pin" />
                <div className="inside-widget">
                    <h4>North Carolina</h4>
                    <ul>
                        <li>Phone: 704-768-7449</li>
                        <li>Add: 1317 Harry Place, 28204 NC </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* Map END */}
    </>
    )
}

export default Map;