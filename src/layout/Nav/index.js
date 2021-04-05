function Navbar() {
    return (
        <nav id="header" className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#header">
                    <img className="img-fluid" src="images/bellman.png" alt="Web-Logo" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#hotspots">Hotspots</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#events">Events</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;