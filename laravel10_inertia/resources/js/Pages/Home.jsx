import ForntLayout from '@/Layouts/ForntLayout'
import React from 'react'
import '../../assets/bootstrap/css/bootstrap.min.css'


import '../../assets/fonts/icon-font.min.csss'
import '../../assets/fonts/icofont.css'
import '../../assets/css/meanmenu.min.css'
import '../../assets/css/animate.css'
import '../../assets/owlcarousel/css/owl.carousel.min.css'
import '../../assets/owlcarousel/css/owl.theme.default.min.css'
import '../../assets/venobox/css/venobox.css'
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import '../../assets/js/jquery-2.2.4.min.js'
import '../../assets/bootstrap/js/popper.min.js'
import '../../assets/bootstrap/js/bootstrap.min.js'
import '../../assets/js/jquery.meanmenu.min.js'
import '../../assets/js/jquery.sticky.js'
import '../../assets/js/gijgo.js'
import '../../assets/owlcarousel/js/owl.carousel.min.js'
import '../../assets/js/jquery.appear.js'
import '../../assets/js/jquery.inview.min.js'
import '../../assets/js/jquery.mixitup.min.js'
import '../../assets/venobox/js/venobox.min.js'
import '../../assets/js/scrolltopcontrol.js'
import '../../assets/js/wow.min.js'
import '../../assets/js/scripts.js'

