'use client';

import { useEffect } from 'react';

export default function HomePage() {
  // Функции для обработки кликов
  const handleAboutUs = () => {
    alert('About Us!');
  };

  const handleCourses = () => {
    alert('Courses!');
  };

  const handleLogIn = () => {
    alert('Log In!');
  };

  const handleSignUp = () => {
    alert('Sign Up!');
  };

  const handleGetStart = () => {
    alert('GET START!');
  };

  const handleMathSelect = () => {
    alert('MATH selected!');
  };

  const handleKazakhSelect = () => {
    alert('KAZAKH selected!');
  };

  const handleEnglishSelect = () => {
    alert('ENGLISH selected!');
  };

  const handleInformaticsSelect = () => {
    alert('INFORMATICS selected!');
  };

  // Эффекты для интерактивности
  useEffect(() => {
    console.log('DLX.EDU website loaded');
    
    // Добавляем эффекты при наведении на все кнопки-картинки
    const imageButtons = document.querySelectorAll('.image-button');
    
    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = 'scale(1.05)';
    };
    
    const handleMouseLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = 'scale(1)';
    };
    
    imageButtons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Плавный скролл для ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    // Очистка
    return () => {
      imageButtons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="m-0 p-0">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background-color: #ffffff;
          color: #1f2937;
          overflow-x: hidden;
        }
        
        .krona-one {
          font-family: 'Krona One', sans-serif;
          letter-spacing: 0.05em;
        }
        
        .image-button {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .image-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        
        .math-formula {
          font-family: "Times New Roman", Times, serif;
          font-style: italic;
          font-size: 1.4rem;
        }
      `}</style>

      {/* Весь хедер с фото */}
      <header 
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('images/binom.jpg')" }}
      >
        {/* Логотип в левом верхнем углу */}
        <button className="absolute top-6 left-6 z-10" onClick={() => alert('Logo clicked!')}>
          <img 
            src="images/DLX.EDU.png" 
            alt="Логотип"
            className="w-20 h-10 hover:opacity-80 transition-opacity hover:scale-110"
          />
        </button>

        {/* Кнопки ABOUT US и COURSES в центре */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-8 z-10">
          
          {/* ABOUT US */}
          <button 
            className="group relative flex items-center space-x-3 bg-transparent hover:bg-black border border-white/50 hover:border-black rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105"
            onClick={handleAboutUs}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="images/Vector.png" 
                alt="About Us"
                className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
              />
            </div>
            
            <div className="text-left">
              <span className="text-white font-semibold text-lg block">ABOUT US</span>
            </div>
            
            <svg className="w-5 h-5 text-white/50 group-hover:text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>

          {/* COURSES */}
          <button 
            className="group relative flex items-center space-x-3 bg-transparent hover:bg-black border border-white/50 hover:border-black rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105"
            onClick={handleCourses}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="images/Group 5.png" 
                alt="Courses"
                className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
              />
            </div>
            
            <div className="text-left">
              <span className="text-white font-semibold text-lg block">COURSES</span>
            </div>
            
            <svg className="w-5 h-5 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

        </div>

        {/* Кнопки SIGN UP и LOG IN в правом верхнем углу */}
        <div className="absolute top-6 right-6 flex space-x-4 z-10">
          
          {/* LOG IN кнопка */}
          <button 
            className="group bg-transparent hover:bg-white/20 text-white border border-white/30 hover:border-white rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={handleLogIn}
          >
            <span className="font-medium">LOG IN</span>
          </button>

          {/* SIGN UP кнопка */}
          <button 
            className="group bg-white hover:bg-gray-100 text-black border border-white rounded-lg px-6 py-2 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            onClick={handleSignUp}
          >
            <span className="font-medium">SIGN UP</span>
          </button>

        </div>

        {/* Основной контент по центру страницы */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full">
          
          {/* Заголовок Learn with us */}
          <h1 className="text-6xl font-bold text-white leading-none krona-one tracking-wider">
            Learn with us
          </h1>
          
          {/* Подзаголовок upgrade your knowledge */}
          <p className="text-xl text-white/80 mt-2 mb-8 tracking-wide font-bold">
            upgrade your knowledge
          </p>
          
          {/* Кнопка GET START */}
          <button 
            className="group relative bg-transparent hover:bg-white text-white hover:text-black border-2 border-white hover:border-white rounded-full text-lg font-bold py-3 px-10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            onClick={handleGetStart}
          >
            GET START
          </button>

        </div>

      </header>

      {/* Черный блок */}
      <div className="w-full h-8 bg-black"></div>

      {/* Секция с фото и текстом */}
      <section className="w-full bg-black text-white pt-4 pb-12">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Фото */}
            <div className="lg:w-1/2">
              <img 
                src="images/училка.png" 
                alt="Our Courses"
                className="w-full h-auto"
              />
            </div>
            
            {/* Текст */}
            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-white/80 tracking-wide font-bold">
                Our courses help students understand challenging topics, fill knowledge gaps, 
                and confidently master the school curriculum.
              </p>
            </div>
            
          </div>

        </div>
      </section>

      {/* Черный разделитель */}
      <div className="w-full h-12 bg-black"></div>

      {/* 4 КНОПКИ-ФОТКИ В ОДНОЙ ЛИНИИ */}
      <section className="w-full bg-black py-8">
        <div className="container mx-auto px-6">
          
          {/* 4 одинаковые кнопки в одной линии */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* MATH */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleMathSelect}
            >
              <img 
                src="images/2.png" 
                alt="MATH"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">MATH</h3>
                <p className="text-gray-300 text-sm">Algebra, geometry</p>
              </div>
            </div>
            
            {/* KAZAKH */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleKazakhSelect}
            >
              <img 
                src="images/4.png" 
                alt="KAZAKH"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">KAZAKH</h3>
                <p className="text-gray-300 text-sm">Балашовский колледж</p>
              </div>
            </div>
            
            {/* ENGLISH */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleEnglishSelect}
            >
              <img 
                src="images/3.png" 
                alt="ENGLISH"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">ENGLISH</h3>
                <p className="text-gray-300 text-sm">Grammar, rules</p>
              </div>
            </div>
            
            {/* INFORMATICS */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleInformaticsSelect}
            >
              <img 
                src="images/1.png" 
                alt="INFORMATICS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">INFORMATICS</h3>
                <p className="text-gray-300 text-sm">STEM, programming</p>
              </div>
            </div>
            
          </div>

        </div>
      </section>

      {/* Черный разделитель (большой) */}
      <div className="w-full h-32 bg-black"></div>

      {/* Фон пр.png */}
      <section className="relative w-full min-h-screen">
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('images/пр.png')" }}
        ></div>
        
        {/* Кнопки на фоне */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          
          {/* 4 кнопки на фоне пр.png */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* MATH на фоне */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleMathSelect}
            >
              <img 
                src="images/2.png" 
                alt="MATH"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">MATH</h3>
                <p className="text-gray-300 text-sm">Algebra, geometry</p>
              </div>
            </div>
            
            {/* KAZAKH на фоне */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleKazakhSelect}
            >
              <img 
                src="images/4.png" 
                alt="KAZAKH"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">KAZAKH</h3>
                <p className="text-gray-300 text-sm">Балашовский колледж</p>
              </div>
            </div>
            
            {/* ENGLISH на фоне */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleEnglishSelect}
            >
              <img 
                src="images/3.png" 
                alt="ENGLISH"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">ENGLISH</h3>
                <p className="text-gray-300 text-sm">Grammar, rules</p>
              </div>
            </div>
            
            {/* INFORMATICS на фоне */}
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer image-button"
              onClick={handleInformaticsSelect}
            >
              <img 
                src="images/1.png" 
                alt="INFORMATICS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-3 left-3">
                <h3 className="text-xl font-bold text-white">INFORMATICS</h3>
                <p className="text-gray-300 text-sm">STEM, programming</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* Черный разделитель */}
      <div className="w-full h-20 bg-black"></div>

      {/* Футер */}
      <footer className="w-full bg-white py-12 px-6">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 gap-8">
            
            {/* Контакты */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-700">+7 (777) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">info@dlxedu.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-700">Almaty, Kazakhstan</span>
                </div>
              </div>
            </div>
            
            {/* Соцсети */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                  FB
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700">
                  IG
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                  TG
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700">
                  YT
                </a>
              </div>
            </div>
            
            {/* Быстрые ссылки */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Courses</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            
          </div>
          
          {/* Копирайт */}
          <div className="border-t border-gray-300 mt-8 pt-6 text-center">
            <p className="text-gray-600">© 2024 DLX.EDU Educational Platform. All rights reserved.</p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
