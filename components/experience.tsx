import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "10PEARLS",
    location: "Karachi, Pakistan",
    period: "Oct 2024 – Nov 2024",
    description: [
      "Created a Task Management System frontend using TypeScript and React.js, with ASP.NET Core backend",
      "Integrated SonarQube for code quality analysis, xUnit for unit testing, and Serilog for logging",
      "Implemented JWT-based authentication, global exception management, and server-side filtering",
      "Focused on clean code practices and performance optimization",
    ],
  },
  {
    title: "Web Design Intern",
    company: "NEXT COLLAB",
    location: "Karachi, Pakistan",
    period: "Aug 2024 – Oct 2024",
    description: [
      "Designed and customized websites using Elementor for WordPress development",
      "Understood DNS setup techniques and approaches for website hosting",
      "Worked on quality assurance checking and performance improvement of websites",
      "Collaborated with team members on multiple client projects",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-blue-600 mb-1">{exp.title}</h3>
                    <h4 className="font-semibold text-lg text-foreground">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
