import { Code, Palette, Zap, Sparkles, Mail } from 'lucide-react';
import React from 'react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Development', description: 'React, Angular, Three.js, Vite' },
    { icon: Palette, title: 'Design', description: 'UI/UX, Animation, 3D Graphics' },
    { icon: Zap, title: 'Performance', description: 'Optimization, Web Performance' },
  ];

  const techs = ['React', 'Angular', 'Vite', 'Three.js', 'Tailwind CSS', 'Node.js', 'WebGL'];

  // Replace these with actual entries from your resume (company, role, period, bullets)
  const workExperiences = [
    {
      company: 'Company A',
      role: 'Frontend Developer',
      period: 'Jan 2024 — Present',
      details: [
        'Built responsive React components and optimized performance.',
        'Integrated REST APIs and reduced load time.',
      ],
    },
    {
      company: 'Company B',
      role: 'Software Engineer Intern',
      period: 'Jun 2023 — Dec 2023',
      details: [
        'Developed features using React and Node.js.',
        'Wrote unit tests and documentation.',
      ],
    },
  ];

  // Achievements / Events you provided
  const achievements = [
    {
      title: 'SASHTRA’25 — IIT Madras, Chennai',
      date: '05 January 2025',
      description: 'Participated in the event SASHTRA’25 conducted by IIT Madras.',
    },
    {
      title: 'NIRAL THIRUVIZHA — Anna University, Guindy',
      date: '28 June 2024',
      description: 'Participated in the event NIRAL THIRUVIZHA.',
    },
    {
      title: "INTEL GEN AI’24 — KPR Institute of Engineering and Technology",
      date: '04 October 2024',
      description: "Participated in the event INTEL GEN AI’24.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 animate-fade-in">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">About Me</span>
        </div>
        <h2 className="text-6xl md:text-7xl font-black text-white mb-2">About Me</h2>
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
            My expertise spans across modern web technologies and interactive
            experiences. I believe in pushing the boundaries of what's possible on the web.
          </p>

          {/* Work Experience */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Work Experience</h3>
            <div className="space-y-4">
              {workExperiences.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-sm text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm text-gray-300">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-sm text-gray-400 mt-2">
                * Replace the placeholder work entries above with real items from your resume.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></span>
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

          {/* Contact CTA */}
          <div className="mt-6">
            <a
              href="mailto:santhoshsandy9840l@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-sky-600 text-white font-medium shadow hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" />
              Send a message
            </a>
            <p className="text-xs text-gray-400 mt-2">Or copy: <span className="text-sm text-white">santhoshsandy9840l@gmail.com</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all transform hover:scale-105 duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
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

      {/* Achievements / Events */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white mb-4">Achievements & Events</h3>
        <div className="space-y-3">
          {achievements.map((a, i) => (
            <div key={i} className="p-4 rounded-lg border border-white/10 bg-white/2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg text-white font-semibold">{a.title}</h4>
                  <p className="text-sm text-gray-300">{a.description}</p>
                </div>
                <span className="text-sm text-gray-400">{a.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
