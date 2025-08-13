"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Menu, X, ArrowUp, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import AboutMe from "../components/about-me"
import ScrollProgress from "../components/scroll-progress"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Removed unused state - resume download works directly
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Enhanced scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowScrollTop(scrollPosition > 300)

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "experience", "skills", "coming-soon", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const downloadResume = () => {
    // Create a link element to download the PDF
    const link = document.createElement("a")
    link.href = "/resume/Govind_Singh_Resume.pdf"
    link.download = "Govind_Singh_Resume.pdf"
    link.target = "_blank"
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const projects = [
    // 🏆 TIER 1: FEATURED SHOWCASE PROJECT
    {
      id: 1,
      name: "Avaxan Pharmacy",
      description: "A comprehensive pharmacy management system built from scratch during my internship at Avaxan Pharmacy startup. Features include inventory management, prescription tracking, and customer portal.",
      image: "/projects/avaxan-pharmacy.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://avaxan-pharma.vercel.app/",
      github: undefined,
      isPrivate: true,
      tier: "featured",
      highlight: "Solo Project • Startup Internship • Full-Stack"
    },
    // 🚀 TIER 2: CONCEPT LEARNING PROJECTS
    {
      id: 2,
      name: "Pokenest",
      description: "A Pokemon database and information hub built to learn API integration and modern web development concepts.",
      image: "/projects/pokenest.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "PokeAPI"],
      live: "https://v0-pokedex-website.vercel.app/",
      github: "https://github.com/GovindSingh-95/PokeNest",
      tier: "concept"
    },
    {
      id: 3,
      name: "Game Hub",
      description: "A collection of classic games including Tic-Tac-Toe, built to master game development concepts and state management.",
      image: "/projects/game-hub.png",
      technologies: ["React", "JavaScript", "CSS3", "Game Logic"],
      live: "https://v0-tic-tac-toe-game-rose.vercel.app/",
      github: undefined,
      isPrivate: true,
      tier: "concept"
    },
    {
      id: 4,
      name: "RSA Encryption",
      description: "A frontend redesign project focused on implementing and visualizing RSA encryption algorithms and cryptographic concepts.",
      image: "/projects/rsa-digital-signature.png?v=1",
      technologies: ["React", "JavaScript", "Cryptography", "UI/UX"],
      live: "https://v0-frontend-redesign-six.vercel.app/",
      github: "https://github.com/GovindSingh-95/RSA-Encryption",
      tier: "concept"
    },
    {
      id: 5,
      name: "Diffie-Hellman",
      description: "An interactive demonstration of the Diffie-Hellman key exchange protocol, built to understand cryptographic key exchange concepts.",
      image: "/projects/diffie-hellman-demo.png?v=1",
      technologies: ["React", "JavaScript", "Cryptography", "Interactive Learning"],
      live: "https://v0-diffie-hellman-design.vercel.app/",
      github: "https://github.com/GovindSingh-95/Diffie-Hellman",
      tier: "concept"
    },
    // ✨ TIER 3: COMPLETED PROJECTS
    {
      id: 6,
      name: "Zephry",
      description: "A utility hub application designed to provide various helpful tools and services in one centralized platform.",
      image: "/projects/zephry-dev-tools.png?v=1",
      technologies: ["React", "Node.js", "Utility APIs", "Modern UI"],
      live: "https://utility-zen-hub.lovable.app/",
      github: "https://github.com/GovindSingh-95/Zephry",
      tier: "completed"
    },
    {
      id: 7,
      name: "FocusNest",
      description: "A productivity and focus management application to help users stay organized and maintain concentration.",
      image: "/projects/focusnet.png?v=1",
      technologies: ["React", "Productivity Tools", "Time Management", "UI/UX"],
      live: "https://spark-your-day-hub.lovable.app",
      github: "https://github.com/GovindSingh-95/FocusNest",
      tier: "completed"
    },
    {
      id: 8,
      name: "WeatherMood",
      description: "A weather application that combines meteorological data with mood-enhancing features and inspirational quotes.",
      image: "/projects/weathermood.png",
      technologies: ["React", "Weather APIs", "Mood Enhancement", "Responsive Design"],
      live: "https://sunny-side-up-quotes.lovable.app",
      github: "https://github.com/GovindSingh-95/WeatherMood",
      tier: "completed"
    },
    // 🔧 TIER 4: COMING SOON PROJECTS
    {
      id: 9,
      name: "Fetchly",
      description: "A modern grocery delivery website using the MERN stack, currently in development during my internship.",
      image: "/projects/fetchly.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
      live: undefined,
      github: "https://github.com/GovindSingh-95/Fetchly",
      tier: "coming-soon",
      status: "Developing"
    },
    {
      id: 10,
      name: "RideRyde",
      description: "A ride-sharing platform concept designed for modern urban transportation needs.",
      image: "/projects/ride-ryde.png",
      technologies: ["React", "Node.js", "Real-time", "Maps API", "Payment Integration"],
      live: undefined,
      github: "https://github.com/GovindSingh-95/RideRyde",
      tier: "coming-soon",
      status: "In Planning"
    },
    {
      id: 11,
      name: "TradeKart",
      description: "An e-commerce platform concept focusing on seamless trading and marketplace functionality.",
      image: "/projects/trade-kart.png",
      technologies: ["React", "Node.js", "E-commerce", "Payment Gateway", "Inventory Management"],
      live: undefined,
      github: "https://github.com/GovindSingh-95/TradeKart",
      tier: "coming-soon",
      status: "In Planning"
    }
  ];

  const skills = {
    languages: ["Java", "JavaScript", "TypeScript", "Python", "HTML/CSS", "Bash"],
    frameworks: ["React", "Next.js", "Tailwind", "Node.js", "Express", "MongoDB"],
    tools: ["Git", "Web Crypto API", "VS Code"],
    focus: ["Full-stack Dev", "Cryptography", "AI Tools", "DSA (400+ LeetCode)"],
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "coming-soon", label: "Coming Soon" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Enhanced Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Govind Singh
              </div>

              {/* Enhanced Desktop Navigation */}
              <div className="hidden lg:flex space-x-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                      activeSection === item.id
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDark(!isDark)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        {/* Enhanced Animated Hero Section */}
        <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-spin-slow"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-500"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-float animation-delay-1500"></div>
            <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-300 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-purple-300 rounded-full animate-float animation-delay-2500"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center py-20">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
                  Govind Singh
                </h1>
                <div className="relative inline-block">
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-typewriter">
                    "Turning code into impact – one full-stack project at a time."
                  </p>
                  <div className="absolute -right-1 top-0 w-0.5 h-full bg-blue-600 animate-blink"></div>
                </div>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 animate-slide-up animation-delay-200">
                  Full-Stack Developer | Cryptography Enthusiast | Software Development Intern @ Brisons International
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-400 max-w-3xl mx-auto mb-12">
                <div className="relative">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up animation-delay-600">
                    I'm a full-stack developer passionate about building production-ready software with performance,
                    cryptographic security, and real-world impact. I've led development of pharmacy e-commerce
                    platforms, cryptographic demos, and AI-integrated systems. I'm currently a Software Development
                    Intern at Brisons International, building Fetchly - a modern grocery delivery platform.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer"></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 animate-fade-in animation-delay-800">
                  B.Tech Student at BMS College of Engineering (Graduating 2027)
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-1000 flex flex-wrap justify-center gap-4 mb-12">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-subtle hover:animate-none relative overflow-hidden group"
                  onClick={downloadResume}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="mr-2 h-4 w-4 relative z-10 animate-pulse" />
                  <span className="relative z-10">Download Resume</span>
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 border-2 border-blue-600 text-blue-600 hover:text-blue-700 transform hover:scale-105 transition-all duration-300 animate-glow hover:animate-none relative overflow-hidden group"
                  onClick={() => scrollToSection("contact")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Contact Me</span>
                </Button>
              </div>

              <div className="animate-fade-in-up animation-delay-1200 flex justify-center space-x-6">
                <a
                  href="https://github.com/GovindSingh-95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-float"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/govindsingh95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-float animation-delay-300"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:govind.s9551@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-float animation-delay-600"
                  aria-label="Send email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <AboutMe />

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">A showcase of my recent work and contributions</p>
            </div>

            {/* 🏆 TIER 1: FEATURED SHOWCASE PROJECT */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-semibold mb-3">
                  🏆 FEATURED PROJECT
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Startup Internship Achievement</h3>
                <p className="text-gray-600 dark:text-gray-300">My solo project built from scratch during my internship</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {projects.filter(p => p.tier === "featured").map((project, index) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-2 border-blue-200 dark:border-blue-700 overflow-hidden shadow-lg"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.name} project screenshot`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          // Fallback to a styled placeholder if image fails to load
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                      {/* Fallback Placeholder */}
                      <div 
                        className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Code className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{project.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">Screenshot Coming Soon</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Highlight Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-3 py-1">
                          {project.highlight}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-2xl">
                        {project.name}
                        <div className="flex space-x-2">
                          {!project.isPrivate && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                              aria-label={`View ${project.name} on GitHub`}
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                              aria-label={`View ${project.name} live demo`}
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {project.isPrivate && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                          * Private repository
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 🚀 TIER 2: CONCEPT LEARNING PROJECTS */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-3">
                  🚀 CONCEPT PROJECTS
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Learning & Skill Development</h3>
                <p className="text-gray-600 dark:text-gray-300">Projects built to master specific concepts and technologies</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.filter(p => p.tier === "concept").map((project, index) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.name} project screenshot`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          // Fallback to a styled placeholder if image fails to load
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                      {/* Fallback Placeholder */}
                      <div 
                        className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Code className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{project.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">Screenshot Coming Soon</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.name}
                        <div className="flex space-x-2">
                          {!project.isPrivate && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                              aria-label={`View ${project.name} on GitHub`}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                              aria-label={`View ${project.name} live demo`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                  <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {project.isPrivate && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                          * Private repository
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ✨ TIER 3: COMPLETED PROJECTS */}
        <section id="completed-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full text-sm font-semibold mb-3">
                ✨ COMPLETED PROJECTS
              </div>
              <h2 className="text-4xl font-bold mb-4">Additional Portfolio Work</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">More projects showcasing my diverse skills and interests</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.tier === "completed").map((project, index) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} project screenshot`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        // Fallback to a styled placeholder if image fails to load
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Placeholder */}
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{project.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Screenshot Coming Soon</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.name}
                      <div className="flex space-x-2">
                        {!project.isPrivate && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                            aria-label={`View ${project.name} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                            aria-label={`View ${project.name} live demo`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.isPrivate && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                        * Private repository
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Experience</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey and contributions</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Current Internship */}
              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Software Development Intern</CardTitle>
                      <CardDescription className="text-lg text-green-600 dark:text-green-400">
                        Brisons International • August 2025 – Present
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600 bg-green-50 dark:bg-green-900/20"
                    >
                      Current
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Currently building Fetchly, a modern grocery delivery website using the MERN stack
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developing responsive UI for real-time product browsing, cart, and checkout flow
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Architecting backend systems for payment integration, order tracking, and scalable inventory
                      management
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Prioritizing mobile-first design for seamless PWA/WebView compatibility in future app deployment
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Previous Internship */}
              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Software Engineering Intern</CardTitle>
                  <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                    Avaxan Pharma • June 2025 – August 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Solo-developed pharmacy e-commerce website using MERN stack
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Built AI-based medicine scanner & AI chatbot for customer assistance
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Implemented secure authentication, admin dashboard, and order tracking system
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Technologies I work with and areas of expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">Focus Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.focus.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



        {/* 🔧 TIER 4: COMING SOON PROJECTS */}
        <section id="coming-soon" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-semibold mb-3">
                🔧 COMING SOON PROJECTS
              </div>
              <h2 className="text-4xl font-bold mb-4">Future Endeavors</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Projects currently in development and planning phase</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.tier === "coming-soon").map((project, index) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} project screenshot`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        // Fallback to a styled placeholder if image fails to load
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Placeholder */}
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{project.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Screenshot Coming Soon</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${
                        project.status === "Developing" 
                          ? "bg-green-500 text-white" 
                          : "bg-blue-500 text-white"
                      } border-0 px-3 py-1`}>
                        {project.status === "Developing" ? "🚀 Developing" : "🔧 In Planning"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.name}
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                            aria-label={`View ${project.name} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {project.status === "Developing" ? "Currently in development" : "Planning phase"}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Leadership & Activities</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Community involvement and leadership roles</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">Senior Coordinator</CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-400">{"<CODE/IO>"} Club</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leading technical initiatives and organizing coding events for the college programming community.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">Member</CardTitle>
                  <CardDescription className="text-blue-400">ACM Student Chapter</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Active participant in ACM activities, contributing to technical discussions and knowledge sharing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">Organising Committee – Tech Dept</CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-400">TeamCodelocked_BMSCE</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Organizing technical events and managing the tech department initiatives for TeamCodelocked at BMSCE.
                  </p>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Oct 2024 - Present
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Let's discuss opportunities and collaborations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {/* TODO: Implement form submission logic */}
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    ⚠️ Contact form is currently in development. Please use the email links below for now.
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-white dark:bg-gray-900 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      required
                      aria-describedby="name-help"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white dark:bg-gray-900 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      required
                      aria-describedby="email-help"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      className="bg-white dark:bg-gray-900 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      required
                      aria-describedby="message-help"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <a
                      href="mailto:govind.s9551@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      govind.s9551@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200">
                    <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <a
                      href="https://github.com/GovindSingh-95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      github.com/GovindSingh-95
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <a
                      href="https://linkedin.com/in/govindsingh95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      linkedin.com/in/govindsingh95
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
                  <h4 className="text-lg font-semibold mb-2">Currently Available</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm open to internship opportunities, freelance projects, and collaborations. Feel free to reach out
                    if you'd like to work together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Govind Singh
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Full-Stack Developer passionate about building intelligent, secure, and scalable digital experiences.
                </p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {navigationItems.slice(0, 5).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/GovindSingh-95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/govindsingh95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:govind.s9551@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2024 Govind Singh. Built with Next.js and Tailwind CSS. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            size="icon"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
