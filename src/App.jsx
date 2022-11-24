import "./components/header";
import { Header } from "./components/header";
import "./App.css";
import { SearchdateWise } from "./components/date";
import { SimpleSlider } from "./components/slider.jsx";
import { Simple } from "./components/slider.jsx";
import { Svgslider } from "./components/slider.jsx";
import { ExperienceSlider } from "./components/slider.jsx";
import { HostSlider } from "./components/slider.jsx";
import { Image } from "./components/img";
import { Button } from "./components/button";
import { Accordian } from "./components/accordian";
import { Footer } from "./components/footer";
import { Footertext } from "./components/footer";


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
      <div className="fuel">
        <div className="fuel-Text">
          <div className="fuelText-h1">
            <h1>Fuel your daydreams</h1>
          </div>
          <span>
            Stoke your wanderlust with some dreamy photo chronicles of road trip
            adventures.
          </span>
          <div>
            <Button font="14px" title="Explore Travelogues" />
          </div>
        </div>
      </div>
      <div className="backgroundImage">
        <img
          src="	https://blog.turo.com/blog/wp-content/uploads/2021/04/Kyle_Engman_21-copy-2_lesssmall.jpg"
          alt=""
        />
        <div className="backgroundImage-Text">
          <span>FEATURED TRAVELOGUE</span>
          <h2>An Olympic experience in Washington</h2>
          <p>
            Discover the epic waterfalls, moody weather, and lush forests of
            coastal Washington.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div>
        <ExperienceSlider />
      </div>
      <div className="hostess">
        <div className="hostText">
          <h1>Meet the hosts</h1>
        </div>
      </div>
      <div>
        <HostSlider />
      </div>
      <div className="SvgImage">
        <div className="SvgImage-Div">
          <Image />
          <div className="book">
            <a href="#">Book a car</a>
            <br />
            <span>
              Down the street or across the country, find the perfect vehicle
              for your next adventure.
            </span>
          </div>
          <div className="Host">
            <a href="#">Become a host</a>
            <br />
            <span>
              Accelerate your entrepreneurship and start building a small car
              sharing business on Turo
            </span>
          </div>
        </div>
      </div>
        <div className="question">
          <div className="questionText">
            <h1>Frequently asked questions</h1>
          </div>
        </div>
        <div>
          <Accordian />
        </div>
        <div>
          <Footertext />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
