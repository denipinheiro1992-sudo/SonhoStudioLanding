import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { agencyConfig } from '../config/agency';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Preços', path: '/precos' },
  { name: 'Pacotes', path: '/pacotes' },
  { name: 'Simulador ROI', path: '/simulador' },
  { name: 'Portfólio', path: '/portfolio' },
  { name: 'Sobre', path: '/sobre' },
];

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-subtle"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px] mix-blend-screen animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-brand-dark/80 backdrop-blur-md border-white/10 py-3'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center transition-transform hover:scale-105 py-0.5" aria-label="Sonho Studio">
            <img
              src="/logo-1.png"
              alt="Sonho Studio"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium hover:text-brand-accent transition-colors"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/orcamento"
              className="group flex items-center gap-2 bg-[#111111] text-brand-light hover:text-[#0a0a0a] hover:text-[#0a0a0a] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-colors"
            >
              PEDIR ORÇAMENTO
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-brand-light p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#111111] text-brand-light p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)} aria-label="Sonho Studio">
                <img
                  src="/logo-1.png"
                  alt="Sonho Studio"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-brand-light">
                <X size={28} />
              </button>
            </div>

            <div className="my-auto flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-bold text-brand-light hover:text-brand-accent transition-colors flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <span>{link.name.toUpperCase()}</span>
                  <ArrowRight size={18} className="text-brand-accent" />
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <Link
                to="/orcamento"
                className="flex items-center justify-center gap-2 bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 text-[#0a0a0a] py-4 rounded-full font-semibold text-lg"
              >
                PEDIR ORÇAMENTO
              </Link>
              <a
                href={agencyConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-white/30 py-4 rounded-full font-semibold"
              >
                CHAMAR NO WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-[80px]">
        <Outlet />
      </main>

      <footer className="bg-[#111111] text-brand-light pt-20 pb-10 border-t border-white/10 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/logo-1.png"
                  alt="Sonho Studio"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-400 text-sm max-w-xs mb-6">
                Marketing, design e tecnologia rápida para pequenos negócios venderem mais.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={agencyConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#25D366]/15 border border-white/10 hover:border-[#25D366]/40 text-gray-300 hover:text-[#25D366] text-sm font-semibold transition-all group"
                  aria-label="WhatsApp da Sonho Studio"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="shrink-0"
                    >
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.677.15-.202.301-.78 1.012-.956 1.213-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.897-.798-1.503-1.784-1.68-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.677-1.633-.928-2.238-.244-.59-.493-.51-.677-.52-.176-.008-.376-.01-.577-.01-.202 0-.528.076-.804.377-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.913 1.23 3.114.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.76.46 3.48 1.34 5.01L2 22l5.13-1.35c1.48.81 3.14 1.23 4.91 1.23 5.52 0 10.01-4.49 10.01-10.01S17.56 2 12.04 2z" />
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`https://instagram.com/${agencyConfig.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#E4405F]/15 border border-white/10 hover:border-[#E4405F]/40 text-gray-300 hover:text-[#E4405F] text-sm font-semibold transition-all group"
                  aria-label="Instagram da Sonho Studio"
                >
                  <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FD1D1D]/20 via-[#E1306C]/20 to-[#405DE6]/20 text-[#E1306C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-gray-400">SERVIÇOS</h3>
              <ul className="flex flex-col gap-3 text-sm text-brand-light/80">
                <li><Link to="/servicos?filter=Web" className="hover:text-brand-accent transition-colors">Sites & Landing Pages</Link></li>
                <li><Link to="/servicos?filter=Conteúdo" className="hover:text-brand-accent transition-colors">Vídeos & Reels</Link></li>
                <li><Link to="/servicos?filter=Apps" className="hover:text-brand-accent transition-colors">Apps & Sistemas</Link></li>
                <li><Link to="/servicos?filter=Design" className="hover:text-brand-accent transition-colors">Design & Imagens</Link></li>
                <li><Link to="/servicos?filter=Automação" className="hover:text-brand-accent transition-colors">Chatbots & Automação</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-gray-400">EMPRESA</h3>
              <ul className="flex flex-col gap-3 text-sm text-brand-light/80">
                <li><Link to="/simulador" className="hover:text-brand-accent transition-colors text-brand-accent font-semibold">Simulador de ROI</Link></li>
                <li><Link to="/sobre" className="hover:text-brand-accent transition-colors">Sobre</Link></li>
                <li><Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfólio</Link></li>
                <li><Link to="/precos" className="hover:text-brand-accent transition-colors">Preços</Link></li>
                <li><Link to="/pacotes" className="hover:text-brand-accent transition-colors">Pacotes</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-gray-400">CONTATO</h3>
              <ul className="flex flex-col gap-3 text-sm text-brand-light/80">
                <li>{agencyConfig.whatsappNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 $2 $3-$4')}</li>
                <li>{agencyConfig.email}</li>
                <li>{agencyConfig.location}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} {agencyConfig.name}. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link to="/termos" className="hover:text-brand-accent">Termos</Link>
              <Link to="/privacidade" className="hover:text-brand-accent">Privacidade</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp CTA */}
      <a
        href={agencyConfig.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white px-5 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        FALAR NO WHATSAPP
      </a>
    </div>
  );
}
