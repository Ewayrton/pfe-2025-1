import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function ExperienciaAcademica() {
  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal de São Paulo",
      period: "2021 - 2025",
      location: "São Paulo, SP",
      description:
        "Formação sólida em programação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento web.",
      highlights: [
        "Desenvolvimento de projetos em React e Next.js",
        "Estudos em Inteligência Artificial e Machine Learning",
        "Participação em projetos de extensão universitária",
        "Monitor da disciplina de Programação Web",
      ],
    },
    {
      degree: "Técnico em Informática",
      institution: "ETEC - Escola Técnica Estadual",
      period: "2019 - 2020",
      location: "São Paulo, SP",
      description: "Formação técnica em desenvolvimento de sistemas, banco de dados e redes de computadores.",
      highlights: [
        "Desenvolvimento de sistemas desktop com Java",
        "Administração de banco de dados MySQL",
        "Configuração de redes e servidores",
        "Projeto final: Sistema de gestão escolar",
      ],
    },
  ]

  const courses = [
    "Desenvolvimento Web Completo - Udemy",
    "React: The Complete Guide - Udemy",
    "Node.js: The Complete Guide - Udemy",
    "AWS Cloud Practitioner - Amazon",
    "Git e GitHub - Curso em Vídeo",
    "Python para Data Science - Alura",
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">Experiência Acadêmica</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Minha jornada educacional e desenvolvimento de conhecimentos técnicos ao longo dos anos de estudo e
            aprendizado contínuo.
          </p>
        </div>

        {/* Formação Acadêmica */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Formação Acadêmica</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{edu.degree}</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{edu.institution}</h4>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-2" size={16} />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-2" size={16} />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{edu.description}</p>

                <div>
                  <h5 className="font-semibold mb-2">Principais Atividades:</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <GraduationCap className="mr-2 mt-1 text-blue-600 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cursos e Certificações */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Cursos e Certificações</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow card-hover">
                <div className="flex items-center">
                  <GraduationCap className="mr-3 text-blue-600" size={20} />
                  <span className="font-medium">{course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Anos de Estudo</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Projetos Acadêmicos</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
            <div className="text-gray-600">Certificações</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">3.8</div>
            <div className="text-gray-600">CRA Atual</div>
          </div>
        </div>
      </div>
    </div>
  )
}
