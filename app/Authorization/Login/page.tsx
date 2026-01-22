'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!fullName || !studentId || !email || !password || !confirmPassword) {
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
      // Сохранение в localStorage
      const users = JSON.parse(localStorage.getItem('dlxedu_users') || '[]');
      
      // Проверка существующего пользователя
      const existingUser = users.find((u: any) => u.id === studentId || u.email === email);
      
      if (existingUser) {
        alert('Student ID or Email already exists!');
        setIsLoading(false);
        return;
      }
      
      // Добавляем нового пользователя
      const newUser = {
        id: studentId,
        name: fullName,
        email: email,
        password: password
      };
      
      users.push(newUser);
      localStorage.setItem('dlxedu_users', JSON.stringify(users));
      
      // Автоматический логин
      localStorage.setItem('dlxedu_current_user', JSON.stringify(newUser));
      
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
        <title>DLX.EDU - Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>

      <div className="signup-container">
        {/* Кнопка назад */}
        <button 
          onClick={handleBackClick}
          className="back-button"
        >
          <i className="fas fa-arrow-left"></i> Back
        </button>
        
        <div className="signup-box">
          <form onSubmit={handleSubmit}>
            <h1 className="signup-title">Sign Up</h1>
            
            {/* Full Name */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-user"></i> Full Name
              </label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                required 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="signup-input"
              />
            </div>
            
            {/* Student ID */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-id-card"></i> Student ID
              </label>
              <input 
                type="text" 
                placeholder="Enter your Student ID" 
                required 
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="signup-input"
              />
            </div>
            
            {/* Email */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
              />
            </div>
            
            {/* Password */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-lock"></i> Password
              </label>
              <input 
                type="password" 
                placeholder="Create a password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-input"
              />
            </div>
            
            {/* Confirm Password */}
            <div className="input-group">
              <label className="input-label">
                <i className="fas fa-lock"></i> Confirm Password
              </label>
              <input 
                type="password" 
                placeholder="Confirm your password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="signup-input"
              />
            </div>
            
            {/* Submit button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="signup-button"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Creating Account...
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus"></i> Sign Up
                </>
              )}
            </button>
          </form>
          
          {/* Login link */}
          <div className="switch-section">
            <p className="switch-text">
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
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/images/binom.jpg') center/cover fixed;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
      `}</style>

      <style jsx>{`
        .signup-container {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .signup-box {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }
        
        .back-button {
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
        }
        
        .back-button:hover { 
          color: #3b82f6; 
          transform: translateX(-5px); 
        }
        
        .back-button i { 
          margin-right: 10px; 
        }
        
        .signup-title {
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
        
        .signup-input {
          width: 100%;
          padding: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          color: white;
          font-size: 16px;
          transition: all 0.3s;
        }
        
        .signup-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59,130,246,0.3);
          background: rgba(255,255,255,0.15);
        }
        
        .signup-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .signup-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 10px;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .signup-button:hover { 
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: translateY(-3px);
        }
        
        .signup-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        .switch-section {
          text-align: center;
          color: rgba(255,255,255,0.7);
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        
        .switch-text {
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
      `}</style>
    </div>
  );
}
