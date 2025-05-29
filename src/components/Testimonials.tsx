
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Dados dos depoimentos
const testimonials = [
  {
    id: 1,
    name: "Juliana Rocha",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop",
    text: "Encontrei uma eletricista maravilhosa através do Ela Resolve. Foi a primeira vez que me senti completamente à vontade tendo alguém trabalhando na minha casa. Serviço impecável!",
    rating: 5
  },
  {
    id: 2,
    name: "Mariana Costa",
    photo: "https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=1974&auto=format&fit=crop",
    text: "Como prestadora de serviços, o Ela Resolve aumentou minha clientela em 70%. A plataforma faz toda a diferença por ser um espaço seguro para mulheres que querem empreender.",
    rating: 5
  },
  {
    id: 3,
    name: "Fernanda Lima",
    photo: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop",
    text: "Contratei uma professora de matemática para minha filha e estou impressionada com os resultados. A plataforma tem profissionais realmente qualificadas e comprometidas.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-ela-lilac">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ela-white">O que dizem sobre nós</h2>
          <p className="text-ela-gray max-w-2xl mx-auto">
            Experiências reais de mulheres que já utilizaram a plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card key={item.id} className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-ela-purpleb">{item.name}</h3>
                    <div className="flex">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#9b87f5" color="#9b87f5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{item.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
