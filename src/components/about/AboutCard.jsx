import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row' style={{'margin-bottom': 50}}>
            <img src='./mid.jpg' alt='' />
          </div>
          <div className='right row' style={{ marginTop: 50 }}>
          <Heading subtitle='📚 LEARN ANYTHING' title='🚀 Benefits of Online Learning Expertise' />
          <div className='items'>
            {homeAbout.map((val, index) => (
              <div key={index} className='item' style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                background: "#fdf6f4", /* Light background */
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}>
                <div className='img' style={{ 
                  width: "70px", 
                  height: "70px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <img 
                    src={val.cover} 
                    alt='' 
                    style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                  />
                </div>
                <div className='text' style={{ flex: 1 }}>
                  <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#0e0c1e" }}>{val.title}</h2>
                  <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.5" }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
