import React from 'react'
import Image from 'next/image';

const About_Section = () => {
    const imagePath = '/images/about-img.png'; // Adjust the path according to your file structure

  return (
    <div>
           <section className="about" id="about">
    
    <h1 className="heading"> about us</h1>

    <div className="row">

        <div className="content">
            <h3>what makes our restaurant special?</h3>
            <p>We Have Over 15 Years Of Experience</p>
            <p>Aliquam Erat Ac Ipsum. Integer Aliquam Purus. Quisque Lorem Tortor Fringilla Sed, Vestibulum Id, Eleifend Justo Vel Bibendum Sapien Massa Ac Turpis Faucibus Orci Luctus Non, Consectetuer Lobortis Quis, Varius In, Purus. Integer Ultrices Posuere Cubilia Curae, Nulla Ipsum Dolor Lacus, Suscipit Adipiscing. Quisque Lorem Tortor Fringilla Sed, Vestibulum Id, Eleifend Justo.</p>
        </div>

        <div className="image">
            <Image src={imagePath} alt="" width={400} height={400}/>
        </div>

    </div>

</section>

      
        
        
   
    </div>

  )
}

export default About_Section