import React from 'react'
import Header from "../header/Header";
import s from './Online.module.css'
import { Link } from "react-router-dom";
import Scroll from "../scroll/Scroll";

const Online = () => {
  return (
    <div className={s.online}>
        <Header/>
        <div className={s.oformlenie}>




        </div>




        <div className={s.footer1}>
          <div className={s.footer}>
            <Scroll />
            <div className={s.logotip}>
              <div className={s.lapka}></div>
              Ветклиника
            </div>
            <div className={s.knopki}>
            <button className={s.lichnii}>ЛИЧНЫЙ КАБИНЕТ</button>
            <button className={s.us}>
              <Link to="/Us">О НАС</Link>
            </button>
            <button className={s.contact}>
              <Link to="/Cont">КОНТАКТЫ</Link>
            </button>
            <button className={s.contact}>
              <Link to="/">ГЛАВНАЯ</Link>
            </button>
            </div>
            <div className={s.seti}>
              <button className={s.tg}></button>
              <button className={s.vk}></button>
              <button className={s.youtube}></button>
              <div className={s.pochta}>
              <div className={s.logoPochta}></div>
              <button className={s.gmail}>antonshorin23@gmail.com</button>
              </div>
            </div>
           
          </div>
        </div>
      
    </div>
  )
}

export default Online
