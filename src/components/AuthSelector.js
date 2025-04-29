import { Link } from 'react-router-dom';


export default function AuthSelector() {
  return (
    <div>
    <div className="auth-selector" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <h2 style={{marginTop:'2%', fontSize:'80px'}}>Добро пожаловать!</h2>
      <div className="auth-options" style={{width:'800px',display:'flex', justifyContent:'space-around', rowGap:'30px',marginTop:'10%'}} >
        <Link to="/login" className="auth-button" style={{fontSize:'50px', }}>
          Вход
        </Link>
        <Link to="/SignUp" className="auth-button" style={{fontSize:'50px',}}>
          Регистрация
        </Link>
        <Link to="/" className="auth-button" style={{fontSize:'50px',}}>
        Главная
        </Link>
      </div>
    </div>
    </div>
  );
}