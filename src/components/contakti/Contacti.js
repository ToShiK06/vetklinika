import React from 'react'
import s from './Contacti.module.css'
import Header from '../header/Header'

const Contacti = () => {
  return (
    <div className={s.contacti}>
        <Header/>
        <div className={s.cont}>Контакты</div>
        
                  <div className={s.contInfo}>
                    <div className={s.infoLogo}>
                      <div className={s.streetLogo}></div>
                      <div className={s.nomerLogo}></div>
                      <div className={s.rezhimLogo}></div>
                    </div>
                    <div className={s.contactiInfo}>
                      <div className={s.info}>
                        <div className={s.street}>
                          Большая Санкт-Петербургская ул., 39, стр. 10
                        </div>
                        <div className={s.nomer}>+7 (8162) 60-36-01</div>
                        <div className={s.rezhim}>
                          Понедельник - пятница с 09:00 до 22:00 Суббота - воскресенье с
                          09:00 до 19:00
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={s.karta}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.443919261817!2d31.26028717752577!3d58.537558174240615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebb3b0d5ed49%3A0x129feee4e791260d!2z0JLQtdGC0JzQsNGB0YLQtdGA!5e0!3m2!1sru!2sru!4v1741015519737!5m2!1sru!2sru"
                        width="100%"
                        height="400"
                        style={{
                          border: "0",
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                          borderRadius: "10px",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Карта Google Maps с локацией Москвы"
                      />
                  </div>

                  <div className={s.exit}>
                    <button className={s.exit}>НАЗАД</button>
                  </div>




                  
      
    </div>
  )
}

export default Contacti
