"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TestimonialSection() {
  const t = useTranslations("home.testimonials");
  
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      category: "Microfinance Institution",
      institution: "CAMCCUL - Cameroon Cooperative Credit Union",
      location: "Bamenda, Cameroon",
      metrics: [
        { label: "Loan Processing", value: "70% Faster" },
        { label: "Members Served", value: "450K+" },
        { label: "Branches", value: "138" }
      ],
      quote: "TIKARI helped us modernize our credit union operations across all our branches. The system handles Shariah-compliant products seamlessly while maintaining COBAC compliance for our cooperative banking model.",
      author: "Dr. Ndi Asonganyi",
      role: "Managing Director",
      image: "/personOffice.jpg",
      yearsWithTikari: "2",
    },
    {
      category: "Islamic Banking Window",
      institution: "Al-Rayan Non-Interest Banking",
      location: "Kano, Nigeria",
      metrics: [
        { label: "Naira Volume", value: "NGN 4.5B" },
        { label: "Window Setup", value: "30 Days" },
        { label: "Active Customers", value: "24,000+" }
      ],
      quote: "Deploying TIKARI's non-interest banking window allowed us to launch Shariah-compliant services in record time. The automated ledger segregation keeps us perfectly aligned with CBN non-interest guidelines.",
      author: "Dr. Amina Yusuf",
      role: "Director of Islamic Windows",
      image: "/muslim-woman.jpg",
      yearsWithTikari: "1",
    },
    {
      category: "Islamic Microfinance",
      institution: "Taiba Islamic Microfinance",
      location: "Dakar, Senegal",
      metrics: [
        { label: "Daily Trans.", value: "35K+" },
        { label: "Operating Cost", value: "-50%" },
        { label: "SYSCOHADA Rules", value: "100%" }
      ],
      quote: "TIKARI has transformed our digital microfinance operations. It seamlessly handles Mudarabah deposits and generates compliance reports matching both BCEAO directives and SYSCOHADA requirements.",
      author: "Paul Diagne",
      role: "Chief Technology Officer",
      image: "/muslim-man.jpg",
      yearsWithTikari: "3",
    },
    {
      category: "Women's Cooperative",
      institution: "An-Nisaa Women Cooperative",
      location: "Kaduna, Nigeria",
      metrics: [
        { label: "Members Empowered", value: "15,000+" },
        { label: "Group Financing", value: "NGN 850M" },
        { label: "Repayment Rate", value: "99.2%" }
      ],
      quote: "TIKARI simplified our group lending and rotating savings operations. The mobile integration lets our members check balances and make deposits directly from their phone.",
      author: "Hadja Fatima Bello",
      role: "Executive Coordinator",
      image: "/woman-smile.jpg",
      yearsWithTikari: "2",
    },
    {
      category: "Regional Microfinance",
      institution: "MUFFA Adamawa Microfinance",
      location: "Ngaoundéré, Cameroon",
      metrics: [
        { label: "Portfolio Quality", value: "PAR <3%" },
        { label: "Loan Disbursement", value: "Same Day" },
        { label: "Rural Reach", value: "85%" }
      ],
      quote: "TIKARI works perfectly even with our intermittent connectivity in rural areas. The offline mode lets us serve clients in remote villages, then sync when network is available.",
      author: "Issa Mohamadou",
      role: "Regional Director",
      image: "/bnw-muslim.jpg",
      yearsWithTikari: "1",
    },
    {
      category: "Islamic Investment",
      institution: "Baraka Capital West Africa",
      location: "Abidjan, Côte d'Ivoire",
      metrics: [
        { label: "Sukuk Managed", value: "XOF 12B" },
        { label: "Shariah Audit", value: "Passed" },
        { label: "Corporate Clients", value: "320+" }
      ],
      quote: "For investment and asset-backed finance, precision is everything. TIKARI's automated profit-distribution engine and multi-currency ledger make regional compliance effortless.",
      author: "Abdoulaye Koné",
      role: "Chief Financial Officer",
      image: "/consulting-team.jpg",
      yearsWithTikari: "3",
    },
    {
      category: "Islamic SACCO",
      institution: "Taqwa SACCO Kenya",
      location: "Nairobi, Kenya",
      metrics: [
        { label: "Member Savings", value: "KES 520M" },
        { label: "Profit Share", value: "7.8%" },
        { label: "Zero Interest", value: "100%" }
      ],
      quote: "Transitioning to TIKARI enabled us to scale our Shariah-compliant savings and Murabaha products across East Africa. It easily manages members' profit ratios while adhering to local cooperative acts.",
      author: "Omar Hassan",
      role: "General Manager",
      image: "/woman-office.jpg",
      yearsWithTikari: "2",
    }
  ];

  const handlePrev = () => {
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeSlide < testimonials.length - 1) {
      setActiveSlide((prev) => prev + 1);
    }
  };

  const canGoPrev = activeSlide > 0;
  const canGoNext = activeSlide < testimonials.length - 1;

  // Calculate dynamic transform translation for center alignment
  const isLargeScreen = windowWidth >= 1024;
  const isMediumScreen = windowWidth >= 768 && windowWidth < 1024;

  let translateX = 0;
  if (isLargeScreen) {
    const cardWidth = 900;
    const gap = 32;
    const offset = (windowWidth - cardWidth) / 2;
    translateX = offset - activeSlide * (cardWidth + gap);
  } else if (isMediumScreen) {
    const cardWidth = windowWidth * 0.85;
    const gap = 24;
    const offset = (windowWidth - cardWidth) / 2;
    translateX = offset - activeSlide * (cardWidth + gap);
  } else {
    const cardWidth = windowWidth * 0.9;
    const gap = 16;
    const offset = (windowWidth - cardWidth) / 2;
    translateX = offset - activeSlide * (cardWidth + gap);
  }

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-y border-tikari-green/10 overflow-hidden">
      <div className="space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto px-6 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-tikari-sage-light border border-tikari-green/10 rounded-2xl">
            <span className="text-xs uppercase tracking-widest text-tikari-green-dark font-bold ">{t("badge")}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-tikari-green-dark leading-tight">
            {t("title")}
          </h2>
          <p className="text-base lg:text-lg text-tikari-sage max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="w-full relative rounded-md">
          <div
            className="flex gap-4 lg:gap-6 transition-transform duration-700 ease-out select-none rounded-md"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white border transition-all duration-500 shrink-0 rounded-2xl ${
                  activeSlide === idx 
                    ? "opacity-100 border-tikari-green/20 shadow-[0_20px_60px_-15px_rgba(27,67,50,0.12)]" 
                    : "opacity-30 border-tikari-green/5 shadow-[0_10px_30px_-10px_rgba(27,67,50,0.05)]"
                } w-[90vw] md:w-[85vw] lg:w-[900px]`}
              >
                
                <div className="p-6 lg:p-10 space-y-6 ">

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-tikari-green/10">
                    <div className="space-y-1.5">
                      <div className="px-2.5 py-1 bg-tikari-gold/10 border border-tikari-gold/20 inline-block rounded-full">
                        <span className="text-[9px] uppercase tracking-widest text-tikari-gold-dark font-bold">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-tikari-green-dark leading-tight">
                        {item.institution}
                      </h3>
                      <p className="text-xs text-tikari-sage">{item.location}</p>
                    </div>
                    
                    <div className="text-left sm:text-right shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-tikari-sage-light border border-tikari-green/10 rounded-full">
                        <span className="text-sm text-tikari-green-dark">{item.yearsWithTikari}</span>
                        <span className="text-[9px] text-tikari-sage uppercase tracking-wider leading-tight">{t("yearsPartner")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Content: Quote + Image Side by Side - Reduced Height */}
                  <div className="grid lg:grid-cols-[1fr_220px] gap-6 items-start">
                    
                    {/* Left: Quote */}
                    <div className="space-y-4">
                      <Quote className="w-10 h-10 text-tikari-gold/20" strokeWidth={1.5} />
                      <blockquote className="text-base lg:text-lg font-serif text-tikari-green-dark leading-relaxed line-clamp-4">
                        {item.quote}
                      </blockquote>
                      
                      <div className="pt-3 border-t border-tikari-green/5">
                        <p className="text-sm font-bold text-tikari-green-dark">{item.author}</p>
                        <p className="text-xs text-tikari-sage">{item.role}</p>
                      </div>
                    </div>

                    <div className="relative w-full h-[240px] bg-tikari-cream border border-tikari-green/10 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Metrics Row - More Compact */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-tikari-green/10">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <p className="text-2xl lg:text-3xl font-bold text-tikari-green-dark font-mono tracking-tight">
                          {m.value}
                        </p>
                        <p className="text-[10px] text-tikari-sage uppercase tracking-wider leading-tight">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Navigation Controls - More Compact */}
          <div className="max-w-6xl mx-auto flex items-center justify-between mt-8 px-6 lg:px-12 ">
            
            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono text-tikari-green-dark font-bold">
                {String(activeSlide + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-tikari-sage">/</span>
              <span className="text-sm font-mono text-tikari-sage">
                {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1 transition-all cursor-pointer border-none ${
                    activeSlide === idx 
                      ? "bg-tikari-green w-10" 
                      : "bg-tikari-green/20 w-6 hover:bg-tikari-green/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                aria-label={t("prev")}
                className={`w-10 h-10 border-2 flex items-center justify-center transition-all bg-white rounded-full ${
                  canGoPrev
                    ? "border-tikari-green/20 hover:border-tikari-green hover:bg-tikari-green-dark hover:text-white text-tikari-green-dark cursor-pointer"
                    : "border-tikari-green/10 text-tikari-sage/30 cursor-not-allowed opacity-50"
                }`}
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                aria-label={t("next")}
                className={`w-10 h-10 border-2 flex items-center justify-center transition-all bg-white rounded-full ${
                  canGoNext
                    ? "border-tikari-green/20 hover:border-tikari-green hover:bg-tikari-green-dark hover:text-white text-tikari-green-dark cursor-pointer"
                    : "border-tikari-green/10 text-tikari-sage/30 cursor-not-allowed opacity-50"
                }`}
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}