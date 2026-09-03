import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProblemSection() {
  const t = useTranslations("home.problem");
  
  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-tikari-cream/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-white border border-tikari-green/10">
                <span className="text-xs uppercase tracking-widest text-tikari-sage font-bold">{t("badge")}</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-tikari-green-dark leading-tight">
                {t("title")}
              </h2>
              
              <p className="text-lg lg:text-xl text-tikari-sage leading-relaxed max-w-2xl">
                {t("subtitle")}
              </p>
            </div>

            {/* Problem Cards */}
            <div className="space-y-6">
              
              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2 rounded-r-2xl">
                <h3 className="text-base font-bold text-tikari-green-dark">{t("issues.income.title")}</h3>
                <p className="text-sm text-tikari-sage">
                  {t("issues.income.desc")}
                </p>
              </div>

              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2 rounded-r-2xl">
                <h3 className="text-base font-bold text-tikari-green-dark">{t("issues.cobac.title")}</h3>
                <p className="text-sm text-tikari-sage">
                  {t("issues.cobac.desc")}
                </p>
              </div>

              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2 rounded-r-2xl">
                <h3 className="text-base font-bold text-tikari-green-dark">{t("issues.governance.title")}</h3>
                <p className="text-sm text-tikari-sage">
                  {t("issues.governance.desc")}
                </p>
              </div>

              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2 rounded-r-2xl">
                <h3 className="text-base font-bold text-tikari-green-dark">{t("issues.eod.title")}</h3>
                <p className="text-sm text-tikari-sage">
                  {t("issues.eod.desc")}
                </p>
              </div>

            </div>

            {/* TIKARI Difference */}
            <div className="bg-tikari-sage-light border-l-4 border-tikari-green p-8 space-y-4 rounded-r-2xl">
              <h3 className="text-xl font-bold text-tikari-green-dark">{t("tikariDifference.title")}</h3>
              <p className="text-base text-tikari-green-dark leading-relaxed">
                {t("tikariDifference.desc1")}
              </p>
              <p className="text-base text-tikari-green-dark leading-relaxed">
                {t("tikariDifference.desc2")}
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-4">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden border border-tikari-green/10 bg-white rounded-2xl">
                <Image
                  src="/image3.jpg"
                  alt="Cameroon Islamic Banking Operations"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <p className="text-sm text-tikari-sage leading-relaxed">
                {t("imageCaption")}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


