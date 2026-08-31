import { ArrowRight, Calendar, Database, GitCompare, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProcessSection() {
  const t = useTranslations("home.process");
  
  const steps = [
    {
      num: "01",
      title: t("steps.demo.title"),
      desc: t("steps.demo.desc"),
      icon: Calendar
    },
    {
      num: "02",
      title: t("steps.migration.title"),
      desc: t("steps.migration.desc"),
      icon: Database
    },
    {
      num: "03",
      title: t("steps.parallel.title"),
      desc: t("steps.parallel.desc"),
      icon: GitCompare
    },
    {
      num: "04",
      title: t("steps.training.title"),
      desc: t("steps.training.desc"),
      icon: GraduationCap
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-6 bg-tikari-sage-light/30 border-b border-tikari-green/10 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tikari-green/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto space-y-14 lg:space-y-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30 backdrop-blur-sm rounded-full">
            <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold-dark font-semibold">{t("badge")}</span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-tikari-green-dark leading-[1.15] tracking-tight">
            {t("title")}
          </h2>
          <p className="text-sm lg:text-[17px] text-tikari-sage leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[300px] lg:h-[400px] max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-tikari-green/5"></div>
          <Image
            src="/meeting.jpg"
            alt={t("imageCaption")}
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tikari-green-dark/90 to-transparent p-6 lg:p-8 rounded-2xl">
            <p className="text-sm lg:text-base text-white/95 leading-relaxed max-w-3xl">
              {t("imageCaption")}
            </p>
          </div>
        </div>

        {/* Steps Grid with Arrows */}
        <div className="max-w-6xl mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Connection Lines for Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-tikari-gold/30 to-transparent rounded-2xl"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Arrow between steps on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 z-20">
                    <ArrowRight className="h-5 w-5 text-tikari-gold animate-pulse" strokeWidth={2} />
                  </div>
                )}
                
                <div className="bg-white border border-tikari-green/[0.12] p-6 lg:p-7 space-y-4 relative hover:shadow-lg hover:border-tikari-gold/40 transition-all duration-300 group h-full rounded-2xl">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-tikari-gold/20 font-mono leading-none">{step.num}</span>
                    <div className="w-11 h-11 bg-tikari-gold/[0.08] border border-tikari-gold/[0.15] flex items-center justify-center text-tikari-gold group-hover:bg-tikari-gold/[0.12] group-hover:border-tikari-gold/[0.25] transition-all duration-300 rounded-full">
                      <step.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-[17px] font-bold text-tikari-green-dark leading-snug">{step.title}</h3>
                    <p className="text-sm text-tikari-sage leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Arrow indicator on mobile */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center pt-4">
                      <ArrowRight className="h-5 w-5 text-tikari-gold rotate-90" strokeWidth={2} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
