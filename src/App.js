import React from 'react';
import './App.css';
import aboutImage from './img/profilepic.jpg'

import Parse from "parse/dist/parse.min.js"

const app_id = process.env.REACT_APP_PARSE_ID;
const host_url = process.env.REACT_APP_PARSE_HOT_URL;
const javascript_key  = process.env.REACT_APP_PARSE_PARSE_JAVASCRIPT;

// Parse.initialize(app_id,javascript_key);
// Parse.serverUrl = host_url;
 
function App() {
  // const fetchAllPlayers = async () => {
  //   const query = new Parse.Query("faisalakram");
  //   const getAllPlayers = await query.find();
  //   getAllPlayers.forEach((element) => {
  //     console.log(element)
  //   });
  // }
  // fetchAllPlayers();
  return (
<>
    <div className="hero">
      <nav>
        <h2 className="logo">Portfo<span>lio</span></h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
        <a href="/" className="btn">Subscribe</a>
      </nav>

      <div className="content">
        <h4>Hello, my name is</h4>
        <h1>Faisal <span>Akram</span></h1>
        <h3>A passionate MERN Stack Developer.</h3>
        <div className="newslatter">
          <form>
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter Your Email"
            />
            <input type="submit" name="submit" value="Lets Start" />
          </form>
        </div>
      </div>
    </div>

    <section className="about">
      <div className="main">
        <img src={aboutImage} alt='about image' />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>Developer <span>& Designer</span></h5>
          <p>
            I am a front-end web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations.I can provide clean code and pixel perfect design. I
            also make the website more & more interactive with web animations.A
            responsive design makes your website accessible to all users,
            regardless of their device.
          </p>
          <button type="button">Let's Talk</button>
        </div>
      </div>
    </section>

    <div className="service">
      <div className="title">
        <h2>Our Services</h2>
      </div>

      <div className="box">
        <div className="card">
          <i className="fas fa-bars"></i>
          <h5>Web app development</h5>
          <div className="pra">
            <p>
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>

            <p style={{textAlign: "center"}}>
              <a className="button" href="/">Read More</a>
            </p>
          </div>
        </div>

        <div className="card">
          <i className="far fa-user"></i>
          <h5>Mobile app development</h5>
          <div className="pra">
            <p>
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>

            <p style={{textAlign: "center"}}>
              <a className="button" href="/">Read More</a>
            </p>
          </div>
        </div>

        <div className="card">
          <i className="far fa-bell"></i>
          <h5>Blockchain</h5>
          <div className="pra">
            <p>
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>

            <p style={{textAlign: "center"}}>
              <a className="button" href="/">Read More</a>
            </p>
          </div>
        </div>

        <div className="card">
          <i className="far fa-bell"></i>
          <h5>Consulting</h5>
          <div className="pra">
            <p>
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>

            <p style={{textAlign: "center"}}>
              <a className="button" href="/">Read More</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-me">
      <p>Let Me Get You A Beautiful Website.</p>
      <a className="button-two" href="https://mail.google.com/mail/?view=cm&fs=1&to=faisalakram1133@gmail.com" target={'_blank'}>Hire Me</a>
    </div>

    <footer>
      <p>Faisal Akram</p>
      <p>
        For more HTML, CSS, and coding tutorial - please click on the link below
        to subscribe to my channel:
      </p>
      <div className="social">
        <a href="https://www.facebook.com/shery.badista.3" target={'_blank'}><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/faisalakram1133/" target={'_blank'}><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/faisal-akram-a55245199/" target={'_blank'}><i className="fab fa-linkedin"></i></a>
      </div>
      <p className="end">CopyRight By Faisal Akram</p>
    </footer>
    </>
  );
}

export default App;
