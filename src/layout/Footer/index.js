function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 footer-sec subscribe">
                        <div>
                            <h6>Subscribe to our newsletter to get latest news and offers.</h6>
                            <div>
                                <input type="email" name="email" placeholder="Enter your email address" />
                                <button className="btn-footer">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 footer-sec links">
                        <div>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="col-12 footer-sec copyright">
                        <div>
                            All Rights Reserved 2021 &copy; Abdelmnam Akmal
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;