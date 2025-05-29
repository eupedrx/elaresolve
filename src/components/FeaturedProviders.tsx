
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";



// Dados das prestadoras em destaque
const providers = [
  {
    id: 1,
    name: "Ana Silva",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    category: "Beleza e Estética",
    rating: 4.9,
    reviewCount: 124,
    description: "Especialista em cortes modernos e coloração"
  },
  {
    id: 2,
    name: "Carla Oliveira",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    category: "Serviços Domésticos",
    rating: 4.8,
    reviewCount: 98,
    description: "Eletricista residencial com 10 anos de experiência"
  },
  {
    id: 3,
    name: "Paula Martins",
    photo: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=1964&auto=format&fit=crop",
    category: "Saúde e Bem-estar",
    rating: 5.0,
    reviewCount: 87,
    description: "Fisioterapeuta especializada em reabilitação"
  }
];

const FeaturedProviders = () => {
  return (
    <section className="section bg-ela-purpleb">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ela-gray">Prestadoras em Destaque</h2>
          <p className="text-white max-w-2xl mx-auto">
            Profissionais com as melhores avaliações e recomendações na plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <Card key={provider.id} className="overflow-hidden card-hover border-ela-lilac/20 bg-ela-pink">
              <CardContent className="p-0">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={provider.photo} 
                    alt={provider.name} 
                    className="w-full h-full object-cover"
                    style={[2, 3].includes(provider.id) ? { objectPosition: 'center 29%' } : {}}
                  />
                </div>
                <div className="p-6 bg-ela-lilac">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-xl text-ela-white">{provider.name}</h3>
                    <div className="bg-ela-purpleb text-white border-ela-purpleb text-xs font-medium py-1 px-2 rounded-full border border-ela-teal/30">
                      {provider.category}
                    </div>
                  </div>
                  <p className="text-white mb-3">{provider.description}</p>
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-600 mr-2">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 font-bold text-yellow-500">{provider.rating}</span>
                    </div>
                    <span className="text-ela-white text-sm">({provider.reviewCount} avaliações)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/prestadoras" className="btn-secondary text-ela-white bg-ela-lilac">
            Ver todas as prestadoras
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
