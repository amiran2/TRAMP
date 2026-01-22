'use client'

import { useEffect, useState } from 'react'
import './style.css'

// app/page.js или pages/index.js (в зависимости от вашей структуры Next.js)
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Krona_One } from 'next/font/google';

// Загрузка шрифта
const kronaOne = Krona_One({
  weight: '400',
  subsets: ['latin'],
});

// Динамический импорт компонентов (если они большие)
const Header = dynamic(() => import('../../components/Header'), {
  loading: () => <p>Loading...</p>,
});
const Hero = dynamic(() => import('../../components/Hero'), {
  loading: () => <p>Loading...</p>,
});
const About = dynamic(() => import('../../components/About'), {
  loading: () => <p>Loading...</p>,
});
const Courses = dynamic(() => import('../../components/Courses'), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import('../../components/Footer'), {
  loading: () => <p>Loading...</p>,
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>DLX.EDU - Learn with us</title>
        <meta name="description" content="DLX.EDU educational platform - Upgrade your knowledge with our courses" />
        <link rel="icon" type="image/png" href="/images/DLX.EDU.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <main className={`${kronaOne.className} m-0 p-0 bg-white`}>
        <Header />
        <Hero />
        
        <div className="w-full h-8 bg-black"></div>
        
        <About />
        
        <div className="w-full h-12 bg-black"></div>
        
        <Courses />
        
        <div className="w-full h-32 bg-black"></div>

        <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              More Coming Soon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're constantly adding new courses and features to enhance your learning experience.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
