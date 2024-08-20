import React from 'react'
import Image from 'next/image';

const Meal_Section = () => {
    const Meal1= '/images/meal-1.jpg';
    const Meal2= '/images/meal-2.jpg'
  return (
    <div>
      <section className="meal" id="meal">
    
    <h1 className="heading"> meal of the day</h1>

    <div className="box-container">

        <div className="box">

            <Image src={Meal1} alt="" width={200} height={200}/>

            <div className="content">
                <h3>sour cherry soup</h3>
                <p>Vitae Adipiscing Turpis. Aenean Ligula Nibh, Molestie Id Vivide.</p>
                <span className="price"> $12.99</span>
            </div>

        </div>

        <div className="box">

            <Image src={Meal2} alt="" width={200} height={200}/>

            <div className="content">
                <h3>ak Fish A la Pati</h3>
                <p>Vitae Adipiscing Turpis. Aenean Ligula Nibh, Molestie Id Vivide.</p>
                <span className="price"> $12.99</span>
            </div>

        </div>

    </div>

</section>

    </div>
  )
}

export default Meal_Section