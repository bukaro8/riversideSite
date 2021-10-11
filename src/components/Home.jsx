import React, {Fragment}from 'react';
import logoAA from '../assets/img/aa3.jpg'
import logoBritish from '../assets/img/britishassociation.png'
import '../css/home.css'

const Home=()=>{

  return(
    <Fragment>
      <section className="home">

        
      <div className='container'>
        <div className="row">
          
          <h1 className='home__title col-12  my-5  fs-1 text-center '>
            Welcome to Riverside Village Holiday Park
          </h1>
          {/* //?================first-box============================ */}
          <article className="article__container-shadow px-3  my-lg-5  my-3  col-12 col-lg-8 col-xxl-4 d-flex flex-column  align-items-center justify-content-center  ">
              <h2 className='text-primary fs-1'>Now Open</h2>
              <div className="image-background d-flex align-items-center">
                <img src={logoBritish} alt="" className=" img-fluid logo-british" />
                <p  className='home__paragraph--first  fs-3 d-flex align-items-center px-2 '>
                  Riverside Village Holiday Park is a peaceful, picturesque site with an abundance of wildlife and mature trees. We are situated in 24 acres of countryside alongside the River Crouch, 7 miles from Southend-on-Sea. <br/>The park is licensed for 166 static holiday homes and up to 60 tourers and tents with electric hook-up.
                </p>
              </div>
              <picture style={{width:'100%'}}>
                <img src='https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="" className=" img-fluid logos" />
              </picture>
          </article>

          {/* //?================first-box=end=========================== */}
           {/* //?================second-box-start=========================== */}
          
          <article className=" article__container-shadow  my-lg-5   my-3 d-flex px-3 col-12 col-lg-4 col-xxl-4  align-items-center  flex-column justify-content-between">
          <h2 className='text-success fs-1'>Booking Essentials</h2>
          <div className="image-background d-flex align-items-center">
                <img src={logoBritish} alt="" className=" img-fluid logo-british" />
                <p  className='home__paragraph--first  fs-3 d-flex align-items-center px-2 '>
                  We are incredibly busy during peak times and always recommend booking in advance to avoid disappointment. View our prices page and contact us today to make a booking.
                </p>
              </div>
            
            <picture style={{width:'100%'}}>
                <img src='https://images.pexels.com/photos/80277/pexels-photo-80277.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="" className=" img-fluid logos" />
              </picture>
            </article>
          {/* //? ====================second-box-end==================== */}

          {/* //? =======================third-box-start==================== */}
          <article className="article__container-shadow  my-lg-5   my-3 d-flex px-3 col-12 col-lg-4 col-xxl-4  align-items-center  flex-column justify-content-between">
          <h2 className='text-primary fs-1'>Unwind and Relax</h2>
            <p className='home__paragraph--first  fs-3 d-flex align-items-center px-2 '>We pride ourselves on being a peaceful and relaxing site. The park has been created not to be a commercialized park with a club house and bars. Consequently, the atmosphere of a friendly weekend and holiday retreat is maintained.
            </p>
            <p>
            Find out more about our site and it's facilities by following the link below.
            </p>
            <picture style={{width:'100%'}}>
                <img src='https://images.pexels.com/photos/3098597/pexels-photo-3098597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="" className=" img-fluid logos" />
              </picture>
            </article>
          {/* //? =========================third-box-end====================== */}
          {/* //? ===================fourth-box-start================= */}
          <article className="article__container-shadow px-3  my-lg-5  my-3  col-12 col-lg-8 col-xxl-12 d-flex flex-column  align-items-center justify-content-center">
          <h2 className='text-info fs-1'>Ideal Location</h2>
            <p className='home__paragraph--first  fs-3 d-flex align-items-center px-2 text-center'>Riverside Village Holiday Park is surrounded by Nature Reserves, SSI's and the RSPB Wallasea Island Wild Coast Project, which is a landmark conservation scheme and the largest of its type in Europe.
            </p>
            <picture style={{width:'100%'}}>
                <img src='https://images.pexels.com/photos/755385/pexels-photo-755385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="" className=" img-fluid logos" />
              </picture>
          </article>
          {/* //? ================fourth-box-end================ */}
          </div>
        
          </div>
      </section>
    </Fragment>
  )
}

export default Home