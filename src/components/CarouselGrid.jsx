import { Component } from "react";
import { Carousel } from "react-bootstrap";
import MyCarouselItem from "./MyCarouselItem";

class CarouselGrid extends Component {
  
  render() {
    return (
      <Carousel >
        <MyCarouselItem film={this.props.film} />
       
      </Carousel>
    );
  }
}

export default CarouselGrid;
