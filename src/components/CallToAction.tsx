
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-ela-purple to-ela-purple/80 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronta para encontrar sua prestadora ideal?
            </h2>
            <p className="text-white/90 text-lg max-w-lg">
              Junte-se a milhares de mulheres que já estão utilizando o Ela Resolve para encontrar serviços de qualidade em um ambiente seguro.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/cadastro">
              <button className="bg-white text-ela-purple hover:bg-white/90 px-8 py-3 rounded-full font-semibold shadow-lg transition-all">
                Cadastre-se gratuitamente
              </button>
            </Link>
            <Link to="/categorias">
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all">
                Buscar serviços
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
