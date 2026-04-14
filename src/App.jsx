import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Target,
  TrendingUp,
  Zap,
  Layers,
  Cpu,
  Users,
  Briefcase,
  ShieldCheck,
  Banknote,
  Award,
  Network,
} from 'lucide-react';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [ref, isVisible] = useScrollReveal();

  const baseClasses = `transition-all duration-1000 ease-out ${className}`;
  const hiddenClasses = {
    up: 'opacity-0 translate-y-12',
    down: 'opacity-0 -translate-y-12',
    left: 'opacity-0 translate-x-12',
    right: 'opacity-0 -translate-x-12',
    none: 'opacity-0',
  };
  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${isVisible ? visibleClasses : hiddenClasses[direction]}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AdExGraph = () => (
  <div className="w-full max-w-5xl mx-auto mt-20 mb-16">
    <div className="flex justify-between items-end mb-6 px-2">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.4)]"></div>
          <span className="text-sm font-bold uppercase tracking-widest text-black">Digital AdEx</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-neutral-400 rounded-full"></div>
          <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Traditional AdEx</span>
        </div>
      </div>
    </div>

    <div className="relative w-full aspect-[4/3] md:aspect-[2.5/1] bg-white border border-neutral-200 rounded-xl p-6 md:p-10 shadow-xl">
      <svg viewBox="0 0 800 440" className="w-full h-full overflow-visible">
        {[0, 100, 200, 300, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#f5f5f5" strokeWidth="2" />
        ))}

        <path
          d="M 0,159.6 L 266.6,138.8 L 533.3,116.0 L 800,91.6"
          fill="none"
          stroke="#dc2626"
          strokeWidth="4"
          className="drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]"
        />
        <circle cx="0" cy="159.6" r="6" fill="#dc2626" />
        <circle cx="266.6" cy="138.8" r="6" fill="#dc2626" />
        <circle cx="533.3" cy="116.0" r="6" fill="#dc2626" />
        <circle cx="800" cy="91.6" r="6" fill="#dc2626" />
        <text x="0" y="140" fill="#dc2626" fontSize="16" fontWeight="bold">
          60.1%
        </text>
        <text x="266.6" y="120" fill="#dc2626" fontSize="16" fontWeight="bold">
          65.3%
        </text>
        <text x="533.3" y="95" fill="#dc2626" fontSize="16" fontWeight="bold">
          71.0%
        </text>
        <text x="800" y="70" fill="#dc2626" fontSize="16" fontWeight="bold" textAnchor="end">
          77.1%
        </text>

        <path
          d="M 0,240.4 L 266.6,261.2 L 533.3,284.0 L 800,308.4"
          fill="none"
          stroke="#a3a3a3"
          strokeWidth="2"
          strokeDasharray="8 6"
        />
        <circle cx="0" cy="240.4" r="5" fill="#737373" />
        <circle cx="266.6" cy="261.2" r="5" fill="#737373" />
        <circle cx="533.3" cy="284.0" r="5" fill="#737373" />
        <circle cx="800" cy="308.4" r="5" fill="#737373" />
        <text x="0" y="265" fill="#525252" fontSize="14" fontWeight="500">
          39.9%
        </text>
        <text x="266.6" y="285" fill="#525252" fontSize="14" fontWeight="500">
          34.7%
        </text>
        <text x="533.3" y="308" fill="#525252" fontSize="14" fontWeight="500">
          29.0%
        </text>
        <text x="800" y="335" fill="#525252" fontSize="14" fontWeight="500" textAnchor="end">
          22.9%
        </text>

        <text x="0" y="440" fill="#404040" fontSize="16" fontWeight="bold">
          2025
        </text>
        <text x="266.6" y="440" fill="#404040" fontSize="16" fontWeight="bold" textAnchor="middle">
          2026
        </text>
        <text x="533.3" y="440" fill="#404040" fontSize="16" fontWeight="bold" textAnchor="middle">
          2027
        </text>
        <text x="800" y="440" fill="#404040" fontSize="16" fontWeight="bold" textAnchor="end">
          2028
        </text>
      </svg>
    </div>
  </div>
);

