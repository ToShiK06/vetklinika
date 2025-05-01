import { useState, useRef, useEffect } from "react";
import s from './Dropdown.module.css'
import { Link } from 'react-router-dom'


export const ActionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className={s.container} ref={dropdownRef}>
      <button 
        className={s.toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        навигация 
      </button>

      {isOpen && (
        <div className={s.menu}>
          <Link to="/">
          <button className={s.glavn}> Главная</button>
          </Link>
          <Link to="/Us">
          <button className={s.us}> О нас</button>
          </Link>
          <Link to="/Cont">
          <button className={s.kont}> Контакты</button>
          </Link>
          <Link to="spec">
          <button className={s.zapis}> Записаться</button>
          </Link>   
          
        </div>
      )}
    </div>
  );
};
export default ActionsDropdown;