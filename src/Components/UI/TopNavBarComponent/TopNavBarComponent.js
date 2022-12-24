import React, { useRef } from 'react'
import styles from './TopNavBar.module.css'
import netflixLogo from '../../../assets/images/netflix_logo.svg'

const navbarDetails = [
  {
    icon: netflixLogo,
    name: '',
    key: 'movie-recommendation',
  },
  {
    icon: '',
    name: 'Home',
    key: 'home',
  },
  {
    icon: '',
    name: 'Search',
    key: 'search',
  },
  {
    icon: '',
    name: 'Movies',
    key: 'movies',
  }
]

function TopNavBarComponent(props) {
  return (
    <ul ref={props.navbarRef}  className={styles.navbar__style}>
      {
        navbarDetails.map((item) => {
          return <li key={item.key} className={styles.nav__item}>
            <a href=''>
              {item.icon && <img className={styles.logo_img} src={item.icon} alt="movie image" />} <label>{item.name}</label>
            </a>
          </li>
        })
      }
    </ul>
  )
}

export default TopNavBarComponent