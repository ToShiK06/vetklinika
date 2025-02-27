import React from 'react'
import s from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
     <div className={s.header} id='glavnaya'>
        <div className={s.headerTittle}>
            <div className={s.headerLogo}></div>
            <button className={s.lichnii}>ЛИЧНЫЙ КАБИНЕТ</button>
            <button className={s.us}><Link to= "/Us">О НАС</Link></button>
          
            <button className={s.contact}>
             КОНТАКТЫ
            </button>
          
            <button className={s.home}><Link to = '/'>ГЛАВНАЯ</Link></button>
            <button className={s.vn}></button>
        </div>
     </div>
    </div>
  )
}

export default Header
