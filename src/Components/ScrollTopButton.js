import React, {useState} from "react";
import './ScrollTopButton.css'
import TopButton from '../media/button/arrow-top.svg'
import { Image } from "antd";

const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 800){
        setVisible(true)
      } 
      else if (scrolled <= 800){
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