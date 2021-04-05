import React from "react";
import getData from "../../Api/api";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Events() {

    const [events, setEvents] = React.useState([]);

    React.useEffect(()=> {
        getData().then(e => setEvents(e.data.events));
    }, []);

    let eventsContent = events.map(item => {
        return (
            <div className="item" key={item.id}>
                <img src={item.image} alt="events" />
                <div>
                    <a className="special-link" href="#">{item.title}</a>
                    <p className="special-p">{item.desc}</p>
                </div>
            </div>
        )
    })

    return (
        <div id="events" className="events special">
            <div className="container">
                <div className="row">
                    <div className="col-12 special-header">
                        <h2><i className="fas fa-icons"></i> Events</h2>
                        <a href="#">View All <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                    <div className="col-12 special-content">
                        <OwlCarousel className="owl-theme" margin={10} dots={false} items="4" nav>
                            {eventsContent}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;