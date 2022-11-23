import "../components/slider.css"
import Slider from "react-slick";
import {Button} from "./button"

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
import carPlan from "../assets/carplan.jpg"



let settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1
}

function SimpleSlider() {
    return (
      <>
        <h2 className="heade">Browse by make</h2>
      <div className="slider">
        <Slider className="cards" {...settings}>
        <div className="card">
             <img src={car} alt="" />
             <span>Porsche</span>
           </div>
            <div className="card">
              <img src={bmw} alt="" />
               <span>BMW</span>
           </div>
             <div className="card">
               <img src={mercedes} alt="" />
              <span>Mercedes-Benz</span>
            </div>
             <div className="card">
               <img src={toyota} alt="" />
              <span>Toyota</span>
           </div>
             <div className="card">
               <img src={nissan} alt="" />
               <span>Nissan</span>
            </div>
             <div className="card">
               <img src={lamborgini} alt="" />
              <span>Lamborgini</span>
             </div>
            <div className="card">
              <img src={ford} alt="" />
              <span>Ford</span>
             </div>
             <div className="card">
               <img src={tesla} alt="" />
               <span>Tesla</span>
             </div>
             <div className="card">
              <img src={Jeep} alt="" />
              <span>Jeep</span>
            </div>
            <div className="card">
              <img src={subara} alt="" />
             <span>Subaru</span>
            </div>
        </Slider>
      </div>
      </>
    );
  }

export {SimpleSlider}


let set = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

function Simple() {
    
    return (
      <>
      <div className="slider">
        <Slider className="cards" {...set}>
        <div className="Simple-cards">
        <div className="simplecard-Img">
               <img src={carPlan} alt="" />
             </div>
             <div className="simplecard-text">
          <h2>Find the perfect car <span>to conquer the great outdoors</span></h2>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
             <Button title="Browse cars"/>
           </div>
           </div>
           <div className="Simple-cards">
        <div className="simplecard-Img">
               <img src={carPlan} alt="" />
             </div>
             <div className="simplecard-text">
          <h2>Find the perfect car <span>to conquer the great outdoors</span></h2>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
             <Button title="Browse cars"/>
           </div>
           </div>
           <div className="Simple-cards">
        <div className="simplecard-Img">
               <img src={carPlan} alt="" />
             </div>
             <div className="simplecard-text">
          <h2>Find the perfect car <span>to conquer the great outdoors</span></h2>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
             <Button title="Browse cars"/>
           </div>
           </div>
           <div className="Simple-cards">
        <div className="simplecard-Img">
               <img src={carPlan} alt="" />
             </div>
             <div className="simplecard-text">
          <h2>Find the perfect car <span>to conquer the great outdoors</span></h2>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
             <Button title="Browse cars"/>
           </div>
           </div>
           <div className="Simple-cards">
        <div className="simplecard-Img">
               <img src={carPlan} alt="" />
             </div>
             <div className="simplecard-text">
          <h2>Find the perfect car <span>to conquer the great outdoors</span></h2>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
             <Button title="Browse cars"/>
           </div>
           </div>
           <div className="Simple-cards">
        <div className="simplecard-Img">
               <img src={carPlan} alt="" />
             </div>
             <div className="simplecard-text">
          <h2>Find the perfect car <span>to conquer the great outdoors</span></h2>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
             <Button title="Browse cars"/>
           </div>
           </div>
           <div className="Simple-cards">
        <div className="simplecard-Img">
               <img src={carPlan} alt="" />
             </div>
             <div className="simplecard-text">
          <h2>Find the perfect car <span>to conquer the great outdoors</span></h2>
            <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
             <Button title="Browse cars"/>
           </div>
           </div>
          
        </Slider>
      </div>
      </>
    );
  }

export {Simple}



 

  const svgSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
   function Svgslider(){
    return (
          <>
          <h2 className="heade">Browse by destination</h2>
        <div className="slider">
          <Slider {...svgSettings} className="Svgcards">
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"  />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            <div className="Svgcard">
              <img alt="Miami" class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0" src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
              <span>Porsche</span>
            </div>
            
          </Slider>
        </div>
          </>
      );

  }
  export {Svgslider}






  let sett = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  }
  
  function ExperienceSlider() {
      return (
        <>
          <h2 className="heade">Browse by make</h2>
        <div className="slider">
          <Slider className="cards" {...sett}>
          <div className="card">
               <img src={car} alt="" />
               <span>Porsche</span>
             </div>
              <div className="card">
                <img src={bmw} alt="" />
                 <span>BMW</span>
             </div>
               <div className="card">
                 <img src={mercedes} alt="" />
                <span>Mercedes-Benz</span>
              </div>
               <div className="card">
                 <img src={toyota} alt="" />
                <span>Toyota</span>
             </div>
               <div className="card">
                 <img src={nissan} alt="" />
                 <span>Nissan</span>
              </div>
               <div className="card">
                 <img src={lamborgini} alt="" />
                <span>Lamborgini</span>
               </div>
              <div className="card">
                <img src={ford} alt="" />
                <span>Ford</span>
               </div>
               <div className="card">
                 <img src={tesla} alt="" />
                 <span>Tesla</span>
               </div>
               <div className="card">
                <img src={Jeep} alt="" />
                <span>Jeep</span>
              </div>
              <div className="card">
                <img src={subara} alt="" />
               <span>Subaru</span>
              </div>
          </Slider>
        </div>
        </>
      );
    }
  
  export {SimpleSlider}