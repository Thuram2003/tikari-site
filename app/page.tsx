import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  Handshake, 
  HourglassHigh, 
  Scroll, 
  Quotes, 
  CheckCircle,
  Sparkle
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-tikari-cream-light font-sans">
      
      <section className="relative w-full bg-tikari-green-dark text-tikari-cream py-24 md:py-32 px-6 md:px-12 overflow-hidden flex flex-col justify-center border-b border-tikari-gold/20">
        
        {/* Background Decorative Rings/Crescents based on Pinpoint design */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full border border-tikari-cream/5 pointer-events-none translate-x-1/4 translate-y-1/4" />
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-tikari-gold/5 pointer-events-none translate-x-1/3 translate-y-1/3" />
        <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full border border-tikari-gold/5 pointer-events-none -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          <div className="space-y-8 lg:col-span-6">
            
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.1] uppercase font-serif text-white">
              Banking that <br />
              <span className="font-sans italic font-light text-tikari-gold">honors your faith.</span>
            </h1>
            
            <p className="text-sm md:text-base text-tikari-cream/80 max-w-lg leading-relaxed font-normal">
              Enterprise-grade financial infrastructure built on strict Shariah principles. Zero interest, absolute ledger transparency, and certified Islamic asset contracts.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-tikari-gold hover:bg-tikari-gold-dark text-tikari-green-dark rounded-none transition-all shadow-premium"
              >
                Book Demo
              </Link>
              <Link
                href="/platform"
                className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-transparent text-white border border-white/30 rounded-none hover:bg-white/10 transition-all"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Flex Images Showcase - Pinpoint HQ gallery style */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            
            {/* Main Image Panel */}
            <div className="col-span-8 relative h-[280px] md:h-[360px] border border-tikari-gold/20 shadow-premium overflow-hidden bg-tikari-green">
              <Image
                src="/meeting.jpg"
                alt="TIKARI Core Platform Meeting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/95 via-transparent to-transparent" />
              
              {/* Live Contract Pool Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-wider text-tikari-gold">Active Capital pools</h4>
                  <p className="text-[11px] font-bold text-white uppercase">Mudarabah Contracts</p>
                </div>
                <div className="px-2 py-1 bg-tikari-gold text-tikari-green-dark text-[9px] font-bold uppercase">
                  100% Halal
                </div>
              </div>
            </div>

            {/* Side Flex Grid */}
            <div className="col-span-4 flex flex-col gap-4">
              
              <div className="relative flex-1 h-[80px] border border-tikari-gold/20 shadow-soft overflow-hidden">
                <Image
                  src="/handshake.jpg"
                  alt="Murabaha Finance Transactions"
                  fill
                  className="object-cover hover:scale-115 transition-transform duration-500"
                />
              </div>

              <div className="relative flex-1 h-[80px] border border-tikari-gold/20 shadow-soft overflow-hidden">
                <Image
                  src="/money.jpg"
                  alt="Islamic Treasury Liquidity"
                  fill
                  className="object-cover hover:scale-115 transition-transform duration-500"
                />
              </div>

              <div className="relative flex-1 h-[80px] border border-tikari-gold/20 shadow-soft overflow-hidden">
                <Image
                  src="/compliance.jpg"
                  alt="Shariah Board Audit compliance"
                  fill
                  className="object-cover hover:scale-115 transition-transform duration-500"
                />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 2. TRUST BAR */}
      <section className="w-full bg-tikari-cream border-b border-tikari-green/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Regulatory Seals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase font-bold tracking-widest text-tikari-green-dark/75">
            <div className="flex items-center gap-1.5 border-r border-tikari-green/20 pr-6">
              <CheckCircle className="h-4 w-4 text-tikari-gold" />
              BEAC Licensed
            </div>
            <div className="flex items-center gap-1.5 border-r border-tikari-green/20 pr-6">
              <CheckCircle className="h-4 w-4 text-tikari-gold" />
              NDIC Insured
            </div>
            <div className="flex items-center gap-1.5 border-r border-tikari-green/20 pr-6">
              <CheckCircle className="h-4 w-4 text-tikari-gold" />
              AAOIFI Compliant
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-tikari-gold" />
              Shariah Certified
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 shrink-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-black text-tikari-green-dark">XAF 0</h3>
              <p className="text-[10px] uppercase tracking-wider text-tikari-sage font-medium">Interest Ever</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-black text-tikari-green-dark">100%</h3>
              <p className="text-[10px] uppercase tracking-wider text-tikari-sage font-medium">GL Traceability</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-black text-tikari-green-dark">&lt;10m</h3>
              <p className="text-[10px] uppercase tracking-wider text-tikari-sage font-medium">EOD Processing</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRODUCT PREVIEW */}
      <section className="w-full py-24 px-6 md:px-12 bg-white border-b border-tikari-green/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-tikari-gold bg-tikari-cream px-3 py-1 rounded-lg">
              Engine Modules
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-tikari-green-dark font-serif">
              Contracts defined by compliance.
            </h2>
            <p className="text-xs text-tikari-green-dark/80 font-medium">
              We replace conventional debt with asset-backed instruments directly bound to the ledger core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="premium-card-gold p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative w-full h-[150px] overflow-hidden rounded-xl border border-tikari-gold/20">
                  <Image
                    src="/money.jpg"
                    alt="Pure Profit-Sharing Mudarabah"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-tikari-green-dark font-serif">
                  Pure Profit-Sharing
                </h3>
                <p className="text-xs text-tikari-green-dark/75 leading-relaxed">
                  Mudarabah funds designed with complete allocation transparency. No guaranteed returns, just real asset performance ledger tracking.
                </p>
              </div>
              <Link href="/platform" className="inline-flex items-center gap-1.5 text-xs font-bold text-tikari-gold hover:text-tikari-green transition-colors uppercase tracking-wider">
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="premium-card-gold p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative w-full h-[150px] overflow-hidden rounded-xl border border-tikari-gold/20">
                  <Image
                    src="/handshake.jpg"
                    alt="Transparent Murabaha"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-tikari-green-dark font-serif">
                  Transparent Murabaha
                </h3>
                <p className="text-xs text-tikari-green-dark/75 leading-relaxed">
                  Cost-plus markups directly validated on our platform. Calculate, buy, and structure physical inventory financing with full visibility.
                </p>
              </div>
              <Link href="/platform" className="inline-flex items-center gap-1.5 text-xs font-bold text-tikari-gold hover:text-tikari-green transition-colors uppercase tracking-wider">
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="premium-card-gold p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative w-full h-[150px] overflow-hidden rounded-xl border border-tikari-gold/20">
                  <Image
                    src="/compliance.jpg"
                    alt="Automatic Zakat Engine"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-tikari-green-dark font-serif">
                  Automatic Zakat
                </h3>
                <p className="text-xs text-tikari-green-dark/75 leading-relaxed">
                  Automate calculations directly through institutional account balances. Compliant with strict regulatory standards and fatwa rules.
                </p>
              </div>
              <Link href="/platform" className="inline-flex items-center gap-1.5 text-xs font-bold text-tikari-gold hover:text-tikari-green transition-colors uppercase tracking-wider">
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHO IT'S FOR */}
      <section className="w-full py-24 px-6 md:px-12 bg-tikari-sage-light border-b border-tikari-green/10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-black uppercase tracking-tight text-tikari-green-dark font-serif">
              Targeted Shariah Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Individuals Section */}
            <div className="premium-card p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-tikari-green/10 shadow-soft">
                <Image
                  src="/mulsimwoman.jpg"
                  alt="TIKARI for Individuals"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-tikari-green font-serif">
                  For Individuals
                </h3>
                <p className="text-xs text-tikari-green-dark/80 leading-relaxed font-normal">
                  Earn competitive, clean yields through transparent pool distributions. Manage savings and calculate Zakat obligation at the click of a button.
                </p>
                <Link href="/solution" className="inline-flex items-center gap-1 text-xs font-bold text-tikari-gold hover:underline uppercase tracking-wide">
                  Explore Savings <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Businesses Section */}
            <div className="premium-card p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-tikari-green/10 shadow-soft">
                <Image
                  src="/personOffice.jpg"
                  alt="TIKARI for Businesses"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-tikari-green font-serif">
                  For Businesses & SMEs
                </h3>
                <p className="text-xs text-tikari-green-dark/80 leading-relaxed font-normal">
                  Access cost-plus inventory financing or launch collaborative mudarabah pools. Secure business-growth capital without compromising your values.
                </p>
                <Link href="/solution" className="inline-flex items-center gap-1 text-xs font-bold text-tikari-gold hover:underline uppercase tracking-wide">
                  Explore Financing <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SHARIAH PROMISE */}
      <section className="w-full bg-tikari-green-dark text-white py-24 px-6 md:px-12 border-b border-tikari-gold/20 relative overflow-hidden">
        
        {/* Crescent Ring Background decor */}
        <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full border border-tikari-gold/5 -translate-x-12 translate-y-12 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <Scroll className="h-10 w-10 text-tikari-gold mx-auto" />
          <h2 className="text-xl md:text-2xl font-serif text-tikari-cream leading-relaxed max-w-2xl mx-auto">
            "Every single transaction ledger is systematically screened. Every profit-sharing ratio is transparently tracked. Real trade, zero riba."
          </h2>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-tikari-gold">Shariah Supervisory Board</h4>
            <p className="text-[10px] text-tikari-cream/60">Independent Scholars of Jurisprudence</p>
          </div>
          <div>
            <Link href="/company#scholars" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-tikari-gold hover:text-white transition-colors">
              Read Verification fatwas <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="w-full py-24 px-6 bg-tikari-cream border-b border-tikari-green/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Quotes className="h-12 w-12 text-tikari-gold/30 mx-auto fill-current" />
          <p className="text-md font-bold text-tikari-green-dark leading-relaxed font-serif">
            "Transitioning our cooperative contributions to TIKARI has completely eliminated the administrative chaos. Knowing every naira resides in safe, asset-backed pools gives our members complete peace of mind."
          </p>
          <div className="space-y-0.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-tikari-green-dark">Alhaji Bello Yusuf</h4>
            <p className="text-[10px] uppercase font-bold tracking-wider text-tikari-sage">Chairman, An-Noor Cooperative</p>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="w-full py-24 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-tikari-green-dark font-serif">
            See how TIKARI works.
          </h2>
          <p className="text-xs text-tikari-green-dark/70 font-medium max-w-md mx-auto leading-relaxed">
            Request a 45-minute technical walkthrough with our integrations team. Learn how our native AAOIFI core migrates your existing systems.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/demo"
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-tikari-gold hover:bg-tikari-gold-dark text-tikari-green-dark rounded-xl shadow-soft transition-all font-sans"
            >
              Book Demo
            </Link>
            <Link
              href="/company#contact"
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-transparent text-tikari-green-dark border border-tikari-green-dark/30 rounded-xl hover:bg-tikari-cream/20 transition-all font-sans"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
