"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Task Management System",
    description:
      "A comprehensive task management application built with React.js (TypeScript) frontend and ASP.NET Core backend. Features JWT authentication, global exception handling, and server-side filtering.",
    technologies: ["React.js", "TypeScript", "ASP.NET Core", "Entity Framework", "JWT", "SonarQube", "xUnit"],
    image: "/task-management-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ByeBye Franchise",
    description:
      "Professional franchise website built with WordPress and customized using Elementor. Focused on user experience and conversion optimization.",
    technologies: ["WordPress", "Elementor", "PHP", "MySQL", "Custom CSS"],
    image: "/franchise-homepage.png",
    liveUrl: "https://byebyefranchise.com",
    githubUrl: null,
  },
  {
    title: "Tiny Pubs Franchising",
    description:
      "Franchise management website with custom design and functionality. Implemented responsive design and performance optimizations.",
    technologies: ["WordPress", "Elementor", "Custom PHP", "Performance Optimization"],
    image: "/pub-franchise-website.png",
    liveUrl: "https://tinypubsfranchising.com",
    githubUrl: null,
  },
  {
    title: "Tannu Securities",
    description:
      "Financial services website with secure architecture and professional design. Focus on trust and credibility in the financial sector.",
    technologies: ["WordPress", "Security Plugins", "Custom Design", "SSL Implementation"],
    image: "/financial-services-homepage.png",
    liveUrl: "https://tannusecurities.com",
    githubUrl: null,
  },
  {
    title: "Shoetique.pk",
    description: "E-commerce platform for footwear with custom product catalog and shopping cart functionality.",
    technologies: ["WordPress", "WooCommerce", "Payment Integration", "Inventory Management"],
    image: "/shoe-ecommerce-product-page.png",
    liveUrl: "https://shoetique.pk",
    githubUrl: null,
  },
  {
    title: "Scents Impact",
    description:
      "Fragrance e-commerce website with elegant design and smooth user experience. Custom product showcase and filtering.",
    technologies: ["WordPress", "WooCommerce", "Custom CSS", "Product Filtering"],
    image: "/placeholder-bnv8k.png",
    liveUrl: "https://scentsimpact.pk",
    githubUrl: null,
  },
  {
    title: "Scent Siege",
    description:
      "Premium fragrance marketplace with advanced search and filtering capabilities. Features user reviews and personalized recommendations.",
    technologies: ["WordPress", "WooCommerce", "Custom JavaScript", "User Reviews"],
    image: "/luxury-fragrance-website.png",
    liveUrl: "https://scentsiege.pk",
    githubUrl: null,
  },
  {
    title: "PixelPulse Tech",
    description:
      "Modern technology company website showcasing digital solutions and services. Features interactive portfolio and client testimonials.",
    technologies: ["WordPress", "Custom Theme", "JavaScript", "Performance Optimization"],
    image: "/modern-tech-website.png",
    liveUrl: "https://pixelpulsetech.pk",
    githubUrl: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Explore My Work</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, from custom web applications to
            e-commerce solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
              onClick={() => project.liveUrl && project.liveUrl !== "#" && window.open(project.liveUrl, "_blank")}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-blue-600">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
