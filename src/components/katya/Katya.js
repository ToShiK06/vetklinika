import React from 'react'
import s from './Katya.module.css'
import Header from '../header/Header'
import {Link} from 'react-router-dom'

const Katya = () => {
  return (
    <div className={s.katya}>
        <Header/>
        <div className={s.left}></div>
        <div className={s.backFace}>
        <div className={s.face}></div>
        <div className={s.data}>ближайшая дата приёма: 13.03.25</div>
        <Link to= "/zapis"> 
        <button className={s.zapis}>записаться</button>
        </Link>
        
      </div>

      <div className={s.infoVrach}>
        <Link to= "/exit">
        <button className={s.exit}> назад </button>
        </Link>
        <Link to="/">
        <button className={s.exit}>главная</button>
        </Link>
        <div className={s.name}>Колпина Екатерина Дмитриевна </div>
        <div className={s.specialnost}>Анестезиология, лаборатория, стоматология</div>
        <div className={s.info}>
        Привет! Меня зовут Колпина Екатерина, и я ветеринар. С детства я была окружена 
        животными — у нас дома всегда жили хомячки и крыски, и я не представляла своей 
        жизни без них. Моя любовь к животным и желание помогать им стали основой моего 
        выбора профессии.</div>
        <div className={s.kursi}>Пройденные курсы:</div>
        <div className={s.vidKurs}>
          <div className={s.kurs1}>
          <div className={s.year}>2018</div>
          <div className={s.nazvanie}>Клиническая ветеринария</div>
          </div>
          <div className={s.kurs2}>
          <div className={s.year}>2020</div>
          <div className={s.nazvanie}>Патология</div>
          </div>
          <div className={s.kurs3}>
          <div className={s.year}>2022</div>
          <div className={s.nazvanie}>Анестезиология</div>
          </div>
        </div>


      </div>
      <div className={s.right}></div>

    </div>
  )
}

export default Katya
