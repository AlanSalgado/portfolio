import React, { useState, useEffect } from 'react';
import { Code, Palette, GitBranch, Database, Monitor, Layout } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Laravel', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'React', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'Python', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 85, icon: <Palette className="w-5 h-5" /> },
    { name: 'MySQL/SQL', level: 90, icon: <Database className="w-5 h-5" /> },
    { name: 'DevOps', level: 85, icon: <Monitor className="w-5 h-5" /> },
    { name: 'Tailwind CSS', level: 90, icon: <Layout className="w-5 h-5" /> }
  ];

  return (
    <section id='skills' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones excepcionales
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">
                    {skill.icon}
                  </div>
                  <span className="text-gray-900 font-medium text-lg">
                    {skill.name}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 flex-1 max-w-xs">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-4">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-gray-900 font-semibold text-sm w-12 text-right">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;