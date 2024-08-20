
import Image from 'next/image';
import React from 'react';
const Blogs_Section = () => {

    const Blog1='/images/blog1.jpg';
    const Blog2='/images/blog2.jpg';
    const Blog3='/images/blog3.jpg';
    const Blog4='/images/blog4.jpg';
    const Blog5='/images/blog5.jpg';
    const Blog6='/images/blog6.jpg';
     
  return (
    <div>
 <section className="blogs" id="blogs">

<h1 className="heading"> our blogs</h1>

<div className="blog-wrapper">    

<div className="grid-container">


        <div className="swiper-slide slide ">

            <div className="image">
                <Image src={Blog1} alt="" width={300} height={300}/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calender"></i>6th july, 2022</a>
                    <a href="#"> <i className="fas fa-user"></i>by admin</a>
                </div>
                <a href="#" className="title">but the chocolate is worth it!</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsum velit dolorum dolorem rerum alias et sed earum excepturi.</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

        <div className="swiper-slide slide">

            <div className="image">
                <Image src={Blog2} alt="" width={300} height={300}/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calender"></i>6th july, 2022</a>
                    <a href="#"> <i className="fas fa-user"></i>by admin</a>
                </div>
                <a href="" className="title">but the chocolate is worth it!</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsum velit dolorum dolorem rerum alias et sed earum excepturi.</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

        <div className="swiper-slide slide">

            <div className="image">
                <Image src={Blog3} alt="" width={300} height={300}/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calender"></i>6th july, 2022</a>
                    <a href="#"> <i className="fas fa-user"></i>by admin</a>
                </div>
                <a href="" className="title">but the chocolate is worth it!</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsum velit dolorum dolorem rerum alias et sed earum excepturi.</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

        <div className="swiper-slide slide">

            <div className="image">
            <Image src={Blog4} alt="" width={300} height={300}/>

            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calender"></i>6th july, 2022</a>
                    <a href="#"> <i className="fas fa-user"></i>by admin</a>
                </div>
                <a href="" className="title">but the chocolate is worth it!</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsum velit dolorum dolorem rerum alias et sed earum excepturi.</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

        <div className="swiper-slide slide">

            <div className="image">
            <Image src={Blog5} alt="" width={300} height={300}/>

            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calender"></i>6th july, 2022</a>
                    <a href="#"> <i className="fas fa-user"></i>by admin</a>
                </div>
                <a href="" className="title">but the chocolate is worth it!</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsum velit dolorum dolorem rerum alias et sed earum excepturi.</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

        <div className="swiper-slide slide">

            <div className="image">
            <Image src={Blog6} alt="" width={300} height={300}/>

            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calender"></i>6th july, 2022</a>
                    <a href="#"> <i className="fas fa-user"></i>by admin</a>
                </div>
                <a href="" className="title">but the chocolate is worth it!</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsum velit dolorum dolorem rerum alias et sed earum excepturi.</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

    </div>

</div>

</section>
  
    </div>
  )
}

export default Blogs_Section