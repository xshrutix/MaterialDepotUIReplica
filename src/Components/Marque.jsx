import React from 'react';
import Marquee from 'react-fast-marquee';
import './Marquee.css'


function MarqueeCom() {
    const cards =[
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Alimo.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Centurylaminates.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Greenlam.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Greenply.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Heritage.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Hettich.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Jaquar.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Kohler.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Merino.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/New%20Mika.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/SOL.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/The%20rare.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Virgo%20Laminates.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Viva%20Quartz.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/Vivre%20panels.png?width=200",
       "https://d3faqy0icgqzj8.cloudfront.net/VendorImages/hafele.png?width=200"
       
]
  return (
    <div className="MarqueeCom mt-28">
      <div className="title">
        <h1>Our Technology Partner</h1>
      </div>

      <div className='flex justify-center align-middle py-5'>
              <Marquee direction="left" speed={100} delay={5} pauseOnHover>
             {cards.map((item, index) => (
                 <div key={index}  className="image_wrapper">
            <img src={item} alt="" />
          </div>
          ))}     
          
         
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeCom;