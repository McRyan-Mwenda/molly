import React from 'react'
import { apple, about, google } from '../assets'
import styles, { layout } from '../style'

const About = () => (
    <section id='about' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        {/* the image */}
        <img src={about} alt='about' className='w-[70%] h-[90%] relative z-[5]'/>

        {/* gradient color behind the image */}
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      {/* the text beside the image */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About Us and <br className='sm:block hidden'/>what do we offer</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates ex vel modi tempore pariatur reprehenderit cumque ratione beatae assumenda porro veritatis nam, fugit ipsa! Eligendi ipsam ducimus vel eaque.
        </p>

        {/* the two buttons */}
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
  )


export default About