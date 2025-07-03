
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center py-12 px-4 bg-ela-purpleb">
        <Card className="w-full max-w-md border-ela-lilac/20 shadow-md bg-ela-white">
          <Tabs defaultValue="login" className="">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2 bg-ela-gray text-black">
                <TabsTrigger value="login" >Login</TabsTrigger>
                <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <TabsContent value="login" className="space-y-4">
                <CardTitle className="text-2xl text-center mb-6 text-ela-purpleb">Bem-vinda de volta!</CardTitle>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-ela-purpleb">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" className=" bg-ela-gray border-ela-white placeholder:text-black" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password" className="text-ela-purpleb">Senha</Label>
                    <Link to="/recuperar-senha" className="text-sm text-ela-purpleb hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" className="bg-ela-gray border-ela-white placeholder:text-black"/>
                </div>
                
                <Button className="w-full text-ela-white bg-ela-purpleb hover:bg-ela-purple/90">
                  Entrar
                </Button>
              </TabsContent>
              
              <TabsContent value="cadastro" className="space-y-4">
                <CardTitle className="text-2xl text-center mb-6 text-ela-purpleb">Crie sua conta</CardTitle>
                <CardDescription className="text-center mb-6 text-gray-500">
                  Comece a encontrar ou oferecer serviços na nossa plataforma
                </CardDescription>
                
                <div className="space-y-2 text-ela-purpleb">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" className="bg-ela-gray border-white placeholder:text-black" type="text" placeholder="Seu nome" />
                </div>
                
                <div className="space-y-2 text-ela-purpleb">
                  <Label htmlFor="register-email" >Email</Label>
                  <Input id="register-email" className="bg-ela-gray border-white placeholder:text-black" type="email" placeholder="seu@email.com" />
                </div>
                
                <div className="space-y-2 text-ela-purpleb">
                  <Label htmlFor="register-password">Senha</Label>
                  <Input id="register-password" className="bg-ela-gray border-white placeholder:text-black" type="password" placeholder="••••••••" />
                </div>
                
                <div className="space-y-2 text-ela-purpleb">
                  <Label htmlFor="confirm-password">Confirmar senha</Label>
                  <Input id="confirm-password" className="bg-ela-gray border-white placeholder:text-black" type="password" placeholder="••••••••" />
                </div>
                
                <Button className="w-full bg-ela-purpleb text-white hover:bg-ela-purple/90">
                  Criar conta
                </Button>
              </TabsContent>
            </CardContent>
            
            <CardFooter className="flex justify-center border-t pt-4 bg-ela-white">
              <div className="text-sm text-gray-500 bg-ela-white">
                Ao continuar, você concorda com nossos{" "}
                <Link to="/termos" className="text-ela-purpleb hover:underline">
                  Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link to="/privacidade" className="text-ela-purpleb hover:underline">
                  Política de Privacidade
                </Link>
              </div>
            </CardFooter>
          </Tabs>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
