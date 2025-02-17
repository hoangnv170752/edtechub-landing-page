import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo' >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src='./logo.png' alt='' width="50" height="50" />
              <div style={{'margin-left': 30}}>
                <h1>EDTECHUB</h1>
                <p>Empowering Youth, Transforming Education.</p>
              </div>
            </div>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