function Home() {
  return (
    <>
    <ForntLayout>
    <>
  {/* START SLIDER SECTION */}
  <section id="home" className="slider-section">
    <div className="home-slides owl-carousel owl-theme ">
      <div
        className="home-single-slide"
        data-background="assets/img/bg/slide1.jpg"
      >
        <div className="home-slide-overlay" />
        <div className="home-single-slide-inner">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-sm-8 col-12">
                <div className="home-single-slide-dec">
                  <p>TOTAL CARE</p>
                  <h2>PROVIDING</h2>
                  <h2>HEALTH SOLUTION</h2>
                  <span>
                    <i className="icofont icofont-plus" /> WE ARE CARING
                  </span>
                  <a href="services.html" className="home-btn-1">
                    OUR SERVICES
                  </a>
                  <a href="services.html" className="home-btn-2">
                    CONTACT US
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4 col-12 d-lg-block d-md-block d-sm-block d-none">
                <img
                  className="home-single-slide--img img-fluid"
                  src="assets/img/bg/single-doc2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end single slider */}
      <div
        className="home-single-slide"
        data-background="assets/img/bg/slide2.jpg"
      >
        <div className="home-slide-overlay" />
        <div className="home-single-slide-inner">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-sm-8 col-12">
                <div className="home-single-slide-dec">
                  <p>WELL CARE</p>
                  <h2>PROVIDING</h2>
                  <h2>TOTAL LAB SOLUTION</h2>
                  <span>
                    <i className="icofont icofont-plus" /> CARING YOUR REPORTS
                  </span>
                  <a href="appointment.html" className="home-btn-1">
                    GET APPOINTMENT
                  </a>
                  <a href="reports.html" className="home-btn-2">
                    LAB REPORTS
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4 col-12 d-lg-block d-md-block d-sm-block d-none">
                <img
                  className="img-fluid"
                  src="assets/img/bg/single-doc1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end single slider */}
    </div>
  </section>
  {/* END SLIDER SECTION  */}
  {/* START ABOUT SECTION */}
  <section id="about" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <div className="section-title">
            <h3>
              Welcome to <span>Sensiv</span>
            </h3>
            <span className="line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* end section title */}
      </div>
      <div className="row text-center">
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-about">
            <div className="single-about-icon">
              <img
                className="img-fluid"
                src="assets/img/bg/icon-2.png"
                alt=""
              />
            </div>
            <h5>Our Mission</h5>
            <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
          </div>
        </div>
        {/* end single about */}
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-about">
            <div className="single-about-icon">
              <img
                className="img-fluid"
                src="assets/img/bg/icon-1.png"
                alt=""
              />
            </div>
            <h5>Our History</h5>
            <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
          </div>
        </div>
        {/* end single about */}
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-about">
            <div className="single-about-icon">
              <img
                className="img-fluid"
                src="assets/img/bg/icon-4.png"
                alt=""
              />
            </div>
            <h5>Our Vision</h5>
            <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
          </div>
        </div>
        {/* end single about */}
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-about">
            <div className="single-about-icon">
              <img
                className="img-fluid"
                src="assets/img/bg/icon-3.png"
                alt=""
              />
            </div>
            <h5>Our Success</h5>
            <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
          </div>
        </div>
        {/* end single about */}
      </div>
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END ABOUT SECTION */}
  {/* START ABOUT SLIDER */}
  <div id="about-slider" className="section-padding p-0">
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="about-slider owl-carousel owl-theme">
            <div className="about-slider-item">
              <img className="img-fluid" src="assets/img/bg/s3.png" alt="" />
            </div>
            <div className="about-slider-item">
              <img className="img-fluid" src="assets/img/bg/s5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
    {/*- END CONTAINER */}
  </div>
  {/* END ABOUT SLIDER*/}
  {/* START COUNTER SECTION */}
  <section
    id="counter"
    className="counter-section overlay section-back-image"
    data-background="assets/img/bg/counter-bg.jpg"
  >
    <div className="container">
      <div className="row wow fadeInDown">
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-counter">
            <div className="single-counter-icon">
              <i className="icofont icofont-users-alt-2" />
            </div>
            <div className="single-counter-text">
              <h5 className="timer">1250</h5>
              <p>Happy Patients</p>
            </div>
          </div>
        </div>
        {/* end single counter */}
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-counter">
            <div className="single-counter-icon">
              <i className="icofont icofont-nurse-alt" />
            </div>
            <div className="single-counter-text">
              <h5 className="timer">1350</h5>
              <p>Medical Workers</p>
            </div>
          </div>
        </div>
        {/* end single counter */}
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-counter">
            <div className="single-counter-icon">
              <i className="icofont icofont-doctor-alt" />
            </div>
            <div className="single-counter-text">
              <h5 className="timer">1560</h5>
              <p>Total Doctors</p>
            </div>
          </div>
        </div>
        {/* end single counter */}
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-counter">
            <div className="single-counter-icon">
              <i className="icofont icofont-hat-alt" />
            </div>
            <div className="single-counter-text">
              <h5 className="timer">1670</h5>
              <p>Medical Experience</p>
            </div>
          </div>
        </div>
        {/* end single counter */}
      </div>
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END COUNTER SECTION */}
  {/* START SERVICE SECTION */}
  <section id="services" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <div className="section-title">
            <h3>
              Our<span> Services</span>
            </h3>
            <span className="line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* end section title */}
      </div>
      <div className="row mt-4">
        <div className="service-slider owl-carousel owl-theme">
          <div className="single-service-item">
            <div className="single-service">
              <img
                className="img-fluid"
                src="assets/img/service/1.jpg"
                alt=""
              />
              <h5>CANCER CARE</h5>
              <p>
                Lorem ipsum dolor sit consecte adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et.
              </p>
              <a className="serv-rmbtn" href="#">
                Read More
              </a>
            </div>
          </div>
          {/* end single service */}
          <div className="single-service-item">
            <div className="single-service">
              <img
                className="img-fluid"
                src="assets/img/service/2.jpg"
                alt=""
              />
              <h5>HEALTH CHECK</h5>
              <p>
                Lorem ipsum dolor sit consecte adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et.
              </p>
              <a className="serv-rmbtn" href="#">
                Read More
              </a>
            </div>
          </div>
          {/* end single service */}
          <div className="single-service-item">
            <div className="single-service">
              <img
                className="img-fluid"
                src="assets/img/service/3.jpg"
                alt=""
              />
              <h5>HOME CARE</h5>
              <p>
                Lorem ipsum dolor sit consecte adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et.
              </p>
              <a className="serv-rmbtn" href="#">
                Read More
              </a>
            </div>
          </div>
          {/* end single service */}
          <div className="single-service-item">
            <div className="single-service">
              <img
                className="img-fluid"
                src="assets/img/service/4.jpg"
                alt=""
              />
              <h5>GENERAL SURGERY</h5>
              <p>
                Lorem ipsum dolor sit consecte adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et.
              </p>
              <a className="serv-rmbtn" href="#">
                Read More
              </a>
            </div>
          </div>
          {/* end single service */}
          <div className="single-service-item">
            <div className="single-service">
              <img
                className="img-fluid"
                src="assets/img/service/5.jpg"
                alt=""
              />
              <h5>Dental Medicine</h5>
              <p>
                Lorem ipsum dolor sit consecte adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et.
              </p>
              <a className="serv-rmbtn" href="#">
                Read More
              </a>
            </div>
          </div>
          {/* end single service */}
        </div>
      </div>
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END SERVICE SECTION */}
  {/* START DOCTOR SECTION */}
  <section id="doctor" className="section-padding bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <div className="section-title">
            <h3>
              Our<span> Doctors</span>
            </h3>
            <span className="line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* end section title */}
      </div>
      <div className="row">
        <div className="team-slider owl-carousel owl-theme">
          <div className="single-doctor single-doctor-warp">
            <img className="img-fluid" src="assets/img/team/5.jpg" alt="" />
            <div className="single-doctor-info">
              <h4>Revenna Warner</h4>
              <span>Neurologist</span>
            </div>
            <div className="single-doctor-mask">
              <div className="single-doctor-mask-inner">
                <h5>About Doctor</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <ul>
                  <li>
                    <a href="#">Get Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end single doctor */}
          <div className="single-doctor single-doctor-warp">
            <img className="img-fluid" src="assets/img/team/4.jpg" alt="" />
            <div className="single-doctor-info">
              <h4>Stevest Henry</h4>
              <span>Ophthalmologist</span>
            </div>
            <div className="single-doctor-mask">
              <div className="single-doctor-mask-inner">
                <h5>About Doctor</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <ul>
                  <li>
                    <a href="#">Get Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end single doctor */}
          <div className="single-doctor single-doctor-warp">
            <img className="img-fluid" src="assets/img/team/3.jpg" alt="" />
            <div className="single-doctor-info">
              <h4>Williums Kevins</h4>
              <span>Dermatologist</span>
            </div>
            <div className="single-doctor-mask">
              <div className="single-doctor-mask-inner">
                <h5>About Doctor</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <ul>
                  <li>
                    <a href="#">Get Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end single doctor */}
          <div className="single-doctor single-doctor-warp">
            <img className="img-fluid" src="assets/img/team/1.jpg" alt="" />
            <div className="single-doctor-info">
              <h4>Kewillues Jenifer</h4>
              <span>Radiologist</span>
            </div>
            <div className="single-doctor-mask">
              <div className="single-doctor-mask-inner">
                <h5>About Doctor</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <ul>
                  <li>
                    <a href="#">Get Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end single doctor */}
          <div className="single-doctor single-doctor-warp">
            <img className="img-fluid" src="assets/img/team/2.jpg" alt="" />
            <div className="single-doctor-info">
              <h4>Marquis Williums</h4>
              <span>Urologist</span>
            </div>
            <div className="single-doctor-mask">
              <div className="single-doctor-mask-inner">
                <h5>About Doctor</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <ul>
                  <li>
                    <a href="#">Get Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end single doctor */}
        </div>
      </div>
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END DOCTOR SECTION */}
  {/* START APPOINTMENT SECTION */}
  <section id="appointment" className="section-padding">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-8 text-center mx-auto">
          <div className="section-title">
            <h3>
              Get Appointment <span>In 4 Simple Step</span>
            </h3>
            <span className="line" />
          </div>
        </div>
        {/* end section title */}
      </div>
      <div className="appointment-line">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-5">
            <div className="single-step text-center">
              <div className="single-step-icon">
                <i className="icofont icofont-hospital" />
              </div>
              <h5>Search For A Hospital</h5>
              <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
            </div>
          </div>
          {/* end single step */}
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-5">
            <div className="single-step text-center">
              <div className="single-step-icon">
                <i className="icofont icofont-job-search" />
              </div>
              <h5>Search For A Doctor</h5>
              <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
            </div>
          </div>
          {/* end single step */}
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-5">
            <div className="single-step text-center">
              <div className="single-step-icon">
                <i className="icofont icofont-pencil" />
              </div>
              <h5>Fill Out The From</h5>
              <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
            </div>
          </div>
          {/* end single step */}
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-5">
            <div className="single-step text-center">
              <div className="single-step-icon">
                <i className="icofont icofont-verification-check" />
              </div>
              <h5>Appointment Done</h5>
              <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
            </div>
          </div>
          {/* end single step */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-8 mx-auto">
          <div className="appointment-form-ma">
            <form>
              <div className="row">
                <div className="form-group col-lg-6">
                  <label>Select Hospital</label>
                  <select className="form-control">
                    <option>Sensiv Hospital</option>
                    <option>Sensiv Hospital 1</option>
                    <option>Sensiv Hospital 2</option>
                    <option>Sensiv Hospital 3</option>
                    <option>Sensiv Hospital 4</option>
                  </select>
                </div>
                <div className="form-group col-lg-6">
                  <label>Select Department</label>
                  <select className="form-control">
                    <option>Select Department</option>
                    <option>Select Department 1</option>
                    <option>Select Department 2</option>
                    <option>Select Department 3</option>
                    <option>Select Department 4</option>
                  </select>
                </div>
                <div className="form-group col-lg-6">
                  <label>Select Doctor</label>
                  <select className="form-control">
                    <option>Doctor Name 1</option>
                    <option>Doctor Name 2</option>
                    <option>Doctor Name 3</option>
                    <option>Doctor Name 4</option>
                    <option>Doctor Name 5</option>
                  </select>
                </div>
                <div className="form-group col-lg-6">
                  <label>Select Date</label>
                  <input
                    type="text"
                    id="datepicker"
                    className="form-control"
                    placeholder="Click Calender Icon"
                  />
                </div>
                <div className="form-group col-lg-6 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="afmn"
                    placeholder="Patient Name"
                  />
                </div>
                <div className="form-group col-lg-6 mt-2">
                  <input
                    type="email"
                    className="form-control"
                    id="afme"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group col-lg-6 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="afmp"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group col-lg-6 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="afma"
                    placeholder="Your Address"
                  />
                </div>
                <div className="form-group col-lg-12">
                  <textarea
                    rows={6}
                    className="form-control"
                    id="afmd"
                    placeholder="Your Message"
                    required="required"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group col-lg-12">
                  <button type="submit" className="btn btn-apfm">
                    Book Appointment{" "}
                    <i className="icofont icofont-thin-right" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* end col */}
      </div>
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END APPOINTMENT SECTION */}
  {/* START TESTIMONIAL */}
  <section id="testimonialfaq" className="section-padding bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <div className="section-title">
            <h3>
              What Our<span> Patients Says</span>
            </h3>
            <span className="line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* end section title */}
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="single-testimonial mb-4">
            <div className="single-testimonial-img">
              <img
                className="img-fluid"
                src="assets/img/team/tes1.jpg"
                alt=""
              />
            </div>
            <div className="single-testimonial-text-warp">
              <div className="single-testimonial-text-inner">
                <p>
                  Lorem ipsum dolor sit amet consectetured adipiscing elit, sed
                  do eiusmod temporinci incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <footer className="blockquote-footer">
                  Jone Doee , <cite title="Source Title">Hash Theme</cite>
                </footer>
              </div>
              <div className="single-testimonial-text-icon">
                <i className="icofont icofont-quote-left" />
              </div>
            </div>
          </div>
        </div>
        {/* end single testimonial */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="single-testimonial">
            <div className="single-testimonial-img">
              <img
                className="img-fluid"
                src="assets/img/team/tes2.jpg"
                alt=""
              />
            </div>
            <div className="single-testimonial-text-warp">
              <div className="single-testimonial-text-inner">
                <p>
                  Lorem ipsum dolor sit amet consectetured adipiscing elit, sed
                  do eiusmod temporinci incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <footer className="blockquote-footer">
                  Mark Doee , <cite title="Source Title">Hash Theme</cite>
                </footer>
              </div>
              <div className="single-testimonial-text-icon">
                <i className="icofont icofont-quote-left" />
              </div>
            </div>
          </div>
        </div>
        {/* end single testimonial */}
      </div>
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END TESTIMONIAL */}
  {/* START BLOG SERCTION */}
  <section id="blog" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <div className="section-title">
            <h3>
              Today's<span> News</span>
            </h3>
            <span className="line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* end section title */}
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-blog-home">
            <div className="single-blog-home-img">
              <a href="#">
                <img className="img-fluid" src="assets/img/blog/1.jpg" alt="" />
              </a>
              <div className="single-blog-home-meta">
                <span className="post-date">
                  <i className="lnr lnr-calendar-full" /> 15 Dec
                </span>
                <span className="post-user">
                  <i className="lnr lnr-user" /> Admin
                </span>
                <span className="post-comment">
                  <i className="lnr lnr-bubble" /> 5 comments
                </span>
              </div>
            </div>
            <a href="#">
              <h5>Digital Bariatric Surgery</h5>
            </a>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis eges vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <a href="#" className="blog-home-rmbtn">
              Continue <i className="icofont icofont-long-arrow-right" />
            </a>
          </div>
        </div>
        {/* end single blog */}
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
          <div className="single-blog-home">
            <div className="single-blog-home-img">
              <a href="#">
                <img className="img-fluid" src="assets/img/blog/3.jpg" alt="" />
              </a>
              <div className="single-blog-home-meta">
                <span className="post-date">
                  <i className="lnr lnr-calendar-full" /> 16 Dec
                </span>
                <span className="post-user">
                  <i className="lnr lnr-user" /> Jone
                </span>
                <span className="post-comment">
                  <i className="lnr lnr-bubble" /> 6 comments
                </span>
              </div>
            </div>
            <a href="#">
              <h5>Obesity: A Growing Epidemic</h5>
            </a>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis eges vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <a href="#" className="blog-home-rmbtn">
              Continue <i className="icofont icofont-long-arrow-right" />
            </a>
          </div>
        </div>
        {/* end single blog */}
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="single-blog-home">
            <div className="single-blog-home-img">
              <a href="#">
                <img className="img-fluid" src="assets/img/blog/2.jpg" alt="" />
              </a>
              <div className="single-blog-home-meta">
                <span className="post-date">
                  <i className="lnr lnr-calendar-full" /> 17 Dec
                </span>
                <span className="post-user">
                  <i className="lnr lnr-user" /> Admin
                </span>
                <span className="post-comment">
                  <i className="lnr lnr-bubble" /> 7 comments
                </span>
              </div>
            </div>
            <a href="#">
              <h5>After Surgery Bed Rest</h5>
            </a>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis eges vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <a href="#" className="blog-home-rmbtn">
              Continue <i className="icofont icofont-long-arrow-right" />
            </a>
          </div>
        </div>
        {/* end single blog */}
      </div>
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END BLOG SERCTION */}
  {/* START CLIENT SECTION */}
  <div id="client" className="client-section bg-gray">
    <div className="container">
      <div className="row">
        <div className="client-slider owl-carousel owl-theme">
          <div className="single-client">
            <a href="#">
              <img
                className="img-fluid"
                src="assets/img/clients/1.png"
                alt=""
              />
            </a>
          </div>
          {/* end single client */}
          <div className="single-client">
            <a href="#">
              <img
                className="img-fluid"
                src="assets/img/clients/2.png"
                alt=""
              />
            </a>
          </div>
          {/* end single client */}
          <div className="single-client">
            <a href="#">
              <img
                className="img-fluid"
                src="assets/img/clients/3.png"
                alt=""
              />
            </a>
          </div>
          {/* end single client */}
          <div className="single-client">
            <a href="#">
              <img
                className="img-fluid"
                src="assets/img/clients/4.png"
                alt=""
              />
            </a>
          </div>
          {/* end single client */}
          <div className="single-client">
            <a href="#">
              <img
                className="img-fluid"
                src="assets/img/clients/1.png"
                alt=""
              />
            </a>
          </div>
          {/* end single client */}
          <div className="single-client">
            <a href="#">
              <img
                className="img-fluid"
                src="assets/img/clients/2.png"
                alt=""
              />
            </a>
          </div>
          {/* end single client */}
        </div>
      </div>
    </div>
    {/*- END CONTAINER */}
  </div>
  {/* END CLIENT SECTION */}
</>

    </ForntLayout>
    
     </>
  )
}

export default Home