import React from 'react'
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

function TopNavBarComponent() {
  return (
    <ul className={styles.navbar__style}>
      {
        navbarDetails.map((item) => {
          return <li key={item.key} className={styles.nav__item}>
            <a>
              {item.icon && <img className={styles.logo_img} src={item.icon} />} <label>{item.name}</label>
            </a>
          </li>
        })
      }
    </ul>
  )
}

export default TopNavBarComponent