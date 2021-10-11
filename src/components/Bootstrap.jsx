import React, {Fragment}from 'react';
import imgDaniel from '../assets/img/images/image-daniel.jpg'

const Bootstrap=()=>{

  return(
    <Fragment>
      <section id='main-container-bootstrap' className='container border vh-100 d-flex justify-content-center align-items-center'>
        <div className="row">
        {/*//? =====left row========== */}
          <div className="col-12 col-lg-9 border bg-primary">
            <div className="row">
                <div className="col-12 col-lg-8 bg-success">
                  <article className="card h-100">
                    <div className="card-body ">
                      <div className="d-flex align-items-center ">
                        
                          <img className='rounded-circle border border-secondary border-3 ' src={imgDaniel} alt='daniel'/>
                        
                        <div className="d-flex flex-column ms-3">
                          <h6 >Daniel Clifford</h6>
                          <p className='fs-6' >Verified Graduate</p>
                        </div>
                      
                      </div>
                      <div>
                          <h4>
                            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth. 
                          </h4>
                          <p><small> “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</small></p>
                      </div>
                    </div>
                  
                  </article>
                </div>
                <div className="col-12 col-lg-4 bg-primary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ea, repellat, maxime placeat cum deleniti laudantium magni voluptatum nobis libero enim quam, consectetur perferendis velit illum nam deserunt! Quo, pariatur?
                </div>
                <div className="col-12 col-lg-4 bg-warning">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, blanditiis. Officia velit magnam hic temporibus molestiae voluptatem autem incidunt illum in delectus dolores nostrum nam, ipsa voluptas ad ipsam illo?
                </div>
                <div className="col-12 col-lg-8  bg-danger">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ea, repellat, maxime placeat cum deleniti laudantium magni voluptatum nobis libero enim quam, consectetur perferendis velit illum nam deserunt! Quo, pariatur?
                </div>
            </div>
          </div>
        {/*//? =========right row===== */}
          <div className="col-12 col-lg-3 border bg-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quibusdam voluptatibus corrupti harum maxime in optio laborum, molestias aperiam, ut fugit cupiditate eligendi. Voluptates, ut exercitationem rerum corporis aliquam quibusdam?
          </div>
        </div>{/* end of main row */}
      </section>
        
    </Fragment>
)
}

export default Bootstrap