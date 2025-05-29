
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
  ArrowRight,
  Mail,
  Phone,
  MapPin
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
      <nav className="navbar-dark fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text">
              AdVisor-AI
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="navbar-link">Home</Link>
              <Link to="#features" className="navbar-link">Funcionalidades</Link>
              <Link to="#pricing" className="navbar-link">Preços</Link>
              <Link to="#blog" className="navbar-link">Blog</Link>
              <Link to="#contact" className="navbar-link">Contato</Link>
            </div>

            <Link to="/signup">
              <Button className="glass-button">
                Experimente Grátis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen futuristic-bg flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-morphism max-w-6xl mx-auto p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  Your AI-Powered <span className="gradient-text">Google Ads</span> Analyst
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transforme suas campanhas do Google Ads com inteligência artificial avançada. 
                  Otimização automática, insights preditivos e ROI maximizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button className="neon-green-button w-full sm:w-auto">
                      Começar Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="#demo">
                    <Button className="glass-button w-full sm:w-auto">
                      Ver Demonstração
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-morphism p-8 animate-float">
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
              Funcionalidades <span className="gradient-text">Avançadas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra como nossa IA revoluciona a gestão de campanhas do Google Ads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="mb-6 p-3 bg-purple-500/20 rounded-full w-fit group-hover:bg-purple-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
              Resultados <span className="gradient-text">Comprovados</span>
            </h2>
            <p className="text-xl text-gray-300">
              Veja o impacto real em campanhas de nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="glass-morphism-dark text-center p-8">
                <div className="text-4xl font-bold text-[#8AFF72] mb-4">{result.metric}</div>
                <p className="text-gray-300">{result.description}</p>
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
              O que nossos <span className="gradient-text">clientes</span> dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#8AFF72] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
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
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-morphism-dark">
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
                  <div className="px-6 pb-4 text-gray-300">
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
            <Button className="glass-morphism text-white hover:bg-white/20 text-lg px-8 py-4">
              Começar Gratuitamente
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2">
                <li><Link to="/sobre-nos" className="text-gray-400 hover:text-purple-300 transition-colors">Sobre nós</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-purple-300 transition-colors">Contato</Link></li>
                <li><Link to="/carreiras" className="text-gray-400 hover:text-purple-300 transition-colors">Carreiras</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Produto</h4>
              <ul className="space-y-2">
                <li><Link to="#features" className="text-gray-400 hover:text-purple-300 transition-colors">Funcionalidades</Link></li>
                <li><Link to="#pricing" className="text-gray-400 hover:text-purple-300 transition-colors">Preços</Link></li>
                <li><Link to="/integrations" className="text-gray-400 hover:text-purple-300 transition-colors">Integrações</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/termos-de-uso" className="text-gray-400 hover:text-purple-300 transition-colors">Termos de Uso</Link></li>
                <li><Link to="/politica-de-privacidade" className="text-gray-400 hover:text-purple-300 transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/politica-de-cookies" className="text-gray-400 hover:text-purple-300 transition-colors">Política de Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              © 2025 AdVisor-AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
