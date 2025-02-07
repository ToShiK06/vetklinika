import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <div>
     <div className={s.header}>
        <div className={s.headerTittle}>
            <div className={s.headerLogo}></div>
            <button className={s.lichnii}>ЛИЧНЫЙ КАБИНЕТ</button>
            <button className={s.us}>О НАС</button>
            <button className={s.news}>НОВОСТИ И АКЦИИ</button>
            <button className={s.contact}>КОНТАКТЫ</button>
            <button className={s.blog}>БЛОГ</button>
            <button className={s.vn}></button>
        </div>
     </div>
    </div>
  )
}

export default Header
