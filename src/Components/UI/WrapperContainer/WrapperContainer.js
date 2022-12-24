import React from 'react';
import styles from './Wrapper.module.css'


function WrapperContainer(props) {
  return (
    <div className={`${styles.container} ${props.styles}`}>{props.children}</div>
  )
}

export default WrapperContainer