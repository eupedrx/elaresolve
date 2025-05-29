
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Wrench, Heart, BookOpen, Laptop, PartyPopper } from "lucide-react";

// Dados das categorias de serviços
const categories = [
  {
    id: 1,
    name: "Beleza e Estética",
    icon: Scissors,
    description: "Cabeleireiras, manicures, esteticistas e mais",
    link: "/categorias/beleza-estetica"
  },
  {
    id: 2,
    name: "Serviços Domésticos", 
    icon: Wrench,
    description: "Encanadoras, eletricistas, marceneiras",
    link: "/categorias/servicos-domesticos"
  },
  {
    id: 3,
    name: "Saúde e Bem-estar",
    icon: Heart,
    description: "Fisioterapeutas, nutricionistas, terapeutas",
    link: "/categorias/saude-bem-estar"
  },
  {
    id: 4,
    name: "Aulas e Cursos",
    icon: BookOpen,
    description: "Professoras particulares, idiomas, música",
    link: "/categorias/aulas-cursos"
  },
  {
    id: 5,
    name: "Tecnologia",
    icon: Laptop,
    description: "Desenvolvedoras, design gráfico, suporte técnico",
    link: "/categorias/tecnologia"
  },
  {
    id: 6,
    name: "Eventos",
    icon: PartyPopper,
    description: "Decoradoras, cerimonialistas, buffet",
    link: "/categorias/eventos"
  }
];

const ServiceCategories = () => {
  return (
    <section className="section bg-ela-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ela-purpleb">Categorias de Serviços</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Encontre prestadoras de serviços especializadas em diversas áreas, todas reunidas em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link to={category.link} key={category.id}>
                <Card className="h-full card-hover border-ela-lilac/20 bg-ela-pink">
                  <CardContent className="p-6 flex flex-col items-center text-center text-ela-gray">
                    <div className="text-ela-purple mb-4">
                      <IconComponent size={48} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                    <p className="text-white">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/categorias">
            <button className="btn-secondary text-white">
              Ver todas as categorias
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
