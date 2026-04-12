import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Github, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { LanguageSelector } from '../components/LanguageSelector';
import { Logo } from '../components/Logo';
import { BookOpen, GraduationCap, Layout } from 'lucide-react';

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
      <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 sm:py-4" aria-label="Documentation Navigation">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md brutal-border rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3">
          <Link to="/" className="flex items-center gap-2 hover:text-royal transition-colors no-underline text-foreground-dark" aria-label={t('nav.backToHome')}>
            <ArrowLeft size={18} className="sm:scale-110" aria-hidden="true" />
            <span className="font-bold text-sm sm:text-base">{t('nav.backToHome')}</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <Logo size={18} className="sm:scale-110" />
            <span className="font-extrabold text-lg sm:text-xl tracking-tight hidden xs:inline">SUPERPOWERS</span>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a 
              href="https://github.com/obra/superpowers" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="p-2 brutal-border rounded-full hover:bg-bg-beige transition-colors"
            >
              <Github size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="brutal-card bg-white p-6 sticky top-32">
              <h2 className="font-black text-xl uppercase mb-6 border-b-4 border-foreground-dark pb-2">
                {t('docs.title')}
              </h2>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xs font-black uppercase text-foreground-muted mb-3 tracking-widest">
                    {t('docs.overview')}
                  </h3>
                  <Link 
                    to="/docs" 
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all no-underline font-bold ${
                      !isAnyTutorial 
                        ? 'bg-accent-lime border-foreground-dark text-foreground-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                        : 'bg-white border-transparent text-foreground-muted hover:border-foreground-dark'
                    }`}
                  >
                    <BookOpen size={20} />
                    {t('docs.overview')}
                  </Link>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase text-foreground-muted mb-3 tracking-widest">
                    {t('docs.tutorials')}
                  </h3>
                  <div className="space-y-2">
                    <Link 
                      to="/docs/getting-started" 
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all no-underline font-bold ${
                        isGettingStarted 
                          ? 'bg-accent-lime border-foreground-dark text-foreground-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                          : 'bg-white border-transparent text-foreground-muted hover:border-foreground-dark'
                      }`}
                    >
                      <Zap size={20} />
                      {t('docs.gettingStarted')}
                    </Link>
                    <Link 
                      to="/docs/build-custom-skill" 
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all no-underline font-bold ${
                        isBuildSkill 
                          ? 'bg-accent-lime border-foreground-dark text-foreground-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                          : 'bg-white border-transparent text-foreground-muted hover:border-foreground-dark'
                      }`}
                    >
                      <GraduationCap size={20} />
                      {t('docs.buildSkill')}
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="brutal-card bg-white p-8 md:p-12">
              <div className="prose prose-slate max-w-none 
                prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase
                prose-h1:text-4xl md:prose-h1:text-6xl prose-h1:mb-8
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b-4 prose-h2:border-accent-lime prose-h2:pb-2
                prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium
                prose-li:font-medium prose-li:text-lg
                prose-code:bg-bg-beige prose-code:p-1 prose-code:rounded prose-code:brutal-border prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-foreground-dark prose-pre:text-white prose-pre:p-6 prose-pre:rounded-2xl prose-pre:brutal-border
                prose-a:text-royal prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:brutal-border prose-img:w-full prose-img:my-8
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {getContent()}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 border-t-2 border-foreground-dark bg-bg-beige">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <Logo size={20} />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-foreground-muted">
              {t('footer.copy')}
            </p>
            <p className="text-xs font-medium text-foreground-muted max-w-md mx-auto leading-tight">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Docs;
