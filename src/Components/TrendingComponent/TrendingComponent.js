import React, { useEffect, useState } from 'react'
import requests from '../config/request'
import { useImagePath } from '../config/useImagePath';
function TrendingComponent(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
    const fetchTopRatedMovies = async () => {
        const data = await requests.fetchTrending();
        let idx = Math.round(Math.random() * 20);
        setTrendingMovies(data?.data?.results[idx-1]);
    }
    useEffect(()=>{
      fetchTopRatedMovies()
    },[])
  return (
    <div className='bg-img'>
        <img src={useImagePath(trendingMovies?.backdrop_path)}/>
    </div>
  )
}

export default TrendingComponent