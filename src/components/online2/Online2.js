import React from "react";
import Header from "../header/Header";
import s from "./Online2.module.css";
import { Link } from "react-router-dom";
import Scroll from "../scroll/Scroll";
import InputField from "../poleVvoda/Pole";
import PhoneImput from "../poleVvoda/PhoneImput";
import DatePickerComponent from '../data/DatePickerComponent';
import InputField3 from "../poleVvoda/Problema";

import MyComponent from "../myComponents/MyComponent";



const Online2 = () => {
    return (
        <div className={s.online}>
            <Header />
            <div className={s.oformlenieZakaza}>
                <div className={s.zakaz}>
                    Запись
                </div>
                <div className={s.oformlenie}>
                    <Link to="/exi">
                        <button className={s.exit}> назад </button>
                    </Link>
                    <InputField />
                    <div className={s.nomData}>
                        <PhoneImput />
                        <DatePickerComponent />
                    </div>
                    <div>
                        <InputField3 />
                    </div>


                        <div className={s.oplataKnopka}>
                            <MyComponent />
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
                    
                </div>
            </div>
        </div>
    );
};

export default Online2;
