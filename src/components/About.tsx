// About.jsx
import React from 'react';
import { Code, Palette, Zap, Sparkles, Briefcase, Trophy } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Development', description: 'React, Angular, Three.js, Vite' },
    { icon: Palette, title: 'Design', description: 'UI/UX, Animation, 3D Graphics' },
    { icon: Zap, title: 'Performance', description: 'Optimization, Web Performance' },
  ];

  const techs = ['React', 'Angular', 'Vite', 'Three.js', 'Tailwind CSS', 'Node.js', 'WebGL', 'Python'];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-10 md:py-12 animate-fade-in">
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs md:text-sm text-cyan-400 font-medium">About Me</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-1">About Me</h2>
        <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-3">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I'm a passionate creative developer who loves building immersive web experiences. With a focus on combining cutting-edge technology with stunning design, I create digital products that leave a lasting impression.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            My expertise spans across modern web technologies and interactive experiences. I believe in pushing the boundaries of what's possible on the web.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/6 via-blue-500/6 to-purple-500/6 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/10">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all transform hover:scale-105 duration-300">
              <div className="relative z-10">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit mb-3">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Work + Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all transform hover:scale-[1.03] duration-300">
          <div className="relative z-10">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-fit mb-3">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Work Experience</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Frontend Developer Intern – Atlanwa Pvt Ltd</li>
              <li>• 3D Modeling Intern – San Industries Pvt Ltd</li>
            </ul>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all transform hover:scale-[1.03] duration-300">
          <div className="relative z-10">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-fit mb-3">
              <Trophy className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Co-Curricular Activities</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Participated in “SASHTRA’25” – IIT Madras (05 Jan 2025)</li>
              <li>• Participated in “NIRAL THIRUVIZHA” – Anna University (28 Jun 2024)</li>
              <li>• Participated in “INTEL GEN AI’24” – KPR (04 Oct 2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
