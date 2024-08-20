"use client";
import Header_Section from './Components/Header_Section';
import Home_Section from './Components/Home_Section';
import About_Section from './Components/About_Section';
import Meal_Section from './Components/Meal_Section';
import Gallery_Section from './Components/Gallery_Section';
import Menu_Section from './Components/Menu_Section';
import Order_Section from './Components/Order_Section';
import Blogs_Section from './Components/Blogs_Section';
import Footer_Section from './Components/Footer_Section';
export default function Home() {

  return (
    <> 

    <Header_Section></Header_Section>
    {/* <!-- home section --> */}
    
    <Home_Section></Home_Section>
    
    {/* <!-- about us --> */}
    
    <About_Section></About_Section>
    
        {/* <!-- meal --> */}
    
        <Meal_Section></Meal_Section>
    
        {/* <!-- gallery --> */}
    
    <Gallery_Section></Gallery_Section>

        {/* <!-- menu --> */}
    
 
       <Menu_Section></Menu_Section>
    
    {/* <!-- order --> */}
    
<Order_Section></Order_Section>
    
    
        { /* <!-- blogs --> */}
       
        <Blogs_Section></Blogs_Section>
       
    {/* <!-- footer --> */}
    
      <Footer_Section></Footer_Section>
   
    </>
  );
}
