import React from 'react'
import Navbar from './Navbar'

export default function Banner() {
  return (
    <>
      <div className="container-fluid banner_section text-center" style={{border: '2px solid black'}}>
        {/* <div className="container-fluid inside_banner text-center"> */}

        <Navbar />
        <div className="row">
          <div className="col">
            <b> <h1 style={{ fontSize: '6.5vw', paddingTop: '3rem' }}>The VPN that just works</h1></b>
            <h2>Go further with the #1 trusted leader in VPN</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-lg btn-success" style={{ borderRadius: '50px', paddingLeft: '2vw', paddingRight: '2vw' }}>
              Get EXpressVPN -&gt;
            </button>
            <p style={{ fontSize: '0.7rem', paddingTop: '1rem' }}>30-Day MONEY-BACK GUARANTEE</p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}
