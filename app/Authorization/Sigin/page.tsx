'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('russian');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Проверка совпадения паролей
  useEffect(() => {
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        setPasswordMatch('✓ Passwords match');
      } else {
        setPasswordMatch('✗ Passwords do not match');
      }
    } else {
      setPasswordMatch('');
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!studentId || !password || !confirmPassword || !selectedLanguage) {
      alert('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    setIsLoading(true);

    // Имитация задержки сети
    setTimeout(() => {
      // Сохранение в localStorage (для демо)
      const users = JSON.parse(localStorage.getItem('dlxedu_users') || '[]');
      
      // Проверка существующего пользователя
      const existingUser = users.find((u: any) => u.id === studentId);
      
      if (existingUser) {
        alert('Student ID already exists!');
        setIsLoading(false);
        return;
      }
      
      // Добавляем нового пользователя
      const newUser = {
        id: studentId,
        password: password,
        language: selectedLanguage,
        createdAt: new Date().toISOString()
      };
      
      users.push(newUser);
      localStorage.setItem('dlxedu_users', JSON.stringify(users));
      
      alert('Registration successful!');
      router.push('/');
      
      setIsLoading(false);
    }, 1000);
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <head>
        <title>DLX.EDU - Registration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>

      <div className="auth-container">
        {/* Кнопка назад */}
        <button 
          onClick={handleBackClick}
          className="back-btn"
        >
          <i className="fas fa-arrow-left"></i> Back to Home
        </button>
        
        <div className="auth-box">
          <form onSubmit={handleSubmit}>
            <h1 className="auth-title">SING UP</h1>
            
            {/* Student ID */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-id-card"></i> Student ID
              </label>
              <input 
                type="text" 
                placeholder="Enter your ID" 
                required 
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="auth-input"
              />
            </div>
            
            {/* Password */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-lock"></i> Password
              </label>
              <input 
                type="password" 
                placeholder="Create password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
              />
            </div>
            
            {/* Confirm Password */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-lock"></i> Confirm Password
              </label>
              <input 
                type="password" 
                placeholder="Repeat password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="auth-input"
              />
              <div className={`password-match ${password === confirmPassword && password ? 'match' : 'no-match'}`}>
                {passwordMatch}
              </div>
            </div>
            
            {/* Language Selection */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-language"></i> Language of Study
              </label>
              <div className="language-selector">
                <button 
                  type="button"
                  className={`lang-option ${selectedLanguage === 'kazakh' ? 'active' : ''}`}
                  onClick={() => setSelectedLanguage('kazakh')}
                >
                  <div className="lang-flag">🇰🇿</div>
                  Kazakh
                </button>
                <button 
                  type="button"
                  className={`lang-option ${selectedLanguage === 'russian' ? 'active' : ''}`}
                  onClick={() => setSelectedLanguage('russian')}
                >
                  <div className="lang-flag">🇷🇺</div>
                  Russian
                </button>
              </div>
            </div>
            
            {/* Submit button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="submit-btn"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Creating...
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus"></i> Create Account
                </>
              )}
            </button>
          </form>
          
          {/* Login link */}
          <div className="switch-text">
            <p>
              Already have an account?{' '}
              <button 
                onClick={handleLoginClick}
                className="switch-link"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }
        
        body {
          font-family: sans-serif;
          background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/images/binom.jpg') center/cover fixed;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
      `}</style>

      <style jsx>{`
        .auth-container {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .auth-box {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          color: white;
          font-weight: 600;
          margin-bottom: 30px;
          transition: all 0.3s;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          padding: 0;
          text-decoration: none;
        }
        
        .back-btn:hover { 
          color: #3b82f6; 
        }
        
        .back-btn i { 
          margin-right: 10px; 
        }
        
        .auth-title {
          font-family: 'Krona One', sans-serif;
          text-align: center;
          font-size: 36px;
          margin-bottom: 30px;
          color: white;
        }
        
        .input-group {
          margin-bottom: 20px;
        }
        
        .input-label {
          display: block;
          color: white;
          font-weight: 600;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
        }
        
        .input-label i { 
          margin-right: 8px; 
        }
        
        .auth-input {
          width: 100%;
          padding: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          color: white;
          font-size: 16px;
          transition: all 0.3s;
        }
        
        .auth-input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .auth-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .language-selector {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 10px;
        }
        
        .lang-option {
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          padding: 12px;
          text-align: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: none;
          font-size: 14px;
        }
        
        .lang-option:hover {
          border-color: rgba(255,255,255,0.4);
        }
        
        .lang-option.active {
          background: rgba(59,130,246,0.3);
          border-color: #3b82f6;
        }
        
        .lang-flag { 
          font-size: 20px; 
          margin-bottom: 5px; 
        }
        
        .submit-btn {
          width: 100%;
          padding: 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .submit-btn:hover { 
          background: #2563eb; 
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .switch-text {
          text-align: center;
          color: rgba(255,255,255,0.7);
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        
        .switch-text p {
          font-size: 16px;
        }
        
        .switch-link { 
          color: #60a5fa; 
          font-weight: 600; 
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: inherit;
          padding: 0;
        }
        
        .switch-link:hover { 
          text-decoration: underline; 
        }
        
        .password-match {
          font-size: 13px;
          margin-top: 5px;
          font-weight: 500;
        }
        
        .match { 
          color: #4ade80; 
        }
        
        .no-match { 
          color: #f87171; 
        }
      `}</style>
    </div>
  );
}
