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

export default function SMESolutionsPage() {
  const financingProducts = [
    {
      title: "Murabaha Trade Financing",
      description: "Purchase inventory, equipment, or raw materials with Shariah-compliant cost-plus financing. TIKARI facilitates the purchase, marks up the cost transparently, and structures fixed installment payments with no hidden interest charges.",
      icon: Package,
      image: "/women-market.jpg",
      color: "bg-tikari-green-dark",
      features: [
        "Inventory and stock financing in FCFA",
        "Equipment and machinery purchase",
        "Transparent markup disclosure (no Riba)",
        "Fixed monthly installments",
        "Early settlement rebates",
        "Flexible payment terms up to 36 months"
      ]
    },
    {
      title: "Musharakah Partnership Financing",
      description: "Joint venture financing where TIKARI member institutions co-invest in your business expansion. Profits and losses are shared according to pre-agreed ratios. Ideal for growth capital and project financing in Cameroon's SME sector.",
      icon: Storefront,
      image: "/handshake.jpg",
      color: "bg-tikari-gold",
      features: [
        "Joint ownership and profit sharing",
        "Diminishing Musharakah for asset acquisition",
        "Working capital partnership",
        "Business expansion projects",
        "Shariah-compliant risk sharing",
        "Exit strategies at maturity"
      ]
    },
    {
      title: "Ijara Equipment Leasing",
      description: "Lease machinery, vehicles, or commercial property without interest-based financing. The financial institution owns the asset and leases it to you with a rental schedule. Option to purchase at end of term with accumulated rental credit.",
      icon: Truck,
      image: "/meeting.jpg",
      color: "bg-tikari-green",
      features: [
        "Vehicles and transport equipment",
        "Manufacturing machinery",
        "Commercial property leasing",
        "Rental-to-ownership structures",
        "No balloon payments or surprises",
        "Asset maintenance included"
      ]
    },
    {
      title: "Salam Agricultural Financing",
      description: "Forward financing for agricultural producers. Receive upfront payment for crops to be delivered at harvest. Supports farming operations in Cameroon with Shariah-compliant cash flow before production cycle completes.",
      icon: Factory,
      image: "/woman-market.jpg",
      color: "bg-tikari-sage",
      features: [
        "Pre-harvest working capital",
        "Crop-specific pricing agreements",
        "Quality and delivery specifications",
        "Risk mitigation for farmers",
        "FCFA-denominated contracts",
        "Seasonal financing cycles"
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
              Solutions for Businesses & SMEs
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-4">
              Shariah-compliant financing for Cameroon's entrepreneurs.
            </p>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Whether you need inventory financing, equipment leasing, or growth capital, TIKARI connects you with Islamic financial institutions offering interest-free business solutions. All transactions in FCFA with transparent markup structures and no hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/demo"
                className="group bg-tikari-gold text-tikari-green-dark hover:bg-tikari-gold/90 rounded-none"
              >
                Apply for Financing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                href="/platform"
                className="group bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 rounded-none"
              >
                See the Platform
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
              Islamic Financing Products
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage max-w-3xl mx-auto">
              Four distinct Shariah-compliant structures for business financing.
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
                  <div className={`relative h-[450px] lg:h-[550px] overflow-hidden shadow-2xl border border-tikari-green/10 ${isEven ? '' : 'lg:order-2'}`}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className={`absolute inset-0 ${
                      idx === 0 ? 'bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent' :
                      idx === 1 ? 'bg-gradient-to-tl from-tikari-gold/40 via-transparent to-transparent' :
                      idx === 2 ? 'bg-gradient-to-tr from-tikari-green/50 via-tikari-green-dark/30 to-transparent' :
                      'bg-gradient-to-bl from-tikari-sage/50 via-transparent to-tikari-gold/20'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 ${product.color} text-white flex items-center justify-center`}>
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
              Why choose Islamic financing for your business
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage leading-relaxed max-w-3xl mx-auto">
              Beyond religious compliance, Islamic finance offers practical advantages for SMEs in Cameroon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: CurrencyCircleDollar,
                title: "No Hidden Fees",
                description: "Transparent pricing with all costs disclosed upfront. No compound interest, no penalty fees, no balloon payments."
              },
              {
                icon: Receipt,
                title: "Asset-Backed Financing",
                description: "Financing tied to real assets and business activity, not speculative lending. Lower risk for both parties."
              },
              {
                icon: ChartBar,
                title: "Risk Sharing",
                description: "Financial institutions share in your business success through profit-sharing, not just fixed interest extraction."
              },
              {
                icon: Clock,
                title: "Flexible Structures",
                description: "Financing products designed around business cycles, not rigid payment schedules that ignore cash flow reality."
              },
              {
                icon: Calculator,
                title: "Early Settlement Benefits",
                description: "Pay off Murabaha financing early and receive rebates on the markup. Incentives for financial discipline."
              },
              {
                icon: TrendUp,
                title: "Business Partnership",
                description: "Islamic banks act as true partners in your growth, not just creditors demanding fixed repayments."
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-tikari-green/10 p-6 hover:border-tikari-green/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-tikari-green/10 border border-tikari-green/20 flex items-center justify-center mb-4">
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
                Simple application process
              </h2>
              
              <p className="text-[16px] text-white/85 leading-relaxed mb-8">
                TIKARI streamlines the entire financing application process. From initial inquiry to disbursement, everything is tracked in the platform with complete Shariah compliance documentation.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Submit Application",
                    description: "Provide business details, financial statements, and financing requirements through the TIKARI platform."
                  },
                  {
                    step: "2",
                    title: "Shariah Review",
                    description: "Your application is reviewed for Shariah compliance and matched with appropriate Islamic financing products."
                  },
                  {
                    step: "3",
                    title: "Credit Assessment",
                    description: "Financial institution evaluates your business creditworthiness and determines financing terms in FCFA."
                  },
                  {
                    step: "4",
                    title: "Contract & Disbursement",
                    description: "Sign Shariah-compliant contracts with transparent markup disclosure. Funds disbursed to your business account."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-tikari-gold/20 border border-tikari-gold/30 flex items-center justify-center flex-shrink-0">
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

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/personOffice.jpg"
                alt="Business financing application"
                fill
                className="object-cover"
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
            Ready to finance your business growth?
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Connect with Islamic financial institutions offering Murabaha, Musharakah, Ijara, and Salam financing for Cameroon's SME sector. All transactions in FCFA with transparent Shariah-compliant structures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
            >
              Apply for Financing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/platform"
              className="group bg-white/90 text-tikari-green-dark hover:bg-white border-2 border-tikari-green-dark/20 rounded-none"
            >
              Explore the Platform
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
