"use client"
import { X, Download, Phone, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  const downloadResume = () => {
    const resumeContent = `Govind Singh 
B.Tech, BMS College of Engineering, Bengaluru (Expected 2027) 
Senior Coordinator in <Code/IO> | Member, ACM Student Chapter 
Email: govind.s9551@gmail.com | Phone: +91 8788414070 
GitHub: github.com/GovindSingh-95 | LinkedIn: linkedin.com/in/govindsingh95

EXPERIENCE 
Software Development Intern — Egg Bucket 
Apr 2026 – Present
- Developing a B2B AP supply-chain system across 15+ nodes, reducing manual inventory by 15% through automated Supabase triggers.

TECHNICAL SKILLS 
Languages: Java, JavaScript, TypeScript, Python, HTML/CSS, Bash 
Frameworks: React, Next.js, Tailwind, Node, Express, MongoDB 
Tools: Git, Web Crypto API | Focus: Full-Stack Dev, Cryptography, DSA (500+ LC) 

PROJECTS 
RSA Digital Signature Web App – React, Tailwind 
Built a frontend to verify RSA-SHA256 signatures with simulated blockchain immutability. 
Used in cryptography workshops to demonstrate digital signing. GitHub 

PokéNest – Next.js, Recharts, PWA 
Advanced Pokédex and team builder with offline support, stat calculators, and battle tools. 
Used by 50+ users during internal testing. GitHub 

Diffie-Hellman Demo – React, TS, Web Crypto API 
Interactive key exchange visualizer with MITM simulation and real-time cryptographic 
benchmarking. 
Integrated in educational demos at ACM Student Chapter meetups. GitHub

COURSES & ACHIEVEMENTS 
Pokémon World Championships 2025 Invite (Regional Winner) 
Generative AI (Amazon/Coursera), DSA in Java (PW Skills), 400+ LeetCode

LEADERSHIP 
Senior Coordinator in Code<I/O> | ACM Chapter Member – BMSCE`

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Govind_Singh_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Resume Preview</h2>
          <div className="flex space-x-2">
            <Button onClick={downloadResume} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="ghost" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Govind Singh</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              B.Tech, BMS College of Engineering, Bengaluru (Expected 2027)
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300 mb-4">
              Senior Coordinator in {"<Code/IO>"} | Member, ACM Student Chapter
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>govind.s9551@gmail.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 8788414070</span>
              </div>
              <div className="flex items-center space-x-1">
                <Github className="h-4 w-4" />
                <span>github.com/GovindSingh-95</span>
              </div>
              <div className="flex items-center space-x-1">
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/govindsingh95</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">EXPERIENCE</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Software Development Intern — Egg Bucket</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Mar 2026 – Present (Current)</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developing a B2B supply-chain system across 15+ nodes, reducing manual inventory by 15% through automated Firebase triggers</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Full Stack Web Development — WebStack Academy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Dec 2025 – Jan 2026</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Upskilled in Full Stack web development</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Software Development Intern — Brisons International</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Oct 2025 – Mar 2026</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developed MERN-based PWA supporting 1000+ products with responsive UI</li>
                <li>Reduced catalog load time by 25% through backend and query optimization</li>
                <li>Implemented API workflows for orders, payments, and inventory management</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Software Engineering Intern — Avaxan Pharma</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Jun 2025 – Sep 2025</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developed a MERN-based pharmacy platform for 250+ SKUs, improving catalog load speed by 25%</li>
                <li>Implemented UI/backend workflows and integrated an AI health chatbot for user assistance</li>
                <li>Built backend APIs to handle high-concurrency requests with efficient performance</li>
                <li>Deployed and maintained applications using CI/CD pipelines with Docker containerization</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Languages:</h4>
                <p className="text-gray-700 dark:text-gray-300">Java, JavaScript, TypeScript, Python, HTML/CSS, Bash</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Frameworks:</h4>
                <p className="text-gray-700 dark:text-gray-300">React, Next.js, Tailwind, Node, Express, MongoDB</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools & Focus:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Git, Web Crypto API | Full-Stack Dev, Cryptography, DSA (500+ LC)
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">PROJECTS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">RSA Digital Signature Web App – React, Tailwind</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Built a frontend to verify RSA-SHA256 signatures with simulated blockchain immutability. Used in
                  cryptography workshops to demonstrate digital signing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">PokéNest – Next.js, Recharts, PWA</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Advanced Pokédex and team builder with offline support, stat calculators, and battle tools. Used by
                  50+ users during internal testing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Diffie-Hellman Demo – React, TS, Web Crypto API</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Interactive key exchange visualizer with MITM simulation and real-time cryptographic benchmarking.
                  Integrated in educational demos at ACM Student Chapter meetups.
                </p>
              </div>
            </div>
          </div>

          {/* Courses & Achievements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">COURSES & ACHIEVEMENTS</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Pokémon World Championships 2025 Invite (Regional Winner)</li>
              <li>Generative AI (Amazon/Coursera), DSA in Java (PW Skills), 500+ LeetCode</li>
            </ul>
          </div>

          {/* Leadership */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">LEADERSHIP</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Senior Coordinator in Code{"<I/O>"} | ACM Chapter Member – BMSCE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
