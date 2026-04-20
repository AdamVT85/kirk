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

function CourseChipsInline({ categories }) {
  const sorted = [...categories].sort((a, b) => a.courses.length - b.courses.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {sorted.map((category, i) => (
        <div key={i} className={category.courses.length >= 4 ? 'md:col-span-2' : ''}>
          <a href={category.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-4 group">
            <span className="material-symbols-outlined text-primary text-lg">{category.icon}</span>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{category.name}</h3>
          </a>
          <div className="flex flex-wrap gap-2">
            {category.courses.map((course, j) => (
              <a key={j} href={course.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-outline-variant/30 text-xs text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200">
                {course.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
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
          <h1 className="text-[clamp(2rem,9vw,6rem)] font-black leading-[0.85] tracking-tighter uppercase mb-8">
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
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">{content.overview.heading}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">{content.overview.description}</p>
          </div>
          {!content.courseCategories && content.overview.features && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
              {content.overview.features.map((feature, i) => (
                <div key={i} className={`group p-12 ${i < content.overview.features.length - 1 ? 'border-b md:border-b-0 md:border-r border-outline-variant/20' : ''} hover:bg-surface-container-high transition-colors duration-500`}>
                  <span className="material-symbols-outlined text-primary text-4xl mb-8 block">{feature.icon}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
          {content.courseCategories && <CourseChipsInline categories={content.courseCategories.categories} />}
        </div>
      </section>

      {/* Sectors (optional) */}
      {content.sectors && (
        <section className="py-32 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">{content.sectors.heading}</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">{content.sectors.description}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-outline-variant/20">
              {content.sectors.items.map((sector, i) => (
                <div key={i} className="bg-surface-container-low p-8 min-w-0 flex flex-col items-center text-center gap-4 group hover:bg-surface-container-high transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">{sector.icon}</span>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold break-words">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* First Aid (optional — hidden when courseCategories present) */}
      {content.firstAid && !content.courseCategories && (
        <section className="py-32 px-8 md:px-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">{content.firstAid.heading}</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">{content.firstAid.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-outline-variant/20">
              {content.firstAid.courses.map((course, i) => (
                <div key={i} className="bg-surface-container-low p-8 group hover:bg-surface-container-high transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">emergency</span>
                  <h3 className="text-sm font-bold uppercase tracking-tight mb-2">{course.title}</h3>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-on-surface-variant opacity-60">{course.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
          {content.cta.buttonUrl ? (
            <a href={content.cta.buttonUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-primary text-on-primary-container font-bold uppercase tracking-[0.2em] hover:bg-primary-container transition-all text-sm">
              {content.cta.buttonText}
            </a>
          ) : (
            <Link to="/consultation" className="inline-block px-12 py-5 bg-primary text-on-primary-container font-bold uppercase tracking-[0.2em] hover:bg-primary-container transition-all text-sm">
              {content.cta.buttonText}
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
