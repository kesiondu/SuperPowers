import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Github, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { LanguageSelector } from '../components/LanguageSelector';
import { Logo } from '../components/Logo';
import { BookOpen, GraduationCap, Layout, Compass, Lightbulb } from 'lucide-react';

const Docs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();

  const isGettingStarted = slug === 'getting-started';
  const isBuildSkill = slug === 'build-custom-skill';
  const isAnyTutorial = isGettingStarted || isBuildSkill;

  React.useEffect(() => {
    // Update document title
    const originalTitle = document.title;
    let pageTitle = t('docs.overview');
    if (isGettingStarted) pageTitle = t('docs.gettingStarted');
    if (isBuildSkill) pageTitle = t('docs.buildSkill');
    
    document.title = `${pageTitle} | Superpowers Agentic Skills Framework`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute('content');
    if (metaDescription) {
      let desc = t('hero.desc');
      if (isGettingStarted) desc = t('docs.gettingStartedContent').substring(0, 160);
      if (isBuildSkill) desc = t('docs.buildSkillContent').substring(0, 160);
      metaDescription.setAttribute('content', desc);
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
  }, [t, i18n.language, isGettingStarted, isBuildSkill]);

  const getContent = () => {
    if (isGettingStarted) return t('docs.gettingStartedContent');
    if (isBuildSkill) return t('docs.buildSkillContent');
    return t('docs.content');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent-lime selection:text-foreground-dark">
      {/* Simple Nav for Docs */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-1.5 sm:py-4" aria-label="Documentation Navigation">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md brutal-border rounded-xl sm:rounded-2xl px-3 sm:px-6 py-1.5 sm:py-3">
          <Link to="/" className="flex items-center gap-2 hover:text-royal transition-colors no-underline text-foreground-dark" aria-label={t('nav.backToHome')}>
            <ArrowLeft size={16} className="sm:scale-110" aria-hidden="true" />
            <span className="font-bold text-xs sm:text-base">{t('nav.backToHome')}</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <Logo size={16} className="sm:scale-125" />
            <span className="font-extrabold text-base sm:text-xl tracking-tight hidden xs:inline">SUPERPOWERS</span>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a 
              href="https://github.com/obra/superpowers" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="p-1.5 brutal-border rounded-full hover:bg-bg-beige transition-colors"
            >
              <Github size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 sm:pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="brutal-card bg-white p-4 sm:p-6 sticky top-24 sm:top-32">
              <h2 className="font-black text-lg sm:text-xl uppercase mb-4 sm:mb-6 border-b-4 border-foreground-dark pb-2">
                {t('docs.title')}
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <section>
                  <h3 className="text-[10px] sm:text-xs font-black uppercase text-foreground-muted mb-2 sm:mb-3 tracking-widest">
                    {t('docs.overview')}
                  </h3>
                  <Link 
                    to="/docs" 
                    className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl border-2 transition-all no-underline font-bold text-sm sm:text-base ${
                      !isAnyTutorial 
                        ? 'bg-accent-lime border-foreground-dark text-foreground-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                        : 'bg-white border-transparent text-foreground-muted hover:border-foreground-dark'
                    }`}
                  >
                    <BookOpen size={18} />
                    {t('docs.overview')}
                  </Link>
                </section>

                <section>
                  <h3 className="text-[10px] sm:text-xs font-black uppercase text-foreground-muted mb-2 sm:mb-3 tracking-widest">
                    {t('docs.tutorials')}
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Link 
                      to="/docs/getting-started" 
                      className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl border-2 transition-all no-underline font-bold text-sm sm:text-base ${
                        isGettingStarted 
                          ? 'bg-accent-lime border-foreground-dark text-foreground-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                          : 'bg-white border-transparent text-foreground-muted hover:border-foreground-dark'
                      }`}
                    >
                      <Zap size={18} />
                      {t('docs.gettingStarted')}
                    </Link>
                    <Link 
                      to="/docs/build-custom-skill" 
                      className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl border-2 transition-all no-underline font-bold text-sm sm:text-base ${
                        isBuildSkill 
                          ? 'bg-accent-lime border-foreground-dark text-foreground-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                          : 'bg-white border-transparent text-foreground-muted hover:border-foreground-dark'
                      }`}
                    >
                      <GraduationCap size={18} />
                      {t('docs.buildSkill')}
                    </Link>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] sm:text-xs font-black uppercase text-foreground-muted mb-2 sm:mb-3 tracking-widest">
                    Resources
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Link 
                      to="/guide" 
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl border-2 transition-all no-underline font-bold text-sm sm:text-base bg-white border-transparent text-foreground-muted hover:border-foreground-dark"
                    >
                      <Compass size={18} />
                      {t('guide.title')}
                    </Link>
                    <Link 
                      to="/use-cases" 
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl border-2 transition-all no-underline font-bold text-sm sm:text-base bg-white border-transparent text-foreground-muted hover:border-foreground-dark"
                    >
                      <Lightbulb size={18} />
                      {t('useCases.title')}
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="brutal-card bg-white p-6 md:p-12 lg:p-16">
              <div className="prose-brutal">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {getContent()}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 border-t-2 border-foreground-dark bg-bg-beige">
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
};

export default Docs;
