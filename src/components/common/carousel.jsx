import React, { Component } from "react";
import Slider from "react-slick";
import Tile from "./tile";

class Carousel extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  slider = React.createRef();

  render() {
    if (this.slider.current) {
      if (this.slider.current.innerSlider.state.currentSlide != 0)
        this.slider.current.innerSlider.state.currentSlide = 0;
    }

    const { items, index, startSlide, showSlides } = this.props;

    console.log("sauces hitting carousel", items.length);

    if (!items.length) return null;

    const settings = {
      respondTo: "window",
      accessability: true,
      dots: true,
      arrows: true,
      infinite: false,
      initialSlide: 0,
      centerPadding: 0,
      currentSlide: 0,
      slidesToShow: 5,
      slidesToScroll: 5,
      speed: 1000,
      rows: 1,

      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        }
      ]
    };

    return (
      <React.Fragment>
        <h2
          style={{
            marginTop: "25px",
            textTransform: "uppercase",
            color: "whitesmoke",
            fontWeight: 400,
            letterSpacing: "1.5px"
          }}
        >
          {index}
        </h2>
        <Slider ref={this.slider} {...settings}>
          {items.map(item => <Tile key={item._id} item={item} items={items} />)}
        </Slider>
      </React.Fragment>
    );
  }
}

export default Carousel;
