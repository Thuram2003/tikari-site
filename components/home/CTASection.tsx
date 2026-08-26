import Image from "next/image";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export default function CTASection() {
  const t = useTranslations("home.cta");
  
  return (
    <section className="relative w-full py-32 px-6 md:px-12 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mulsimwoman.jpg"
          alt={t("title")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-tikari-green-dark/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {t("title")}
        </h2>
        <p className="text-lg text-tikari-cream/85 max-w-2xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button 
            variant="secondary" 
            size="lg" 
            href="/demo"
          >
            {t("bookDemo")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="cream" 
            size="lg" 
            href="/platform"
          >
            {t("explorePlatform")}
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-tikari-cream/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
            <span>{t("features.0")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
            <span>{t("features.1")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
            <span>{t("features.2")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

