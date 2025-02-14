import React from 'react'
import s from './Amina.module.css'
import Header from '../header/Header'
import {Link} from 'react-router-dom'


const Amina = () => {
  return (
    <div className={s.amina}>
        <Header/>
        <div className={s.left}></div>
        <div className={s.backFace}>
        <div className={s.face}></div>
        <div className={s.data}>ближайшая дата приёма: 11.04.25</div>
        <button className={s.zapis}>записаться</button>
      </div>

      <div className={s.infoVrach}>
        <Link to= "/exit">
        <button className={s.exit}> назад </button>
        </Link>
        <div className={s.name}>Бублина Амина Рахметова</div>
        <div className={s.specialnost}>Терапия, УЗИ-диагностика, хирургия</div>
        <div className={s.info}>
        Здравствуйте! Меня зовут Бублина Амина, и я ветеринар. 
        Моя любовь к животным началась с раннего детства, когда я проводила часы, 
        играя с нашими домашними питомцами. У меня всегда были собаки и кошки, и я с 
        удовольствием наблюдала за их поведением, изучая их привычки и потребности. 
        Эти моменты стали основой моего желания стать ветеринаром!</div>
        <div className={s.kursi}>Пройденные курсы:</div>
        <div className={s.vidKurs}>
          <div className={s.kurs1}>
          <div className={s.year}>2020</div>
          <div className={s.nazvanie}>Хирургия</div>
          </div>
          <div className={s.kurs2}>
          <div className={s.year}>2021</div>
          <div className={s.nazvanie}>Ветеринарная радиология </div>
          </div>
          <div className={s.kurs3}>
          <div className={s.year}>2021</div>
          <div className={s.nazvanie}>Психология животных</div>
          </div>
        </div>


      </div>
      <div className={s.right}></div>
    
      
    </div>
  )
}

export default Amina
