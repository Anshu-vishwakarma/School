import React from 'react'
import { Carousel } from 'react-bootstrap'
import pic from "./pic.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
const Crousel = () => {
    return (
        <>
            <Carousel>
              <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic}
      alt="First slide"
    />
    <span style={{backgroundColor:"blueviolet"}}>Rose Mery Hr. Sec. School</span>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

<span style={{backgroundColor:"blueviolet"}}>Rose Mery Hr. Sec. School</span>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

<span style={{backgroundColor:"blueviolet"}}>Rose Mery Hr. Sec. School</span>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Crousel
