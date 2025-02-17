import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import KampalaHereMap from "./KampalaMap"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>EDTECHUB</h1>
            <p>Empowering Youth, Transforming Education.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Kampala, Uganda
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +256 787 574 464
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@edtechub.org
              </li>
            </ul>
          </div>
          <KampalaHereMap />
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2025 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Hoang and Edtech Team
        </p>
      </div>
    </>
  )
}

export default Footer
