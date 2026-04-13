import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Lightbulb, Rocket, Target, Users } from 'lucide-react';
import { Logo } from '../components/Logo';
import { LanguageSelector } from '../components/LanguageSelector';

const UseCases: React.FC = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    // Update document title
    const originalTitle = document.title;
    document.title = t('useCases.seoTitle');

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute('content');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('useCases.seoDesc'));
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-1.5 sm:py-4" aria-label="Use Cases Navigation">
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
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 sm:mb-16 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
              {t('useCases.title')}
            </h1>
            <p className="text-base sm:text-xl text-foreground-muted font-medium max-w-2xl mx-auto px-4">
              {t('useCases.subtitle')}
            </p>
          </header>

          <div className="brutal-card bg-white p-6 md:p-12 lg:p-16">
            <div className="prose-brutal">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {t('useCases.content')}
              </ReactMarkdown>
            </div>
          </div>

          {/* Featured Use Cases Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="brutal-card bg-bg-sky p-8">
              <Rocket className="mb-6 text-royal" size={40} />
              <h3 className="text-2xl font-black uppercase mb-4">Enterprise Scaling</h3>
              <p className="font-medium text-foreground-muted">How Fortune 500 companies use Superpowers to manage thousands of microservices with small engineering teams.</p>
            </div>
            <div className="brutal-card bg-bg-sage p-8">
              <Target className="mb-6 text-foreground-dark" size={40} />
              <h3 className="text-2xl font-black uppercase mb-4">Quality Assurance</h3>
              <p className="font-medium text-foreground-muted">Achieving 99% test coverage automatically by empowering agents with specialized testing skills.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UseCases;
