import React from 'react';
import { useRef,useEffect } from 'react';
import styles from './Wrapper.module.css'


function WrapperContainer(props) {
  // const navbarRef = useRef();
  console.log(props)
  useEffect(() => {
    const onScrollfn = (event) => {
      // console.log(window.scrollY);
      // console.log(props?.navbarRef?.current.classList.add('class'))
      if(window.scrollY  >= 72) {
        
          // console.log(props?.navbarRef?.current.classList)
          props?.navbarRef?.current.classList?.add('changeBg');
      }
      else {
        props?.navbarRef?.current.classList?.remove('changeBg');
        // props?.navbarRef?.current.classList?.remove('.class')
      }
    } 
        window.addEventListener('scroll',onScrollfn);
    return () => {
        window.removeEventListener('scroll',onScrollfn);
    };
  }, []);
  return (
    <div className={`${styles.container} ${props.styles}`}>{props.children}</div>
  )
}

export default WrapperContainer