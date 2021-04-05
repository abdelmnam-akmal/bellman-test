import React from "react";
import getData from "./Api/api";
import Navbar from "./layout/Nav/index";
import Header from "./layout/Header/index";
import HotSpots from "./Sections/Hotspots/index";
import Events from "./Sections/Events/index";
import Footer from "./layout/Footer/index";
import "./App.scss";

function App() {

  const [events, setEvents] = React.useState([]);

  React.useEffect(()=> {
      getData().then((e)=> setEvents(e.data.events));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <HotSpots />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
