import './App.css';
import styles from './App.module.css'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

function App() {
  const apiKey = "4cd955b418acfcdc03cb4d730d310eba";
  const requestUrl = "https://api.themoviedb.org/3/"
  const endpoint = "/genre/movie/list"
  const query = `${requestUrl}${endpoint}?api_key=${apiKey}`;
  const baseImgUrl = `https://image.tmdb.org/t/p/w500`
  const isMounted = useRef();
  const [searchMoviesData, setSearchMoviesData] = useState([]);
  const getGenreList = async () => {
    if (isMounted.current) return;
    const data = await axios.get(query)
    console.log(data)
  }
  const getSearchData = async (event) => {
    if (!event.target.value) return;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${event.target.value}&page=1&include_adult=true`;
    const data = await axios.get(url)
    setSearchMoviesData(data.data.results);
    // console.log(data.data.results)
  }
  const debounce = function (fn, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    }
  }
  const onKeySearch = debounce(getSearchData, 1000);
  console.log(searchMoviesData);

  useEffect(() => {
    getGenreList();
    return () => {
    };
  }, []);
  return (
    <>
      <div className={styles.app_main_classs}>
        <label>Search Movies</label>
        <input type="search" onKeyUp={onKeySearch} />
      </div>
      <div className={styles.wrapper}>
        {searchMoviesData.map((result, index) => {
          return (<div key={index} className={styles.cards}>
            <div>
              <img src={`${baseImgUrl}${result.poster_path}`} className={styles.imgClass} alt="poster " />
            </div>
            <div>
              <h2>
                {result.original_title}
              </h2>
              <p>
                {result.overview}
              </p>
            </div>
          </div>)
        })
        }
      </div>
    </>
  );
}

export default App;
