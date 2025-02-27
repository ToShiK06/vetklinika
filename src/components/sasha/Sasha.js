import React from 'react'
import s from './Sasha.module.css'
import Header from '../header/Header'
import {Link} from 'react-router-dom'


const Sasha = () => {
  return (
    <div className={s.sasha}>
        <Header/>
        <div className={s.left}></div>
        <div className={s.backFace}>
        <div className={s.face}></div>
        <div className={s.data}>ближайшая дата приёма: 16.03.25</div>
        <Link to= "/zapis"> 
        <button className={s.zapis}>записаться</button>
        </Link>
      </div>

      <div className={s.infoVrach}>
        <Link to= "/exit">
        <button className={s.exit}> назад </button>
        </Link>
        <div className={s.name}>Голубина Александра Маратовна </div>
        <div className={s.specialnost}>Хирургия</div>
        <div className={s.info}>
        Здравствуйте! Меня зовут Голубина Александра, и я ветеринар. С детства 
        я была окружена животными: у нас дома жили не только собаки и кошки, но 
        и попугаи, морские свинки, а также несколько экзотических питомцев, 
        таких как хамелеоны и морские звезды. Эта любовь к животным и желание 
        заботиться о них стали основой моего выбора профессии.</div>
        <div className={s.kursi}>Пройденные курсы:</div>
        <div className={s.vidKurs}>
          <div className={s.kurs1}>
          <div className={s.year}>2022</div>
          <div className={s.nazvanie}>Клиническая ветеринария</div>
          </div>
          <div className={s.kurs2}>
          <div className={s.year}>2022</div>
          <div className={s.nazvanie}>Хирургия</div>
          </div>
          <div className={s.kurs3}>
          <div className={s.year}>2023</div>
          <div className={s.nazvanie}>Анестезиология</div>
          </div>
        </div>


      </div>
      <div className={s.right}></div>
      
    </div>
  )
}

export default Sasha
