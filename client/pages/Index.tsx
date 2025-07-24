import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, Phone, MapPin, ExternalLink, Download, Code, Database, Globe, Smartphone } from 'lucide-react';

export default function Index() {
  const skills = [
    { name: 'React.js', category: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { name: 'Angular', category: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { name: 'TypeScript', category: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { name: 'JavaScript', category: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { name: 'HTML', category: 'Frontend', icon: <Globe className="w-4 h-4" /> },
    { name: 'CSS', category: 'Frontend', icon: <Globe className="w-4 h-4" /> },
    { name: 'Node.js', category: 'Backend', icon: <Database className="w-4 h-4" /> },
    { name: 'Java', category: 'Backend', icon: <Database className="w-4 h-4" /> },
    { name: 'Spring Framework', category: 'Backend', icon: <Database className="w-4 h-4" /> },
    { name: 'SQL', category: 'Database', icon: <Database className="w-4 h-4" /> },
    { name: 'Python', category: 'Language', icon: <Code className="w-4 h-4" /> },
    { name: 'DSA', category: 'Concepts', icon: <Code className="w-4 h-4" /> }
  ];

  const projects = [
    {
      title: 'HealthCare Dashboard',
      description: 'A responsive healthcare dashboard built with React.js to monitor patient stats and visualize healthcare data efficiently.',
      features: [
        'Visual representation of patient vitals and health metrics',
        'Sidebar navigation, health cards, charts, and body diagram',
        'Responsive and intuitive user interface'
      ],
      techStack: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Keerthi892/healthcare-dashboard',
      liveDemo: 'https://healthcare-dashboard-1jtl.vercel.app/',
      type: 'Solo Project',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Plantoria Store',
      description: 'A modern e-commerce platform for plant enthusiasts featuring an intuitive shopping experience with plant catalog and cart functionality.',
      features: [
        'Interactive plant catalog with detailed product pages',
        'Shopping cart functionality with quantity management',
        'Responsive design optimized for all devices',
        'Modern UI with smooth animations and transitions'
      ],
      techStack: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com/Keerthi892/Plantoria',
      liveDemo: 'https://plantoria-store.netlify.app/plants',
      type: 'E-commerce Project',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'Algonox Technologies',
    period: 'Dec 2024 – May 2025',
    achievements: [
      'Developed and optimized responsive UI components using Angular for enterprise-grade applications',
      'Contributed to real-time projects including NeoBi-POC, HDFC (UAT/user management fixes), and Medusind',
      'Independently resolved complex UI/UX issues in a dynamic startup environment',
      'Recognized for top performance in the Medusind project for delivering critical frontend features on time'
    ],
    certificate: '/assets/Keerthi_Internship_Certificate.jpeg'
  }
];


  const certifications = [
    { name: 'Responsive Web Design', issuer: 'freeCodeCamp' },
    { name: 'Basics of Web Development', issuer: 'Masai' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up text-white">
                  Hi, I'm <span className="text-blue-400">Anigirappagari Keerthi</span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-300 font-medium animate-fade-in-up delay-200">
                  Frontend Developer
                </h2>
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed animate-fade-in-up delay-300">
                  I'm a passionate Frontend Developer with hands-on experience in React.js, Angular, TypeScript, and JavaScript.
                  I love crafting clean, efficient interfaces and building responsive, user-friendly applications.
                </p>
              </div>
     <div className="flex flex-wrap gap-4 animate-fade-in-up delay-500">
  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" size="lg">
    <Mail className="w-4 h-4 mr-2" />
    Contact Me
  </Button>

  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://drive.google.com/file/d/1ud59RkGVOtpfV3EEvStX9B2b3_JefnPi/view?usp=sharing"
    download="Keerthi_Resume.pdf"
  >
    <Button
      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      size="lg"
    >
      <Download className="w-4 h-4 mr-2" />
      Download Resume
    </Button>
  </a>
</div>



              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Chittoor, Andhra Pradesh
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9390530585
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in-up delay-700">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gray-800 flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F684356b1d02c46e8b4b94571a534310a%2F00712caef54f442b9798ea0a133eb50f?format=webp&width=800"
                      alt="Anigirappagari Keerthi"
                      className="w-full h-full object-cover object-top"
                      style={{objectPosition: '50% 20%'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Skills & Technologies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are the technologies and frameworks I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 border border-gray-700 bg-gray-800 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3 text-blue-400 group-hover:scale-125 group-hover:text-blue-300 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                  <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300 group-hover:bg-blue-600/20 transition-all border-0">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className="py-16 lg:py-24 bg-black text-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-700 bg-gray-800 hover:shadow-blue-500/20 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-gray-600 text-gray-300 group-hover:border-blue-500/50 transition-colors">{project.type}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-white">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/* Experience Section */}
<section className="py-16 lg:py-24 relative z-10">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Experience
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        My professional journey and key achievements
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      {experience.map((exp, index) => (
        <Card
          key={index}
          className="mb-6 p-6 sm:p-8 bg-gray-800 border border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
        >
          <CardHeader className="p-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                <CardDescription className="text-base font-medium text-blue-400">
                  {exp.company}
                </CardDescription>
              </div>
              <Badge variant="outline" className="self-start sm:self-center border-gray-600 text-gray-300">
                {exp.period}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="mt-4 p-0">
            <ul className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 mt-2 mr-3 rounded-full bg-blue-400 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>

            {exp.certificate && (
              <div className="mt-6">
                <a href={exp.certificate} download target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>



      {/* Education & Certifications */}
 <section className="py-16 lg:py-24 bg-black text-white relative z-10">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Education</h2>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">B-TECH - 85%</CardTitle>
                    <CardDescription className="text-gray-400">RGUKT SRIKAKULAM</CardDescription>
                    <Badge variant="outline" className="self-start border-gray-600 text-gray-300">August 2021 - May 2025</Badge>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Pre-University Course</CardTitle>
                    <CardDescription className="text-gray-400">RGUKT SRIKAKULAM</CardDescription>
                    <Badge variant="outline" className="self-start border-gray-600 text-gray-300">Sept 2019 - June 2021</Badge>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">10th Standard (First Class with Distinction)</CardTitle>
                    <CardDescription className="text-gray-400">Z.P.Girls High School, Punganur</CardDescription>
                    <Badge variant="outline" className="self-start border-gray-600 text-gray-300">2019</Badge>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border border-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{cert.name}</CardTitle>
                      <CardDescription className="text-blue-400 font-medium">{cert.issuer}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <Card className="bg-gray-800 border border-gray-700 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <a
                    href="mailto:keerthikeeru178@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-600 hover:bg-blue-600/10 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300 group-hover:scale-110">
                      <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">Email</p>
                      <p className="text-sm text-gray-400">keerthikeeru178@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919390530585"
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-600 hover:bg-blue-600/10 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300 group-hover:scale-110">
                      <Phone className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">Phone</p>
                      <p className="text-sm text-gray-400">+91 9390530585</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Keerthi892"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-600 hover:bg-blue-600/10 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300 group-hover:scale-110">
                      <Github className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">GitHub</p>
                      <p className="text-sm text-gray-400">Keerthi892</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-600 hover:bg-blue-600/10 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300 group-hover:scale-110">
                      <MapPin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">Location</p>
                      <p className="text-sm text-gray-400">Chittoor, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700 bg-gray-800 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 <span className="text-blue-400 font-semibold">Anigirappagari Keerthi</span>. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
