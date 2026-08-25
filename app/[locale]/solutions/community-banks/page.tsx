"use client";

import { 
  ArrowRight,
  CheckCircle,
  BuildingOffice,
  Users,
  Coins,
  Handshake,
  ShieldCheck,
  ListChecks,
  Bank,
  UsersFour,
  CirclesFour
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function CommunityBanksSolutionsPage() {
  const institutionTypes = [
    {
      title: "Community Development Banks",
      description: "Serving a defined local population with savings, Murabaha home improvement financing, and group lending structures. TIKARI provides the teller operations, Njangi group banking, and the Shariah governance tools you need at community scale.",
      icon: BuildingOffice,
      features: [
        "Full COBAC-compliant core banking",
        "Njangi and group savings cycles",
        "Murabaha home improvement financing",
        "Agent banking for field collections"
      ],
      color: "bg-tikari-green-dark",
      image: "/women-market.jpg"
    },
    {
      title: "Cooperatives and Thrifts",
      description: "Cooperative savings and credit societies operating on non-interest principles need product structures that match how members actually save and borrow. TIKARI supports Qard Hasan (benevolent lending), Mudarabah savings pools, and rotating Njangi group structures.",
      icon: Handshake,
      features: [
        "Qard Hasan member loans",
        "Mudarabah savings pool",
        "Rotating Njangi cycles",
        "Member ledger and dividend distribution"
      ],
      color: "bg-tikari-gold",
      image: "/handshake.jpg"
    },
    {
      title: "Islamic Windows",
      description: "Conventional banks and MFBs operating a Shariah-compliant window alongside their conventional book need strict separation between the two ledgers. TIKARI supports Islamic window operations with ring-fenced accounts, separate profit pools, and dedicated Shariah governance.",
      icon: Bank,
      features: [
        "Ring-fenced Islamic window GL",
        "Separate profit pool from conventional book",
        "Shariah governance for window products",
        "Combined or separated reporting"
      ],
      color: "bg-tikari-green",
      image: "/meeting.jpg"
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
              Solutions for Community Banks
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-4">
              Community-scale operations, enterprise-grade compliance.
            </p>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Whether you are a community development bank, a COBAC-regulated cooperative, or a conventional institution running an Islamic window, TIKARI gives you the compliance posture and product depth to serve non-interest customers properly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/demo"
                className="group bg-tikari-gold text-tikari-green-dark hover:bg-tikari-gold/90 rounded-none"
              >
                Book a Demo
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

      {/* Who This Is For Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Who This Is For
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage max-w-3xl mx-auto">
              Three distinct institution types, one platform.
            </p>
          </div>

          <div className="space-y-16">
            {institutionTypes.map((type, idx) => {
              const Icon = type.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={idx}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div className={`relative h-[450px] lg:h-[550px] overflow-hidden shadow-2xl border border-tikari-green/10 ${isEven ? '' : 'lg:order-2'}`}>
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className={`absolute inset-0 ${
                      idx === 0 ? 'bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent' :
                      idx === 1 ? 'bg-gradient-to-tl from-tikari-gold/40 via-transparent to-transparent' :
                      'bg-gradient-to-tr from-tikari-green/50 via-tikari-green-dark/30 to-transparent'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 ${type.color} text-white flex items-center justify-center`}>
                        <Icon className="h-7 w-7" weight="bold" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-tikari-green-dark">
                        {type.title}
                      </h3>
                    </div>
                    
                    <p className="text-[16px] text-tikari-sage leading-relaxed mb-8">
                      {type.description}
                    </p>

                    <div className="space-y-3">
                      {type.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-tikari-green flex-shrink-0 mt-0.5" weight="bold" />
                          <span className="text-[15px] text-tikari-sage leading-relaxed">{feature}</span>
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

      {/* Key Features Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight text-tikari-green-dark">
              Built for Cameroon community banking
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage leading-relaxed max-w-3xl mx-auto">
              From Njangi group ledgers to COBAC reporting, TIKARI handles the unique requirements of community-scale Islamic banking in Cameroon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: UsersFour,
                title: "Njangi Group Banking",
                description: "Digital rotative savings cycles with automated turn distribution and member contribution tracking."
              },
              {
                icon: Coins,
                title: "Qard Hasan Lending",
                description: "Interest-free benevolent loans with flexible repayment schedules and zero markup structures."
              },
              {
                icon: CirclesFour,
                title: "Mudarabah Pools",
                description: "Profit-sharing investment accounts with automated pool allocation and monthly profit distribution."
              },
              {
                icon: ShieldCheck,
                title: "Shariah Governance",
                description: "Built-in Fatwa repository, product approval workflow, and Shariah Supervisory Board dashboard."
              },
              {
                icon: ListChecks,
                title: "COBAC Returns",
                description: "Automated generation of all community bank prudential returns directly from live GL data."
              },
              {
                icon: Bank,
                title: "Islamic Window Support",
                description: "Complete ledger separation between conventional and Islamic operations with dual reporting."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-tikari-green/10 p-6 hover:border-tikari-green/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-tikari-green/10 border border-tikari-green/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-tikari-green-dark" weight="bold" />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2 text-tikari-green-dark">{feature.title}</h3>
                  <p className="text-[14px] text-tikari-sage leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
                Community-scale compliance without compromise
              </h2>
              
              <p className="text-[16px] text-white/85 leading-relaxed mb-6">
                TIKARI gives community banks and cooperatives the same compliance tools used by national-tier institutions. Your COBAC examiner sees the same audit trail quality regardless of your institution size.
              </p>

              <p className="text-[16px] text-white/85 leading-relaxed mb-8">
                For Islamic windows, TIKARI maintains strict separation between conventional and Islamic operations. Each product has its own profit pool, its own Shariah approval record, and its own reporting structure.
              </p>

              <div className="space-y-3">
                {[
                  "Complete audit trail for all transactions",
                  "Shariah Supervisory Board governance tools",
                  "Automated COBAC prudential returns",
                  "Ring-fenced Islamic window accounting",
                  "Member dividend calculation and distribution",
                  "Field agent commission ledger"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="bold" />
                    <span className="text-[15px] text-white/85 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/compliance.jpg"
                alt="Compliance and governance"
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
            Ready to launch community-scale Islamic banking?
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI handles Njangi groups, Qard Hasan lending, and Islamic window operations for Cameroon's community banking sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
            >
              Schedule a Demo
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
