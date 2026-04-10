import React from 'react';
import { useParams, Link } from 'react-router-dom';

const solutions = {
  'health-safety-environmental': () => import('../../content/solutions/health-safety-environmental.json'),
  'fire-risk-assessment': () => import('../../content/solutions/fire-risk-assessment.json'),
  'facilities-project-management': () => import('../../content/solutions/facilities-project-management.json'),
  'integrated-management-systems': () => import('../../content/solutions/integrated-management-systems.json'),
  'risk-management': () => import('../../content/solutions/risk-management.json'),
  'training-education': () => import('../../content/solutions/training-education.json'),
};

function useSolutionContent(slug) {
  const [content, setContent] = React.useState(null);
  React.useEffect(() => {
    const loader = solutions[slug];
    if (loader) {
      loader().then((mod) => setContent(mod.default));
    }
  }, [slug]);
  return content;
}

export default function SolutionLanding() {
  const { slug } = useParams();
  const content = useSolutionContent(slug);

  if (!content) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-on-surface-variant uppercase tracking-widest text-sm">Loading...</p>
      </main>
    );
  }

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end px-8 md:px-16 pb-24 blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl">
          <div className="inline-block border border-outline-variant px-4 py-1 mb-6">
            <span className="text-[0.75rem] uppercase tracking-[0.3em] font-medium text-primary">{content.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-[6rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
            {content.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light text-on-surface-variant max-w-2xl leading-relaxed mb-6">
            {content.hero.subtitle}
          </p>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed font-light">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="py-32 px-8 md:px-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">{content.overview.heading}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">{content.overview.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
            {content.overview.features.map((feature, i) => (
              <div key={i} className={`group p-12 ${i < content.overview.features.length - 1 ? 'border-b md:border-b-0 md:border-r border-outline-variant/20' : ''} hover:bg-surface-container-high transition-colors duration-500`}>
                <span className="material-symbols-outlined text-primary text-4xl mb-8 block">{feature.icon}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-20">{content.approach.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {content.approach.steps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-8xl font-black text-primary/10 absolute -top-6 -left-2">{step.number}</span>
                <div className="relative pt-12">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed font-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">{content.cta.heading}</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-12 max-w-2xl mx-auto">{content.cta.description}</p>
          <Link to="/consultation" className="inline-block px-12 py-5 bg-primary text-on-primary-container font-bold uppercase tracking-[0.2em] hover:bg-primary-container transition-all text-sm">
            {content.cta.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}
