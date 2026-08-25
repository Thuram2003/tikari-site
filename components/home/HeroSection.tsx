import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui";

export default function HeroSection() {
  const t = useTranslations("home.hero");
  
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/women-market.jpg"
          alt="Islamic Banking in Cameroon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-tikari-green-dark/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center text-white space-y-6 sm:space-y-8 lg:space-y-10">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            {t("title")}
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-tikari-cream/90 max-w-4xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2 sm:pt-4">
            <Button 
              variant="secondary" 
              size="lg" 
              href="/demo"
              className="rounded-none font-medium"
            >
              {t("bookDemo")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-bottom justify-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tikari-gold flex-shrink-0" weight="fill" />
              <span className="text-tikari-cream/80">{t("badges.beac")}</span>
            </div>
            <div className="w-px h-4 sm:h-5 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tikari-gold flex-shrink-0" weight="fill" />
              <span className="text-tikari-cream/80">{t("badges.cobac")}</span>
            </div>
            <div className="w-px h-4 sm:h-5 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-tikari-gold flex-shrink-0" weight="fill" />
              <span className="text-tikari-cream/80">{t("badges.aaoifi")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

