import React, { useEffect, useState } from 'react'
import axios from '../../config/axios.config';
import CardComponent from '../CardComponent/CardComponent'
import styles from './Row.module.css'
function RowComponent(props) {
  const [moviesData, setMoviesData] = useState([]);
  async function fetchMoviesData(fetchUrl) {
    let result = await axios.get(fetchUrl);
    setMoviesData(result.data.results)
  }
  useEffect(() => {
   fetchMoviesData(props.fetchUrl);
  }, [props.fetchUrl])
  console.log(moviesData)
  return (
    <>
      <h2 className={`${styles.row_title}`}>{props.title}<span className={styles.icon}></span></h2>
      <div className={styles.card_wrapper}>
        {moviesData.map((movie) => {
          // console.log(movie);
           return <CardComponent key={movie.id} imageUrl={movie.poster_path} name={movie.original_title} />
        })}
      </div>
    </>
  )
}

export default RowComponent