import React from 'react'
import Header from '../header/Header'
import s from './Us.module.css'

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

        <div className={s.special}>
            <div className={s.specialTittle}>Специалисты</div>

            <div className={s.knopki}>
            <div className={s.specialisti}>
                <button className={s.s1}>
                 <div className={s.faceStazh}>
                    <div className={s.face1}></div>
                    <div className={s.stazh}>стаж 10 лет</div>
                 </div>
                 <div className={s.infoVrach}>
                    <div className={s.prof}>врач</div>
                    <div className={s.name}>Иванова Анастасия Андреевна</div>
                    <div className={s.spec}>специализация</div>
                    <div className={s.zadacha}>Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория</div>
                 </div>

                </button>
                <button className={s.s2}>
                <div className={s.faceStazh}>
                    <div className={s.face2}></div>
                    <div className={s.stazh}>стаж 6 лет</div>
                 </div>
                 <div className={s.infoVrach}>
                    <div className={s.prof}>ассистент ветеринарного врача</div>
                    <div className={s.name}>Колпина Екатерина Дмитриевна</div>
                    <div className={s.spec}>специализация</div>
                    <div className={s.zadacha}>Анестезиология, лаборатория</div>
                 </div>
                </button>
                <button className={s.s3}>
                <div className={s.faceStazh}>
                    <div className={s.face3}></div>
                    <div className={s.stazh}>стаж 4 года</div>
                 </div>
                 <div className={s.infoVrach}>
                    <div className={s.prof}>врач</div>
                    <div className={s.name}>Бублина Амина Рахметова</div>
                    <div className={s.spec}>специализация</div>
                    <div className={s.zadacha}>Терапия, УЗИ-диагностика</div>
                 </div>
                </button>
            </div>
            <div className={s.specialisti2}>
                <button className={s.s4}>
                <div className={s.faceStazh}>
                    <div className={s.face4}></div>
                    <div className={s.stazh}>стаж 7 лет</div>
                 </div>
                 <div className={s.infoVrach}>
                    <div className={s.prof}>ординатор</div>
                    <div className={s.name}>Констатинопольский Константин Константинович</div>
                    <div className={s.spec}>специализация</div>
                    <div className={s.zadacha}>Врач общей практики</div>
                 </div>
                </button>
                <button className={s.s5}>
                <div className={s.faceStazh}>
                    <div className={s.face5}></div>
                    <div className={s.stazh}>стаж 2 года</div>
                 </div>
                 <div className={s.infoVrach}>
                    <div className={s.prof}>ассистент ветеринарного врача</div>
                    <div className={s.name}>Голубина Анастасия Маратовна</div>
                    <div className={s.spec}>специализация</div>
                    <div className={s.zadacha}>Хирургия</div>
                 </div>
                </button>
                <button className={s.s6}>
                <div className={s.faceStazh}>
                    <div className={s.face6}></div>
                    <div className={s.stazh}>стаж 9 лет</div>
                 </div>
                 <div className={s.infoVrach}>
                    <div className={s.prof}>ардинатор</div>
                    <div className={s.name}>Зарубин Владимир Николаевич</div>
                    <div className={s.spec}>специализация</div>
                    <div className={s.zadacha}>Ортопедия</div>
                 </div>
                </button>
            </div>
            </div>

        </div>

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
