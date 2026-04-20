import React from 'react';
import content from '../../content/consultation/index.json';

export default function Consultation() {
  return (
    <main className="pt-32 min-h-screen">
        {/* Hero Section */}
        <section className="px-8 md:px-16 pt-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-l border-outline-variant/30">
                <div className="lg:col-span-8 pt-12 pl-8 md:pl-16">
                    <span className="inline-block px-3 py-1 border border-outline-variant text-[0.65rem] uppercase tracking-[0.3em] text-primary mb-8">
                        {content.hero.badge}
                    </span>
                    <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.9] tracking-tighter uppercase mb-12">
                        {content.hero.titleLine1} <br/>
                        <span className="text-primary">{content.hero.titleLine2}</span>
                    </h1>
                </div>
                <div className="lg:col-span-4 hidden lg:flex items-end justify-end pb-12 pr-4">
                    <div className="w-full aspect-square border border-outline-variant/30 p-8 flex flex-col justify-between">
                        <span className="material-symbols-outlined text-primary text-5xl">{content.hero.cornerIcon}</span>
                        <p className="text-[0.75rem] uppercase tracking-widest leading-relaxed opacity-60">
                            {content.hero.cornerText}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Main Content Split */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Side */}
            <div className="bg-surface-container-low p-8 md:p-24 border-r border-outline-variant/10">
                <div className="max-w-xl mx-auto lg:ml-0">
                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">{content.form.heading}</h2>
                    <p className="text-on-surface-variant text-sm mb-12 font-light">{content.form.description}</p>
                    <form action="https://formspree.io/f/duncan@kirkandkirk.co" method="POST" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group">
                                <label className="block text-[0.65rem] uppercase tracking-widest text-primary mb-2">{content.form.fields.nameLabel}</label>
                                <input name="name" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-on-surface/20" placeholder={content.form.fields.namePlaceholder} type="text" required />
                            </div>
                            <div className="relative group">
                                <label className="block text-[0.65rem] uppercase tracking-widest text-primary mb-2">{content.form.fields.emailLabel}</label>
                                <input name="email" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-on-surface/20" placeholder={content.form.fields.emailPlaceholder} type="email" required />
                            </div>
                        </div>
                        <div className="relative group">
                            <label className="block text-[0.65rem] uppercase tracking-widest text-primary mb-2">{content.form.fields.subjectLabel}</label>
                            <select name="service" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors text-on-surface text-sm md:text-base appearance-none" required>
                                {content.form.fields.subjectOptions.map((opt, i) => (
                                    <option key={i} className="bg-surface-container-high">{opt}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative group">
                            <label className="block text-[0.65rem] uppercase tracking-widest text-primary mb-2">{content.form.fields.messageLabel}</label>
                            <textarea name="message" className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder:text-on-surface/20 resize-none" placeholder={content.form.fields.messagePlaceholder} rows="4"></textarea>
                        </div>
                        <button className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] transition-all hover:bg-primary-container" type="submit">
                            {content.form.submitButton}
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Imagery Side */}
            <div className="relative min-h-[600px] flex flex-col">
                <div className="flex-grow relative overflow-hidden">
                    <img alt="Modern architectural building glass facade" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={content.imagery.heroImage} />
                    <div className="absolute inset-0 bg-surface/40 mix-blend-multiply"></div>
                    <div className="absolute top-12 left-12 w-32 h-32 border border-primary/40 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-primary text-[0.6rem] font-bold uppercase tracking-widest -rotate-90">{content.imagery.decorativeLabel}</span>
                    </div>
                </div>

                {/* Office Details */}
                <div className="grid grid-cols-2 blueprint-grid border-t border-outline-variant/30">
                    <div className="p-12 border-r border-outline-variant/30">
                        <h4 className="text-[0.65rem] uppercase tracking-widest text-primary mb-6">{content.offices.primary.label}</h4>
                        <address className="not-italic text-sm leading-relaxed font-light opacity-80 whitespace-pre-line">
                            {content.offices.primary.address}
                        </address>
                        <div className="mt-8 flex gap-4">
                            <span className="material-symbols-outlined text-outline">call</span>
                            <span className="text-xs font-mono">{content.offices.primary.phone}</span>
                        </div>
                    </div>
                    <div className="p-12">
                        <h4 className="text-[0.65rem] uppercase tracking-widest text-primary mb-6">{content.offices.global.label}</h4>
                        <div className="space-y-4">
                            {content.offices.global.locations.map((loc, i) => (
                                <div key={i} className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                                    <span className="text-xs uppercase tracking-tighter">{loc.city}</span>
                                    <span className="text-[0.6rem] font-mono opacity-40">{loc.established}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Blueprint Metric Grid */}
        <section className="border-y border-outline-variant/30 bg-surface-container-lowest py-24 px-8 md:px-16 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                {content.metrics.map((m, i) => (
                    <div key={i} className={`p-10 ${i < content.metrics.length - 1 ? 'border-outline-variant/20 md:border-r border-b md:border-b-0' : ''}`}>
                        <div className={`text-[3.5rem] font-black tracking-tighter leading-none mb-4 ${m.highlight ? 'text-primary' : 'text-on-surface'}`}>{m.value}</div>
                        <div className="text-[0.7rem] uppercase tracking-[0.3em] font-medium opacity-60">{m.label}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] relative bg-surface-container-high overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                    <h3 className="text-[0.75rem] uppercase tracking-[0.5em] text-primary-container mb-6">{content.map.heading}</h3>
                    <div className="relative inline-block">
                        <img alt="World map" className="max-w-4xl w-full grayscale opacity-30 mix-blend-screen" src={content.map.mapImage} />
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] font-bold tracking-widest uppercase bg-surface px-2 py-1 border border-outline-variant">{content.map.pinLabel}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
