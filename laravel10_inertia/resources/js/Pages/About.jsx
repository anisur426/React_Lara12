import ForntLayout from '@/Layouts/ForntLayout'
import React from 'react'

import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'

import '../../assets/lib/easing/easing.min.js'
import '../../assets/lib/waypoints/waypoints.min.js'
import '../../assets/lib/owlcarousel/owl.carousel.min.js'
import { usePage } from '@inertiajs/react'
import about form '../../assets/img/about.jpg'




function Product(props) {
  console
  return (
    <>
      <ForntLayout>

// new table start
        <table className='table table border'>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>stock</th>
            <th>Price</th>
          </tr>
          {products.map( ({id,name,stock,price})=>
              <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          )}
        
        </table>


// end table


        {/*About Start*/}


        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                Testimonial
              </h5>
              <h1 className="display-4">Patients Say About Our Services</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonial-carousel">
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <img
                        className="img-fluid rounded-circle mx-auto"
                        src="img/testimonial-1.jpg"
                        alt=""
                      />
                      <div
                        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="fa fa-quote-left fa-2x text-primary" />
                      </div>
                    </div>
                    <p className="fs-4 fw-normal">
                      Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                      et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="w-25 mx-auto" />
                    <h3>Patient Name</h3>
                    <h6 className="fw-normal text-primary mb-3">Profession</h6>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <img
                        className="img-fluid rounded-circle mx-auto"
                        src="img/testimonial-2.jpg"
                        alt=""
                      />
                      <div
                        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="fa fa-quote-left fa-2x text-primary" />
                      </div>
                    </div>
                    <p className="fs-4 fw-normal">
                      Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                      et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="w-25 mx-auto" />
                    <h3>Patient Name</h3>
                    <h6 className="fw-normal text-primary mb-3">Profession</h6>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <img
                        className="img-fluid rounded-circle mx-auto"
                        src="img/testimonial-3.jpg"
                        alt=""
                      />
                      <div
                        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="fa fa-quote-left fa-2x text-primary" />
                      </div>
                    </div>
                    <p className="fs-4 fw-normal">
                      Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                      et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="w-25 mx-auto" />
                    <h3>Patient Name</h3>
                    <h6 className="fw-normal text-primary mb-3">Profession</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Testimonial */}

        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                Testimonial
              </h5>
              <h1 className="display-4">Patients Say About Our Services</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonial-carousel">
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <img
                        className="img-fluid rounded-circle mx-auto"
                        src="img/testimonial-1.jpg"
                        alt=""
                      />
                      <div
                        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="fa fa-quote-left fa-2x text-primary" />
                      </div>
                    </div>
                    <p className="fs-4 fw-normal">
                      Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                      et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="w-25 mx-auto" />
                    <h3>Patient Name</h3>
                    <h6 className="fw-normal text-primary mb-3">Profession</h6>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <img
                        className="img-fluid rounded-circle mx-auto"
                        src="img/testimonial-2.jpg"
                        alt=""
                      />
                      <div
                        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="fa fa-quote-left fa-2x text-primary" />
                      </div>
                    </div>
                    <p className="fs-4 fw-normal">
                      Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                      et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="w-25 mx-auto" />
                    <h3>Patient Name</h3>
                    <h6 className="fw-normal text-primary mb-3">Profession</h6>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <img
                        className="img-fluid rounded-circle mx-auto"
                        src="img/testimonial-3.jpg"
                        alt=""
                      />
                      <div
                        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 60, height: 60 }}
                      >
                        <i className="fa fa-quote-left fa-2x text-primary" />
                      </div>
                    </div>
                    <p className="fs-4 fw-normal">
                      Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                      et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="w-25 mx-auto" />
                    <h3>Patient Name</h3>
                    <h6 className="fw-normal text-primary mb-3">Profession</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </ForntLayout>

    </>
  )
}

export default About