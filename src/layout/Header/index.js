function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12 header-content">
                        <div>
                            <h1>Yours To Explore</h1>
                            <p className="header-desc">Discover and book amazing things-to-do at exclusive prices</p>
                            <div>
                                <i className="fas fa-search"></i>
                                <input type="sreach" name="search" placeholder="Search destinations or activites" />
                                <button>Search</button>
                            </div>
                            <p className="header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequuntur nulla facere voluptatibus non</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;