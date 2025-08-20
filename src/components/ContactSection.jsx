import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            ¡Trabajemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Juntos!</span>
          </h2>
          <p className="text-xl text-gray-400">¿Tienes un proyecto en mente? Hablemos</p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Información de Contacto</h3>
          
          <div className="space-y-6">
            <a 
              href="mailto:alanslgdo2902@gmail.com"
              className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <Mail className="w-6 h-6 text-cyan-400 mr-4" />
              <span>Alan Salgado Salas</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/alan-salgado-salas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <Linkedin className="w-6 h-6 text-cyan-400 mr-4" />
              <span>Alan Salgado Salas</span>
            </a>
            
            <a 
              href="https://github.com/AlanSalgado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <Github className="w-6 h-6 text-cyan-400 mr-4" />
              <span>AlanSalgado</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
