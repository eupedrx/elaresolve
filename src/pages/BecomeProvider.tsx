
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Aumente sua visibilidade no mercado de trabalho",
  "Amplie sua rede de clientes qualificadas",
  "Ganhe credibilidade com sistema de avaliações",
  "Gerencie sua agenda e disponibilidade",
  "Sistema seguro de mensagens e agendamento",
  "Suporte dedicado para prestadoras de serviço"
];

const BecomeProvider = () => {
  return (
    <Layout>
      {/* Header da página */}
      <div className="bg-ela-purpleb py-16">
        <div className="container-custom">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Potencialize seu trabalho como prestadora de serviços
              </h1>
              <p className="text-ela-gray text-xl mb-6">
                Encontre novas clientes, gerencie seus agendamentos e faça parte da maior comunidade de prestadoras de serviços feminina do Brasil.
              </p>
              <Link to="/cadastro-prestadora">
                <Button className="bg-ela-purple hover:bg-ela-purple/90 text-white rounded-full px-8 py-6 text-lg">
                  Começar agora - é gratuito!
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1964&auto=format&fit=crop"
                alt="Mulher empreendedora" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios */}
      <section className="section bg-ela-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ela-purpleb">Por que se cadastrar no Ela Resolve?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Desenvolvemos uma plataforma pensada exclusivamente para mulheres prestadoras de serviço
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-ela-lilac rounded-full p-2 mr-4 mt-1">
                  <Check className="text-ela-white" size={16} />
                </div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section bg-ela-purpleb">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Como funciona para prestadoras</h2>
            <p className="text-ela-gray max-w-2xl mx-auto">
              Em 4 passos simples, você começa a receber solicitações de serviço
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-none shadow-sm bg-ela-gray">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-ela-pink text-ela-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-ela-purpleb">Crie seu perfil</h3>
                <p className="text-gray-600">
                  Complete seu cadastro com informações profissionais, áreas de atuação e preços
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm bg-ela-gray">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-ela-pink text-ela-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-ela-purpleb">Verificação</h3>
                <p className="text-gray-600">
                  Passe pelo processo de verificação para aumentar sua credibilidade
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm bg-ela-gray">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-ela-pink text-ela-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-ela-purpleb">Apareça nas buscas</h3>
                <p className="text-gray-600">
                  Seu perfil ficará visível para clientes que buscam seus serviços
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm bg-ela-gray">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-ela-pink text-ela-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-ela-purpleb">Receba solicitações</h3>
                <p className="text-gray-600">
                  Gerencie agendamentos, valores e atenda suas clientes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section bg-ela-lilac">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ela-white">O que nossas prestadoras dizem</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Histórias reais de mulheres que transformaram seus negócios com o Ela Resolve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md bg-ela-gray">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop" 
                      alt="Maria Silva" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ela-purpleb">Maria Silva</h3>
                    <p className="text-sm text-gray-500">Eletricista</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Desde que me cadastrei no Ela Resolve, minha agenda está sempre cheia. As clientes se sentem mais seguras ao contratar uma eletricista mulher pelo aplicativo, e eu ganho muito mais do que quando trabalhava por conta."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md bg-ela-gray">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                      alt="Ana Oliveira" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ela-purpleb">Ana Oliveira</h3>
                    <p className="text-sm text-gray-500">Massoterapeuta</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "A plataforma me ajudou a organizar meus horários e pagamentos. Antes eu perdia muito tempo com agendamentos por WhatsApp, agora é tudo centralizado e profissional. Minhas clientes adoram!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md bg-ela-gray">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1989&auto=format&fit=crop" 
                      alt="Carla Mendes" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ela-purpleb">Carla Mendes</h3>
                    <p className="text-sm text-gray-500">Design de Interiores</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "O que mais gosto é o sistema de avaliações. Minha reputação na plataforma me ajuda a conseguir novos projetos, e o portfólio digital mostra meu trabalho de forma organizada para potenciais clientes."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ela-purpleb text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece a expandir seus negócios hoje mesmo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres empreendedoras que já estão transformando suas carreiras com o Ela Resolve
          </p>
          <Link to="/cadastro-prestadora">
            <Button className="bg-white text-ela-purple hover:bg-white/90 rounded-full px-8 py-6 text-lg">
              Cadastre-se gratuitamente
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeProvider;
