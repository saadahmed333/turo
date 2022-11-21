import "../components/slider.css"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car from "../assets/car1.jpg"
import Jeep from "../assets/jeep.jpg"
import bmw from "../assets/bmw.jpg"
import ford from "../assets/ford.jpg"
import lamborgini from "../assets/lamborgini.jpg"
import mercedes from "../assets/mercedes.jpg"
import subara from "../assets/subara.jpg"
import tesla from "../assets/tesla.jpg"
import nissan from "../assets/nissan.jpg"
import toyota from "../assets/toyota.jpg"




import imageOutdoor from "../assets/image-outdoor.jpg"

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };
   function SimpleSlider(){
    return (
          <>
          <h2 className="sliderHeading">Browse by make</h2>
        <div className="slidersss">
        <div className="sliders">
          <Slider {...settings} className="sliderShow">
            <div className="cards">
              <img src={car} alt="" />
              <span>Porsche</span>
            </div>
            <div className="cards">
              <img src={bmw} alt="" />
              <span>BMW</span>
            </div>
            <div className="cards">
              <img src={mercedes} alt="" />
              <span>Mercedes-Benz</span>
            </div>
            <div className="cards">
              <img src={toyota} alt="" />
              <span>Toyota</span>
            </div>
            <div className="cards">
              <img src={nissan} alt="" />
              <span>Nissan</span>
            </div>
            <div className="cards">
              <img src={lamborgini} alt="" />
              <span>Lamborgini</span>
            </div>
            <div className="cards">
              <img src={ford} alt="" />
              <span>Ford</span>
            </div>
            <div className="cards">
              <img src={tesla} alt="" />
              <span>Tesla</span>
            </div>
            <div className="cards">
              <img src={Jeep} alt="" />
              <span>Jeep</span>
            </div>
            <div className="cards">
              <img src={subara} alt="" />
              <span>Subaru</span>
            </div>
          </Slider>
        </div>
        </div>
          </>
      );

  }
  export {SimpleSlider}






  const settingss = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
   function OneSlider(){
    return (
          <>
          <h2 className="sliderHeading">Browse by make</h2>
        <div className="OneSliders">
        <div className="OneSliders-sliders">
          <Slider {...settingss} className="OneSliders-sliderShow">
            <div className="OneSliders-cards">
              <img src={imageOutdoor} alt="" />
              <span>Porsche</span>
            </div>
          
          </Slider>
        </div>
        </div>
          </>
      );

  }
  export {OneSlider}