import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperienciaProfissional() {
  const experiences = [
    {
      position: "Desenvolvedor Full Stack Jr.",
      company: "TechSolutions Ltda",
      period: "Jan 2024 - Presente",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description:
        "Desenvolvimento de aplicações web utilizando React, Next.js e Node.js. Responsável pela criação de interfaces modernas e APIs robustas.",
      responsibilities: [
        "Desenvolvimento de componentes React reutilizáveis",
        "Criação de APIs REST com Node.js e Express",
        "Integração com bancos de dados PostgreSQL",
        "Implementação de testes unitários e de integração",
        "Colaboração em equipe usando metodologias ágeis",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Git", "AWS"],
    },
    {
      position: "Estagiário em Desenvolvimento Web",
      company: "StartupTech",
      period: "Jun 2023 - Dez 2023",
      location: "São Paulo, SP",
      type: "Estágio",
      description:
        "Primeiro contato profissional com desenvolvimento web, focando em frontend com React e aprendendo boas práticas de desenvolvimento.",
      responsibilities: [
        "Desenvolvimento de interfaces com React",
        "Manutenção e correção de bugs",
        "Participação em code reviews",
        "Documentação de código e processos",
        "Suporte técnico para usuários internos",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Figma"],
    },
    {
      position: "Freelancer - Desenvolvedor Web",
      company: "Autônomo",
      period: "Mar 2023 - Mai 2023",
      location: "Remoto",
      type: "Freelance",
      description: "Desenvolvimento de sites institucionais e landing pages para pequenas empresas locais.",
      responsibilities: [
        "Criação de sites responsivos",
        "Otimização para SEO",
        "Integração com formulários de contato",
        "Hospedagem e manutenção de sites",
        "Atendimento direto ao cliente",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    },
  ]

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Git", level: 85 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "Python", level: 70 },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">Experiência Profissional</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Minha trajetória profissional no desenvolvimento de software, desde os primeiros passos até as experiências
            mais recentes.
          </p>
        </div>

        {/* Timeline de Experiências */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Trajetória Profissional</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover relative">
                {/* Indicador de Timeline */}
                <div className="absolute left-0 top-8 w-1 h-16 bg-blue-600 rounded"></div>

                <div className="ml-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.position}</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{exp.company}</h4>
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="mr-2" size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="mr-2" size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3">Principais Responsabilidades:</h5>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <Briefcase className="mr-2 mt-1 text-blue-600 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Tecnologias Utilizadas:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Interessado em trabalhar comigo?</h2>
          <p className="mb-6">Estou sempre aberto a novas oportunidades e desafios interessantes.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Projetos
            </button>
            <button className="bg-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
