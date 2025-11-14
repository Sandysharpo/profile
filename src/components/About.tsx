import React from 'react';
import { Code, Palette, Zap, Sparkles, Briefcase, Trophy } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Development', description: 'React, Angular, Three.js, Vite' },
    { icon: Palette, title: 'Design', description: 'UI/UX, Animation, 3D Graphics' },
    { icon: Zap, title: 'Performance', description: 'Optimization, Web Performance' },
  ];

  const techs = ['React', 'Angular', 'Vite', 'Three.js', 'Tailwind CSS', 'Node.js', 'WebGL',"python"];

  return (
    <section className="w-full max-w-5xl mx-auto px-8 py-12 animate-fade-in overflow-visible">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">About Me</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-2">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate creative developer who loves building immersive web experiences.
            With a focus on combining cutting-edge technology with stunning design, I create
            digital products that leave a lasting impression.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise spans across modern web technologies and interactive experiences.
            I believe in pushing the boundaries of what's possible on the web.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all transform hover:scale-105 duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300" />
              <div className="relative z-10">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* NEW SECTION: Work Experience + Co-Curricular Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        
        {/* Work Experience */}
        <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all transform hover:scale-[1.03] duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all" />
          <div className="relative z-10">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-fit mb-4">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Work Experience</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Frontend Developer Intern – Atlanwa Pvt Ltd</li>
              <li>• 3D Modeling Intern – San Industries Pvt Ltd</li>
            </ul>
          </div>
        </div>

        {/* Co-Curricular Activities (UPDATED) */}
        <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all transform hover:scale-[1.03] duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all" />
          <div className="relative z-10">
            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-fit mb-4">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Co-Curricular Activities</h3>

            {/* ✅ Updated List */}
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Participated in the event “SASHTRA’25”, conducted by IIT Madras, Chennai on 05th January 2025.</li>
              <li>• Participated in the event “NIRAL THIRUVIZHA”, conducted by Anna University, Guindy on 28th June 2024.</li>
              <li>• Participated in the event “INTEL GEN AI’24”, conducted by KPR Institute Of Engineering and Technology, Coimbatore on 4th October 2024.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
