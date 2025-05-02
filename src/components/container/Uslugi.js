import React from 'react'
import s from "./Container.module.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Uslugi = () => {
      useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false,
      });
    }, []);
  return (
    <div data-aos="fade-up">
      <div className={s.uslugi}>
            <Link to="/s1">
              <button className={s.terapiya}>
                <div className={s.ter}>Терапия</div>
                <div className={s.terapiyaLogo}></div>
              </button>
              </Link>
            <Link to="/s5">
              <button className={s.hirurgiya}>
                <div className={s.hir}>Хирургия</div>
                <div className={s.hirurgiyaLogo}></div>
              </button>
              </Link>
              <Link to="/s3">
              <button className={s.apteka}>
                <div className={s.apt}>Аптека</div>
                <div className={s.aptekaLogo}></div>
              </button>
              </Link>
              <Link to="/s1">
              <button className={s.ortopediya}>
                <div className={s.ort}>Ортопедия</div>
                <div className={s.ortopediyaLogo}></div>
              </button>
              </Link>
            </div>
            <div className={s.uslugi2}>
            <Link to="/s6">
              <button className={s.derma}>
                <div className={s.der}>Дерматология</div>
                <div className={s.dermaLogo}></div>
              </button>
              </Link>
              <Link to="/s4">
              <button className={s.diagnost}>
                <div className={s.diag}>Визуальная диагностика</div>
                <div className={s.diagnostLogo}></div>
              </button>
              </Link>
              <Link to="/s2">
              <button className={s.stomatolog}>
                <div className={s.stom}>Стоматология</div>
                <div className={s.stomatologLogo}></div>
              </button>
              </Link>
              <Link to="/s5">
              <button className={s.onkologiya}>
                <div className={s.onk}>Онкология</div>
                <div className={s.onkologiyaLogo}></div>
              </button>
              </Link>
            </div>
    </div>
  )
}

export default Uslugi
