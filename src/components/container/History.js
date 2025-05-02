import React from 'react'
import s from "./Container.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const History = () => {
     useEffect(() => {
          AOS.init({
            duration: 1000, 
          });
        }, []);
  return (
    <div data-aos="fade-up">
      <div className={s.history}>
              <div className={s.history2}>
                <div className={s.hisCompanii}>История компании</div>
                <div className={s.vetmaster}>
                  {" "}
                  Ветклиника "Ветмастер" — современное учреждение, основанное доктором
                  Александром Петровичем. Она предлагает широкий спектр ветеринарных
                  услуг, включая профилактические осмотры и хирургические операции.
                  Основная миссия клиники — обеспечить качественный уход за животными
                  и поддержку их владельцам. "Ветмастер" также проводит бесплатные
                  семинары для владельцев, что помогает укрепить доверие местных
                  жителей и сделать клинику символом заботы о животных в регионе.
                </div>
                <div className={s.special}>Наши специалисты</div>
                <div className={s.vrachi}>
                  <div className={s.specialLogo}></div>
                  <div className={s.specialLogo2}></div>
                  <div className={s.specialLogo3}></div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default History
