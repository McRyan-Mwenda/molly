import React from 'react'
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const {pathname} = useLocation();

    useLayoutEffect(() => {
      window.scrollTo({top: 0, behavior: "smooth"});
      }, [pathname]
      );
  
}

export default ScrollToTop