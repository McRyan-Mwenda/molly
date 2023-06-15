import React, { useEffect, useState } from 'react'
import {SlArrowUp} from 'react-icons/sl'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

    const GoToTopBtn = () => {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }

    const listenToScroll = () => {

      let heightToHidden = 250;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if(winScroll > heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      } 
    }

    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

  return <>
    {isVisible && (
      <div className='top-btn' onClick={GoToTopBtn}>
      <SlArrowUp className='top-btn--icon'/>
    </div>
  )}
  )
  </>
}

export default GoToTop