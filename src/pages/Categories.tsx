
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Lista completa de categorias
const allCategories = [
  {
    id: 1,
    name: "Beleza e Estética",
    icon: "💇‍♀️",
    description: "Cabeleireiras, manicures, esteticistas e mais",
    link: "/categorias/beleza-estetica",
    subcategories: [
      "Cabeleireira", "Manicure e Pedicure", "Maquiadora", "Depilação", "Esteticista"
    ]
  },
  {
    id: 2,
    name: "Serviços Domésticos",
    icon: "🔧",
    description: "Encanadoras, eletricistas, marceneiras",
    link: "/categorias/servicos-domesticos",
    subcategories: [
      "Eletricista", "Encanadora", "Marceneira", "Serralheira", "Pintora"
    ]
  },
  {
    id: 3,
    name: "Saúde e Bem-estar",
    icon: "🧘‍♀️",
    description: "Fisioterapeutas, nutricionistas, terapeutas",
    link: "/categorias/saude-bem-estar",
    subcategories: [
      "Fisioterapeuta", "Nutricionista", "Psicóloga", "Terapeuta", "Massoterapeuta"
    ]
  },
  {
    id: 4,
    name: "Aulas e Cursos",
    icon: "📚",
    description: "Professoras particulares, idiomas, música",
    link: "/categorias/aulas-cursos",
    subcategories: [
      "Professora de Idiomas", "Professora de Música", "Reforço Escolar", "Tutora", "Instrutora"
    ]
  },
  {
    id: 5,
    name: "Tecnologia",
    icon: "💻",
    description: "Desenvolvedoras, design gráfico, suporte técnico",
    link: "/categorias/tecnologia",
    subcategories: [
      "Desenvolvedora Web", "Design Gráfico", "Suporte Técnico", "Social Media", "UX/UI Designer"
    ]
  },
  {
    id: 6,
    name: "Eventos",
    icon: "🎉",
    description: "Decoradoras, cerimonialistas, buffet",
    link: "/categorias/eventos",
    subcategories: [
      "Decoradora", "Cerimonialista", "Buffet", "Fotógrafa", "DJ"
    ]
  },
  {
    id: 7,
    name: "Serviços Jurídicos",
    icon: "⚖️",
    description: "Advogadas, consultoras, mediadoras",
    link: "/categorias/servicos-juridicos",
    subcategories: [
      "Advogada", "Consultora Jurídica", "Mediadora", "Despachante", "Notária"
    ]
  },
  {
    id: 8,
    name: "Casa e Limpeza",
    icon: "🧹",
    description: "Diaristas, organização, jardinagem",
    link: "/categorias/casa-limpeza",
    subcategories: [
      "Diarista", "Organizadora", "Jardineira", "Paisagista", "Limpeza especializada"
    ]
  },
  {
    id: 9,
    name: "Transporte",
    icon: "🚗",
    description: "Motoristas, transporte escolar, fretes",
    link: "/categorias/transporte",
    subcategories: [
      "Motorista particular", "Transporte escolar", "Fretes", "Transporte de pets", "Mudanças"
    ]
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filtragem de categorias com base na busca
  const filteredCategories = allCategories.filter(
    category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      {/* Header da página */}
      <div className="bg-ela-lilac py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Categorias de Serviços
          </h1>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
            Explore todas as categorias disponíveis e encontre prestadoras qualificadas para o serviço que você precisa
          </p>
          
          {/* Barra de busca */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0  pl-3 flex items-center pointer-events-none text-gray-500">
              <Search size={18} />
            </div>
            <Input
  type="text"
  placeholder="Buscar categorias ou serviços..."
  className="pl-10 py-6 rounded-full bg-ela-gray border-ela-lilac focus-visible:ring-ela-purple placeholder:text-black"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
          </div>
        </div>
      </div>
      
      {/* Lista de categorias */}
      <section className="section bg-ela-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <Link to={category.link} key={category.id}>
                  <Card className="h-full card-hover border-ela-lilac/20 bg-ela-lilac">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{category.icon}</div>
                        <h3 className="font-bold text-xl">{category.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Serviços populares:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.slice(0, 3).map((subcategory, idx) => (
                            <span 
                              key={idx} 
                              className="bg-ela-gray text-gray-700 text-xs py-1 px-2 rounded-full"
                            >
                              {subcategory}
                            </span>
                          ))}
                          {category.subcategories.length > 3 && (
                            <span className="text-ela-purple text-xs py-1">
                              +{category.subcategories.length - 3} mais
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-gray-500 mb-4">Nenhuma categoria encontrada para "{searchTerm}"</p>
                <button 
                  className="text-ela-purple hover:underline" 
                  onClick={() => setSearchTerm("")}
                >
                  Limpar busca
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
