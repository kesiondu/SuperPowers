import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Github, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSelector } from '../components/LanguageSelector';
import { Logo } from '../components/Logo';

const Docs: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white selection:bg-accent-lime selection:text-foreground-dark">
      {/* Simple Nav for Docs */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4" aria-label="Documentation Navigation">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md brutal-border rounded-2xl px-6 py-3">
          <Link to="/" className="flex items-center gap-2 hover:text-royal transition-colors no-underline text-foreground-dark" aria-label={t('nav.backToHome')}>
            <ArrowLeft size={20} aria-hidden="true" />
            <span className="font-bold">{t('nav.backToHome')}</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <Logo size={20} />
            <span className="font-extrabold text-xl tracking-tight hidden sm:inline">SUPERPOWERS</span>
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
        <div className="max-w-4xl mx-auto">
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
              prose-img:rounded-2xl prose-img:brutal-border
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {t('docs.content')}
              </ReactMarkdown>
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
