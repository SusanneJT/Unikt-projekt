import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/blackWood.jpg"
          />
          <Carousel.Caption>
            <h3>Åter i lager</h3>
            <p>Nya uppsättningar finns nu att beställa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/redAccessoars.jpg"
          />
  
          <Carousel.Caption>
            <h3>Accessoarer för alla tillfällen</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }