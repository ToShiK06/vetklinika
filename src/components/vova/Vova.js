import React from 'react'
import s from './Vova.module.css'
import Header from '../header/Header'
import {Link} from 'react-router-dom'



const Vova = () => {
  return (
    <div className={s.vova}>
        <Header/>
        <div className={s.left}></div>
        <div className={s.backFace}>
        <div className={s.face}></div>
        <div className={s.data}>ближайшая дата приёма: 10.03.25</div>
        <button className={s.zapis}>записаться</button>
      </div>

      <div className={s.infoVrach}>
        <Link to= "/exit">
        <button className={s.exit}> назад </button>
        </Link>
        <div className={s.name}>Зарубин Владимир Николаевич </div>
        <div className={s.specialnost}>Ортопедия</div>
        <div className={s.info}>
        Меня зовут Зарубин Владимир, и я ветеринар. С самого детства я мечтал 
        работать с животными, и эта мечта стала реальностью благодаря моему образованию 
        и опыту. Я окончил Санкт-Петербургскую государственную академию , где получил 
        степень ветеринарного врача. Во время учебы я углубился в изучение анатомии и 
        физиологии различных видов животных, что дало мне прочную основу для дальнейшей 
        практики.</div>
        <div className={s.kursi}>Пройденные курсы:</div>
        <div className={s.vidKurs}>
          <div className={s.kurs1}>
          <div className={s.year}>2016</div>
          <div className={s.nazvanie}>Ортопедия</div>
          </div>
          <div className={s.kurs2}>
          <div className={s.year}>2017</div>
          <div className={s.nazvanie}>Психология животных</div>
          </div>
          <div className={s.kurs3}>
          <div className={s.year}>2018</div>
          <div className={s.nazvanie}>Клиническая ветеринария</div>
          </div>
        </div>


      </div>
      <div className={s.right}></div>
      
    </div>
  )
}

export default Vova
