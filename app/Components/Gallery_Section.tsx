import React from 'react'
import Image from 'next/image';
const Gallery_Section = () => {
    const Gallery1 = '/images/gallery-1.jpg';
    const Gallery2 = '/images/gallery-2.jpg';
    const Gallery3 = '/images/gallery-3.jpg';
    const Gallery4 ='/images/gallery-4.jpg';
    const Gallery5 = '/images/gallery-5.jpg';
    const Gallery6 = '/images/gallery-6.jpg';
  return (
    <div>
        <section className="gallery" id="gallery">
    
    <h1 className="heading"> our gallery</h1>

    <div className="box-container">

        <div className="box">
            <Image src={Gallery1} alt="" width={300} height={300}/>
        </div>

        <div className="box">
            <Image src={Gallery2} alt="" width={300} height={300}/>
        </div>

        <div className="box">
            <Image src={Gallery3} alt="" width={300} height={300}/>
        </div>

        <div className="box">
            <Image src={Gallery4} alt="" width={300} height={300}/>
        </div>

        <div className="box">
            <Image src={Gallery5} alt="" width={300} height={300}/>
        </div>

        <div className="box">
            <Image src={Gallery6} alt="" width={300} height={300}/>
        </div>

    </div>

</section>
    </div>
  )
}

export default Gallery_Section