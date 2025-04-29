import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className={s.header} id='glavnaya'>
        <div className={s.headerTittle}>
        <Link to="/">
          <div className={s.headerLogo}></div>
          </Link>
          <Link to="/lk">
          <button className={s.lichnii}>ЛИЧНЫЙ КАБИНЕТ</button>
          </Link>
          <button className={s.us}><Link to="/Us">О НАС</Link></button>

          <button className={s.contact}>
            <Link to="/Cont">
              КОНТАКТЫ
            </Link>
          </button>

          <button className={s.home}><Link to='/'>ГЛАВНАЯ</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Header
