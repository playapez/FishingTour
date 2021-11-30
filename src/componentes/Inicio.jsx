import React from 'react';
import {Carousel} from 'react-bootstrap';


export default function Inicio() {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/central.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>PLAYAPEZ</h3>
            <p>Del agua a tu mesa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/peces.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>PLAYAPEZ</h3>
            <p>Del agua a tu mesa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/Tanque.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>PLAYAPEZ</h3>
            <p>Del agua a tu mesa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div> 
  );
}
