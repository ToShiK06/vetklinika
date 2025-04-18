import React, { useState } from 'react';

// Функция для генерации случайной капчи
const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const CaptchaGenerator = () => {
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [inputValue, setInputValue] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(null);

    // Функция для обновления капчи
    const handleRefreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setInputValue('');
        setIsCaptchaValid(null);
    };

    // Функция для проверки введенной капчи
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === captcha) {
            setIsCaptchaValid(true);
        } else {
            setIsCaptchaValid(false);
        }
    };

    return (
        <div style={{ textAlign: 'center',display:'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'center',marginTop:'10px' }}>
                <div style={{height:'40px',width:'150px', borderRadius: '20px',display:'flex',justifyContent:'center',alignItems:'center', fontSize: '24px', fontWeight: 'bold', backgroundColor: '#ffbe9e' }}>
                    {captcha}
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Введите капчу"
                    required
                    style={{ borderRadius: '20px', padding: '10px', fontSize: '16px',marginTop:'10px' }}
                />
                 {isCaptchaValid !== null && (
                <div style={{ marginTop: '10px', color: isCaptchaValid ? 'green' : 'red' }}>
                    {isCaptchaValid ? 'Капча верна!' : 'Капча неверна!'}
                </div>
            )}
                <div style={{ display: 'flex', width:'300px',justifyContent:'space-around' }}>
                    <button type="button" onClick={handleRefreshCaptcha} style={{borderRadius:'20px',width:'130px',height:'30px',marginTop:'10px' }}>
                        Обновить капчу
                    </button>
                    <button type="submit" style={{ borderRadius:'20px',width:'130px',height:'30px',marginTop:'10px' }}>Проверить</button>
                </div>
            </form>
           
        </div>
    );
};

export default CaptchaGenerator;
