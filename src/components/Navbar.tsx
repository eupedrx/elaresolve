
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-ela-purple">Ela<span className="text-gray-800">Resolve</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/categorias" className="text-gray-700 hover:text-ela-purple transition-colors">
              Categorias
            </Link>
            <Link to="/como-funciona" className="text-gray-700 hover:text-ela-purple transition-colors">
              Como Funciona
            </Link>
            <Link to="/seja-prestadora" className="text-gray-700 hover:text-ela-purple transition-colors">
              Seja uma Prestadora
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="rounded-full border-ela-purple text-white bg-ela-rosa hover:bg-ela-lilac">
                Login
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button className="bg-ela-purple hover:bg-ela-purple/90 text-white rounded-full">
                Cadastre-se
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/categorias" className="text-gray-700 hover:text-ela-purple py-2" onClick={toggleMenu}>
                Categorias
              </Link>
              <Link to="/como-funciona" className="text-gray-700 hover:text-ela-purple py-2" onClick={toggleMenu}>
                Como Funciona
              </Link>
              <Link to="/seja-prestadora" className="text-gray-700 hover:text-ela-purple py-2" onClick={toggleMenu}>
                Seja uma Prestadora
              </Link>
              <div className="flex space-x-4 pt-2">
                <Link to="/login" className="w-full " onClick={toggleMenu}>
                  <Button variant="outline" className="w-full rounded-full border-ela-purple bg-ela-rosa hover:bg-ela-purple hover:text-black text-ela-white">
                    Login
                  </Button>
                </Link>
                <Link to="/cadastro" className="w-full" onClick={toggleMenu}>
                  <Button className="w-full bg-ela-purple hover:bg-ela-rosa hover:text-black text-white rounded-full">
                    Cadastre-se
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
