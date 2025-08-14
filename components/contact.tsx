import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaboration or inquiries. I'm always excited to discuss new opportunities and
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-xl mb-6 text-blue-600">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:essamemon234@gmail.com"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      essamemon234@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+923322054607" className="text-muted-foreground hover:text-blue-600 transition-colors">
                      +92 332 2054607
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">PECHS Block 2, Karachi, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://www.linkedin.com/in/muhammad-essa-411110241/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-slate-50">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-xl mb-6 text-blue-600">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. Whether you need a full-stack developer
                for your team or want to discuss a freelance project, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-blue-600 mb-1">Available For</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-time positions, Contract work, Freelance projects
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-blue-600 mb-1">Response Time</h4>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>

              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                <a href="mailto:essamemon234@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
