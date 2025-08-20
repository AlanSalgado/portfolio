import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code, Palette, Smartphone, ChevronDown, Star, Eye, GitBranch } from 'lucide-react';

// Componente Hero con animaciones
const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Partículas animadas de fondo */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              {/* <Code className="w-20 h-20 text-white" /> */}
              <img 
                src="./img/zy.jpg" 
                alt="Foto" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"></span>Alan Salgado Salas
        </h1>
        
        <div className="h-16 flex items-center justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-cyan-300 font-light transition-all duration-500">
            Desarrollador Fullstack
          </h2>
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
          Te voy a contar un chiste de recursión, pero antes te voy a contar un chiste de recursión...
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full px-4">
            <a href="#proyectos" className="w-full sm:w-auto flex justify-center">
                <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Ver Proyectos
                </button>
            </a>

            <a href="mailto:alanslgdo2902@gmail.com" className="w-full sm:w-auto flex justify-center">
                <button className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                    Contactar
                </button>
            </a>
        </div>
        
        <ChevronDown className="w-8 h-8 text-white mx-auto animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;