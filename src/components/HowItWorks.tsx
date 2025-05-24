
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Busque serviços",
    description: "Encontre prestadoras qualificadas por categoria ou pesquise o serviço que você precisa",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Compare perfis",
    description: "Veja avaliações, portfólio e experiência de cada prestadora antes de escolher",
    icon: "⭐"
  },
  {
    id: 3,
    title: "Entre em contato",
    description: "Chat seguro dentro da plataforma para agendar e combinar detalhes",
    icon: "💬"
  },
  {
    id: 4,
    title: "Serviço realizado",
    description: "Após o serviço, você pode avaliar a prestadora e ajudar outras mulheres",
    icon: "✅"
  }
];

const HowItWorks = () => {
  return (
    <section className="section bg-ela-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Em apenas alguns passos simples, você encontra a profissional ideal para o serviço que precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-ela-lilac' : 'bg-ela-teal/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/como-funciona">
            <button className="btn-primary">
              Saiba mais sobre o processo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
