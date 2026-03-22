import React from 'react';
import { Link } from 'react-router-dom';
import content from '../../content/service/index.json';

export default function Service() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex flex-col justify-end px-8 md:px-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 grayscale group overflow-hidden">
          <img alt="Architectural structure" className="w-full h-full object-cover scale-110" src={content.hero.backgroundImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="inline-block border border-outline-variant px-4 py-1 mb-6">
            <span className="text-[0.75rem] uppercase tracking-[0.3em] font-medium text-primary">{content.hero.badge}</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
            {content.hero.titleLine1}<br/>{content.hero.titleLine2}
          </h1>
          <p className="text-xl md:text-2xl font-light text-on-surface-variant max-w-2xl leading-relaxed">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Metric Grid */}
      <section className="border-y border-outline-variant/20 blueprint-grid">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
          {content.metrics.map((m, i) => (
            <div key={i} className="p-12">
              <span className="block text-[0.7rem] uppercase tracking-widest text-outline mb-4">{m.label}</span>
              <span className="text-5xl font-black text-primary tracking-tighter">{m.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-32 px-8 md:px-16 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">{content.competencies.heading}</h2>
            <p className="text-on-surface-variant leading-relaxed">{content.competencies.description}</p>
          </div>
          <div className="text-outline text-[0.75rem] uppercase tracking-[0.5em] pb-2 border-b border-outline-variant">
            {content.competencies.matrixLabel}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
          {content.competencies.cards.map((card, i) => (
            <div key={i} className={`group p-12 ${i < content.competencies.cards.length - 1 ? 'border-b md:border-b-0 md:border-r border-outline-variant/20' : ''} hover:bg-surface-container-high transition-colors duration-500`}>
              <span className="material-symbols-outlined text-primary text-4xl mb-8">{card.icon}</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity">{card.description}</p>
              <div className="w-8 h-[1px] bg-outline group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy / Quote */}
      <section className="relative py-40 px-8 md:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -z-10 translate-x-24 -skew-x-12"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <span className="block text-primary text-sm uppercase tracking-[0.4em] mb-12">{content.philosophy.label}</span>
              <blockquote className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-12">
                {content.philosophy.quote.split(content.philosophy.highlightedPhrase).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-primary not-italic">{content.philosophy.highlightedPhrase}</span>}
                  </React.Fragment>
                ))}
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 border border-outline-variant p-1">
                  <img alt={content.philosophy.authorName} className="w-full h-full object-cover" src={content.philosophy.authorImage} />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">{content.philosophy.authorName}</p>
                  <p className="text-xs text-outline uppercase tracking-widest">{content.philosophy.authorTitle}</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="border border-outline-variant p-2">
                <img alt="Modern skyscraper" className="w-full grayscale brightness-75" src={content.philosophy.buildingImage} />
                <div className="absolute -bottom-8 -left-8 bg-primary text-on-primary-container p-8 w-48 h-48 flex items-center justify-center text-center">
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">{content.philosophy.overlayText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-32 bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">{content.consultation.heading}<br/><span className="text-primary">{content.consultation.headingHighlight}</span></h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
                {content.consultation.description}
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-outline hover:text-primary transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined">call</span>
                  <span className="text-sm font-bold tracking-widest uppercase">{content.consultation.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-outline hover:text-primary transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined">mail</span>
                  <span className="text-sm font-bold tracking-widest uppercase">{content.consultation.email}</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-10 md:p-16 border border-outline-variant/30 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary"></div>
              <form className="space-y-8">
                <div className="group">
                  <label className="block text-[0.65rem] uppercase tracking-[0.3em] text-outline mb-2 group-focus-within:text-primary transition-colors">{content.consultation.fields.nameLabel}</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface placeholder:text-surface-container-highest uppercase text-sm tracking-widest py-3" placeholder={content.consultation.fields.namePlaceholder} type="text" />
                </div>
                <div className="group">
                  <label className="block text-[0.65rem] uppercase tracking-[0.3em] text-outline mb-2 group-focus-within:text-primary transition-colors">{content.consultation.fields.emailLabel}</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface placeholder:text-surface-container-highest uppercase text-sm tracking-widest py-3" placeholder={content.consultation.fields.emailPlaceholder} type="email" />
                </div>
                <div className="group">
                  <label className="block text-[0.65rem] uppercase tracking-[0.3em] text-outline mb-2 group-focus-within:text-primary transition-colors">{content.consultation.fields.intentLabel}</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface uppercase text-sm tracking-widest py-3 appearance-none">
                    {content.consultation.fields.intentOptions.map((opt, i) => (
                      <option key={i} className="bg-surface">{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="group">
                  <label className="block text-[0.65rem] uppercase tracking-[0.3em] text-outline mb-2 group-focus-within:text-primary transition-colors">{content.consultation.fields.specsLabel}</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface placeholder:text-surface-container-highest uppercase text-sm tracking-widest py-3 resize-none" placeholder={content.consultation.fields.specsPlaceholder} rows="3"></textarea>
                </div>
                <button className="w-full bg-primary text-on-primary-container py-5 text-sm font-black uppercase tracking-[0.5em] hover:bg-primary-container transition-all duration-300 active:scale-95" type="submit">
                  {content.consultation.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
