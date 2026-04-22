import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import content from '../../content/home/index.json';

export default function Home() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 blueprint-grid">
          <div className="max-w-7xl w-full pt-16 md:pt-32">
            <div className="inline-block border border-outline-variant px-4 py-1 mb-8">
              <span className="text-[0.7rem] uppercase tracking-[0.3em] font-medium text-primary">{content.hero.badge}</span>
            </div>
            <h1 className="text-[clamp(2rem,9vw,8rem)] leading-[0.9] font-black tracking-tighter uppercase mb-12">
              {content.hero.titleLine1}<br />{content.hero.titleLine2}
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <p className="max-w-xl text-lg md:text-2xl font-light text-on-surface-variant leading-relaxed">
                {content.hero.description}
              </p>
              <div className="flex gap-4">
                <div className="w-32 h-[1px] bg-primary mb-4 hidden md:block"></div>
                <span className="text-[0.75rem] uppercase tracking-widest opacity-60">{content.hero.established}</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 right-12 hidden lg:block">
            <div className="p-8 border border-outline-variant aspect-square w-64 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-4xl" data-icon="architecture">architecture</span>
              <span className="text-[0.75rem] leading-tight opacity-70">{content.hero.cornerBox}</span>
            </div>
          </div>
        </section>

        {/* Credentials Strip */}
        {content.credentials && (
          <section className="py-20 px-8 md:px-24 bg-surface-container-lowest border-y border-outline-variant/40">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-tight">
                  {content.credentials.heading}
                </h2>
              </div>
              <div className="md:col-span-7 space-y-6">
                {content.credentials.lines?.map((line, i) => (
                  <p key={i} className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed">
                    {line}
                  </p>
                ))}
                {content.credentials.sectors?.length > 0 && (
                  <div className="pt-6">
                    <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-primary mb-4">
                      {content.credentials.sectorsLabel}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {content.credentials.sectors.map((sector, i) => (
                        <span key={i} className="inline-block px-3 py-2 text-xs uppercase tracking-widest border border-outline-variant text-on-surface-variant">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Strategic Solutions */}
        <section className="py-32 px-8 md:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-baseline gap-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{content.solutions.heading}</h2>
              <span className="text-primary font-mono text-sm tracking-widest">{content.solutions.counter}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant">
              {content.solutions.cards.map((card, i) => (
                <Link key={i} to={`/solutions/${card.slug}`} className={`${i === 0 ? 'md:col-span-8' : 'md:col-span-4'} bg-surface p-12 group hover:bg-surface-container transition-colors duration-500`}>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-primary-container mb-6 block">{card.label}</span>
                  <h3 className={`${i === 0 ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-bold mb-8 tracking-tight`}>{card.title}</h3>
                  <p className={`text-on-surface-variant ${i === 0 ? 'max-w-md' : ''} mb-12 leading-relaxed`}>{card.description}</p>
                  <div className="w-12 h-12 border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                </Link>
              ))}
              <div className="md:col-span-4 bg-surface overflow-hidden relative min-h-[400px]">
                <img alt="Modern minimalist architectural structure" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" src={content.solutions.featureImage} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{content.solutions.featureTitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-32 px-8 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-baseline gap-4">
              <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">{content.expertise.heading}</h2>
                <p className="text-on-surface-variant max-w-2xl text-lg font-light">{content.expertise.description}</p>
              </div>
              <span className="text-primary font-mono text-sm tracking-widest">{content.expertise.counter}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border border-outline-variant">
              {content.expertise.metrics.map((metric, i) => (
                <div key={i} className={`p-12 ${i < content.expertise.metrics.length - 1 ? 'border-b md:border-b-0 md:border-r border-outline-variant' : ''} flex flex-col gap-8`}>
                  <span className={`text-8xl font-black tracking-tighter ${metric.highlight ? 'text-primary' : 'text-on-surface'}`}>{metric.value}</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2">{metric.title}</h4>
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest opacity-60">{metric.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Impact */}
        {content.clientImpact?.enabled && content.clientImpact?.caseStudies?.length > 0 && (
        <section className="py-32 bg-surface-container-lowest overflow-hidden">
          <div className="px-8 md:px-24 mb-16 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{content.clientImpact.heading}</h2>
            <span className="text-primary font-mono text-sm tracking-widest">{content.clientImpact.counter}</span>
          </div>
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-8 px-8 md:px-24 overflow-x-auto no-scrollbar pb-12 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
          >
            {content.clientImpact.caseStudies.map((cs, i) => {
              if (cs.type === 'highlight') {
                return (
                  <div key={i} className="min-w-[400px] md:min-w-[600px] bg-primary text-on-primary p-12 flex flex-col justify-between h-[450px]">
                    <div className="flex justify-between items-start">
                      <span className="material-symbols-outlined text-on-primary text-5xl">bolt</span>
                      <span className="text-[0.7rem] uppercase font-bold tracking-[0.3em] text-on-primary/80">{cs.label}</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold leading-tight">{cs.headline}</p>
                    <div className="border-t border-on-primary/20 pt-8">
                      <span className="block font-bold uppercase tracking-widest">{cs.outcome}</span>
                    </div>
                  </div>
                );
              }
              return (
                <div key={i} className="min-w-[400px] md:min-w-[600px] bg-surface p-12 border border-outline-variant flex flex-col justify-between h-[450px]">
                  <div className="flex justify-between items-start">
                    <span className="material-symbols-outlined text-primary text-5xl">format_quote</span>
                    <span className="text-[0.7rem] uppercase font-bold tracking-[0.3em]">{cs.label}</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-light italic leading-relaxed">{cs.quote}</p>
                  <div className="border-t border-outline-variant pt-8">
                    <span className="block font-bold uppercase tracking-widest">{cs.author}</span>
                    <span className="text-sm opacity-60">{cs.company}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        )}

        {/* Final CTA */}
        <section className="py-48 px-8 md:px-24 bg-surface text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-mono text-sm tracking-widest mb-8 block">{content.cta.counter}</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">{content.cta.heading}</h2>
            <Link to="/consultation" className="px-12 py-5 bg-primary text-on-primary font-bold uppercase tracking-[0.2em] hover:bg-primary-container transition-all text-sm inline-block">{content.cta.primaryButton}</Link>
          </div>
        </section>
      </main>
  );
}
