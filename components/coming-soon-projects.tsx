"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Truck,
  Car,
  ShoppingCart,
  Zap,
  Users,
  Globe,
  ArrowRight,
  Calendar,
  Code,
  Wrench,
  Construction,
} from "lucide-react"

export default function ComingSoonProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      name: "Fetchly",
      subtitle: "Instant Delivery Platform",
      description:
        "Hyperlocal medicine & essentials delivery web app with real-time order tracking, live location updates, and vendor panel.",
      techStack: ["MERN Stack", "Google Maps API", "Socket.io", "Tailwind"],
      status: "Developing",
      statusDetail: "UI design and API workflows underway",
      icon: Truck,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      statusIcon: "🚀",
      features: ["Real-time tracking", "Vendor dashboard", "Live location", "Order management"],
      timeline: "Q2 2025",
    },
    {
      id: 2,
      name: "RideRyde",
      subtitle: "Ride Booking System",
      description:
        "End-to-end ride-hailing platform with user-booking, driver-matching, map integration, and dynamic pricing engine.",
      techStack: ["Next.js", "Express", "MongoDB", "WebSockets", "Stripe"],
      status: "In Planning",
      statusDetail: "Focusing on scalable architecture and real-time matching logic",
      icon: Car,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      statusIcon: "🔧",
      features: ["Driver matching", "Dynamic pricing", "Payment integration", "Route optimization"],
      timeline: "Q3 2025",
    },
    {
      id: 3,
      name: "TradeKart",
      subtitle: "B2B Marketplace",
      description:
        "B2B platform connecting vendors and retailers with dynamic product listings, order negotiation, and custom invoicing tools.",
      techStack: ["Next.js 15", "PostgreSQL", "REST API", "Clerk/Auth.js"],
      status: "In Planning",
      statusDetail: "Product catalog & vendor registration flows being built",
      icon: ShoppingCart,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      statusIcon: "🔧",
      features: ["Vendor portal", "Order negotiation", "Custom invoicing", "Product catalog"],
      timeline: "Q4 2025",
    },
  ]

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "In Planning":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700"
      case "Developing":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700"
      default:
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700"
    }
  }

  return (
    <section
      id="coming-soon"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Coming Soon Projects
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exciting production-level projects currently in development. Each designed to solve real-world problems with
            cutting-edge technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden border-2 ${project.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-900`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  variant="outline"
                  className={`${getStatusBadgeColor(project.status)} font-medium text-xs px-3 py-1`}
                >
                  {project.statusIcon} {project.status}
                </Badge>
              </div>

              {/* Header with Icon */}
              <CardHeader className={`${project.bgColor} relative overflow-hidden`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                      <project.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{project.name}</CardTitle>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Badge */}
                <div className="absolute bottom-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.timeline}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-green-500" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Status Detail */}
                <div className={`p-4 rounded-lg ${project.bgColor} border ${project.borderColor}`}>
                  <div className="flex items-start space-x-3">
                    <Construction className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">Current Progress</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.statusDetail}</p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect - Coming Soon Button */}
                <div
                  className={`transition-all duration-300 ${
                    hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  <Button
                    variant="outline"
                    className="w-full group/btn border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 bg-transparent"
                    disabled
                  >
                    <span className="mr-2">Stay Tuned</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>

              {/* Animated Border Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">Building the Future</h3>
              </div>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
                These projects represent the next evolution in my development journey. Each one tackles complex
                real-world challenges with innovative solutions and modern technology stacks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
                  onClick={() => window.open('https://github.com/GovindSingh-95', '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Follow Progress
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent font-semibold px-8 py-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Collaborate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
