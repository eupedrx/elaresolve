
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ela-gray py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-ela-purple">Ela<span className="text-gray-800">Resolve</span></span>
            </Link>
            <p className="mt-4 text-gray-600">
              Conectando mulheres a serviços de qualidade e confiança.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categorias" className="text-gray-600 hover:text-ela-purple">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-600 hover:text-ela-purple">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/seja-prestadora" className="text-gray-600 hover:text-ela-purple">
                  Seja uma Prestadora
                </Link>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-gray-600 hover:text-ela-purple">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-600 hover:text-ela-purple">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/ajuda" className="text-gray-600 hover:text-ela-purple">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                contato@elaresolve.com.br
              </li>
              <li className="text-gray-600">
                (11) 99999-9999
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ela-purple">
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ela-purple">
                    Facebook
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ela-purple">
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} ElaResolve. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
