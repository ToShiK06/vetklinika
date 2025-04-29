import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import s from './SignUp.module.css'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Простая валидация
    if (!email.includes('@')) {
      setError('Введите корректный email');
      return;
    }
    if (password.length < 6) {
      setError('Пароль должен быть не менее 6 символов');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 1. Регистрация в Supabase Auth
      const { data, error: authError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          emailRedirectTo: window.location.origin + '/welcome'
        }
      });

      if (authError) throw authError;

      // 2. Создание записи в profiles
      if (data.user) {
        await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            email: email.trim()
          });
      }

      // 3. Редирект после успешной регистрации
      navigate('/Profile');

    } catch (err) {
      setError(err.message.includes('already registered') 
        ? 'Этот email уже зарегистрирован' 
        : 'Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className={s.container}>
      <h2 style={{marginTop:'2%', fontSize:'80px'}}>Регистрация</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', rowGap:'30px',marginTop:'10%'}}>
        <input
          style={{width:'400px', height:'50px', borderRadius:'20px',fontSize:'20px',textAlign:'center' }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
        style={{width:'400px', height:'50px', borderRadius:'20px',fontSize:'20px',textAlign:'center' }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль (от 6 символов)"
          minLength={6}
          required
        />
        <button type="submit" disabled={loading} style={{width:'400px', height:'50px', borderRadius:'20px',fontSize:'20px',textAlign:'center' }}>
          {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
        </button>
        {error && <div style={{fontSize:'20px',textAlign:'center' }} className="error">{error}</div>}
      </form>
    </div>
  );
}