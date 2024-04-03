import React from 'react'
import logo from '../images/logo.png'
import language from '../images/language.png'

export default function Navbar() {
  return (
    <>
        <div className='container-fluid' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                <img src={logo} alt="logo" style={{height: '3rem', marginLeft: '2rem', marginTop: '0.5rem'}} />
                </div> 

                <div>
                <img src={language} alt="logo" style={{height: '2rem', marginRight: '2rem', marginTop: '0.5rem'}}/> 
                
                </div>        

        </div>

        {/* <img src={logo} alt="logo" style={{height: '3rem', marginLeft: '2rem', marginTop: '0.5rem', border: '2px solid black'}} />
                <label>
                    <img src={language} alt="logo" style={{height: '2rem', marginRight: '2rem', marginTop: '0.5rem'}}/> 
                </label> */}
    </>
  )
}

