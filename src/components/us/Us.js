import React from 'react'
import Header from '../header/Header'
import s from './Us.module.css'
import Special from '../special/Special'

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

        <div className={s.footer}>
        
                    <div className={s.logotip}>
                    <div className={s.lapka}></div>
                      Ветклиника
                    </div>
                   <div className={s.funkcii}> 
                    <a href="#glavnaya">
                      Главная
                    </a>
                    </div>
         </div>
        
    </div>
  )
}

export default Us
