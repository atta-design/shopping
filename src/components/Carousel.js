import React from 'react'
import Iphone13 from '../picture/iphone-13-review-hero.jpeg'
import Apple from '../picture/apple-keyboard-high-resolution-stock-images-1080P-wallpaper-middle-size.jpg'
import Feature from '../picture/featured-section-give-back-trade-in_2x.jpg'
import {Carousel} from 'react-bootstrap'
import '../App.css';

function Carousels() {
    return (
        <div className='carousel'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Iphone13}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Apple}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Feature}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Carousels
