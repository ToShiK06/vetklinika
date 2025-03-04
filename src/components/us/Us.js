import React from 'react'
import Header from '../header/Header'
import s from './Us.module.css'
import Special from '../special/Special'
import Scroll from '../scroll/Scroll';
import {Link} from 'react-router-dom'

const Us = () => {
  return (
    <div className={s.us}>
      <Header/>
        <div className={s.kollektiv}>
            <div className={s.tittleKollektiv}>
            <div className={s.kollektivTittle}>Коллектив</div>
            </div>
            
            <div className={s.fotoTittle}>
            <div className={s.kollektivFoto}></div>
            <div className={s.tittle}>
            Ветеринарная клиника "Ветмастер" — это команда высококвалифицированных 
            специалистов, объединённых общей целью: заботой о здоровье и благополучии
            ваших питомцев. Наша команда состоит из опытных ветеринаров, 
            заботливых ассистентов и технических специалистов, 
            которые работают в гармонии, чтобы обеспечить наилучший уход за животными.
            </div>
            </div>
        </div>

        <Special/>

        <div className={s.footer1}>
        <div className={s.footer}>
        <Scroll/>
          <div className={s.logotip}>
            <div className={s.lapka}></div>
            Ветклиника
          </div>
         
          <Link to="/">
          <button className={s.funkcii}>
           Главная
          </button>
          </Link>
          
          
        </div>
        </div>
    </div>
  )
}

export default Us
