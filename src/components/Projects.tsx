import { ExternalLink, Github, Sparkles, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sentiment-Analysis-of-Incoming-Calls-in-Helpdesk',
      description:
        'Sentiment analysis system using BERT-based multilingual model to classify incoming helpdesk call transcripts into positive, neutral, or negative categories.',
      tech: ['Python', 'HTML', 'CSS'],
      github: 'https://github.com/Sandysharpo/Sentiment-Analysis-of-Incoming-Calls-in-Helpdesk',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Typing Error Detection System',
      description:
        'A web app that detects typing mistakes by comparing typed text with a reference paragraph. Highlights spelling errors, missing words, and incorrect word order.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Sandysharpo/TYPE-TEST-GAME',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Velammal Engineering College Website',
      description:
        'Contributed to a clean and accessible landing page with animations, department links, and modern UI components.',
      tech: ['React', 'Tailwind', 'GSAP'],
      link: 'https://velammal.edu.in/',
      github: 'https://github.com/Web-Developer-VEC/VEC_Web_Engine',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'NeuroTwin',
      description:
        'Adaptive AI tutor using multi-agent systems to adjust explanations based on cognitive profiling.',
      tech: ['React', 'Tailwind', 'Python'],
      github: 'https://github.com/Aaron-Ebinezer/NeuroTwin',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Sales Chatbot',
      description:
        'AI-powered chatbot designed to simulate human-like conversations and guide users throughout the sales funnel.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Python'],
      github: 'https://github.com/Ben29PJ/sales_chatbot',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Gym Management System',
      description:
        'A responsive gym management frontend built using clean HTML, CSS and JS. Includes homepage, plans, trainers, and more.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Sandysharpo/GYM-management-system',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Drawing App',
      description:
        'Interactive drawing web app with brush control, clear canvas, and smooth drawing using mouse/touch.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Sandysharpo/Drawing-app',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Bill Generator',
      description:
        'Simple invoice generator that creates dynamic bills for small shops and freelancers.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Sandysharpo/Bill-generator',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto animate-fade-in">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">FEATURED WORK</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Header gradient */}
              <div
                className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
              >
                <span className="text-6xl font-black text-white/30 group-hover:text-white/50 transition-all">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 hover:border-cyan-400 transition text-sm"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
