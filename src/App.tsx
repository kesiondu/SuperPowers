import React from 'react';
import { Github, Zap, Terminal, Shield, Cpu, ArrowRight, Code2, Command, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Docs from './pages/Docs';
import Guide from './pages/Guide';
import UseCases from './pages/UseCases';
import { LanguageSelector } from './components/LanguageSelector';
import { Logo } from './components/Logo';

const DoodleArrow = () => (
  <svg 
    width="100" 
    height="60" 
    viewBox="0 0 100 60" 
    fill="none" 
    className="absolute -bottom-12 -left-12 hidden lg:block text-foreground-dark opacity-40"
    aria-hidden="true"
  >
    <path d="M10 10C30 40 70 50 90 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
    <path d="M85 30L92 18L80 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FloatingSparkle = ({ className }: { className?: string }) => (
  <motion.div 
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
    className={`absolute text-accent-lime ${className}`}
    aria-hidden="true"
  >
    <Sparkles size={24} fill="currentColor" />
  </motion.div>
);

export default function App() {
  const { t } = useTranslation();
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/docs/:slug" element={<Docs />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/use-cases" element={<UseCases />} />
    </Routes>
  );
}

const Home = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    // Update document title
    const originalTitle = document.title;
    document.title = `Superpowers | Agentic Skills Framework for AI`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute('content');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('hero.desc'));
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonicalLink?.getAttribute('href');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.href);
    }

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
      if (canonicalLink && originalCanonical) {
        canonicalLink.setAttribute('href', originalCanonical);
      }
    };
  }, [t, i18n.language]);

  return (
    <div className="min-h-screen bg-white selection:bg-accent-lime selection:text-foreground-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-1.5 sm:py-4" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md brutal-border rounded-xl sm:rounded-2xl px-3 sm:px-6 py-1.5 sm:py-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 no-underline text-foreground-dark group" aria-label="Superpowers Home">
            <Logo size={16} className="sm:scale-125" />
            <span className="font-extrabold text-base sm:text-xl tracking-tight group-hover:text-royal transition-colors">SUPERPOWERS</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 font-semibold text-sm">
            <a href="#how-it-works" className="hover:text-royal transition-colors">{t('nav.howItWorks')}</a>
            <a href="#features" className="hover:text-royal transition-colors">{t('nav.features')}</a>
            <a href="#cli" className="hover:text-royal transition-colors">{t('nav.installation')}</a>
            <a href="#workflow" className="hover:text-royal transition-colors">{t('nav.workflow')}</a>
            <a href="#skills" className="hover:text-royal transition-colors">{t('nav.skills')}</a>
            <Link to="/docs" className="hover:text-royal transition-colors no-underline text-foreground-dark">{t('nav.docs')}</Link>
            <Link to="/guide" className="hover:text-royal transition-colors no-underline text-foreground-dark">Guide</Link>
            <Link to="/use-cases" className="hover:text-royal transition-colors no-underline text-foreground-dark">Use Cases</Link>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a 
              href="https://github.com/obra/superpowers" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="p-2 brutal-border rounded-full hover:bg-bg-beige transition-colors hidden sm:flex"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/obra/superpowers#getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-primary py-2 px-4 text-sm no-underline"
            >
              {t('nav.getStarted')}
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-bg-sky relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <FloatingSparkle className="top-0 left-10" />
          <FloatingSparkle className="bottom-20 right-10" />
          
          <div className="text-center space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white brutal-border rounded-full px-4 py-1.5 text-sm font-bold"
            >
              <span className="bg-accent-lime rounded-full px-2 py-0.5 text-[10px]">NEW</span>
              {t('hero.badge')}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9]"
            >
              {t('hero.title1')} <br />
              <span className="text-royal relative">
                {t('hero.title2')}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-lime" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <br /> {t('hero.title3')}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-foreground-muted font-medium"
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a 
                href="https://github.com/obra/superpowers#installation"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-primary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 no-underline"
              >
                {t('hero.installBtn')} <ArrowRight size={20} />
              </a>
              <a 
                href="https://github.com/obra/superpowers"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-secondary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 no-underline"
              >
                <Github size={20} /> {t('hero.githubBtn')}
              </a>
            </motion.div>
          </div>

          {/* Floating Feature Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Terminal />, title: t('howItWorks.step1Title'), desc: t('howItWorks.step1Desc') },
              { icon: <Shield />, title: t('howItWorks.step2Title'), desc: t('howItWorks.step2Desc') },
              { icon: <Cpu />, title: t('howItWorks.step3Title'), desc: t('howItWorks.step3Desc') }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="brutal-card group"
              >
                <div className="bg-bg-beige brutal-border rounded-xl p-3 w-fit mb-4 group-hover:bg-accent-lime transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-foreground-muted font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-white border-y-2 border-foreground-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-foreground-muted font-medium max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-lime brutal-border rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t('howItWorks.step1Title')}</h3>
                  <p className="text-foreground-muted font-medium">{t('howItWorks.step1Desc')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-bg-sky brutal-border rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t('howItWorks.step2Title')}</h3>
                  <p className="text-foreground-muted font-medium">{t('howItWorks.step2Desc')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-bg-sage brutal-border rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t('howItWorks.step3Title')}</h3>
                  <p className="text-foreground-muted font-medium">{t('howItWorks.step3Desc')}</p>
                </div>
              </div>
            </div>
            <div className="bg-bg-beige brutal-border rounded-3xl p-8 brutal-shadow relative">
              <div className="bg-foreground-dark text-white p-6 rounded-2xl font-mono text-sm space-y-2">
                <div className="text-accent-lime"># Superpowers in action</div>
                <div className="flex gap-2">
                  <span className="text-white/40">$</span>
                  <span>sp run deploy-skill --name "auth-flow"</span>
                </div>
                <div className="text-white/60">
                  <div>{">"} Analyzing project structure...</div>
                  <div>{">"} Detected React + Firebase</div>
                  <div>{">"} Injecting agentic auth skill...</div>
                  <div className="text-accent-lime">{">"} Success! Agent now has Auth Superpowers.</div>
                </div>
              </div>
              <FloatingSparkle className="-top-6 -right-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-bg-sage">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {t('features.title')}
              </h2>
              <p className="text-lg text-foreground-muted font-medium">
                {t('features.desc')}
              </p>
            </div>
            <div className="bg-white brutal-border rounded-2xl p-4 flex items-center gap-4 brutal-shadow">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/dev${i}/100/100`} 
                    alt={`Developer ${i}`} 
                    className="w-10 h-10 rounded-full brutal-border"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm font-bold">
                {t('features.stats')}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white brutal-border rounded-3xl p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="bg-royal text-white brutal-border rounded-full px-4 py-1 text-xs font-bold w-fit mb-6">
                  {t('features.methodologyTag')}
                </div>
                <h3 className="text-3xl font-extrabold mb-4">{t('features.methodologyTitle')}</h3>
                <p className="text-foreground-muted font-medium mb-8">
                  {t('features.methodologyDesc')}
                </p>
                <div className="space-y-3">
                  {(t('features.methodologyList', { returnObjects: true }) as string[]).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold">
                      <div className="text-accent-lime bg-foreground-dark rounded-full p-0.5">
                        <CheckCircle2 size={16} fill="currentColor" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-10 -right-20 w-64 h-64 bg-bg-sky rounded-full brutal-border -z-0 opacity-50 group-hover:scale-110 transition-transform" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="brutal-card bg-accent-lime/10">
                <Code2 className="mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">{t('skills.title')}</h4>
                <p className="text-sm text-foreground-muted font-medium">{t('skills.badge')}</p>
              </div>
              <div className="brutal-card bg-royal/10">
                <Command className="mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">{t('features.multiPlatformTitle')}</h4>
                <p className="text-sm text-foreground-muted font-medium">{t('features.multiPlatformDesc')}</p>
              </div>
              <div className="brutal-card bg-bg-sky col-span-1 sm:col-span-2 flex flex-row items-center gap-6">
                <div className="bg-white brutal-border rounded-xl p-4 brutal-shadow">
                  <Sparkles className="text-accent-lime" fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{t('features.methodologyFirstTitle')}</h4>
                  <p className="text-sm text-foreground-muted font-medium">{t('features.methodologyFirstDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-royal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              {t('comparison.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm brutal-border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <XCircle className="text-red-400" /> {t('comparison.oldWay')}
                </h3>
                <ul className="space-y-4 text-white/80 font-medium">
                  {(t('comparison.oldList', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 line-through opacity-50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 relative">
              <DoodleArrow />
              <div className="bg-white text-foreground-dark brutal-border rounded-3xl p-8 brutal-shadow">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-accent-lime" fill="currentColor" /> {t('comparison.newWay')}
                </h3>
                <ul className="space-y-4 font-bold">
                  {(t('comparison.newList', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-lime rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="cli" className="py-24 px-4 bg-bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{t('installation.title')}</h2>
            <p className="text-xl text-foreground-muted font-medium max-w-2xl mx-auto">
              {t('installation.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Claude Code */}
            <div className="brutal-card bg-white flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-royal text-white p-2 rounded-lg brutal-border">
                  <Terminal size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t('installation.claudeTitle')}</h3>
              </div>
              <p className="text-sm text-foreground-muted mb-6 flex-grow">{t('installation.claudeDesc')}</p>
              <div className="bg-foreground-dark p-4 rounded-xl font-mono text-xs text-white brutal-border">
                <div className="text-white/40 mb-1"># Official Marketplace</div>
                <div className="flex gap-2 mb-3">
                  <span className="text-accent-lime">$</span>
                  <span>claude-code install superpowers</span>
                </div>
                <div className="text-white/40 mb-1"># Plugin Marketplace</div>
                <div className="flex gap-2">
                  <span className="text-accent-lime">$</span>
                  <span>claude-code plugin add superpowers</span>
                </div>
              </div>
            </div>

            {/* Cursor */}
            <div className="brutal-card bg-white flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent-lime text-foreground-dark p-2 rounded-lg brutal-border">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t('installation.cursorTitle')}</h3>
              </div>
              <p className="text-sm text-foreground-muted mb-6 flex-grow">{t('installation.cursorDesc')}</p>
              <div className="bg-foreground-dark p-4 rounded-xl font-mono text-xs text-white brutal-border">
                <div className="text-white/40 mb-1"># In Cursor Terminal</div>
                <div className="flex gap-2">
                  <span className="text-accent-lime">$</span>
                  <span>cursor --install-plugin superpowers</span>
                </div>
              </div>
            </div>

            {/* CLI Tools */}
            <div className="brutal-card bg-white flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-bg-sky text-foreground-dark p-2 rounded-lg brutal-border">
                  <Command size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t('installation.cliTitle')}</h3>
              </div>
              <p className="text-sm text-foreground-muted mb-6 flex-grow">{t('installation.cliDesc')}</p>
              <div className="bg-foreground-dark p-4 rounded-xl font-mono text-xs text-white brutal-border">
                <div className="text-white/40 mb-1"># Manual Installation</div>
                <div className="flex gap-2 mb-2">
                  <span className="text-accent-lime">$</span>
                  <span>git clone https://github.com/obra/superpowers</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-accent-lime">$</span>
                  <span>cd superpowers && ./install.sh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-accent-lime brutal-border rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 brutal-shadow">
            <div className="max-w-xl">
              <h4 className="text-3xl font-extrabold mb-2">{t('installation.verifyTitle')}</h4>
              <p className="font-bold text-foreground-dark/80">{t('installation.verifyDesc')}</p>
            </div>
            <div className="bg-foreground-dark p-6 rounded-2xl font-mono text-lg text-white brutal-border w-full md:w-auto">
              <div className="flex gap-3">
                <span className="text-accent-lime">$</span>
                <span>sp verify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Workflow Section */}
      <section id="workflow" className="py-24 px-4 bg-white border-t-2 border-foreground-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('workflow.title')}</h2>
            <p className="text-xl text-foreground-muted font-medium max-w-2xl mx-auto">
              {t('workflow.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: t('workflow.step1'), desc: t('workflow.step1Desc') },
              { step: "02", title: t('workflow.step2'), desc: t('workflow.step2Desc') },
              { step: "03", title: t('workflow.step3'), desc: t('workflow.step3Desc') },
              { step: "04", title: t('workflow.step4'), desc: t('workflow.step4Desc') }
            ].map((item, i) => (
              <div key={i} className="brutal-card bg-white relative pt-12">
                <div className="absolute top-4 left-4 text-4xl font-black text-accent-lime/30">{item.step}</div>
                <h4 className="text-xl font-bold mb-2 relative z-10">{item.title}</h4>
                <p className="text-sm text-foreground-muted font-medium relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Library Section */}
      <section id="skills" className="py-24 px-4 bg-bg-sky border-t-2 border-foreground-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t('skills.title')}</h2>
            <div className="bg-white brutal-border rounded-full px-6 py-2 font-bold brutal-shadow">
              {t('skills.badge')}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('skills.skill1'), desc: t('skills.skill1Desc') },
              { title: t('skills.skill2'), desc: t('skills.skill2Desc') },
              { title: t('skills.skill3'), desc: t('skills.skill3Desc') },
              { title: t('skills.skill4'), desc: t('skills.skill4Desc') },
              { title: t('skills.skill5'), desc: t('skills.skill5Desc') },
              { title: t('skills.skill6'), desc: t('skills.skill6Desc') }
            ].map((skill, i) => (
              <div key={i} className="brutal-card bg-white hover:bg-accent-lime transition-colors group">
                <h4 className="text-2xl font-bold mb-2">{skill.title}</h4>
                <p className="text-foreground-muted font-medium group-hover:text-foreground-dark transition-colors">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-4 bg-royal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">{t('philosophy.title')}</h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            {t('philosophy.quote')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {(t('philosophy.tags', { returnObjects: true }) as string[]).map((tag, i) => (
              <div key={i} className="bg-white/10 brutal-border border-white/20 rounded-full px-6 py-2 font-bold">{tag}</div>
            ))}
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-2 border-foreground-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Logo size={20} />
            <span className="font-extrabold text-xl tracking-tight">SUPERPOWERS</span>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm font-bold">
              <Link to="/docs" className="hover:text-royal transition-colors no-underline text-foreground-dark">Documentation</Link>
              <Link to="/guide" className="hover:text-royal transition-colors no-underline text-foreground-dark">User Guide</Link>
              <Link to="/use-cases" className="hover:text-royal transition-colors no-underline text-foreground-dark">Use Cases</Link>
              <a href="https://github.com/obra/superpowers/discussions" target="_blank" rel="noopener noreferrer" className="hover:text-royal transition-colors no-underline text-foreground-dark">Community</a>
            </div>
            <div className="text-sm font-bold text-foreground-muted">
              {t('footer.copy')}
            </div>
            <div className="text-[10px] sm:text-xs font-medium text-foreground-muted max-w-[280px] sm:max-w-xs text-center md:text-left leading-tight">
              {t('footer.disclaimer')}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/obra/superpowers" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 brutal-border rounded-full hover:bg-accent-lime transition-colors"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/obra/superpowers/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-primary py-2 px-6 no-underline"
            >
              {t('footer.download')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
