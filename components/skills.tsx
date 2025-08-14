import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    category: "Frontend",
    technologies: ["React.js", "TypeScript", "JavaScript", "Angular", "Bootstrap"],
  },
  {
    category: "Backend",
    technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "JWT Authentication"],
  },
  {
    category: "Database",
    technologies: ["MySQL", "SQL Server", "Database Design"],
  },
  {
    category: "CMS & Tools",
    technologies: ["WordPress", "Elementor", "SonarQube", "xUnit", "Serilog"],
  },
  {
    category: "DevOps & Hosting",
    technologies: ["DNS Configuration", "Web Hosting", "Performance Optimization"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4 text-blue-600">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                      {tech}
                    </div>
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
