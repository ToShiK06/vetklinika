import React from "react";
import Header from "../header/Header";
import s from "./Zapis.module.css";
import { Link } from "react-router-dom";

const Zapis = () => {
  return (
    <div className={s.zapis}>
      <Header />
      <div className={s.zapisContent}>
        <div className={s.title1}>
          Запись <br />
          на приём
        </div>
        <div className={s.knop}>
          <Link to="/">
            <button className={s.exit}> назад </button>
          </Link>
          <div className={s.knopki}>
            <button className={s.online}>
              <div className={s.title}>Онлайн-консультация</div>
              <div className={s.cena}>2000 ₽</div>
            </button>
            <button className={s.online}>
              <div className={s.title}>Прием в клинике</div>
              <div className={s.cena}>Бесплатно</div>
            </button>
          </div>
        </div>
      </div>

       <div className={s.footer}>
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
  );
};

export default Zapis;
