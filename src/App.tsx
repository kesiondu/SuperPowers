import { motion } from "motion/react";
import { 
  Zap, 
  Terminal, 
  Shield, 
  Cpu, 
  ArrowRight, 
  Github, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Code2,
  Command
} from "lucide-react";

const DoodleArrow = () => (
  <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="absolute -bottom-12 -left-12 hidden lg:block text-foreground-dark opacity-40">
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
  >
    <Sparkles size={24} fill="currentColor" />
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent-lime selection:text-foreground-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md brutal-border rounded-2xl px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-accent-lime brutal-border rounded-lg p-1.5">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">SUPERPOWERS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a href="#features" className="hover:text-royal transition-colors">Features</a>
            <a href="#cli" className="hover:text-royal transition-colors">CLI</a>
            <a href="https://github.com/obra/superpowers#readme" target="_blank" rel="noopener noreferrer" className="hover:text-royal transition-colors">Docs</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/obra/superpowers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 brutal-border rounded-full hover:bg-bg-beige transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://github.com/obra/superpowers#getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-primary py-2 px-4 text-sm no-underline"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

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
              v2.0 is now available with 50+ new scripts
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9]"
            >
              AGENTIC SKILLS <br />
              <span className="text-royal relative">
                THAT WORK
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-lime" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-foreground-muted font-medium"
            >
              Superpowers is an agentic skills framework and software development methodology. 
              Give your AI agents the edge with a curated library of high-performance skills.
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
                Install Now <ArrowRight size={20} />
              </a>
              <a 
                href="https://github.com/obra/superpowers"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-secondary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 no-underline"
              >
                <Github size={20} /> Star on GitHub
              </a>
            </motion.div>
          </div>

          {/* Floating Feature Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Terminal />, title: "Smart CLI", desc: "Intuitive commands that predict your next move." },
              { icon: <Shield />, title: "Safe & Secure", desc: "Open source scripts you can trust and audit." },
              { icon: <Cpu />, title: "Instant Setup", desc: "One command to rule them all. Zero config needed." }
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

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-bg-sage">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                BUILT FOR THE <br /> MODERN DEVELOPER
              </h2>
              <p className="text-lg text-foreground-muted font-medium">
                Stop wasting time on repetitive tasks. Superpowers provides a curated collection of utilities that integrate seamlessly into your shell.
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
                Used by 2,000+ devs
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white brutal-border rounded-3xl p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="bg-royal text-white brutal-border rounded-full px-4 py-1 text-xs font-bold w-fit mb-6">
                  METHODOLOGY
                </div>
                <h3 className="text-3xl font-extrabold mb-4">Agentic Skills Framework</h3>
                <p className="text-foreground-muted font-medium mb-8">
                  Superpowers isn't just a tool; it's a methodology. It provides a structured way to give AI agents the specific skills they need to handle complex software development tasks.
                </p>
                <div className="space-y-3">
                  {["Standardized Skill Library", "Agent-First Design", "Scalable Methodology"].map((item, i) => (
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
                <h4 className="text-xl font-bold mb-2">Skills Library</h4>
                <p className="text-sm text-foreground-muted font-medium">A curated collection of agentic skills ready to be deployed in your workflow.</p>
              </div>
              <div className="brutal-card bg-royal/10">
                <Command className="mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Multi-Platform</h4>
                <p className="text-sm text-foreground-muted font-medium">Native support for Claude Code, Cursor, Copilot, and Gemini CLI.</p>
              </div>
              <div className="brutal-card bg-bg-sky col-span-1 sm:col-span-2 flex flex-row items-center gap-6">
                <div className="bg-white brutal-border rounded-xl p-4 brutal-shadow">
                  <Sparkles className="text-accent-lime" fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Methodology First</h4>
                  <p className="text-sm text-foreground-muted font-medium">Built on a philosophy of making AI agents more reliable and capable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-bg-royal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              WHY CHOOSE <br /> SUPERPOWERS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm brutal-border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <XCircle className="text-red-400" /> The Old Way
                </h3>
                <ul className="space-y-4 text-white/80 font-medium">
                  <li className="flex items-center gap-3 line-through opacity-50">
                    Unreliable AI agent behavior
                  </li>
                  <li className="flex items-center gap-3 line-through opacity-50">
                    Manual prompt engineering for every task
                  </li>
                  <li className="flex items-center gap-3 line-through opacity-50">
                    Fragmented developer workflows
                  </li>
                  <li className="flex items-center gap-3 line-through opacity-50">
                    Lack of standardized AI toolsets
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 relative">
              <DoodleArrow />
              <div className="bg-white text-foreground-dark brutal-border rounded-3xl p-8 brutal-shadow">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-accent-lime" fill="currentColor" /> The Superpowers Way
                </h3>
                <ul className="space-y-4 font-bold">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-lime rounded-full" />
                    Predictable, high-performance agent skills
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-lime rounded-full" />
                    Standardized methodology for AI development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-lime rounded-full" />
                    Seamless integration across multiple AI platforms
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-lime rounded-full" />
                    Scalable framework for team collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="cli" className="py-24 px-4 bg-bg-beige">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">INSTALLATION</h2>
            <p className="text-foreground-muted font-medium">Get Superpowers up and running in your favorite environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="brutal-card bg-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Terminal size={24} /> Claude Code
              </h3>
              <p className="text-sm text-foreground-muted mb-6">Install directly from the Official Marketplace or via Plugin Marketplace.</p>
              <div className="bg-foreground-dark p-4 rounded-xl font-mono text-sm text-white brutal-border">
                <div className="text-white/40 mb-2"># Install via marketplace</div>
                <div className="flex gap-2">
                  <span className="text-accent-lime">$</span>
                  <span>claude-code install superpowers</span>
                </div>
              </div>
            </div>

            <div className="brutal-card bg-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code2 size={24} /> Cursor & Others
              </h3>
              <p className="text-sm text-foreground-muted mb-6">Works seamlessly with Cursor, GitHub Copilot CLI, and Gemini CLI.</p>
              <div className="bg-foreground-dark p-4 rounded-xl font-mono text-sm text-white brutal-border">
                <div className="text-white/40 mb-2"># Clone and link</div>
                <div className="flex gap-2">
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

          <div className="mt-12 bg-accent-lime brutal-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-extrabold mb-2">Verify Installation</h4>
              <p className="font-medium">Run the check command to ensure everything is set up correctly.</p>
            </div>
            <div className="bg-foreground-dark p-4 rounded-xl font-mono text-sm text-white brutal-border w-full md:w-auto">
              <div className="flex gap-2">
                <span className="text-accent-lime">$</span>
                <span>sp verify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-2 border-foreground-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-accent-lime brutal-border rounded-lg p-1.5">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">SUPERPOWERS</span>
          </div>

          <div className="text-sm font-bold text-foreground-muted">
            © 2026 Superpowers Project. Open source under MIT License.
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/obra/superpowers" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 brutal-border rounded-full hover:bg-accent-lime transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://github.com/obra/superpowers/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-primary py-2 px-6 no-underline"
            >
              Download
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
