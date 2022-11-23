import "../components/slider.css";
import Slider from "react-slick";
import { Button } from "./button";
import ReactStars from "react-stars";
import React from "react";
import { render } from "react-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car from "../assets/car1.jpg";
import Jeep from "../assets/jeep.jpg";
import bmw from "../assets/bmw.jpg";
import ford from "../assets/ford.jpg";
import lamborgini from "../assets/lamborgini.jpg";
import mercedes from "../assets/mercedes.jpg";
import subara from "../assets/subara.jpg";
import tesla from "../assets/tesla.jpg";
import nissan from "../assets/nissan.jpg";
import toyota from "../assets/toyota.jpg";

import imageOutdoor from "../assets/image-outdoor.jpg";
import carPlan from "../assets/carplan.jpg";

import allWheel from "../assets/experienceImage/allwheel.jpg";
import classicCars from "../assets/experienceImage/classicCars.jpg";
import convertiable from "../assets/experienceImage/convertiable.jpg";
import deluxe from "../assets/experienceImage/allwheel.jpg";
import electric from "../assets/experienceImage/electric.jpg";
import petFriendly from "../assets/experienceImage/petFriendly.jpg";

let settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

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

export { SimpleSlider };

let set = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
              <h2>
                Find the perfect car <span>to conquer the great outdoors</span>
              </h2>
              <p>
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <Button title="Browse cars" />
            </div>
          </div>
          <div className="Simple-cards">
            <div className="simplecard-Img">
              <img src={carPlan} alt="" />
            </div>
            <div className="simplecard-text">
              <h2>
                Find the perfect car <span>to conquer the great outdoors</span>
              </h2>
              <p>
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <Button title="Browse cars" />
            </div>
          </div>
          <div className="Simple-cards">
            <div className="simplecard-Img">
              <img src={carPlan} alt="" />
            </div>
            <div className="simplecard-text">
              <h2>
                Find the perfect car <span>to conquer the great outdoors</span>
              </h2>
              <p>
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <Button title="Browse cars" />
            </div>
          </div>
          <div className="Simple-cards">
            <div className="simplecard-Img">
              <img src={carPlan} alt="" />
            </div>
            <div className="simplecard-text">
              <h2>
                Find the perfect car <span>to conquer the great outdoors</span>
              </h2>
              <p>
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <Button title="Browse cars" />
            </div>
          </div>
          <div className="Simple-cards">
            <div className="simplecard-Img">
              <img src={carPlan} alt="" />
            </div>
            <div className="simplecard-text">
              <h2>
                Find the perfect car <span>to conquer the great outdoors</span>
              </h2>
              <p>
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <Button title="Browse cars" />
            </div>
          </div>
          <div className="Simple-cards">
            <div className="simplecard-Img">
              <img src={carPlan} alt="" />
            </div>
            <div className="simplecard-text">
              <h2>
                Find the perfect car <span>to conquer the great outdoors</span>
              </h2>
              <p>
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <Button title="Browse cars" />
            </div>
          </div>
          <div className="Simple-cards">
            <div className="simplecard-Img">
              <img src={carPlan} alt="" />
            </div>
            <div className="simplecard-text">
              <h2>
                Find the perfect car <span>to conquer the great outdoors</span>
              </h2>
              <p>
                Go prepared in a rugged 4x4 to take on winter roads with ease,
                or a camper van to take you to the trees.
              </p>
              <Button title="Browse cars" />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export { Simple };

const svgSettings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};
function Svgslider() {
  return (
    <>
      <h2 className="heade">Browse by destination</h2>
      <div className="slider">
        <Slider {...svgSettings} className="Svgcards">
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
          <div className="Svgcard">
            <img
              alt="Miami"
              class="e1pogzhs1 seo-pages-18mxtd1-StyledImage-StyledImage-CityImage e3dl1lq0"
              src="//resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png"
            />
            <span>Porsche</span>
          </div>
        </Slider>
      </div>
    </>
  );
}
export { Svgslider };

let sett = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function ExperienceSlider() {
  return (
    <>
      <h2 className="heade">Browse by experience</h2>
      <div className="slider">
        <Slider className="Experiencecards" {...sett}>
          <div className="Experiencecard">
            <img src={electric} alt="" />
            <span>Electric</span>
          </div>
          <div className="Experiencecard">
            <img src={deluxe} alt="" />
            <span>Deluxe & Super Deluxe</span>
          </div>
          <div className="Experiencecard">
            <img src={petFriendly} alt="" />
            <span>Pet-friendly</span>
          </div>
          <div className="Experiencecard">
            <img src={convertiable} alt="" />
            <span>Convertibles</span>
          </div>
          <div className="Experiencecard">
            <img src={allWheel} alt="" />
            <span>All-wheel drive</span>
          </div>
          <div className="Experiencecard">
            <img src={classicCars} alt="" />
            <span>Classic cars</span>
          </div>
        </Slider>
      </div>
    </>
  );
}

export { ExperienceSlider };

let hostSet = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function HostSlider() {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  document.getElementById('where-to-render')
  return (
    <>
      <h2 className="heade">Top hosts on Turo</h2>
      <div className="slider">
        <Slider className="Hostcards" {...hostSet}>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
          <div className="Hostcard">
            <div className="profile">
              <div className="image">
                <img src={allWheel} alt="" />
              </div>
              <div className="profileText">
                <span className="id">Kevin M.</span>
                <br />
                <span className="idText">All-Star Host</span>
                <br />
                <span className="idText">489 trips . Joined Aug 2020</span>
              </div>
            </div>
            <div id="where-to-render">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </div>
            <div className="review">
              <span>
                He came thru for us at the last minute was literally on the
                plane when i got a call that my car from a rental agency.
              </span>
              <br />
              <br />
              <span className="reviewText">Donna S. - Nov 2022</span>
            </div>
          </div>
         
        </Slider>
      </div>
    </>
  );
}

export { HostSlider };
