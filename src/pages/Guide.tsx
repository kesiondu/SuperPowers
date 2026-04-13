import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Book, Shield, Zap, MessageSquare } from 'lucide-react';
import { Logo } from '../components/Logo';
import { LanguageSelector } from '../components/LanguageSelector';

const Guide: React.FC = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    // Update document title
    const originalTitle = document.title;
    document.title = t('guide.seoTitle');

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute('content');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('guide.seoDesc'));
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-1.5 sm:py-4" aria-label="Guide Navigation">
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
              {t('guide.title')}
            </h1>
            <p className="text-base sm:text-xl text-foreground-muted font-medium max-w-2xl mx-auto px-4">
              {t('guide.subtitle')}
            </p>
          </header>

          <div className="brutal-card bg-white p-6 md:p-12 lg:p-16">
            <div className="prose-brutal">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {t('guide.content')}
              </ReactMarkdown>
            </div>
          </div>

          {/* Quick Links / CTA */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/docs" className="brutal-card bg-bg-sky p-6 no-underline group">
              <Book className="mb-4 text-royal group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black uppercase mb-2">Documentation</h3>
              <p className="text-sm font-medium text-foreground-muted">Deep dive into technical specs.</p>
            </Link>
            <Link to="/docs/getting-started" className="brutal-card bg-accent-lime p-6 no-underline group">
              <Zap className="mb-4 text-foreground-dark group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black uppercase mb-2">Quick Start</h3>
              <p className="text-sm font-medium text-foreground-dark/70">Get running in 5 minutes.</p>
            </Link>
            <a href="https://github.com/obra/superpowers/discussions" target="_blank" rel="noopener noreferrer" className="brutal-card bg-bg-sage p-6 no-underline group">
              <MessageSquare className="mb-4 text-foreground-dark group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black uppercase mb-2">Community</h3>
              <p className="text-sm font-medium text-foreground-muted">Ask questions and share ideas.</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Guide;
