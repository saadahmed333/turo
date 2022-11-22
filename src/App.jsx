import "./components/header";
import { Header } from "./components/header";
import "./App.css";
import { SearchdateWise } from "./components/date";
import { SimpleSlider } from "./components/slider.jsx";
import { Simple } from "./components/slider.jsx";
import { Svgslider } from "./components/slider.jsx";
import {Button} from "./components/button"
function App() {
  return (
    <div>
      <Header />
      <div className="background">
        <SearchdateWise />
      </div>
      <div className="bottomText">
        <h1>Find your drive</h1>
        <div className="explore">
          <h2>Explore the world's largest car sharing marketplace</h2>
        </div>
      </div>
      <div className="sliderShow">
        <SimpleSlider />
      </div>
      <div>
        <Simple />
      </div>
      <div>
        <Svgslider />
      </div>
      <div className="bottomText">
        <h1>Fuel your daydreams</h1>
        <div className="explore">
          <h2>Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</h2>
         <div className="buttons">
         <Button title="Explore Travelogues" />
         </div>
        </div>
      </div>
      <div className="backgroundImage">
        <img src="	https://blog.turo.com/blog/wp-content/uploads/2021/04/Kyle_Engman_21-copy-2_lesssmall.jpg" alt="" />
      <div className="backgroundImage-Text">
        <span>FEATURED TRAVELOGUE</span>
        <h2>An Olympic experience in Washington</h2>
        <p>Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
        <a href="#">Read more</a>
      </div>
      </div>
    </div>
  );
}

export default App;
