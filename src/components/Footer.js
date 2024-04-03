import React from 'react'
import footer from "../images/footer.PNG";

export default function Footer() {
    return (
        <>
            <div className="container-fluid mt-5 pb-5" style={{background: 'pink'}}>

                <h1 style={{paddingTop: '7vh'}}><b>Ultra-fast servers around the globe</b></h1>
                <div className="row">

                    <div className="col col-lg-9 col-md-9 col-sm-6">
                        <img className='img-fluid' src={footer} alt="footer" />
                    </div>

                    <div className="col col-lg-3 col-md-3 col-sm-6" style={{ display: 'flex',flexDirection: 'column', alignContent: 'space-between' }}>
                        <div className="row" style={{textAlign: 'left'}}>
                            <h1><b>160</b></h1>
                            <h5>locations</h5>
                        </div>

                        <div className="row" style={{ marginTop: '6vh', textAlign: 'left'}}>
                            <h1 ><b style={{textAlign: 'center'}}>94</b></h1>
                            <p>countries</p>
                        </div>

                        <div className="row" style={{marginTop: '6vh', textAlign: 'left'}}>
                            <h1 ><b>&infin;</b></h1>
                            <p>unlimited <br /> bandwidth</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
