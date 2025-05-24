
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <Layout>
      {/* Header da página */}
      <div className="bg-ela-gray py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Como o Ela Resolve funciona
          </h1>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            Entenda como nossa plataforma conecta clientes a prestadoras de serviço de forma segura e eficiente
          </p>
        </div>
      </div>

      {/* Para quem procura serviços */}
      <section className="section bg-ela-lilac">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Para quem procura serviços</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Em apenas 4 passos simples, você encontra a profissional ideal para o serviço que precisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className=" p-6 rounded-xl relative mb-8 bg-ela-gray">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-purple text-white rounded-full flex items-center justify-center font-bold text-xl">1</span>
                <h3 className="font-bold text-xl mb-3">Busque o serviço que você precisa</h3>
                <p className="text-gray-700">
                  Navegue pelas categorias ou use a barra de busca para encontrar o serviço específico que você está procurando. Filtre por localização, avaliações e disponibilidade.
                </p>
              </div>
              
              <div className="bg-ela-gray p-6 rounded-xl relative">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-purple text-white rounded-full flex items-center justify-center font-bold text-xl">2</span>
                <h3 className="font-bold text-xl mb-3">Compare perfis de prestadoras</h3>
                <p className="text-gray-700">
                  Veja o portfólio, experiência, qualificações e avaliações de outras clientes para cada prestadora. Escolha a que melhor atende às suas necessidades.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-ela-gray p-6 rounded-xl relative mb-8">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-purple text-white rounded-full flex items-center justify-center font-bold text-xl">3</span>
                <h3 className="font-bold text-xl mb-3">Entre em contato e contrate</h3>
                <p className="text-gray-700">
                  Use nosso sistema de mensagens seguro para discutir detalhes, preços e agendar o serviço. Toda a comunicação fica registrada na plataforma para sua segurança.
                </p>
              </div>
              
              <div className="bg-ela-gray p-6 rounded-xl relative">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-purple text-white rounded-full flex items-center justify-center font-bold text-xl">4</span>
                <h3 className="font-bold text-xl mb-3">Avalie após o serviço</h3>
                <p className="text-gray-700">
                  Depois que o serviço for concluído, avalie a prestadora para ajudar outras mulheres a encontrarem boas profissionais e dar feedback valioso para a prestadora.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/cadastro">
              <Button className="bg-ela-purple hover:bg-ela-purple/90 text-white rounded-full px-8 py-6 text-lg">
                Cadastre-se como cliente
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Para prestadoras */}
      <section className="section bg-ela-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Para prestadoras de serviços</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Expanda seus negócios e encontre novas clientes em um ambiente seguro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm relative mb-8">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-pink text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">1</span>
                <h3 className="font-bold text-xl mb-3">Crie seu perfil profissional</h3>
                <p className="text-gray-700">
                  Cadastre-se gratuitamente e crie um perfil detalhado com suas habilidades, experiência, portfólio e áreas de atuação. Quanto mais completo, mais chances de ser contratada.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm relative">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-pink text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">2</span>
                <h3 className="font-bold text-xl mb-3">Passe pela verificação</h3>
                <p className="text-gray-700">
                  Nosso processo de verificação aumenta a confiança das clientes em seu perfil, validando sua identidade e credenciais profissionais.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm relative mb-8">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-pink text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">3</span>
                <h3 className="font-bold text-xl mb-3">Receba solicitações e contatos</h3>
                <p className="text-gray-700">
                  Clientes interessadas em seus serviços entrarão em contato. Você pode aceitar ou recusar solicitações de acordo com sua disponibilidade.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm relative">
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-ela-pink text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">4</span>
                <h3 className="font-bold text-xl mb-3">Cresça seu negócio</h3>
                <p className="text-gray-700">
                  Com avaliações positivas, seu perfil ganha mais visibilidade na plataforma, ajudando a expandir sua clientela e rede de contatos profissionais.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/seja-prestadora">
              <Button className="bg-ela-pink hover:bg-ela-pink/90 text-gray-800 rounded-full px-8 py-6 text-lg">
                Cadastre-se como prestadora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="section bg-ela-lilac">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o funcionamento da plataforma
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">O uso da plataforma é gratuito?</h3>
              <p className="text-gray-700">
                Sim, o cadastro e uso básico da plataforma são gratuitos tanto para clientes quanto para prestadoras de serviços. Para prestadoras, oferecemos planos premium opcionais com recursos adicionais.
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">Como garantem a segurança das usuárias?</h3>
              <p className="text-gray-700">
                Realizamos verificação de identidade de todas as prestadoras, mantemos um sistema de avaliações transparente e todas as transações financeiras são protegidas. Além disso, nosso sistema de mensagens é seguro e monitorado.
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">Posso contratar serviços em qualquer cidade?</h3>
              <p className="text-gray-700">
                Sim, nossa plataforma está disponível em todo o Brasil. Você pode filtrar prestadoras por localização, encontrando profissionais próximas a você.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">O que fazer se tiver algum problema com o serviço?</h3>
              <p className="text-gray-700">
                Contamos com um sistema de suporte dedicado para mediar qualquer situação. Entre em contato com nossa central de atendimento e trabalharemos para resolver da melhor forma possível.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;
