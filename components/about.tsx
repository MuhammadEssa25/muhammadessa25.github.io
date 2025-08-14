import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Hi, I'm Muhammad Essa. With hands-on experience at{" "}
                  <span className="font-semibold text-blue-600">10PEARLS</span> and{" "}
                  <span className="font-semibold text-blue-600">NEXT COLLAB</span>, I bring a diverse skill set in web
                  development.
                </p>
                <p className="text-lg leading-relaxed">
                  My passion lies in transforming ideas into interactive and user-friendly applications. I specialize in
                  creating flexible web apps with sleek and clean code using modern technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently pursuing my Bachelor's in Computer Science at the Institute of Business Management (IOBM),
                  I'm always eager to learn new technologies and take on challenging projects.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-lg mb-3">Quick Facts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Location:</strong> Karachi, Pakistan
                    </li>
                    <li>
                      <strong>Education:</strong> BSCS at IOBM (2021-2025)
                    </li>
                    <li>
                      <strong>Experience:</strong> Full Stack Development
                    </li>
                    <li>
                      <strong>Focus:</strong> Clean Code & User Experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
