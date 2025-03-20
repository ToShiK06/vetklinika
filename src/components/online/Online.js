import React from "react";
import Header from "../header/Header";
import s from "./Online.module.css";
import { Link } from "react-router-dom";
import Scroll from "../scroll/Scroll";
import InputField from "../poleVvoda/Pole";
import InputField1 from "../poleVvoda/Nomer";
import InputField2 from "../poleVvoda/Priem";
import InputField3 from "../poleVvoda/Problema";
import InputField4 from "../poleVvoda/Text";

const Online = () => {
  return (
    <div className={s.online}>
      <Header />
      <div className={s.oformlenieZakaza}>
        <div className={s.zakaz}>
          Оформление <br />
          заказа
        </div>
        <div className={s.oformlenie}>
          <Link to="/exi">
            <button className={s.exit}> назад </button>
          </Link>
          <InputField />
          <div className={s.nomData}>
            <InputField1 />
            <InputField2 />
          </div>
          <div>
            <InputField3 />
          </div>

          <div className={s.oplata}>
            <div className={s.vvod}>
              <div className={s.karta}>Оплата банковской картой</div>
              <div className={s.bezopas}>
                <div className={s.kapcha}></div>
                <div>
                  <InputField4 />
                </div>
              </div>
            </div>

            <div className={s.predupr}>
              Ваши личные данные будут использоваться для обработки ваших
              заказов, упрощения вашей работы с
              <br />
              сайтом и для других целей, описанных в нашей политика
              конфиденциальности.
            </div>

            <button className={s.oplatit}>ОПЛАТИТЬ</button>
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

export default Online;
