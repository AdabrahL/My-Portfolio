import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { Heading } from "../../common/Heading"
import { about } from "../../data/data"
import { Bio } from "./Bio"
import { Info } from "./Info"
import { Price } from "./Price"
import { Services } from "./Services"


export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <>
    <section className='pages'>
      <div className='content-container'>
        {about.map((items, index) => (
          <div key={index}>
            {/* Info and Bio Section */}
            <div className='about_details'>
              <div data-aos="fade-right">
                <Info items={items} Heading={Heading} />
              </div>
              <div data-aos="fade-left">
                <Bio items={items} Heading={Heading} />
              </div>
            </div>

            {/* Services Section */}
            <div data-aos="fade-up">
              <Services items={items} Heading={Heading} />
            </div>

           

            {/* Pricing Section */}
            <div data-aos="fade-up" data-aos-delay="200">
              <Price items={items} Heading={Heading} />
            </div>
          </div>
        ))}
      </div>
    </section>
    
    </>
  )

}
