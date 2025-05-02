import React from 'react'
import s from "./Container.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Help = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <div className={s.help}>
                <div className={s.infa}>
                    <div className={s.kolvo}>1 150 000</div>
                    <div className={s.titleHelp}>
                        питомцам мы помогли <br />
                        за 18 лет работы
                    </div>
                </div>
                <div className={s.fotoPt}>
                    <div className={s.ptichka}></div>
                </div>
            </div>
        </div>
    )
}

export default Help
