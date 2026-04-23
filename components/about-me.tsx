"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, GraduationCap, Code, Brain, Shield, Briefcase, Trophy, ChevronRight, Users } from "lucide-react"

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("overview")

  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "C"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Redux Toolkit", "Socket.io"],
    ui: ["Tailwind CSS", "shadcn/ui"],
    databases: ["MongoDB", "PostgreSQL", "Supabase", "Firebase (Firestore)"],
    tools: ["Docker", "Git", "GitHub Actions (CI/CD)", "Postman", "Linux"],
    concepts: ["REST APIs", "PWA", "Web Crypto API", "AI/LLM Integration", "Blockchain", "Razorpay Integration"],
  }

  const projects = [
    "AI Pokédex with battle simulator",
    "E-commerce pharmacy platform",
    "Digital Signature verification system",
    "Game Hub with AI-enhanced games",
    "Diffie-Hellman key exchange visualizer",
    "FocusNet productivity dashboard",
  ]

  const interests = [
    { icon: Code, title: "Full-Stack Development", desc: "Building end-to-end web applications" },
    { icon: Brain, title: "AI in Software Engineering", desc: "Integrating AI to enhance user experiences" },
    { icon: Shield, title: "Cryptography", desc: "Implementing secure digital solutions" },
    { icon: Trophy, title: "Production-Grade Apps", desc: "Creating scalable, maintainable software" },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            "Building intelligent, secure, and scalable digital experiences."
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white dark:bg-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Govind Singh</CardTitle>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Developer & AI Enthusiast</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">BMS College of Engineering</p>
                    <p className="text-sm">B.Tech • Expected 2027</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Briefcase className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium">Software Development Intern</p>
                    <p className="text-sm">Egg Bucket</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="font-medium">Senior Coordinator</p>
                    <p className="text-sm">{"<CODE/IO>"} Club</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Quick Stats</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                      <p className="text-xs text-gray-500">Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">500+</p>
                      <p className="text-xs text-gray-500">LeetCode</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { id: "overview", label: "Overview", icon: User },
                { id: "skills", label: "Skills", icon: Code },
                { id: "interests", label: "Interests", icon: Brain },
                { id: "experience", label: "Experience", icon: Briefcase },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "hover:bg-blue-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            <Card className="bg-white dark:bg-gray-900 border-0 shadow-xl min-h-[400px]">
              <CardContent className="p-8">
                {activeTab === "overview" && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4">Hello, I'm Govind! 👋</h3>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm a passionate full-stack developer currently pursuing my B.Tech at BMS College of
                        Engineering. As a Senior Coordinator at {"<CODE/IO>"} and an active ACM Student Chapter member,
                        I love building intelligent, secure, and scalable digital experiences.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Currently interning at{" "}
                        <span className="font-semibold text-green-600 dark:text-green-400">Egg Bucket</span>,
                        where I'm developing a B2B AP supply-chain system across 15+ nodes, reducing manual inventory by 15% through automated Supabase triggers.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        With <span className="font-semibold">10+ full-stack projects</span> under my belt and
                        <span className="font-semibold"> 500+ LeetCode problems</span> solved, I'm always eager to
                        tackle new challenges and contribute to innovative solutions.
                      </p>
                      <hr className="my-4 border-gray-200 dark:border-gray-700" />
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">🏆 Achievements</h4>
                          <p className="text-gray-600 dark:text-gray-300">Invited Participant, Pokémon World Championship 2025</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">📜 Certifications</h4>
                          <p className="text-gray-600 dark:text-gray-300">AWS Certified Solutions Architect (2026) | Docker Fundamentals – Coursera (2025) | DSA – PW Skills (2023)</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">💼 Soft Skills</h4>
                          <p className="text-gray-600 dark:text-gray-300">Leadership, Analytical Thinking, Product Ownership, Agile Collaboration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="space-y-3">
                          <h4 className="text-lg font-semibold capitalize text-gray-800 dark:text-gray-200">
                            {category === "specialized" ? "Specialized" : category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "interests" && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6">What Drives Me</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {interests.map((interest, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            <interest.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{interest.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{interest.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6">Experience</h3>

                    {/* Current Internship */}
                    <div className="border-l-4 border-green-500 pl-6 mb-8">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                          Software Development Intern
                        </h4>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Current
                        </Badge>
                      </div>
                      <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                        Egg Bucket (Mar 2026 - Present)
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                          <span>Developing a B2B supply-chain system across 15+ nodes, reducing manual inventory by 15% through automated Firebase triggers</span>
                        </li>
                      </ul>
                    </div>

                    {/* WebStack Academy */}
                    <div className="border-l-4 border-purple-500 pl-6 mb-8">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Full Stack Web Development
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                        WebStack Academy • Dec 2025 – Jan 2026
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                          <span>Upskilled in Full Stack web development</span>
                        </li>
                      </ul>
                    </div>

                    {/* Previous Internship - Brisons */}
                    <div className="border-l-4 border-blue-500 pl-6 mb-8">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Software Development Intern
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        Brisons International • Oct 2025 – Mar 2026
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>Developed MERN-based PWA supporting 1000+ products with responsive UI</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>Reduced catalog load time by 25% through backend and query optimization</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>Implemented API workflows for orders, payments, and inventory management</span>
                        </li>
                      </ul>
                    </div>

                    {/* Previous Internship - Avaxan */}
                    <div className="border-l-4 border-blue-500 pl-6 mb-8">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Software Engineering Intern
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        Avaxan Pharma • Jun 2025 – Sep 2025
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>Developed a MERN-based pharmacy platform for 250+ SKUs, improving catalog load speed by 25%</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>Implemented UI/backend workflows and integrated an AI health chatbot for user assistance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>Built backend APIs to handle high-concurrency requests with efficient performance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>Deployed and maintained applications using CI/CD pipelines with Docker containerization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects and explore new technologies. Whether it's
                full-stack development, AI integration, or cryptographic solutions, let's connect!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
