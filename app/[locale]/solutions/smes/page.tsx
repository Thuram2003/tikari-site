"use client";

import { 
  ArrowRight,
  CheckCircle,
  Storefront,
  Package,
  TrendUp,
  Factory,
  Truck,
  ChartBar,
  Calculator,
  Clock,
  CurrencyCircleDollar,
  Receipt
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function SMESolutionsPage() {
  const t = useTranslations("solutions.smes");
  const financingProducts = [
    {
      title: t("financingProducts.murabaha.title"),
      description: t("financingProducts.murabaha.description"),
      icon: Package,
      image: "/women-market.jpg",
      color: "bg-tikari-green-dark",
      features: [
        t("financingProducts.murabaha.features.0"),
        t("financingProducts.murabaha.features.1"),
        t("financingProducts.murabaha.features.2"),
        t("financingProducts.murabaha.features.3"),
        t("financingProducts.murabaha.features.4"),
        t("financingProducts.murabaha.features.5")
      ]
    },
    {
      title: t("financingProducts.musharakah.title"),
      description: t("financingProducts.musharakah.description"),
      icon: Storefront,
      image: "/handshake.jpg",
      color: "bg-tikari-gold",
      features: [
        t("financingProducts.musharakah.features.0"),
        t("financingProducts.musharakah.features.1"),
        t("financingProducts.musharakah.features.2"),
        t("financingProducts.musharakah.features.3"),
        t("financingProducts.musharakah.features.4"),
        t("financingProducts.musharakah.features.5")
      ]
    },
    {
      title: t("financingProducts.ijara.title"),
      description: t("financingProducts.ijara.description"),
      icon: Truck,
      image: "/meeting.jpg",
      color: "bg-tikari-green",
      features: [
        t("financingProducts.ijara.features.0"),
        t("financingProducts.ijara.features.1"),
        t("financingProducts.ijara.features.2"),
        t("financingProducts.ijara.features.3"),
        t("financingProducts.ijara.features.4"),
        t("financingProducts.ijara.features.5")
      ]
    },
    {
      title: t("financingProducts.salam.title"),
      description: t("financingProducts.salam.description"),
      icon: Factory,
      image: "/woman-market.jpg",
      color: "bg-tikari-sage",
      features: [
        t("financingProducts.salam.features.0"),
        t("financingProducts.salam.features.1"),
        t("financingProducts.salam.features.2"),
        t("financingProducts.salam.features.3"),
        t("financingProducts.salam.features.4"),
        t("financingProducts.salam.features.5")
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-tikari-green/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/demo"
              >
                {t("cta.applyForFinancing")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="cream"
                size="lg"
                href="/platform"
              >
                {t("cta.explorePlatform")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Products Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("financingProducts.title")}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage max-w-3xl mx-auto">
              {t("financingProducts.subtitle")}
            </p>
          </div>

          <div className="space-y-24">
            {financingProducts.map((product, idx) => {
              const Icon = product.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={idx}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div className={`relative h-[450px] lg:h-[550px] overflow-hidden shadow-2xl border border-tikari-green/10 ${isEven ? '' : 'lg:order-2'} rounded-2xl`}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-2xl"
                      priority={idx === 0}
                    />
                    <div className={`absolute inset-0 ${
                      idx === 0 ? 'bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent ' :
                      idx === 1 ? 'bg-gradient-to-tl from-tikari-gold/40 via-transparent to-transparent' :
                      idx === 2 ? 'bg-gradient-to-tr from-tikari-green/50 via-tikari-green-dark/30 to-transparent' :
                      'bg-gradient-to-bl from-tikari-sage/50 via-transparent to-tikari-gold/20'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 ${product.color} text-white flex items-center justify-center rounded-full`}>
                        <Icon className="h-7 w-7" weight="bold" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-tikari-green-dark">
                        {product.title}
                      </h3>
                    </div>
                    
                    <p className="text-[16px] text-tikari-sage leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-tikari-green flex-shrink-0 mt-0.5" weight="bold" />
                          <span className="text-[14px] text-tikari-sage leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Islamic Financing Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("whyChoose.title")}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage leading-relaxed max-w-3xl mx-auto">
              {t("whyChoose.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: CurrencyCircleDollar,
                title: t("whyChoose.noHiddenFees.title"),
                description: t("whyChoose.noHiddenFees.description")
              },
              {
                icon: Receipt,
                title: t("whyChoose.assetBacked.title"),
                description: t("whyChoose.assetBacked.description")
              },
              {
                icon: ChartBar,
                title: t("whyChoose.riskSharing.title"),
                description: t("whyChoose.riskSharing.description")
              },
              {
                icon: Clock,
                title: t("whyChoose.flexibleStructures.title"),
                description: t("whyChoose.flexibleStructures.description")
              },
              {
                icon: Calculator,
                title: t("whyChoose.earlySettlement.title"),
                description: t("whyChoose.earlySettlement.description")
              },
              {
                icon: TrendUp,
                title: t("whyChoose.businessPartnership.title"),
                description: t("whyChoose.businessPartnership.description")
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-tikari-green/10 p-6 hover:border-tikari-green/30 hover:shadow-lg transition-all duration-300 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-tikari-green/10 border border-tikari-green/20 flex items-center justify-center mb-4 rounded-full">
                    <Icon className="h-6 w-6 text-tikari-green-dark" weight="bold" />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2 text-tikari-green-dark">{benefit.title}</h3>
                  <p className="text-[14px] text-tikari-sage leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
                {t("applicationProcess.title")}
              </h2>
              
              <p className="text-[16px] text-white/85 leading-relaxed mb-8">
                {t("applicationProcess.description")}
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: t("applicationProcess.steps.0.title"),
                    description: t("applicationProcess.steps.0.description")
                  },
                  {
                    step: "2",
                    title: t("applicationProcess.steps.1.title"),
                    description: t("applicationProcess.steps.1.description")
                  },
                  {
                    step: "3",
                    title: t("applicationProcess.steps.2.title"),
                    description: t("applicationProcess.steps.2.description")
                  },
                  {
                    step: "4",
                    title: t("applicationProcess.steps.3.title"),
                    description: t("applicationProcess.steps.3.description")
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-tikari-gold/20 border border-tikari-gold/30 flex items-center justify-center flex-shrink-0 rounded-full">
                      <span className="text-xl font-bold text-tikari-gold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold mb-2">{item.title}</h3>
                      <p className="text-[14px] text-white/75 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden shadow-2xl border border-white/10 rounded-2xl">
              <Image
                src="/personOffice.jpg"
                alt="Business financing application"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 lg:py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tikari-green/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
            >
              {t("cta.applyForFinancing")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="cream"
              size="lg"
              href="/platform"
            >
              {t("cta.explorePlatform")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
