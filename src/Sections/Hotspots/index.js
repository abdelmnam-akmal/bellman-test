import React from "react";
import getData from "../../Api/api";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function HotSpots() {

    const [hotspot, setHotspot] = React.useState([]);

    React.useEffect(()=> {
        getData().then(e => setHotspot(e.data.hotspots));
    }, []);

    let hotspotContent = hotspot.map(item => {
        return (
            <div className="item" key={item.id}>
                <img src={item.image} alt="hotspots" />
                <div>
                    <a href="#">{item.title}</a>
                    <p>{item.desc}</p>
                    <span className="price">EGP {'$' + item.price}</span>
                    <button>More Info</button>
                </div>
            </div>
        )
    })

    return (
        <div id="hotspots" className="hotspots special">
            <div className="container">
                <div className="row">
                    <div className="col-12 special-header">
                        <h2><i className="fas fa-tree"></i> Hotspots</h2>
                        <a href="#">View All <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                    <div className="col-12 special-content">
                        <OwlCarousel className="owl-theme" margin={10} dots={false} items="4" nav>
                            {hotspotContent}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotSpots;