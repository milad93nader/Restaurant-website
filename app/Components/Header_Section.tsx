
import { useState } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    
    const handleMenuClick = () => {
      setIsActive(!isActive);
    };

  return (
    <div>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Responsive Restaurant Website</title>
    {/* <!-- font awesome cdn link  --> */ }
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    {/* <!-- custom CSS --> */}

    {/* <!-- header --> */}

    <section className="header">

        <a href="#" className="logo"> <i className="fas fa-utensils"></i> restaurant</a>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#meal">meal</a>
            <a href="#gallery">gallery</a>
            <a href="#menu">menu</a>
            <a href="#order">order</a>
            <a href="#blogs">blogs</a>
        </nav>

        <div id="menu-btn" onClick={handleMenuClick}>
      <i className={`fas fa-bars ${isActive ? 'fa-times' : ''}`}></i>
    </div>

    </section>
    </div>
  )
}

export default Header