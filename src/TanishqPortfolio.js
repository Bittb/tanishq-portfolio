import React, { useState, useEffect, useRef } from 'react';

const TanishqPortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const LoadingScreen = () => (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900' 
        : 'bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50'
    }`}>
      <div className="text-center space-y-8">
        <div className={`text-3xl font-extralight tracking-[0.3em] ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          TANISHQ BHARDWAJ
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
          }`} style={{ animationDelay: '0ms' }}></div>
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
          }`} style={{ animationDelay: '200ms' }}></div>
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            isDarkMode ? 'bg-pink-400' : 'bg-pink-600'
          }`} style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );

 // Enhanced Animated Blob Background Component
  const AnimatedBlobBackground = () => {
    const blobs = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 300 + 150,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 8,
      morphSpeed: Math.random() * 20 + 10,
      opacity: Math.random() * 0.15 + 0.05,
      hue: Math.random() * 360
    }));

    return (
      <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {blobs.map((blob) => (
            <div
              key={blob.id}
              className="absolute transition-all duration-1000 ease-out"
              style={{
                left: `${blob.x}%`,
                top: `${blob.y}%`,
                width: `${blob.size}px`,
                height: `${blob.size}px`,
                transform: `translate(-50%, -50%) rotate(${blob.rotation}deg)`,
                animation: `
                  morphBlob${blob.id} ${blob.morphSpeed}s ease-in-out infinite,
                  floatBlob${blob.id} ${blob.duration}s ease-in-out infinite,
                  colorShift${blob.id} ${blob.duration * 1.5}s ease-in-out infinite
                `,
                animationDelay: `${blob.delay}s`,
                background: isDarkMode 
                  ? `radial-gradient(circle, hsla(${blob.hue}, 70%, 60%, ${blob.opacity}) 0%, hsla(${blob.hue + 60}, 60%, 50%, ${blob.opacity * 0.5}) 70%, transparent 100%)`
                  : `radial-gradient(circle, hsla(${blob.hue}, 60%, 50%, ${blob.opacity}) 0%, hsla(${blob.hue + 60}, 70%, 60%, ${blob.opacity * 0.7}) 70%, transparent 100%)`,
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                filter: 'blur(1px)',
              }}
            />
          ))}
          
          {/* Interactive mouse-following blob */}
          <div
            className="absolute pointer-events-none z-10 transition-all duration-300 ease-out"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              width: '200px',
              height: '200px',
              transform: 'translate(-50%, -50%)',
              background: isDarkMode 
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 70%)'
                : 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.04) 50%, transparent 70%)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'mouseBlob 3s ease-in-out infinite',
              filter: 'blur(2px)',
            }}
          />
        </div>
        
        <style jsx>{`
          ${blobs.map(blob => `
            @keyframes morphBlob${blob.id} {
              0%, 100% { 
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                transform: translate(-50%, -50%) rotate(${blob.rotation}deg) scale(1);
              }
              25% { 
                border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                transform: translate(-50%, -50%) rotate(${blob.rotation + 90}deg) scale(1.1);
              }
              50% { 
                border-radius: 50% 30% 60% 40% / 40% 50% 60% 30%;
                transform: translate(-50%, -50%) rotate(${blob.rotation + 180}deg) scale(0.95);
              }
              75% { 
                border-radius: 70% 50% 40% 30% / 30% 40% 50% 70%;
                transform: translate(-50%, -50%) rotate(${blob.rotation + 270}deg) scale(1.05);
              }
            }
            
            @keyframes floatBlob${blob.id} {
              0%, 100% { 
                transform: translate(-50%, -50%) translateY(0px) translateX(0px);
              }
              25% { 
                transform: translate(-50%, -50%) translateY(-${blob.size/3}px) translateX(${blob.size/4}px);
              }
              50% { 
                transform: translate(-50%, -50%) translateY(-${blob.size/2}px) translateX(-${blob.size/6}px);
              }
              75% { 
                transform: translate(-50%, -50%) translateY(-${blob.size/4}px) translateX(-${blob.size/3}px);
              }
            }
            
            @keyframes colorShift${blob.id} {
              0%, 100% { 
                filter: blur(1px) hue-rotate(0deg);
              }
              33% { 
                filter: blur(2px) hue-rotate(120deg);
              }
              66% { 
                filter: blur(1.5px) hue-rotate(240deg);
              }
            }
          `).join('')}
          
          @keyframes mouseBlob {
            0%, 100% { 
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
              transform: translate(-50%, -50%) scale(1);
            }
            33% { 
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
              transform: translate(-50%, -50%) scale(1.2);
            }
            66% { 
              border-radius: 50% 30% 60% 40% / 40% 50% 60% 30%;
              transform: translate(-50%, -50%) scale(0.8);
            }
          }
        `}</style>
      </>
    );
  };


  const NavigationDot = ({ section, label, isActive }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`group relative p-2 transition-all duration-300 ease-out ${
        isActive ? 'scale-110' : 'hover:scale-105'
      }`}
    >
      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
        isActive
          ? isDarkMode 
            ? 'bg-white scale-125 shadow-lg shadow-white/20' 
            : 'bg-gray-900 scale-125 shadow-lg shadow-gray-900/20'
          : isDarkMode
            ? 'bg-gray-500 hover:bg-gray-300 group-hover:scale-110'
            : 'bg-gray-400 hover:bg-gray-600 group-hover:scale-110'
      }`} />
      
      <span className={`absolute left-6 top-1/2 -translate-y-1/2 text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap px-3 py-1.5 rounded-lg backdrop-blur-xl ${
        isDarkMode 
          ? 'text-white bg-gray-800/90 border border-gray-700/50' 
          : 'text-gray-900 bg-white/90 border border-gray-200/50 shadow-lg'
      }`}>
        {label}
      </span>
    </button>
  );

  const projects = [
    {
      title: "AI Video Summarizer",
      description: "Intelligent tool that transforms YouTube and local videos into comprehensive, downloadable summaries using advanced natural language processing.",
      tech: ["Python", "NLP", "Machine Learning", "FastAPI"],
      github: "https://github.com/Bittb/Ai-Powered-Video-Summarizer-and-Text-Generator",
      gradient: "from-violet-500/20 to-purple-500/20",
      hoverGradient: "from-violet-500/30 to-purple-500/30"
    },
    {
      title: "Expense Analytics Dashboard",
      description: "Full-stack web application featuring real-time expense tracking, intelligent categorization, and interactive data visualizations.",
      tech: ["Flask", "JavaScript", "Chart.js", "SQLite"],
      github: "https://github.com/Bittb/Daily-Expense-Tracker",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30"
    },
    {
      title: "Network Security Guardian",
      description: "Advanced intrusion detection system leveraging machine learning algorithms to identify and neutralize malicious network activities.",
      tech: ["Python", "Scikit-learn", "Network Analysis", "TensorFlow"],
      github: "https://github.com/Bittb/Network-Intrusion-Detection-System",
      gradient: "from-emerald-500/20 to-teal-500/20",
      hoverGradient: "from-emerald-500/30 to-teal-500/30"
    },
    {
      title: "Sentiment Intelligence Engine",
      description: "Sophisticated sentiment analysis platform with CSV processing capabilities and comprehensive visualization dashboards.",
      tech: ["Python", "NLTK", "Pandas", "Plotly"],
      github: "https://github.com/Bittb/Sentiment-Analysis",
      gradient: "from-orange-500/20 to-red-500/20",
      hoverGradient: "from-orange-500/30 to-red-500/30"
    }
  ];

  const skills = [
    { 
      category: "Programming Languages", 
      items: ["Python", "JavaScript", "C++", "Java", "TypeScript"],
      icon: "⚡",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      category: "Web Development", 
      items: ["React", "Flask", "Node.js", "HTML5", "CSS3", "Tailwind"],
      icon: "🌐",
      color: "from-green-500 to-emerald-600"
    },
    { 
      category: "Data & AI/ML", 
      items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
      icon: "🤖",
      color: "from-purple-500 to-violet-600"
    },
    { 
      category: "Database Systems", 
      items: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
      icon: "🗃️",
      color: "from-orange-500 to-amber-600"
    },
    { 
      category: "Development Tools", 
      items: ["Git", "Docker", "VS Code", "Postman", "Linux"],
      icon: "🛠️",
      color: "from-gray-500 to-slate-600"
    },
    { 
      category: "Specializations", 
      items: ["Cybersecurity", "Digital Forensics", "Cloud Computing"],
      icon: "🔒",
      color: "from-red-500 to-pink-600"
    }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bgClass = isDarkMode 
    ? 'bg-slate-950' 
    : 'bg-gray-50';
  
  const textClass = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const mutedTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen ${bgClass} ${textClass} transition-all duration-500 relative overflow-x-hidden`}
      style={{ fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Enhanced Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200/10">
        <div className="flex items-center justify-between px-8 py-6">
          <div className={`text-xl font-semibold transition-all duration-300 hover:scale-105 cursor-pointer ${textClass}`}>
            TB
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl border transition-all duration-300 hover:scale-105 backdrop-blur-xl ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 text-gray-200' 
                  : 'bg-white/50 border-gray-200/50 hover:bg-gray-50/50 text-gray-800 shadow-sm'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isDarkMode ? '☀️' : '🌙'}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4">
        <NavigationDot section="home" label="Home" isActive={activeSection === 'home'} />
        <NavigationDot section="about" label="About" isActive={activeSection === 'about'} />
        <NavigationDot section="skills" label="Skills" isActive={activeSection === 'skills'} />
        <NavigationDot section="projects" label="Projects" isActive={activeSection === 'projects'} />
        <NavigationDot section="contact" label="Contact" isActive={activeSection === 'contact'} />
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-8 pt-24 relative z-10">
          <div className="text-center max-w-5xl">
            <div className="space-y-8 mb-12">
              <div className={`text-sm font-medium tracking-widest uppercase ${mutedTextClass}`}>
                Web Developer & AI Enthusiast
              </div>
              
              <h1 className={`text-6xl md:text-8xl font-light tracking-tight ${textClass}`}>
                <span className="block mb-2">Hello, I'm</span>
                <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Tanishq
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto ${secondaryTextClass}`}>
                I craft digital experiences through clean code, innovative AI solutions, 
                and robust cybersecurity practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setActiveSection('projects')}
                className={`group px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 backdrop-blur-md ${
                  isDarkMode 
                    ? 'border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white hover:bg-white/5' 
                    : 'border-gray-300 hover:border-gray-600 text-gray-700 hover:text-gray-900 hover:bg-gray-900/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>
              
              <button 
                onClick={() => setActiveSection('contact')}
                className={`px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/25 backdrop-blur-md`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen flex items-center justify-center px-8 pt-24 relative z-10">
          <div className="max-w-6xl w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className={`text-5xl md:text-6xl font-light mb-6 ${textClass}`}>
                    About Me
                  </h2>
                  <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full`}></div>
                </div>
                
                <div className={`space-y-6 text-lg leading-relaxed ${secondaryTextClass}`}>
                  <p>
                    I'm a passionate developer from Delhi, currently pursuing B.Tech in Information Technology 
                    at Jaypee University. My journey spans across web development, artificial intelligence, 
                    and cybersecurity domains.
                  </p>
                  <p>
                    With expertise in Python, JavaScript, and modern frameworks, I build scalable applications 
                    that solve real-world problems. I'm particularly fascinated by the intersection of AI/ML 
                    and practical software solutions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring the latest in cybersecurity, contributing to 
                    open-source projects, or experimenting with new technologies that push the boundaries of 
                    what's possible.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {['Problem Solver', 'Team Player', 'Continuous Learner'].map((trait, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md ${
                        isDarkMode 
                          ? 'bg-gray-800/50 text-gray-300 border border-gray-700/50' 
                          : 'bg-white/50 text-gray-700 border border-gray-200/50'
                      }`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className={`inline-block p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800/20 border-gray-700/50' 
                    : 'bg-white/30 border-gray-200/50'
                }`}>
                  <div className="text-8xl mb-6">👨‍💻</div>
                  <div className={`space-y-2 ${mutedTextClass}`}>
                    <p className="font-medium">B.Tech Information Technology</p>
                    <p>Jaypee University</p>
                    <p>Expected 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="min-h-screen flex items-center justify-center px-8 pt-24 relative z-10">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl font-light mb-6 ${textClass}`}>
                Skills & Expertise
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index} 
                  className={`group p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
                    isDarkMode 
                      ? 'bg-gray-800/20 border-gray-700/50 hover:bg-gray-800/30 hover:border-gray-600/50' 
                      : 'bg-white/30 border-gray-200/50 hover:bg-white/50 hover:border-gray-300/50'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-4 transition-transform duration-300 group-hover:scale-110">
                      {skillGroup.icon}
                    </span>
                    <h3 className={`text-xl font-semibold ${textClass}`}>
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className={`flex items-center text-sm transition-all duration-300 hover:translate-x-2 ${secondaryTextClass} hover:${textClass.replace('text-', 'hover:text-')}`}
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16 relative z-10">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl font-light mb-6 ${textClass}`}>
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden ${
                    isDarkMode 
                      ? 'bg-gray-800/20 border-gray-700/50 hover:bg-gray-800/30' 
                      : 'bg-white/30 border-gray-200/50 hover:bg-white/50'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-semibold mb-4 ${textClass}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`leading-relaxed mb-6 ${secondaryTextClass}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-md ${
                            isDarkMode 
                              ? 'bg-gray-700/50 text-gray-300 border border-gray-600/50' 
                              : 'bg-gray-100/50 text-gray-700 border border-gray-200/50'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-medium transition-all duration-300 hover:gap-3 ${textClass}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Project</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="min-h-screen flex items-center justify-center px-8 pt-24 relative z-10">
          <div className="max-w-4xl w-full text-center">
            <div className="mb-16">
              <h2 className={`text-5xl md:text-6xl font-light mb-6 ${textClass}`}>
                Let's Connect
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8"></div>
              <p className={`text-xl ${secondaryTextClass} max-w-2xl mx-auto`}>
                I'm always interested in discussing new opportunities, innovative projects, 
                or just having a conversation about technology.
              </p>
            </div>
            
            <div className="space-y-12">
              <a
                href="mailto:tanishqb41@gmail.com"
                className={`block text-3xl md:text-4xl font-light transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600`}
              >
                tanishqb41@gmail.com
              </a>
              
              <div className="flex justify-center space-x-12">
                {[
                  { name: 'GitHub', url: 'https://github.com/Bittb', icon: '🐙' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tanishq-bhardwaj-51b061250/', icon: '💼' },
                  { name: 'Resume', url: 'Tanishq_Bhardwaj_Resume.pdf', icon: '📄' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-md ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/20' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/20'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className={`fixed bottom-8 left-8 text-sm z-40 ${mutedTextClass}`}>
        <p>© 2025 Tanishq Bhardwaj. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default TanishqPortfolio;
