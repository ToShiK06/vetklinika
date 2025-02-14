import React from 'react'
import s from './Kostya.module.css'
import Header from '../header/Header'
import {Link} from 'react-router-dom'

const Kostya = () => {
  return (
    <div className={s.kostya}>
        <Header/>
        <div className={s.left}></div>
        <div className={s.backFace}>
        <div className={s.face}></div>
        <div className={s.data}>ближайшая дата приёма: 09.04.25</div>
        <button className={s.zapis}>записаться</button>
      </div>

      <div className={s.infoVrach}>
        <Link to= "/exit">
        <button className={s.exit}> назад </button>
        </Link>
        <div className={s.name}>Констатинопольский Константин Константинович </div>
        <div className={s.specialnost}>Врач общей практики</div>
        <div className={s.info}>
        Здравствуйте! Меня зовут Констатинопольский Константин, и я ветеринар. 
        С самого детства я был увлечен животными всех видов — от попугаев и 
        морских свинок до экзотических ящериц и кроликов. Моя страсть к животным 
        и желание помогать им привели меня к выбору профессии ветеринара.</div>
        <div className={s.kursi}>Пройденные курсы:</div>
        <div className={s.vidKurs}>
          <div className={s.kurs1}>
          <div className={s.year}>2017</div>
          <div className={s.nazvanie}>Клиническая ветеринария</div>
          </div>
          <div className={s.kurs2}>
          <div className={s.year}>2018</div>
          <div className={s.nazvanie}>Международная конференция</div>
          </div>
          <div className={s.kurs3}>
          <div className={s.year}>2019</div>
          <div className={s.nazvanie}>Этика и право в ветеринарии</div>
          </div>
        </div>


      </div>
      <div className={s.right}></div>
    
    </div>
  )
}

export default Kostya
