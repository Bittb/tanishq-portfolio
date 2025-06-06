import React, { useState, useEffect, useRef } from 'react';

const TanishqPortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-gray-700 text-2xl mb-4 font-light tracking-wide">
          Materializing forms...
        </div>
        <div className="w-32 h-px bg-gray-700 mx-auto animate-pulse"></div>
      </div>
    </div>
  );

  const NavigationDot = ({ section, label, isActive }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`group relative p-2 transition-all duration-300 ${
        isActive ? 'scale-110' : 'hover:scale-105'
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive
            ? isDarkMode
              ? 'bg-white shadow-lg shadow-white/50'
              : 'bg-gray-800 shadow-lg shadow-gray-800/50'
            : isDarkMode
              ? 'bg-gray-600 hover:bg-gray-400'
              : 'bg-gray-400 hover:bg-gray-600'
        }`}
      />
      <span className={`absolute left-6 top-1/2 -translate-y-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {label}
      </span>
    </button>
  );

  const projects = [
    {
      title: "YouTube Video Summarizer",
      description: "AI-powered tool that summarizes YouTube or local videos into downloadable notes using advanced NLP techniques.",
      tech: ["Python", "NLP", "AI/ML"],
      github: "https://github.com/Bittb/Ai-Powered-Video-Summarizer-and-Text-Generator"
    },
    {
      title: "Daily Expense Tracker",
      description: "Flask-based web application to track and visualize daily expenses and income with intuitive interface.",
      tech: ["Flask", "Python", "JavaScript"],
      github: "https://github.com/Bittb/Daily-Expense-Tracker"
    },
    {
      title: "Network Intrusion Detection",
      description: "Advanced system that detects malicious network packets using machine learning algorithms.",
      tech: ["Machine Learning", "Python", "Cybersecurity"],
      github: "https://github.com/Bittb/Network-Intrusion-Detection-System"
    },
    {
      title: "Sentiment Analysis Web App",
      description: "Analyzes sentiment from CSV files and individual inputs with detailed visualized breakdowns.",
      tech: ["NLP", "Data Visualization", "Python"],
      github: "https://github.com/Bittb/Sentiment-Analysis"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "C++", "C", "Java"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "Flask", "React"] },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "VS Code"] },
    { category: "Concepts", items: ["AI/ML", "Cybersecurity", "Digital Forensics"] }
  ];

  const bgClass = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
    : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50';
 
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const hoverBorderClass = isDarkMode ? 'hover:border-gray-500' : 'hover:border-gray-400';

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      ref={containerRef}
      className={`min-h-screen ${bgClass} ${textClass} font-light transition-all duration-500 relative overflow-hidden`}
    >
      {/* Dynamic Background Blobs */}
      {!isDarkMode && (
        <>
          {/* Blob 1 - Top Left */}
          <div
            className="absolute w-96 h-96 rounded-full opacity-60 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              left: '-10%',
              top: '-10%'
            }}
          />
         
          {/* Blob 2 - Top Right */}
          <div
            className="absolute w-80 h-80 rounded-full opacity-50 blur-3xl transition-all duration-700 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.025}px)`,
              right: '-5%',
              top: '5%'
            }}
          />
         
          {/* Blob 3 - Bottom Left */}
          <div
            className="absolute w-72 h-72 rounded-full opacity-40 blur-3xl transition-all duration-900 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * -0.02}px)`,
              left: '10%',
              bottom: '10%'
            }}
          />
         
          {/* Blob 4 - Center Right */}
          <div
            className="absolute w-64 h-64 rounded-full opacity-35 blur-3xl transition-all duration-1200 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
              transform: `translate(${mousePosition.x * -0.025}px, ${mousePosition.y * 0.015}px)`,
              right: '15%',
              top: '40%'
            }}
          />
         
          {/* Blob 5 - Bottom Center */}
          <div
            className="absolute w-88 h-88 rounded-full opacity-30 blur-3xl transition-all duration-800 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.03}px)`,
              left: '50%',
              bottom: '-5%'
            }}
          />
        </>
      )}

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-8 right-8 z-50 p-3 rounded-full border transition-all duration-300 backdrop-blur-sm ${
          isDarkMode
            ? 'bg-gray-800/80 border-gray-600 hover:bg-gray-700/80 text-white'
            : 'bg-white/80 border-gray-300 hover:bg-gray-50/80 text-gray-900'
        }`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      {/* Menu Toggle - Top Right */}
      <button className={`fixed top-8 right-20 z-50 p-3 transition-colors duration-300 ${
        isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
      }`}>
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-1 h-1 rounded-full ${
              isDarkMode ? 'bg-white' : 'bg-gray-800'
            }`} />
          ))}
        </div>
      </button>

      {/* Language Toggle - Top Right */}
      <div className={`fixed top-8 right-32 z-50 text-sm font-medium ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        EN
      </div>

      {/* Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4">
        <NavigationDot section="home" label="Home" isActive={activeSection === 'home'} />
        <NavigationDot section="about" label="About" isActive={activeSection === 'about'} />
        <NavigationDot section="skills" label="Skills" isActive={activeSection === 'skills'} />
        <NavigationDot section="projects" label="Projects" isActive={activeSection === 'projects'} />
        <NavigationDot section="contact" label="Contact" isActive={activeSection === 'contact'} />
      </nav>

      {/* Logo - Top Left */}
      <div className="fixed top-8 left-8 z-50">
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          TB
        </div>
      </div>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
          <div className="text-center max-w-4xl">
            <div className="mb-12">
              <h1 className={`text-5xl md:text-7xl font-light tracking-wide mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                HEY, I'M <span className="font-bold">TANISHQ BHARDWAJ</span>
              </h1>
              <h2 className={`text-3xl md:text-4xl font-light mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                BUT YOU CAN CALL ME <span className="font-semibold">TANISHQ</span>
              </h2>
              <div className={`text-lg md:text-xl space-y-2 font-light ${secondaryTextClass}`}>
                <p>I am a web developer, AI/ML enthusiast</p>
                <p>& cybersecurity explorer</p>
              </div>
            </div>
           
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setActiveSection('projects')}
                className={`group flex items-center gap-2 px-6 py-3 border rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? 'border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white'
                    : 'border-gray-400 hover:border-gray-600 text-gray-600 hover:text-gray-800'
                }`}
              >
                <span>→ see my projects</span>
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`group flex items-center gap-2 px-6 py-3 border rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? 'border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white'
                    : 'border-gray-400 hover:border-gray-600 text-gray-600 hover:text-gray-800'
                }`}
              >
                <span>→ learn more</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-thin mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 leading-relaxed ${secondaryTextClass}`}>
                <p className="text-lg">
                  I'm a passionate Web Developer from Delhi with a love for building clean,
                  user-focused web experiences.
                </p>
                <p>
                  I work primarily with Python, JavaScript, and modern web technologies—and I explore
                  AI/ML just for the thrill of solving real-world problems creatively.
                </p>
                <p>
                  Whether it's crafting intuitive UIs, developing intelligent systems, or diving into
                  cybersecurity challenges, I'm always looking to learn, create, and collaborate.
                </p>
              </div>
              <div className="text-center">
                <div className={`w-48 h-48 mx-auto border rounded-full flex items-center justify-center backdrop-blur-sm ${
                  isDarkMode ? 'border-gray-600 bg-gray-800/20' : 'border-gray-300 bg-white/20'
                }`}>
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className={`mt-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <p>B.Tech in Information Technology</p>
                  <p>Jaypee University (2026)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl md:text-6xl font-thin mb-12 text-center">Skills & Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className={`border p-6 rounded-lg backdrop-blur-sm transition-colors duration-300 ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/20 hover:border-gray-500'
                    : 'border-gray-200 bg-white/20 hover:border-gray-400'
                }`}>
                  <h3 className={`text-xl font-light mb-4 ${textClass}`}>{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className={`text-sm transition-colors duration-200 ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}>
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
        <section className="min-h-screen flex items-center justify-center px-8 py-16 relative z-10">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl md:text-6xl font-thin mb-12 text-center">Selected Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className={`group border p-8 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/20 hover:border-gray-500'
                    : 'border-gray-200 bg-white/20 hover:border-gray-400'
                }`}>
                  <div className="mb-6">
                    <h3 className={`text-2xl font-light mb-4 group-hover:opacity-75 transition-opacity duration-300 ${textClass}`}>
                      {project.title}
                    </h3>
                    <p className={`leading-relaxed mb-6 ${secondaryTextClass}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className={`text-xs border px-3 py-1 rounded-full ${
                          isDarkMode
                            ? 'border-gray-600 text-gray-300 bg-gray-700/30'
                            : 'border-gray-300 text-gray-600 bg-white/30'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-sm transition-colors duration-300 border-b border-transparent hover:opacity-75 ${textClass}`}
                  >
                    View Code →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-thin mb-12">Let's Work Together</h2>
            <div className="space-y-8">
              <div className="space-y-4">
                <a
                  href="mailto:tanishqb41@gmail.com"
                  className={`block text-2xl hover:opacity-75 transition-opacity duration-300 ${textClass}`}
                >
                  tanishqb41@gmail.com
                </a>
                <div className={`w-16 h-px mx-auto ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></div>
              </div>
              <div className="flex justify-center space-x-12">
                <a
                  href="https://github.com/Bittb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/tanishq-bhardwaj-51b061250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href="Tanishq_Bhardwaj_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className={`fixed bottom-8 left-8 text-xs z-40 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        <p>Created and developed by Tanishq © 2025</p>
      </footer>
    </div>
  );
};

export default TanishqPortfolio;

