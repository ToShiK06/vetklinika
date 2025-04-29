import React from "react";
import Header from "../header/Header";
import s from "./Zapis.module.css";
import { Link } from "react-router-dom";
import Scroll from "../scroll/Scroll";

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
            <button className={s.exit}> Главная </button>
          </Link>
          <div className={s.knopki}>
            <Link to="/online1">
            <button className={s.online}>
              <div className={s.title}>Онлайн-консультация</div>
              <div className={s.cena}>2000 ₽</div>
            </button>
            </Link>
            <Link to="/online2">
            <button className={s.online}>
              <div className={s.title}>Прием в клинике</div>
              <div className={s.cena}>Бесплатно</div>
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={s.footer1}>
          <div className={s.footer}>
            <Scroll />
            <div className={s.logotip}>
              <div className={s.lapka}></div>
              Ветклиника
            </div>
            <div className={s.knopki}>
            <button className={s.lichnii}>ЛИЧНЫЙ КАБИНЕТ</button>
            <button className={s.us}>
              <Link to="/Us">О НАС</Link>
            </button>
            <button className={s.contact}>
              <Link to="/Cont">КОНТАКТЫ</Link>
            </button>
            <button className={s.contact}>
              <Link to="/">ГЛАВНАЯ</Link>
            </button>
            </div>
            <div className={s.seti}>
              <button className={s.tg}></button>
              <button className={s.vk}></button>
              <button className={s.youtube}></button>
              <div className={s.pochta}>
              <div className={s.logoPochta}></div>
              <button className={s.gmail}>antonshorin23@gmail.com</button>
              </div>
            </div>
           
          </div>
        </div>
    </div>
  );
};

export default Zapis;
