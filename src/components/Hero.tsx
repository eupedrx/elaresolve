
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/components/ui/searchicon";


const Hero = () => {
  return (
    <div className="bg-purple-950 from-ela-lilac  py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ela-gray">
              Serviços de <span className="text-ela-purple">mulheres</span> para <span className="text-ela-purple">mulheres</span>
            </h1>
            <p className="text-xl mb-8 text-ela-white">
              Encontre profissionais qualificadas para todos os serviços que você precisa, em um ambiente seguro e confiável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/categorias" className="w-full sm:w-auto">
                <Button className="w-full bg-ela-purple hover:bg-ela-purple/90 text-white rounded-full px-8 py-6 text-lg">
                  <Search size={18} className="mr-2" /> Buscar serviços
                </Button>
              </Link>
              <Link to="/seja-prestadora" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full rounded-full border-ela-purple text-white bg-ela-rosa  hover:bg-ela-lilac px-8 py-6 text-lg">
                  Quero ser prestadora
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-ela-purpleb">Busque Empreendedoras</h2>
        <SearchIcon />
    </div>
              <div className="absolute -bottom-5 -right-5 bg-ela-lilac rounded-full p-4 shadow-md hidden md:block">
                <p className="font-bold text-ela-white">+500</p>
                <p className="text-sm text-ela-white">Prestadoras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
