import { Eye, ShieldCheck, Lock, UserCheck, AlertTriangle, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SecuritySection() {
  const t = useTranslations("home.security");
  
  const securityItems = [
    {
      title: t("items.fourEyes.title"),
      desc: t("items.fourEyes.desc"),
      icon: UserCheck
    },
    {
      title: t("items.audit.title"),
      desc: t("items.audit.desc"),
      icon: ShieldCheck
    },
    {
      title: t("items.rbac.title"),
      desc: t("items.rbac.desc"),
      icon: Lock
    },
    {
      title: t("items.sensitive.title"),
      desc: t("items.sensitive.desc"),
      icon: Eye
    },
    {
      title: t("items.aml.title"),
      desc: t("items.aml.desc"),
      icon: AlertTriangle
    },
    {
      title: t("items.compliance.title"),
      desc: t("items.compliance.desc"),
      icon: BarChart3
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-6 bg-white border-b border-tikari-green/10">
      <div className="max-w-7xl mx-auto space-y-14 lg:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30">
            <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold-dark font-semibold">{t("badge")}</span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-tikari-green-dark leading-[1.15] tracking-tight">
            {t("title")}
          </h2>
          <p className="text-[15px] lg:text-[17px] text-tikari-sage leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Image and Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[520px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-tikari-green/5"></div>
            <Image
              src="/bnw-muslim.jpg"
              alt={t("imageCaption")}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tikari-green-dark/90 to-transparent p-6">
              <p className="text-sm text-white/90 leading-relaxed">
                {t("imageCaption")}
              </p>
            </div>
          </div>

          {/* Security Items */}
          <div className="grid gap-5 order-1 lg:order-2">
            {securityItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 lg:p-7 bg-tikari-cream-light/50 border border-tikari-green/[0.08] hover:border-tikari-green/[0.15] hover:bg-white transition-all duration-300 flex gap-5 group"
              >
                <div className="w-12 h-12 bg-tikari-green/[0.08] border border-tikari-green/[0.12] flex items-center justify-center text-tikari-green shrink-0 group-hover:bg-tikari-green/[0.12] group-hover:border-tikari-green/[0.2] transition-all duration-300">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[16px] font-bold text-tikari-green-dark leading-snug">{item.title}</h3>
                  <p className="text-[13px] text-tikari-sage leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
