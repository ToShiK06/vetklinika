import React from "react";
import s from "./Container.module.css";
import Slider from "../slider/Slider";

import Scroll from "../scroll/Scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Uslugi from "./Uslugi";
import History from "./History";
import Help from "./Help";
import Why from "./Why";

const Container = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,
  });
}, []);
  return (
    <div className={s.mainContainer}> 
      <div data-aos="fade-up">
        <Slider />
        <div className={s.container} id="glavnaya"></div>
        <Uslugi/>
        <History/>
        <Help/>
        <Why/>
      </div>
      
      
      <div className={s.scrollWrapper}>
        <Scroll />
      </div>
    </div>
  );
};

export default Container;