export default function OgilvyPitchDeck() {
  const shifts = [
    { old: 'Big ideas', new: 'System of Ideas', icon: <Layers className="w-6 h-6" /> },
    { old: 'Campaigns', new: 'Always-on Brand Systems', icon: <TrendingUp className="w-6 h-6" /> },
    { old: 'Creative teams', new: 'Creative + Media teams', icon: <Users className="w-6 h-6" /> },
    { old: 'Creative Directors', new: 'Creative Influencers', icon: <Target className="w-6 h-6" /> },
    { old: 'Craft', new: 'Authenticity', icon: <Zap className="w-6 h-6" /> },
    { old: 'Billable hours', new: 'Outcome-linked Pricing', icon: <Banknote className="w-6 h-6" /> },
    {
      old: 'Creative agencies',
      new: 'Creator agencies, venture studios, in-house teams, consulting companies, production houses',
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const mandates = [
    {
      title: 'New Creative Products',
      desc: 'Social-first brand ideas, Branded IPs, Creators for Brand, Creatives for Performance, Social listening and Culture labs.',
      icon: <Layers className="w-8 h-8" />,
    },
    {
      title: 'Vertical Integration',
      desc: 'Develop capabilities across creators, Gen AI, performance. Hire next-generation talent.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Creative + Media Integration',
      desc: 'Integrated teams as a service using Grey media talent, media informed creative development.',
      icon: <Network className="w-8 h-8" />,
    },
    {
      title: 'Revenue Model Transformation',
      desc: 'Introduce consulting-led, system-based, and performance-linked pricing. Explore platform-linked revenue.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Strategic Client & Market Influence',
      desc: 'Transform top 20% of Ogilvy India advertisers. Build thought leadership and industry positioning.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'AI & Product Integration',
      desc: 'Drive adoption of WPP Open. Build scalable AI-led creative systems. Embed AI into workflows.',
      icon: <Cpu className="w-8 h-8" />,
    },
  ];

  const roadmap = [
    {
      phase: '0–90 Days',
      title: 'Diagnose, Design, Deploy',
      items: [
        'Share of wallet analysis for top 25% clients',
        'Audit of team, revenue, and capability gaps',
        'Define new org structure and operating model',
        'Training and reskilling of talent',
        'Initiate platform, creator, and AI partnerships',
        'Launch early pilot programs',
      ],
    },
    {
      phase: '90–180 Days',
      title: 'Build, Prove, Stabilise',
      items: [
        'New org structure fully operational',
        'Core capabilities live (AI, creators, performance)',
        'Pilot clients delivering measurable results',
        'First case studies established',
        'Initial revenue from new offerings realized',
      ],
    },
    {
      phase: '180–365 Days',
      title: 'Scale, Embed, Position',
      items: [
        'Achieve ~3x revenue trajectory',
        'Transition ~50% of top clients to new model',
        'Establish strong market positioning as digital-first leader',
        'New operating model embedded internally',
        'Talent transformation well underway',
      ],
    },
    {
      phase: '1–2.5 Years',
      title: 'Scale, Institutionalise, Integrate',
      items: [
        'Target ~60% of revenue from digital/allied businesses',
        'Ogilvy SI&C fully integrated into Ogilvy',
        'New operating model becomes the agency default',
        'Category leadership firmly established',
      ],
    },
  ];

  const impacts = [
    'Drives top-line growth and revenue mix shift',
    'Enables premium pricing and margin expansion',
    'Future-proofs the agency for a digital-first world',
    'Creates clear and defensible market differentiation',
    'Attracts and retains elite next-generation talent',
  ];

  const goals = [
    { item: 'Revenue Growth & Mix Shift', weight: '30%' },
    { item: 'Top 20 Client Transformation', weight: '25%' },
    { item: 'Capability Build & Talent Transformation', weight: '20%' },
    { item: 'Market Position & Thought Leadership', weight: '15%' },
    { item: 'Integration & Redundancy', weight: '10%' },
  ];

  const [activeShiftIndex, setActiveShiftIndex] = useState(-1);
  const shiftsRef = useRef(null);
  const [shiftsInView, setShiftsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShiftsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (shiftsRef.current) observer.observe(shiftsRef.current);
    return () => {
      if (shiftsRef.current) observer.unobserve(shiftsRef.current);
    };
  }, []);

  useEffect(() => {
    if (!shiftsInView) return;

    const interval = setInterval(() => {
      setActiveShiftIndex((prev) => {
        if (prev < shifts.length - 1) return prev + 1;
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [shiftsInView, shifts.length]);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2028-12-31T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#fafafa] text-black font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .font-editorial { font-family: 'Playfair Display', Georgia, serif; }
        .stark-panel { background: #ffffff; border: 1px solid #e5e5e5; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
      ` }} />

      <section className="relative min-h-[100svh] py-24 md:py-32 flex flex-col justify-center px-6 md:px-24 bg-white overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <Reveal delay={200}>
            <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-4"><span className="w-12 h-px bg-red-600"></span> Strategic Proposition</p>
          </Reveal>
          <Reveal delay={400}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial font-bold leading-tight mb-8 tracking-tight text-black">
              A new <span className="italic text-red-600">creative, growth,</span> and <span className="italic text-red-600">transformation</span> engine for Ogilvy India.
            </h1>
          </Reveal>
          <Reveal delay={600}>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl leading-relaxed mb-12 font-light">
              Introducing <strong className="text-black font-medium">Ogilvy Social, Influence and Content.</strong> A new unit designed to monetise the new realities of the market and rebuild the agency for a digital-first future.
            </p>
          </Reveal>
          <Reveal delay={800}>
            <button onClick={() => document.getElementById('market-shifts').scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-4 text-white bg-black hover:bg-neutral-800 border border-black hover:border-red-600 px-8 py-4 rounded-full transition-all duration-300">
              <span className="font-bold tracking-widest uppercase text-xs">Enter the future model</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 group-hover:text-red-400 transition-all" />
            </button>
          </Reveal>
        </div>
        <div className="absolute bottom-12 left-6 md:left-24 animate-bounce opacity-50"><div className="w-[1px] h-16 bg-gradient-to-b from-black to-transparent" /></div>
      </section>

      <section id="market-shifts" className="py-32 px-6 md:px-24 bg-[#fafafa]">
        <Reveal>
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-editorial font-bold mb-4 text-black">The market is shifting.</h2>
            <Reveal delay={200}><AdExGraph /></Reveal>
            <Reveal delay={400}><div className="border-l-2 border-red-600 pl-6 md:pl-10 mt-12"><p className="text-xl md:text-2xl text-black leading-relaxed font-light">Even though AdEx is a demand-side indicator, for Ogilvy to meaningfully outpace the market, <strong className="text-red-600 font-semibold">we have to grow our digital business at 25%.</strong> Or we continue to shrink.</p></div></Reveal>
          </div>
        </Reveal>
      </section>

      <section className="py-32 px-6 md:px-24 bg-white border-y border-neutral-200 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)] relative overflow-hidden">
        <div className="absolute inset-0 bg-red-50/30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-editorial font-bold text-red-600 mb-6 tracking-tight">25% growth of digital revenue over three years</h2>
              <p className="text-xl md:text-3xl font-editorial text-black leading-relaxed max-w-4xl mx-auto">A 25% growth target is most plausible if a material share of incremental revenue comes from high-growth, non-commoditised areas:</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Reveal delay={100}><div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm text-center h-full hover:border-red-300 hover:shadow-md transition-all"><div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">a)</div><h3 className="text-xl font-bold text-black mb-4">Video and Content</h3><p className="text-neutral-600">Social-first video, Content IPs, Branded Content etc.</p></div></Reveal>
            <Reveal delay={200}><div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm text-center h-full hover:border-red-300 hover:shadow-md transition-all"><div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">b)</div><h3 className="text-xl font-bold text-black mb-4">Creators & Commerce</h3><p className="text-neutral-600">Brand and Sales growth using creators on key Platforms</p></div></Reveal>
            <Reveal delay={300}><div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm text-center h-full hover:border-red-300 hover:shadow-md transition-all"><div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">c)</div><h3 className="text-xl font-bold text-black mb-4">Performance & Retail</h3><p className="text-neutral-600">Performance creative, and creative for Omnichannel retail</p></div></Reveal>
            <Reveal delay={400}><div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm text-center h-full hover:border-red-300 hover:shadow-md transition-all"><div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">d)</div><h3 className="text-xl font-bold text-black mb-4">Analytics & Mar Sci</h3><p className="text-neutral-600">Measurement and analytics to prove efficacy of campaigns</p></div></Reveal>
          </div>
        </div>
      </section>

      <section id="category-shifts" ref={shiftsRef} className="py-32 px-6 md:px-24 bg-[#fafafa]">
        <Reveal>
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-20"><h2 className="text-4xl md:text-6xl font-editorial font-bold mb-4 text-black">The category is shifting.</h2></div>
            <div className="flex items-center gap-4 md:gap-8 mb-8 px-4 md:px-0"><div className="w-[35%] text-right"><span className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-bold">Legacy Model</span></div><div className="w-[10%] shrink-0"></div><div className="w-[55%]"><span className="text-red-600 text-xs md:text-sm uppercase tracking-widest font-bold flex items-center gap-2"><Zap className="w-3 h-3 md:w-4 md:h-4" /> Platform Native</span></div></div>
            <div className="flex flex-col">
              {shifts.map((shift, idx) => {
                const isPast = idx < activeShiftIndex;
                const isActive = idx === activeShiftIndex;
                return (
                  <div key={idx} className="flex items-center gap-4 md:gap-8 py-6 md:py-8 border-b border-neutral-200">
                    <div className={`w-[35%] text-right transition-all duration-700 ${isPast || isActive ? 'text-neutral-400 line-through' : 'text-neutral-800'}`}><span className="text-base md:text-3xl font-light">{shift.old}</span></div>
                    <div className="w-[10%] flex justify-center shrink-0"><ArrowRight className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-700 ${isActive ? 'text-red-600 scale-125 translate-x-2' : isPast ? 'text-red-200 translate-x-2' : 'text-neutral-300'}`} /></div>
                    <div className={`w-[55%] transition-all duration-700 ${isPast || isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 md:-translate-x-12'}`}><span className={`text-base md:text-3xl font-medium leading-tight block ${isActive ? 'text-black drop-shadow-[0_0_12px_rgba(220,38,38,0.2)]' : 'text-neutral-500'}`}>{shift.new}</span></div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-32 px-6 md:px-24 bg-white text-black border-y border-neutral-200 shadow-sm relative z-10">
        <Reveal>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-red-600 font-bold tracking-widest uppercase text-xs mb-8">A new unit to monetise the new realities</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-editorial font-bold mb-16 leading-tight tracking-tight">Ogilvy Social, Influence <span className="block italic">and Content</span></h2>
            <div className="relative py-12 px-8 md:px-16 border-y border-neutral-200 bg-[#fafafa]"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-red-600" /><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-red-600" /><h3 className="text-2xl md:text-4xl font-editorial leading-relaxed font-medium">"The foundation of the unit: Social-first creative and strategy that builds brands and grows businesses. <span className="bg-red-50 text-red-700 px-2 rounded">Built from platform culture</span> and <span className="bg-red-50 text-red-700 px-2 rounded">executed for new mediums</span>."</h3></div>
          </div>
        </Reveal>
      </section>

      <section className="py-32 px-6 md:px-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal><h2 className="text-4xl md:text-5xl font-editorial font-bold mb-16 text-black text-center">The Strategic Mandate</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {mandates.map((mandate, idx) => (
              <Reveal key={idx} delay={idx * 150}><div className="group stark-panel rounded-2xl p-8 h-full hover:-translate-y-1 hover:shadow-lg hover:border-red-600/30 transition-all duration-300 relative overflow-hidden"><div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-black">{mandate.icon}</div><div className="mb-8 text-red-600">{mandate.icon}</div><h3 className="text-xl font-bold text-black mb-4 pr-8">{mandate.title}</h3><p className="text-neutral-600 leading-relaxed">{mandate.desc}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-white border-y border-neutral-200 relative shadow-sm z-10">
        <Reveal><div className="max-w-5xl mx-auto mb-20 text-center"><h2 className="text-4xl md:text-5xl font-editorial font-bold text-black mb-4">Execution Roadmap</h2><p className="text-neutral-500 text-lg">The transformation timeline over the next 2.5 years.</p></div></Reveal>
        <div className="max-w-4xl mx-auto relative"><div className="absolute left-6 md:left-[5.5rem] top-0 bottom-0 w-px bg-neutral-200"></div><div className="space-y-16 relative z-10">{roadmap.map((phase, idx) => (<Reveal key={idx} delay={idx * 100}><div className="flex flex-col md:flex-row gap-8 md:gap-16 relative"><div className="md:w-48 shrink-0 flex items-start md:justify-end relative"><div className="absolute left-[1.15rem] md:left-auto md:right-[-4.25rem] top-1.5 w-4 h-4 bg-red-600 rounded-full ring-4 ring-white"></div><div className="pl-16 md:pl-0 text-left md:text-right"><span className="text-red-600 font-bold tracking-widest uppercase text-xs block mb-2">{phase.phase}</span><span className="text-neutral-300 font-editorial italic text-2xl">0{idx + 1}</span></div></div><div className="flex-1 bg-[#fafafa] border border-neutral-200 rounded-2xl p-8 hover:border-red-600/50 transition-colors shadow-sm ml-12 md:ml-0"><h3 className="text-2xl font-editorial font-bold text-black mb-6">{phase.title}</h3><ul className="space-y-4">{phase.items.map((item, i) => (<li key={i} className="flex items-start gap-3 text-neutral-600"><ChevronRight className="w-5 h-5 text-red-600 shrink-0 mt-0.5" /><span className="leading-relaxed">{item}</span></li>))}</ul></div></div></Reveal>))}<Reveal delay={roadmap.length * 100}><div className="flex flex-col md:flex-row gap-8 md:gap-16 relative mt-24"><div className="md:w-48 shrink-0 flex items-start md:justify-end relative"><div className="absolute left-[1.15rem] md:left-auto md:right-[-4.5rem] top-4 w-5 h-5 bg-red-600 rounded-full ring-4 ring-white flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div></div><div className="flex-1 bg-red-600 border border-red-700 rounded-2xl p-8 text-white shadow-xl ml-12 md:ml-0"><ShieldCheck className="w-10 h-10 mb-6 text-white/90" /><h3 className="text-2xl font-editorial font-bold leading-relaxed">The ultimate goal is not to build a new unit, but to <span className="underline decoration-2 underline-offset-4 decoration-white/60">rebuild Ogilvy India</span> — to the point where the unit is no longer needed.</h3></div></div></Reveal></div></div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-[#fafafa]"><div className="max-w-7xl mx-auto"><Reveal><h2 className="text-4xl md:text-5xl font-editorial font-bold mb-16 text-black border-b border-neutral-300 pb-8 inline-block">Impact on Ogilvy India</h2></Reveal><div className="grid gap-6">{impacts.map((impact, idx) => (<Reveal key={idx} delay={idx * 100}><div className="group flex items-center gap-6 p-6 md:p-8 stark-panel rounded-xl hover:-translate-y-1 hover:shadow-md hover:border-red-600/30 transition-all duration-300"><div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:border-red-200 transition-colors"><TrendingUp className="w-5 h-5 text-neutral-400 group-hover:text-red-600 transition-colors" /></div><p className="text-xl md:text-2xl text-neutral-600 font-light tracking-wide group-hover:text-black transition-colors">{impact}</p></div></Reveal>))}</div></div></section>

      <section className="py-32 px-6 md:px-24 bg-white border-y border-neutral-200"><div className="max-w-7xl mx-auto"><Reveal><h2 className="text-4xl md:text-5xl font-editorial font-bold mb-16 text-black">What is Required to Succeed</h2></Reveal><div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-[15px] leading-relaxed"><Reveal delay={100} className="h-full"><div className="bg-red-50 border border-red-200 p-8 rounded-2xl h-full flex flex-col relative overflow-hidden"><div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-[40px]" /><h3 className="text-black text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-3 relative z-10"><span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> Ownership & Structure</h3><ul className="space-y-6 text-neutral-600 mt-auto relative z-10"><li className="border-b border-red-200/50 pb-4">End-to-end ownership of the new unit</li><li className="border-b border-red-200/50 pb-4">Ability to integrate right talent from Ogilvy, Grey and Content Force</li><li className="border-b border-red-200/50 pb-4">Full reporting line across strategy, creative, and delivery</li><li className="pb-4">Authority to restructure team</li></ul></div></Reveal><Reveal delay={200} className="h-full"><div className="stark-panel p-8 rounded-2xl h-full flex flex-col bg-[#fafafa]"><h3 className="text-black text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-3"><span className="w-2 h-2 bg-red-600 rounded-full"></span> Decision Rights</h3><ul className="space-y-6 text-neutral-600 mt-auto"><li className="border-b border-neutral-200 pb-4">Autonomous hiring and capability building</li><li className="border-b border-neutral-200 pb-4">Independent partner selection (platforms, creators, AI)</li><li className="border-b border-neutral-200 pb-4">Control over pricing and commercial models</li><li className="pb-4">Strategic client prioritisation</li></ul></div></Reveal><Reveal delay={300} className="h-full"><div className="bg-red-50 border border-red-200 p-8 rounded-2xl h-full flex flex-col relative overflow-hidden"><div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-[40px]" /><h3 className="text-black text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-3 relative z-10"><span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> Capability Investment</h3><ul className="space-y-6 text-neutral-600 mt-auto relative z-10"><li className="border-b border-red-200/50 pb-4"><strong className="text-black block mb-1">Dedicated transformation budget</strong> Estimated ₹3–5 Cr over 18–24 months for talent, AI tools, and partnerships.</li><li className="pb-4"><strong className="text-black block mb-1">Dedicated OpEx for innovations</strong> Build social presence, experiment with new Gen AI talent, and scale creative systems.</li></ul></div></Reveal></div></div></section>

      <section className="py-40 px-6 md:px-24 bg-[#fafafa] relative overflow-hidden flex items-center justify-center text-center"><div className="max-w-5xl relative z-10"><Reveal delay={100}><Target className="w-12 h-12 text-red-600 mx-auto mb-12 opacity-80" /></Reveal><Reveal delay={300}><h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial font-bold text-black leading-relaxed mb-8">We want to transform Ogilvy into a digital-first, platform-native creative agency by building a new operating model combining culture, creators, AI, and media into a scalable growth engine.</h2></Reveal><Reveal delay={500}><p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed max-w-4xl mx-auto">This will be built through an <span className="text-black font-medium border-b border-red-600">agency-inside-the-agency model</span> (Ogilvy Social, Influence and Content) designed to experiment, prove, and scale new ways of working. Its success will be measured by its own redundancy. When these capabilities are fully embedded into Ogilvy India, the unit will cease to exist.</p></Reveal></div></section>

      <section className="py-32 bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden text-center border-y border-neutral-200"><Reveal><p className="text-red-600 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-8 flex items-center justify-center gap-3"><Clock className="w-4 h-4" /> Time until integration</p></Reveal><Reveal delay={200}><h2 className="text-4xl md:text-6xl lg:text-7xl font-editorial font-bold text-black max-w-5xl mx-auto leading-tight mb-20">Days left for Ogilvy Social, Influence and Content to <span className="text-red-600 italic">stop existing.</span></h2></Reveal><Reveal delay={400}><div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-5xl mx-auto w-full">{[{ label: 'Days', value: timeLeft.days },{ label: 'Hours', value: timeLeft.hours },{ label: 'Minutes', value: timeLeft.minutes },{ label: 'Seconds', value: timeLeft.seconds }].map((unit, idx) => (<div key={idx} className="flex flex-col items-center"><div className="bg-[#fafafa] border border-neutral-200 shadow-inner w-full aspect-square flex items-center justify-center rounded-2xl mb-4 relative overflow-hidden group"><div className="absolute inset-0 bg-red-50 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" /><span className="text-5xl md:text-7xl lg:text-8xl font-mono font-light text-black relative z-10 tracking-tighter">{String(unit.value).padStart(2, '0')}</span></div><span className="text-neutral-500 uppercase tracking-widest text-xs md:text-sm font-bold">{unit.label}</span></div>))}</div></Reveal><Reveal delay={600}><p className="text-neutral-500 text-sm font-mono tracking-widest bg-neutral-100 px-6 py-2 rounded-full inline-block border border-neutral-200 mt-24">TARGET: 23:59 HRS • DEC 31, 2028</p></Reveal></section>

      <section className="py-32 px-6 md:px-24 bg-[#fafafa]"><div className="max-w-4xl mx-auto"><Reveal><div className="text-center mb-16"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-6"><Award className="w-8 h-8" /></div><h2 className="text-sm font-bold tracking-widest uppercase text-red-600 mb-4">Key Goals</h2><h3 className="text-3xl md:text-5xl font-editorial font-bold text-black leading-tight">Anoop Menon, CEO<span className="block text-xl md:text-2xl text-neutral-500 font-light font-sans italic mt-4">Ogilvy Social, Influence and Content India</span></h3></div></Reveal><div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden"><div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-red-900" /><div className="space-y-2">{goals.map((goal, idx) => (<Reveal key={idx} delay={200 + idx * 100} direction="up"><div className="group flex items-center justify-between p-4 md:p-6 rounded-xl hover:bg-red-50 border border-transparent hover:border-red-100 transition-all duration-300 overflow-hidden relative"><div className="flex items-center gap-4 relative z-10"><div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-red-500 transition-colors"></div><span className="text-lg md:text-xl font-medium text-neutral-800 group-hover:text-black transition-colors">{goal.item}</span></div><div className="relative z-10 flex items-center gap-6"><div className="h-px w-12 md:w-24 bg-neutral-200 group-hover:bg-red-200 transition-colors" /><span className="text-xl md:text-2xl font-editorial font-bold text-neutral-400 group-hover:text-red-600 transition-colors">{goal.weight}</span></div><div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" /></div></Reveal>))}</div></div></div></section>
    </div>
  );
}
