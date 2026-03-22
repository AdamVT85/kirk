import React from 'react';
import { Link } from 'react-router-dom';
import content from '../../content/insights/index.json';

export default function Insights() {
  return (
    <main className="pt-32 pb-24 px-8 md:px-12">
      {/* Hero Header */}
      <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block border border-outline-variant px-3 py-1">
            <span className="text-[0.7rem] uppercase tracking-[0.3em] font-bold text-primary">{content.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
            {content.hero.titleLine1}<br/>
            <span className="text-primary">{content.hero.titleLine2}</span>
          </h1>
        </div>
        <div className="md:w-1/3 text-on-surface-variant font-light leading-relaxed">
          <p>{content.hero.description}</p>
        </div>
      </header>

      {/* Category Filters */}
      <div className="mb-16 flex flex-wrap gap-4 border-b border-outline-variant/30 pb-8">
        {content.filters.map((filter, i) => (
          <button key={i} className={`px-6 py-2 ${i === 0 ? 'bg-primary text-on-primary font-bold' : 'border border-outline-variant text-on-surface-variant font-medium hover:border-primary hover:text-primary'} text-[0.75rem] uppercase tracking-widest transition-all`}>
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Featured Post */}
        <article className="md:col-span-8 group">
          <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-white/5">
            <img className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out" src={content.featured.image} alt="Featured insight" />
            <div className="absolute top-0 left-0 bg-primary text-on-primary px-4 py-2 font-bold text-[0.7rem] uppercase tracking-widest">
              {content.featured.badge}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-[0.7rem] uppercase tracking-widest font-bold text-on-surface-variant">
              <span>{content.featured.category}</span>
              <span className="w-1 h-1 bg-primary"></span>
              <span>{content.featured.readTime}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
              {content.featured.title}
            </h2>
            <p className="text-on-surface-variant font-light max-w-2xl leading-relaxed">
              {content.featured.description}
            </p>
            <Link className="mt-4 flex items-center gap-2 text-primary font-bold text-[0.8rem] uppercase tracking-widest group-hover:translate-x-2 transition-transform" to="/insights">
              {content.featured.linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <div className="md:col-span-4 flex flex-col gap-12">
          <div className="p-8 border border-outline-variant/30 bg-surface-container-lowest">
            <h3 className="text-xl font-bold tracking-tighter mb-6 uppercase border-b border-primary pb-4">{content.metricLedger.heading}</h3>
            <div className="space-y-8">
              {content.metricLedger.metrics.map((m, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-4xl font-black text-primary tracking-tighter">{m.value}</span>
                  <span className="text-[0.65rem] uppercase tracking-widest font-bold opacity-60">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <article className="group cursor-pointer">
              <div className="aspect-square w-full mb-6 overflow-hidden">
                <img className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 transition-all duration-500" src={content.sidebarArticle.image} alt={content.sidebarArticle.title} />
              </div>
              <span className="text-[0.65rem] uppercase tracking-widest font-bold text-primary mb-2 block">{content.sidebarArticle.category}</span>
              <h4 className="text-xl font-bold tracking-tight uppercase leading-none group-hover:underline underline-offset-4 decoration-primary">
                {content.sidebarArticle.title}
              </h4>
            </article>
          </div>
        </div>

        {/* Grid Articles */}
        {content.gridArticles.map((article, i) => (
          <article key={i} className="md:col-span-4 group mt-12 cursor-pointer">
            <div className="relative aspect-[4/5] mb-8 border border-white/5 overflow-hidden">
              <img className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700" src={article.image} alt={article.title} />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant">
                <span>{article.category}</span>
                <span className="w-1 h-1 bg-outline-variant"></span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tighter leading-tight uppercase group-hover:text-primary transition-colors">
                {article.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter */}
      <section className="mt-32 border border-outline-variant/30 relative overflow-hidden bg-surface-container-low p-12 md:p-24 blueprint-grid">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            {content.newsletter.titleLine1}<br/><span className="text-primary">{content.newsletter.titleLine2}</span>
          </h2>
          <p className="text-on-surface-variant mb-12 font-light text-xl">{content.newsletter.description}</p>
          <form className="flex flex-col md:flex-row gap-0 border-b border-on-surface-variant/30 relative">
            <input className="bg-transparent border-none focus:ring-0 text-2xl font-bold tracking-tighter uppercase py-4 w-full placeholder:opacity-30" placeholder={content.newsletter.placeholder || "EMAIL ADDRESS"} type="email" />
            <button className="bg-primary text-on-primary px-12 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-surface transition-colors" type="submit">
              {content.newsletter.buttonText}
            </button>
          </form>
        </div>
        <div className="absolute right-0 bottom-0 w-64 h-64 border-t border-l border-primary/20 pointer-events-none"></div>
      </section>
    </main>
  );
}
