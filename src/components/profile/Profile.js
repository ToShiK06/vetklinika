import { useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import s from './Profile.module.css'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';
import InputFieldQ from './PoleI';
import InputFieldW from './PoleF';



export default function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) navigate('/auth');
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  return (
    <div className={s.lk}>
      <div className={s.profileC}>
        <div className={s.ext}>
          <Link to="/">
            <button className={s.nazad}></button>
          </Link>
        </div>

        <div className={s.infa}>

          <div className={s.informacia}>
            <div className={s.photoLk}></div>
            <Dropdown />
          </div>

        </div>
        <div className={s.fio}>
          <InputFieldW />
          <InputFieldQ />
          <button onClick={handleLogout} className={s.vihod}>выйти</button>
        </div>


      </div>
    </div>



    /*
    <div className={s.lk}>

      <div className={s.profile}>
        <div className={s.ext}>
          <Link to="/">
            <button className={s.nazad}></button>
          </Link>
        </div>
        <div className={s.infa}>

          <div className={s.informacia}>
            <div className={s.photoLk}></div>
            <Dropdown />
          </div>

        </div>

        <div className={s.fio}>
          <InputFieldW />
          <InputFieldQ />
          <button onClick={handleLogout} className={s.vihod}>выйти</button>
        </div>

      </div>


    </div>*/
  );
}