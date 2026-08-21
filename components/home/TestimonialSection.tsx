"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function TestimonialSection() {
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
      category: "Islamic Microfinance",
      institution: "MC² Dschang Microfinance",
      location: "Dschang, West Region",
      metrics: [
        { label: "Murabaha Loans", value: "FCFA 2.8B" },
        { label: "Transaction Time", value: "5min" },
        { label: "Active Clients", value: "12,500" }
      ],
      quote: "Before TIKARI, our Islamic financing products required manual calculations and spreadsheets. Now everything from Murabaha contracts to Zakat calculations is automated and audit-ready.",
      author: "Amina Fotso",
      role: "Operations Manager",
      image: "/mulsimwoman.jpg",
      yearsWithTikari: "1",
    },
    {
      category: "Community Bank",
      institution: "CCA-Bank Cameroon",
      location: "Yaoundé, Cameroon",
      metrics: [
        { label: "Daily Transactions", value: "45K+" },
        { label: "Processing Cost", value: "-60%" },
        { label: "System Uptime", value: "99.8%" }
      ],
      quote: "TIKARI's core banking platform supports our entire network. The BEAC reporting is automatic, and we can offer both conventional and Islamic banking products from the same system.",
      author: "Paul Biya Njong",
      role: "Chief Technology Officer",
      image: "/people.jpg",
      yearsWithTikari: "3",
    },
    {
      category: "Islamic Cooperative",
      institution: "SOFI-CAM Islamic Cooperative",
      location: "Douala, Littoral",
      metrics: [
        { label: "Member Savings", value: "FCFA 4.2B" },
        { label: "Profit Share Rate", value: "8.5%" },
        { label: "Zero Interest", value: "100%" }
      ],
      quote: "We needed a system that understood Islamic finance principles for Cameroon's regulatory environment. TIKARI delivers both - Shariah compliance and CEMAC reporting in one platform.",
      author: "Hadja Aissatou Sow",
      role: "General Manager",
      image: "/personOffice.jpg",
      yearsWithTikari: "2",
    },
    {
      category: "Regional Microfinance",
      institution: "MUFFA Adamawa Microfinance",
      location: "Ngaoundéré, Adamawa",
      metrics: [
        { label: "Portfolio Quality", value: "PAR <3%" },
        { label: "Loan Disbursement", value: "Same Day" },
        { label: "Rural Reach", value: "85%" }
      ],
      quote: "TIKARI works perfectly even with our intermittent connectivity in rural areas. The offline mode lets us serve clients in remote villages, then sync when network is available.",
      author: "Issa Mohamadou",
      role: "Regional Director",
      image: "/mulsimwoman.jpg",
      yearsWithTikari: "1",
    },
    {
      category: "Islamic Investment Bank",
      institution: "Albaraka Cameroon",
      location: "Douala Business District",
      metrics: [
        { label: "Sukuk Issued", value: "FCFA 15B" },
        { label: "Compliance Rate", value: "100%" },
        { label: "Corporate Clients", value: "450+" }
      ],
      quote: "For investment banking, accuracy and compliance are non-negotiable. TIKARI's Shariah board reporting and COBAC integration gives us confidence in every transaction.",
      author: "Abdoulaye Diouf",
      role: "Chief Financial Officer",
      image: "/people.jpg",
      yearsWithTikari: "3",
    },
    {
      category: "Women's Microfinance",
      institution: "FIFFA Women Cooperative Bank",
      location: "Bafoussam, West Region",
      metrics: [
        { label: "Women Empowered", value: "28,000+" },
        { label: "Group Loans", value: "FCFA 890M" },
        { label: "Repayment Rate", value: "98.5%" }
      ],
      quote: "TIKARI simplified our group lending and rotating savings operations. The mobile integration lets our members check balances and make deposits from their villages.",
      author: "Marie-Claire Kemegni",
      role: "Executive Director",
      image: "/personOffice.jpg",
      yearsWithTikari: "2",
    },
    {
      category: "Agricultural Finance",
      institution: "APEX-CAMCCUL",
      location: "Buea, Southwest Region",
      metrics: [
        { label: "Farm Loans", value: "FCFA 3.5B" },
        { label: "Cooperatives", value: "240+" },
        { label: "Crop Cycles", value: "Fully Tracked" }
      ],
      quote: "Agricultural lending requires flexible repayment schedules tied to harvest seasons. TIKARI handles this complexity while keeping us compliant with BEAC agricultural credit regulations.",
      author: "Benjamin Taku",
      role: "Agri-Finance Manager",
      image: "/mulsimwoman.jpg",
      yearsWithTikari: "1",
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
          <div className="inline-block px-4 py-1.5 bg-tikari-sage-light border border-tikari-green/10">
            <span className="text-xs uppercase tracking-widest text-tikari-green-dark font-bold">Client Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-tikari-green-dark leading-tight">
            Trusted Across Cameroon's<br />Islamic Finance Sector
          </h2>
          <p className="text-base lg:text-lg text-tikari-sage max-w-2xl mx-auto">
            See how Shariah-compliant institutions achieve operational excellence with TIKARI.
          </p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="w-full relative">

          {/* Sliding Track */}
          <div
            className="flex gap-4 lg:gap-6 transition-transform duration-700 ease-out select-none"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white border transition-all duration-500 shrink-0 ${
                  activeSlide === idx 
                    ? "opacity-100 border-tikari-green/20 shadow-[0_20px_60px_-15px_rgba(27,67,50,0.12)]" 
                    : "opacity-30 border-tikari-green/5 shadow-[0_10px_30px_-10px_rgba(27,67,50,0.05)]"
                } w-[90vw] md:w-[85vw] lg:w-[900px]`}
              >
                
                {/* Card Content - More Compact */}
                <div className="p-6 lg:p-10 space-y-6">

                  {/* Header Row: Category + Institution + Years Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-tikari-green/10">
                    <div className="space-y-1.5">
                      <div className="px-2.5 py-1 bg-tikari-gold/10 border border-tikari-gold/20 inline-block">
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
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-tikari-sage-light border border-tikari-green/10">
                        <span className="text-xl font-bold text-tikari-green-dark font-mono">{item.yearsWithTikari}</span>
                        <span className="text-[9px] text-tikari-sage uppercase tracking-wider leading-tight">Years<br/>Partner</span>
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
                      
                      {/* Author */}
                      <div className="pt-3 border-t border-tikari-green/5">
                        <p className="text-sm font-bold text-tikari-green-dark">{item.author}</p>
                        <p className="text-xs text-tikari-sage">{item.role}</p>
                      </div>
                    </div>

                    {/* Right: Image - Smaller */}
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
          <div className="max-w-6xl mx-auto flex items-center justify-between mt-8 px-6 lg:px-12">
            
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
                aria-label="Previous testimonial"
                className={`w-10 h-10 border-2 flex items-center justify-center transition-all bg-white ${
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
                aria-label="Next testimonial"
                className={`w-10 h-10 border-2 flex items-center justify-center transition-all bg-white ${
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