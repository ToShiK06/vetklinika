import React from 'react'
import s from './Anastasiya.module.css'
import Header from '../header/Header'
import {Link} from 'react-router-dom'

const Anastasiya = () => {
  return (
    <div className={s.anastasiya}>
      <Header/>
      <div className={s.left}></div>
      <div className={s.backFace}>
        <div className={s.face}></div>
        <div className={s.data}>ближайшая дата приёма: 21.03.25</div>
        <button className={s.zapis}>записаться</button>
      </div>

      <div className={s.infoVrach}>
        <Link to= "/exit">
        <button className={s.exit}> назад </button>
        </Link>
        <div className={s.name}>Иванова Анастасия Андреевна </div>
        <div className={s.specialnost}>Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория</div>
        <div className={s.info}>
          Меня зовут Иванова Анастасия, и я ветеринар. С самого детства я мечтала 
          работать с животными, и эта мечта стала моим жизненным призванием. Я родилась 
          и выросла в небольшом городе, где у нас всегда были домашние питомцы — собаки, 
          кошки и даже морская свинка. Забота о них и наблюдение за их поведением 
          пробудили во мне интерес к ветеринарии.</div>
        <div className={s.kursi}>Пройденные курсы:</div>
        <div className={s.vidKurs}>
          <div className={s.kurs1}>
          <div className={s.year}>2015</div>
          <div className={s.nazvanie}>Повышение квалификации</div>
          </div>
          <div className={s.kurs2}>
          <div className={s.year}>2017</div>
          <div className={s.nazvanie}>Международная конференция</div>
          </div>
          <div className={s.kurs3}>
          <div className={s.year}>2018</div>
          <div className={s.nazvanie}>Учение по направлению</div>
          </div>
        </div>


      </div>
      <div className={s.right}></div>
      
    </div>
  )
}

export default Anastasiya
