import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Chalten from '../assets/chalten.jpg';
import Upsala from '../assets/upsala.jpg';
import PeritoMoreno from '../assets/peritomoreno.jpg';
import LagunaTorre from '../assets/torre3.jpg';
import BuenosAires from '../assets/fitzroy.jpg';


const landscapes = [
    { id: 1, name: 'El Chaltén', image: Chalten, link: '/landscapes/chalten' },
    { id: 2, name: 'Glaciar Upsala', image: Upsala, link: '/landscapes/iguazu' },
    { id: 3, name: 'Perito Moreno', image: PeritoMoreno, link: '/landscapes/perito-moreno' },
    { id: 4, name: 'Laguna Torre', image: LagunaTorre, link: '/landscapes/puerto-madryn' },
    { id: 5, name: 'Cerro Fitz Roy', image: BuenosAires, link: '/landscapes/buenos-aires' },

  ];
  
  const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? landscapes.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === landscapes.length - 1 ? 0 : prevIndex + 1
      );
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
          handleNext();
        }, 3000); // Cambia cada 3 segundos
    
        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
      }, []);
  
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {/* Imagen actual del carrusel */}
          <img
            src={landscapes[currentIndex].image}
            alt={landscapes[currentIndex].name}
            className="w-full h-full object-cover"
          />
  
          {/* Texto superpuesto */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Link
              to={landscapes[currentIndex].link}
              className="text-white text-4xl font-bold"
            >
              {landscapes[currentIndex].name}
            </Link>
          </div>
  
          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white/30 text-white hover:bg-white/50 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white/30 text-white hover:bg-white/50 rounded-full"
          >
            ›
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
