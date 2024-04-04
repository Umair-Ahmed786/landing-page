import React from 'react'
import pic1 from "../images/1.PNG";
import pic2 from "../images/2.PNG";
import pic3 from "../images/3.PNG";
import logo from "../images/small_logo.PNG";

export default function Banner2() {
    return (
        <>
            <div className="container">

                {/* first row */}
                <div className="row" style={{ paddingTop: '7rem'}}>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <img src={pic1} alt="pic1" className="img-fluid" />
                    </div>

                    <div className="col col-lg-6 col-md-6 col-sm-12" style={{textAlign: 'left' }}>
                        <h1 style={{ paddingTop: '0px', marginTop: '0px' }}> <b>Secure access, <br /> worldwide</b> </h1>
                        <p style={{ paddingTop: '0.5rem' }}>Conect reliably from anywhere, to anywhere. Our network of <br /> high-speed serves across 94 countries puts ou in control.</p>

                        <button className="btn btn-lg btn-success" style={{ borderRadius: '50px', paddingLeft: '2vw', paddingRight: '2vw' }}>
                            Get EXpressVPN
                        </button>
                    </div>
                </div>
                {/* Frist row ended */}



                {/* 2nd row */}
                <div className="row" style={{ paddingTop: '7rem' }}>

                    <div className="col col-lg-6 col-md-6 col-sm-12" style={{ textAlign: 'left' }}>
                        <div style={{paddingLeft: '4.5vw'}}>
                            <h1 style={{ paddingTop: '2rem', marginTop: '0px' }}> <b>One click to a safer <br /> internet</b> </h1>
                            <p style={{ paddingTop: '0.5rem', paddingTop: '1rem' }}> Going online doesn't have to mean being exposed. Whether  you're shopping from your desk or just conneting at a cafe, keep yur personal information more private and secure high-speed serves across 94 countries puts ou in control.</p>

                        </div>
                    </div>


                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <img src={pic2} alt="pic1" className='img-fluid' />
                    </div>

                </div>
                {/* 2nd row ended */}


                {/* 3rd row */}
                <div className="row" style={{ paddingTop: '7rem' }}>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <img src={pic3} alt="pic1" className='img-fluid'/>
                    </div>

                    <div className="col col-lg-6 col-md-6 col-sm-12" style={{ textAlign: 'left' }}>
                        <h1 style={{ paddingTop: '0px', marginTop: '0px' }}> <b>Use ExpressVPN on <br /> every device</b> </h1>
                        <p style={{ paddingTop: '0.5rem' }}>ExpressVPN works with just about everything. Install the app <br /> on all your devices and enjoy up to eight simultaneous <br /> connections with one subscription.</p>

                        <button className="btn">
                            <img src={logo} className="img-fluid" alt="logo" />
                            <a href="" style={{ textDecoration: 'underline', color: 'green', display: 'block', textAlign: 'left' }}> See all apps &gt;</a>
                        </button>

                        <button className="btn btn-lg btn-success" style={{ borderRadius: '50px', paddingLeft: '2vw', paddingRight: '2vw', display: 'block' }}>
                            Get EXpressVPN
                        </button>
                    </div>
                </div>
                {/* 3rd row ended */}

            </div>
        </>
    )
}
