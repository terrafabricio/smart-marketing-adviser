
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3, 
  Shield,
  Star,
  ChevronDown,
  ChevronRight,
  ArrowRight
} from "lucide-react";

const LandingPage = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const features = [
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "Análise Inteligente com IA",
      description: "Nossa IA analisa suas campanhas do Google Ads em tempo real, identificando oportunidades de otimização automaticamente."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Otimização Contínua",
      description: "Receba recomendações precisas para melhorar ROI, reduzir CPC e aumentar conversões de forma inteligente."
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Automação Avançada",
      description: "Automatize ajustes de lances, palavras-chave e segmentação com base em dados históricos e tendências."
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Segmentação Precisa",
      description: "Identifique o público ideal e otimize targeting para maximizar o retorno do investimento publicitário."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Relatórios Avançados",
      description: "Dashboard completo com métricas detalhadas, insights acionáveis e análises preditivas."
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Proteção de Orçamento",
      description: "Evite gastos desnecessários com alertas inteligentes e controle automático de orçamento."
    }
  ];

  const results = [
    { metric: "+340%", description: "Aumento médio no ROAS" },
    { metric: "-52%", description: "Redução no CPC" },
    { metric: "+180%", description: "Melhoria nas conversões" },
    { metric: "+95%", description: "Economia de tempo" }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "CEO, TechStartup",
      text: "O AdVisor-AI revolucionou nossa estratégia de Google Ads. Em 3 meses, nosso ROAS aumentou 280% e reduzimos o CPC em 45%.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Marketing Manager, E-commerce Plus",
      text: "A automação inteligente economizou 20 horas semanais da nossa equipe. Os insights são precisos e acionáveis.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      company: "Diretor, Agência Digital",
      text: "Impressionante como a IA consegue prever tendências e otimizar campanhas antes mesmo dos problemas aparecerem.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Como a IA do AdVisor analisa minhas campanhas?",
      answer: "Nossa IA utiliza machine learning para analisar padrões de performance, dados históricos, tendências de mercado e comportamento do usuário, gerando insights precisos e recomendações personalizadas."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos clientes observa melhorias significativas nas primeiras 2-4 semanas. Otimizações completas podem levar de 6-8 semanas para maximizar o potencial."
    },
    {
      question: "O AdVisor-AI é compatível com todas as contas do Google Ads?",
      answer: "Sim, nossa plataforma integra com qualquer conta do Google Ads, independente do tamanho ou segmento. Suportamos desde pequenas empresas até grandes corporações."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, não há contratos de fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente no painel de configurações."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-[#1A1A2E] fixed w-full top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white">
              AdVisor-AI
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-300 hover:bg-clip-text hover:text-transparent transition-all duration-300">Home</Link>
              <Link to="#features" className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-300 hover:bg-clip-text hover:text-transparent transition-all duration-300">Funcionalidades</Link>
              <Link to="#pricing" className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-300 hover:bg-clip-text hover:text-transparent transition-all duration-300">Preços</Link>
              <Link to="#contact" className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-300 hover:bg-clip-text hover:text-transparent transition-all duration-300">Contato</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Fazer Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-white/10 backdrop-blur-2xl border border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                  Registre-se
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20" style={{background: 'radial-gradient(circle at 30% 20%, #8B5CF6 0%, #A78BFA 30%, #1A1A2E 100%)'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-[20px] border border-white/20 rounded-2xl shadow-2xl max-w-6xl mx-auto p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl font-semibold text-white leading-tight mb-6">
                  Your AI-Powered <span className="text-advisor-purple">Google Ads</span> Analyst
                </h1>
                <p className="text-base text-[#E5DEFF] mb-8 leading-relaxed">
                  Transforme suas campanhas do Google Ads com inteligência artificial avançada. 
                  Otimização automática, insights preditivos e ROI maximizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button className="bg-[#8AFF72] text-gray-900 font-medium rounded-full px-8 py-3 hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                      Começar Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="#demo">
                    <Button variant="ghost" className="text-white border border-white/30 rounded-full px-8 py-3 hover:bg-white/10 w-full sm:w-auto">
                      Ver Demonstração
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 animate-float">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">ROAS</span>
                      <span className="text-2xl font-bold text-[#8AFF72]">+340%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">CPC</span>
                      <span className="text-2xl font-bold text-[#8AFF72]">-52%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Conversões</span>
                      <span className="text-2xl font-bold text-[#8AFF72]">+180%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Funcionalidades <span className="text-advisor-purple">Avançadas</span>
            </h2>
            <p className="text-xl text-advisor-neutral-gray max-w-3xl mx-auto">
              Descubra como nossa IA revoluciona a gestão de campanhas do Google Ads
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-6 transition-all duration-300 hover:bg-white/20 hover:border-white/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group">
                <div className="mb-6 p-3 bg-advisor-purple/20 rounded-full w-fit group-hover:bg-advisor-purple/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-advisor-neutral-gray leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Resultados <span className="text-advisor-purple">Comprovados</span>
            </h2>
            <p className="text-xl text-advisor-neutral-gray">
              Veja o impacto real em campanhas de nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl text-center p-8">
                <div className="text-4xl font-bold text-[#8AFF72] mb-4">{result.metric}</div>
                <p className="text-advisor-neutral-gray">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              O que nossos <span className="text-advisor-purple">clientes</span> dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#8AFF72] fill-current" />
                  ))}
                </div>
                <p className="text-advisor-neutral-gray mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-advisor-neutral-gray">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Perguntas <span className="text-advisor-purple">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:text-purple-300 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-advisor-neutral-gray">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#8AFF72] text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Revolucionar suas Campanhas?
          </h2>
          <p className="text-xl mb-8">
            Junte-se a centenas de empresas que já transformaram seus resultados com nossa IA
          </p>
          <Link to="/signup">
            <Button className="bg-white/20 backdrop-blur-xl text-gray-900 hover:bg-white/30 text-lg px-8 py-4 rounded-full">
              Começar Gratuitamente
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-advisor-light-gray text-advisor-medium-gray">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <Link to="/sobre-nos" className="hover:text-advisor-purple transition-colors">Sobre nós</Link>
            <Link to="/contato" className="hover:text-advisor-purple transition-colors">Contato</Link>
            <Link to="/carreiras" className="hover:text-advisor-purple transition-colors">Carreiras</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/termos-de-uso" className="hover:text-advisor-purple transition-colors">Termos de Uso</Link>
            <Link to="/politica-de-privacidade" className="hover:text-advisor-purple transition-colors">Política de Privacidade</Link>
            <Link to="/politica-de-cookies" className="hover:text-advisor-purple transition-colors">Política de Cookies</Link>
          </div>
        </div>
        <p className="mt-6 text-center text-sm">© 2025 AdVisor-AI. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
