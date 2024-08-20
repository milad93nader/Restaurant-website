import React from 'react'

const Footer_Section = () => {
  return (
    <div>
    <section className="footer">
    
    <div className="box-container">

        <div className="box">
            <i className="fas fa-map"></i>
            <h3>address</h3>
            <p>230 Point Of The Pines Dr <br/>
                Colorado Springs <br/>
                United States</p>
        </div>

        <div className="box">
            <i className="fas fa-phone"></i>
            <h3>contact us</h3>
            <a href="#" className="link">ninjashub4@gmail.com</a>
            <p>+61 (0) 3 8816 6284</p>
        </div>

        <div className="box">
            <i className="fas fa-phone"></i>
            <h3>opening hours</h3>
            <p>Monday - Friday: 8:00 - 24:00 <br/>
                Saturday: 8:00 - 23:00</p>
        </div>

    </div>

    <div className="credit"> created by <span>ninjashub</span> | all rights reserved! </div>

</section>

    </div>
  )
}

export default Footer_Section