"use client";

import { 
  ArrowRight,
  ShieldCheck,
  FileText,
  Certificate,
  Bank,
  ClipboardText,
  BookOpen,
  Newspaper,
  Calendar,
  Download
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function CompliancePage() {
  const regulatoryFrameworks = [
    {
      title: "West & Central Africa (COBAC & BCEAO)",
      authority: "Regional Banking Regulators",
      icon: Bank,
      description: "Prudential standards and Islamic window directives for microfinance and banking institutions in CEMAC and WAEMU states.",
      updates: [
        {
          date: "March 2026",
          title: "Updated Regional Capital Adequacy",
          status: "Recent"
        },
        {
          date: "January 2026",
          title: "Islamic Banking Window Harmonization",
          status: "New"
        },
        {
          date: "November 2025",
          title: "Regional Agent Banking Directives",
          status: "Amended"
        }
      ],
      color: "border-tikari-green"
    },
    {
      title: "Nigeria (CBN non-interest guidelines)",
      authority: "Central Bank of Nigeria",
      icon: ClipboardText,
      description: "CBN guidelines governing non-interest banking windows, capital adequacy ratios, and ledger segregation.",
      updates: [
        {
          date: "February 2026",
          title: "Naira Liquidity Ratio for Islamic Windows",
          status: "Recent"
        },
        {
          date: "December 2025",
          title: "CBN Interbank Settlement Circulars",
          status: "Updated"
        },
        {
          date: "October 2025",
          title: "Non-Interest Core Platform Guidelines",
          status: "Amended"
        }
      ],
      color: "border-tikari-gold"
    },
    {
      title: "AML/CFT Regional Standards",
      authority: "GABAC / GIABA Frameworks",
      icon: ShieldCheck,
      description: "Anti-money laundering and counter-terrorism financing requirements for financial institutions across West and Central Africa.",
      updates: [
        {
          date: "April 2026",
          title: "Enhanced KYC and Identity Verification",
          status: "Pending"
        },
        {
          date: "January 2026",
          title: "STR/CTR Digital Filing Procedures",
          status: "Updated"
        },
        {
          date: "September 2025",
          title: "Cross-Border PEP Transaction Screening",
          status: "Amended"
        }
      ],
      color: "border-tikari-green-dark"
    }
  ];

  const complianceDocuments = [
    {
      title: "Regional MFB Licensing Checklist",
      type: "Checklist",
      pages: "12 pages",
      format: "PDF",
      description: "Complete requirements for Unit, Regional, and National MFB licences across CEMAC & WAEMU."
    },
    {
      title: "AAOIFI Financial Reporting Template",
      type: "Template",
      pages: "28 pages",
      format: "Excel",
      description: "Pre-formatted financial statements compliant with AAOIFI standards."
    },
    {
      title: "Shariah Governance Framework",
      type: "Guide",
      pages: "45 pages",
      format: "PDF",
      description: "Best practices for establishing and maintaining an ACE committee."
    },
    {
      title: "Central Bank Liquidity Calculation Guide",
      type: "Guide",
      pages: "18 pages",
      format: "PDF",
      description: "Step-by-step calculation of Islamic liquidity ratios."
    },
    {
      title: "Regional AML/KYC Document Matrix",
      type: "Reference",
      pages: "8 pages",
      format: "PDF",
      description: "Required identity documents by customer type and jurisdiction."
    },
    {
      title: "Mudarabah PSR Disclosure Template",
      type: "Template",
      pages: "6 pages",
      format: "Word",
      description: "Customer-facing profit-sharing ratio disclosure statement."
    }
  ];

  const webinars = [
    {
      title: "Navigating Regional Islamic Banking Regulations",
      date: "April 15, 2026",
      duration: "90 minutes",
      status: "Upcoming",
      topics: ["Regulators", "Licensing", "Compliance"]
    },
    {
      title: "AAOIFI Financial Reporting in Practice",
      date: "May 3, 2026",
      duration: "60 minutes",
      status: "Upcoming",
      topics: ["AAOIFI", "Reporting", "Audit"]
    },
    {
      title: "AML/CFT for Islamic MFBs",
      date: "March 28, 2026",
      duration: "75 minutes",
      status: "Recorded",
      topics: ["AML/CFT", "Compliance", "KYC"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            
            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              Regulatory Updates
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Stay current with banking guidelines and compliance standards governing Islamic finance across our supported jurisdictions (including Nigeria, WAEMU, and CEMAC).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="#frameworks"
              >
                View Regulations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="cream"
                size="lg"
                href="#documents"
              >
                Download Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="frameworks" className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Regulatory Frameworks
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Key regulatory frameworks governing Islamic microfinance across Africa.
            </p>
          </div>

          <div className="space-y-8">
            {regulatoryFrameworks.map((framework, idx) => {
              const Icon = framework.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-white border ${framework.color} hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden`}
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="lg:w-2/5">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-tikari-green/10 rounded-full">
                            <Icon className="h-7 w-7 text-tikari-green-dark" weight="bold" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-tikari-green-dark mb-1">
                              {framework.title}
                            </h3>
                            <p className="text-sm text-tikari-sage">
                              {framework.authority}
                            </p>
                          </div>
                        </div>
                        <p className="text-[15px] text-tikari-sage leading-relaxed">
                          {framework.description}
                        </p>
                      </div>

                      <div className="lg:w-3/5">
                        <h4 className="text-sm font-semibold text-tikari-green-dark mb-4 uppercase tracking-wide">
                          Recent Updates
                        </h4>
                        <div className="space-y-3">
                          {framework.updates.map((update, i) => (
                            <div 
                              key={i}
                              className="flex items-start gap-4 p-4 bg-tikari-cream/30 border border-tikari-green/10 hover:border-tikari-green/30 transition-colors rounded-2xl"
                            >
                              <Calendar className="h-5 w-5 text-tikari-green-dark mt-0.5 flex-shrink-0" weight="bold" />
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <span className="text-sm font-semibold text-tikari-green-dark">
                                    {update.title}
                                  </span>
                                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                    update.status === 'New' ? 'bg-green-100 text-green-700' :
                                    update.status === 'Recent' ? 'bg-tikari-gold/10 text-tikari-gold' :
                                    update.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                    'bg-tikari-green/10 text-tikari-green-dark'
                                  }`}>
                                    {update.status}
                                  </span>
                                </div>
                                <span className="text-xs text-tikari-sage">
                                  {update.date}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Documents */}
      <section id="documents" className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Compliance Documents
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Download templates, checklists, and reference guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceDocuments.map((doc, idx) => (
              <div 
                key={idx}
                className="bg-white border border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="h-8 w-8 text-tikari-green-dark" weight="bold" />
                    <span className="text-xs font-semibold text-tikari-gold bg-tikari-gold/10 px-3 py-1 rounded-full">
                      {doc.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-tikari-green-dark mb-2 line-clamp-2">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-tikari-sage leading-relaxed mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-tikari-sage mb-4">
                    <span>{doc.pages}</span>
                    <span className="font-semibold">{doc.format}</span>
                  </div>
                  
                  <Button className="w-full flex items-center justify-center gap-2 py-2.5" >
                    <Download className="h-4 w-4" weight="bold" />
                    <span className="text-sm font-semibold">Download</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Compliance Webinars
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Join our expert sessions on regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, idx) => (
              <div 
                key={idx}
                className="bg-white border border-tikari-green/20 hover:border-tikari-green hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      webinar.status === 'Upcoming' ? 'bg-tikari-gold/10 text-tikari-gold' :
                      'bg-tikari-green/10 text-tikari-green-dark'
                    }`}>
                      {webinar.status}
                    </span>
                    <span className="text-xs text-tikari-sage">
                      {webinar.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-tikari-green-dark mb-2">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-tikari-sage mb-4">
                    {webinar.date}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="text-xs text-tikari-green-dark bg-tikari-green/5 px-2.5 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full py-2.5">
                    {webinar.status === 'Upcoming' ? 'Register Now' : 'Watch Recording'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 text-tikari-green-dark">
            Questions about compliance?
          </h2>
          <p className="text-[17px] text-tikari-green-dark/80 mb-8 max-w-2xl mx-auto">
            Our compliance team can help you navigate regional central bank and AML/CFT requirements (such as CBN, COBAC, BCEAO, and GABAC) for your institution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/resources/support"
            >
              Contact Compliance Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="cream"
              size="lg"
              href="/demo"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
