import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code, Palette, Smartphone, ChevronDown, Star, Eye, GitBranch } from 'lucide-react';

// Componente de Proyectos
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Club Campestre Boletos", 
      description: "Aplicación de venta de boletos para los eventos del Club Campestre Celaya (en desarrollo)",
      image: "/img/campestre.PNG",
      tech: ["PHP", "Laravel", "SQL"],
      demo: null,
      github: null
    },
    {
      id: 2,
      title: "ITSales Web",
      description: "ERP con módulos de inventario, ventas, RRHH, etc. comercializado para múltiples PYMES de la zona (en desarrollo)",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      tech: ["React", "node.js", "SQL", "Microservicios"],
      demo: null,
      github: null
    },
    {
      id: 3,
      title: "Creditazo", 
      description: "Sistema web enfocado en la gestión y administración de créditos",
      image: "/img/creditazo.png",
      tech: ["PHP", "Laravel", "SQL"],
      demo: "https://creditazo.itnetworks.online/login",
      github: null
    },
    {
      id: 4,
      title: "Service Orders",
      description: "Sistema web para la creación y gestión de órdenes de servicio para la empresa ITNS México", 
      image: "/img/serviceorders.png",
      tech: ["PHP", "Laravel", "SQL"],
      demo: "https://service.itnsmx.com/login",
      github: null
    },
    {
      id: 5,
      title: "AG Servicios Financieros",
      description: "Sistema web enfocado en la gestión y administración de créditos",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      tech: ["PHP", "Laravel", "SQL"],
      demo: null,
      github: null
    },
    {
      id: 6,
      title: "Credimujer",
      description: "Sistema web enfocado en la gestión y administración de créditos",
      image: "/img/credimujer.png",
      tech: ["PHP", "Laravel", "SQL"],
      demo: "https://credimujerultra.com/login",
      github: null
    },
    {
      id: 7,
      title: "Lucero Álvarez Wedding Planner",
      description: "Sistema web para la gestión y administración de eventos",
      image: "/img/luceroalvarez.jpg",
      tech: ["PHP", "Laravel", "SQL"],
      demo: null,
      github: null
    },
    {
      id: 8,
      title: "Creditfactor", 
      description: "Sistema web enfocado en la gestión y administración de créditos",
      image: "/img/creditfactor.png",
      tech: ["PHP", "Laravel", "SQL"],
      demo: "https://creditfactor.mx/login",
      github: null
    },
    {
      id: 9,
      title: "Stream Routes / Rumapp",
      description: "Aplicación Android orientada a la movilidad del transporte público en Guanajuato Capital", 
      image: "/img/rumapp.jpeg",
      tech: ["Kotlin", "Jetpack Compose", "Firebase"],
      demo: null,
      github: "https://github.com/CristianATZ/StreamRoutesApp"
    },
    {
      id: 10,
      title: "Numérix",
      description: "Red neuronal de Python para detectar digitos numéricos manuscritos",
      image: "/img/numerix.jpg",
      tech: ["Python"],
      demo: "https://www.youtube.com/watch?v=FjMt51x6rc4",
      github: null
    },
    {
      id: 11,
      title: "SEFI", 
      description: "Sistema web estudiantil de fichas de inscripción del ITSUR",
      image: "/img/sefi.png",
      tech: ["C#", ".NET", "SQL"],
      demo: "https://fichas.surguanajuato.tecnm.mx",
      github: null
    },
    {
      id: 12,
      title: "Coin Catcher!",
      description: "Videojuego desarrollador en .NET para plataforma de escritorio", 
      image: "/img/coincatcher.png",
      tech: ["C#", ".NET"],
      demo: "https://www.youtube.com/watch?v=Jk-rC-DbxNo",
      github: null
    },
  ];

  return (
    <section id="proyectos" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mis Proyectos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-48 xl:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  )}
                  {!project.demo && !project.github && (
                    <div className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
                      <Eye className="w-4 h-4" />
                      Proyecto Privado
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;