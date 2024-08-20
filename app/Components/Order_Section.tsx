import React from 'react'
import Image from 'next/image';
const Order_Section = () => {
    const Contact = '/images/contact.gif';
  return (
    <div>
        <section className="order" id="order">
    
    <h1 className="heading"> order now</h1>

    <div className="row">

        <div className="image">
            <Image src={Contact} alt="Contact" width={400} height={500}/>
        </div>


        <form action="">
            <h3>fast home delivery</h3>

            <div className="inputBox">
                <span>full name</span>
                <input type="text" placeholder="enter your name"/>
            </div>

            <div className="inputBox">
                <span>food name</span>
                <input type="text" placeholder="food you want"/>
            </div>

            <div className="inputBox">
                <span>quantity</span>
                <input type="number" placeholder="how many you want"/>
            </div>

            <div className="inputBox">
                <span>phone number</span>
                <input type="number" placeholder="enter your number"/>
            </div>

            <div className="inputBox">
                <span>address</span>
                <textarea name="" placeholder="enter your address" cols={30} rows={10}></textarea>
            </div>

            <input type="submit" value="order now" className="btn"/>
        </form>

    </div>

</section>





    </div>
  )
}

export default Order_Section