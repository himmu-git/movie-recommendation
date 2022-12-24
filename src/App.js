import './App.css';
import styles from './App.module.css'
import axios from './Components/config/axios.config';
import { useEffect, useRef, useState } from 'react';
import WrapperContainer from './Components/UI/WrapperContainer/WrapperContainer';
import SearchComponent from './Components/SearchComponent/SearchComponent';
import TrendingComponent  from './Components/TrendingComponent/TrendingComponent'
import TopNavBarComponent from './Components/UI/TopNavBarComponent/TopNavBarComponent';
import RowComponent from './Components/UI/RowComponent/RowComponent';
import requests from './Components/config/request';
import { requestValue } from './Components/constants/rowConstants';

function App() {
  const apiKey = "4cd955b418acfcdc03cb4d730d310eba";
  // const requestUrl = "https://api.themoviedb.org/3/"
  // const endpoint = "/genre/movie/list"
  // const query = `${requestUrl}${endpoint}?api_key=${apiKey}`;
  const baseImgUrl = `https://image.tmdb.org/t/p/w500`
  const isMounted = useRef();
  const [searchMoviesData, setSearchMoviesData] = useState([]);
  const getGenreList = async () => {
    if (isMounted.current) return;
    // const data = await axios.get(query)
    // console.log(data)
  }

  const getSearchData = async (event) => {
    if (!event.target.value) return;
    const url = `search/movie?api_key=${apiKey}&language=en-US&query=${event.target.value}&page=1&include_adult=true`;
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
  // console.log(searchMoviesData);
  const navbarRef = useRef();
  return (
    <>
      <WrapperContainer navbarRef={navbarRef} styles={styles.wrapper}>
        <TopNavBarComponent navbarRef={navbarRef} />
        <TrendingComponent /> 
        {
          requestValue.map((element)=>{
            return <RowComponent key={element.title} title={element.title} fetchUrl={element.requestUrl} />
          })
        }

      </WrapperContainer>
    </>
  );
}

export default App;
