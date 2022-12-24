import React from 'react'
import styles from './Card.module.css'

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
function CardComponent({imageUrl,name}) {
  return (
    <div className={styles.card}>
        <img className={styles.poster} src={`${imgBaseUrl}${imageUrl}`} alt={name}/>
    </div>
  )
}

export default CardComponent