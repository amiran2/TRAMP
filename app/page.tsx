'use client'

import { useEffect, useState } from 'react'
import './style.css'

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <div className="h-8 bg-black w-full"></div>
      <About />
      <div className="h-12 bg-black w-full"></div>
      <Courses />
      <div className="h-32 bg-black w-full"></div>
      <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">More Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're constantly adding new courses and features to enhance your learning experience.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
