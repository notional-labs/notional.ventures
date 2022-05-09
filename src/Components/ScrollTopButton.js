import React, {useState} from "react";
import './ScrollTopButton.css'
import TopButton from '../media/button/arrow-double-55556.svg'
import { Image } from "antd";

const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <div className="scroll-btn">
       <Image className="button-img" src={TopButton} preview={false} onClick={scrollToTop} 
       style={{display: visible ? 'inline' : 'none'}} />
      </div>
    );
  }
    
  export default ScrollButton;