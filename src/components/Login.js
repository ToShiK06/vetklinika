import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import s from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (authError) {
        throw authError;
      }

      if (data?.user) {
        navigate('/profile');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Неверный email или пароль');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.container}>
      <h2 style={{marginTop:'2%', fontSize:'80px'}}>Вход в личный кабинет</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLogin} style={{display:'flex', flexDirection:'column', rowGap:'30px',marginTop:'10%'}}>
        <div className="form-group">
         
          <input
           style={{width:'400px', height:'50px', borderRadius:'20px',fontSize:'20px',textAlign:'center' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ваш email"
            required
          />
        </div>
        <div className="form-group">
          
          <input
           style={{width:'400px', height:'50px', borderRadius:'20px',fontSize:'20px',textAlign:'center' }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ваш пароль"
            required
          />
        </div>
        <button type="submit" disabled={loading} style={{width:'400px', height:'50px', borderRadius:'20px',fontSize:'20px',textAlign:'center' }}>
          {loading ? 'Вход...' : 'Войти'}
        </button>
      </form>
      <div className="auth-links">
        <p>Нет аккаунта? <a href="/signup">Зарегистрируйтесь</a></p>
       
      </div>
    </div>
  );
}