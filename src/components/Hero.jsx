
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import React, {Fragment}from 'react';
import img1 from '../assets/img/banner/pexels-dziana-hasanbekava-5589435.jpg';
import img2 from '../assets/img/banner/pexels-brandon-montrone-1324803.jpg'
import img3 from '../assets/img/banner/pexels-pixabay-54104.jpg'
import facebookImg from '../assets/img/banner/facebook.svg'
import twitterImg from '../assets/img/banner/twitter.svg'
import googleImg from '../assets/img/banner/google.svg'
import '../css/hero.css'

const Hero=()=>{

  return(
    <Fragment>
      
      <section className='hero'>
        <span id="hero-anchor" style={{display:'none'}}></span>
        <Carousel pause={false} variant='dark' controls={false} fade={true}>
            <Carousel.Item >
              <img
                className="d-block w-100 "
                src={img1}
                alt="First slide"
              />
              
              <Carousel.Caption>
                <h3 className='hero__legend'>Relax Yourself</h3>
                <div className="d-flex justify-content-center w- ">
                <div style={{width:'5rem',marginRight:'5rem'}}><a href='#'><img src={facebookImg} className='img-fluid ' alt="" /></a></div>
                <div style={{width:'5rem',marginRight:'5rem'}}><a href='#'><img src={twitterImg} className='img-fluid' alt="" /></a></div>
                <div style={{width:'5rem'}}><a href='#'> <img src={googleImg} className='img-fluid' alt="" /></a></div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />

              <Carousel.Caption >
                <h3  className='hero__legend'>Come an Visit Us </h3>
                <div className="d-flex justify-content-center w- ">
                <div style={{width:'5rem',marginRight:'5rem'}}><a href='#'><img src={facebookImg} className='img-fluid ' alt="" /></a></div>
                <div style={{width:'5rem',marginRight:'5rem'}}><a href='#'><img src={twitterImg} className='img-fluid' alt="" /></a></div>
                <div style={{width:'5rem'}}><a href='#'> <img src={googleImg} className='img-fluid' alt="" /></a></div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className='hero__legend' >Fishing Area</h3>
                <div className="d-flex justify-content-center w- ">
                <div style={{width:'5rem',marginRight:'5rem'}}><a href='#'><img src={facebookImg} className='img-fluid ' alt="" /></a></div>
                <div style={{width:'5rem',marginRight:'5rem'}}><a href='#'><img src={twitterImg} className='img-fluid' alt="" /></a></div>
                <div style={{width:'5rem'}}><a href='#'> <img src={googleImg} className='img-fluid' alt="" /></a></div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </section>
    </Fragment>
)
}

export default Hero