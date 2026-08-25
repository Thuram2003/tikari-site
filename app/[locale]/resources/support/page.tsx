"use client";

import { 
  ArrowRight,
  Question,
  EnvelopeSimple,
  Phone,
  VideoCamera,
  BookOpen,
  ChartLineUp,
  Users,
  Coins,
  ShieldCheck,
  CaretDown
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { useState } from "react";

export default function SupportPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const supportChannels = [
    {
      icon: EnvelopeSimple,
      title: "Email Support",
      description: "Get detailed answers within 24 hours",
      contact: "support@tikari.cm",
      action: "Send Email",
      color: "bg-tikari-green-dark"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+237 6XX XXX XXX",
      action: "Call Now",
      color: "bg-tikari-green"
    },
    {
      icon: VideoCamera,
      title: "Book a Demo",
      description: "Live walkthrough of the platform",
      contact: "45-minute session",
      action: "Schedule Demo",
      color: "bg-tikari-gold"
    }
  ];

  const helpTopics = [
    {
      icon: Users,
      title: "Getting Started",
      description: "Initial setup and onboarding guides",
      articles: 12,
      popular: [
        "System Requirements",
        "First-Time Login",
        "Organization Setup",
        "User Roles & Permissions"
      ]
    },
    {
      icon: Coins,
      title: "Product Configuration",
      description: "Setting up Murabaha, Mudarabah, and other products",
      articles: 18,
      popular: [
        "Creating Murabaha Products",
        "PSR Configuration",
        "Profit Pool Setup",
        "Product Approval Workflow"
      ]
    },
    {
      icon: ChartLineUp,
      title: "Reporting & Compliance",
      description: "Generate COBAC returns and financial statements",
      articles: 15,
      popular: [
        "COBAC Prudential Returns",
        "AAOIFI Financial Statements",
        "EOD Processing",
        "Audit Trail Access"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Shariah Governance",
      description: "ACE committee tools and Fatwa management",
      articles: 10,
      popular: [
        "ACE Dashboard",
        "Fatwa Repository",
        "Product Review Process",
        "Shariah Audit Reports"
      ]
    }
  ];

  const faqs = [
    {
      category: "Regulatory",
      question: "Is TIKARI compliant with COBAC microfinance regulations?",
      answer: "Yes. TIKARI is built specifically for COBAC-licensed microfinance banks operating in CEMAC countries. The platform generates all required COBAC prudential returns directly from the General Ledger, maintains complete audit trails, and supports Unit, Regional, and National MFB licence categories."
    },
    {
      category: "Standards",
      question: "Does TIKARI follow AAOIFI accounting standards?",
      answer: "Yes. TIKARI uses an AAOIFI-aligned chart of accounts and generates AAOIFI-compliant financial statements. The platform also reconciles AAOIFI standards with CEMAC's OHADA accounting framework where required."
    },
    {
      category: "Local Context",
      question: "Can TIKARI handle FCFA-denominated transactions and OHADA accounting?",
      answer: "Yes. TIKARI is designed for CEMAC operations. It natively supports FCFA denomination, BEAC interbank settlement, and OHADA-compliant reporting alongside AAOIFI Islamic accounting standards."
    },
    {
      category: "Operations",
      question: "How does the maker-checker workflow work?",
      answer: "Every sensitive operation (product creation, disbursements, GL corrections) requires dual authorization. The 'maker' initiates the transaction, and a separate 'checker' approves it before execution. All actions are logged with timestamps and user IDs in the audit trail."
    },
    {
      category: "Technical",
      question: "Does TIKARI support multi-currency operations?",
      answer: "While TIKARI is optimized for FCFA operations, it supports multi-currency accounting for institutions with foreign currency exposure reporting requirements under COBAC MFB-009 returns."
    },
    {
      category: "Implementation",
      question: "How long does implementation take?",
      answer: "Implementation timelines vary by institution size. A Unit MFB typically takes 4-6 weeks from contract signing to go-live. Regional and National MFBs with multiple branches may require 8-12 weeks. This includes data migration, staff training, and Shariah board onboarding."
    },
    {
      category: "Governance",
      question: "What is the ACE committee, and how does TIKARI support it?",
      answer: "ACE (Advisory Committee of Experts) is the Shariah Supervisory Board. TIKARI provides a dedicated ACE Dashboard where scholars can review pending products, issue Fatwas, conduct periodic audits, and maintain a searchable Fatwa repository for COBAC examiner access."
    },
    {
      category: "Products",
      question: "Can TIKARI handle Njangi group savings structures?",
      answer: "Yes. TIKARI has native support for rotating savings and credit associations (Njangis), including contribution tracking, rotation schedules, automated disbursement to designated recipients, and full audit trails for COBAC compliance."
    }
  ];

  const tutorials = [
    {
      title: "Creating Your First Murabaha Product",
      duration: "8 minutes",
      level: "Beginner",
      steps: 5
    },
    {
      title: "Processing EOD Close",
      duration: "12 minutes",
      level: "Beginner",
      steps: 7
    },
    {
      title: "Generating COBAC Returns",
      duration: "15 minutes",
      level: "Intermediate",
      steps: 9
    },
    {
      title: "Multi-Branch GL Consolidation",
      duration: "20 minutes",
      level: "Advanced",
      steps: 12
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-tikari-gold/20 text-tikari-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-tikari-gold/30">
              <Question weight="bold" className="h-4 w-4" />
              Support Centre
            </div>
            
            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              Help Center
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Find answers, tutorials, and direct support channels. We're here to help your institution succeed with TIKARI.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search for help articles, FAQs, or tutorials..."
                  className="w-full px-6 py-4 text-tikari-green-dark placeholder:text-tikari-sage/60 outline-none border-2 border-white/20 focus:border-tikari-gold transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-tikari-gold text-tikari-green-dark font-semibold hover:bg-tikari-gold/90 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Contact Support
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Choose the channel that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-tikari-green/20 hover:border-tikari-green hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-8 text-center">
                    <div className={`inline-flex p-4 ${channel.color} mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" weight="bold" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-tikari-green-dark mb-3">
                      {channel.title}
                    </h3>
                    <p className="text-[15px] text-tikari-sage mb-4">
                      {channel.description}
                    </p>
                    <p className="text-sm font-semibold text-tikari-gold mb-6">
                      {channel.contact}
                    </p>
                    
                    <button className="w-full py-2.5 bg-tikari-green-dark text-white hover:bg-tikari-green transition-colors text-sm font-semibold group-hover:bg-tikari-gold group-hover:text-tikari-green-dark">
                      {channel.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Browse by Topic
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Find detailed guides and step-by-step tutorials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {helpTopics.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-tikari-green/10 group-hover:bg-tikari-green-dark transition-colors">
                        <Icon className="h-6 w-6 text-tikari-green-dark group-hover:text-white" weight="bold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-tikari-green-dark mb-2">
                          {topic.title}
                        </h3>
                        <p className="text-[15px] text-tikari-sage mb-2">
                          {topic.description}
                        </p>
                        <span className="text-xs text-tikari-gold font-semibold">
                          {topic.articles} articles
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-t-2 border-tikari-green/10 pt-4">
                      <h4 className="text-sm font-semibold text-tikari-green-dark mb-3 uppercase tracking-wide">
                        Popular Articles
                      </h4>
                      <ul className="space-y-2">
                        {topic.popular.map((article, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[14px] text-tikari-sage hover:text-tikari-green-dark cursor-pointer transition-colors">
                            <span className="text-tikari-green-dark mt-1">→</span>
                            <span>{article}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Quick answers to common questions about TIKARI.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-tikari-green/20 hover:border-tikari-green transition-colors"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex-1 pr-4">
                    <span className="text-xs font-semibold text-tikari-gold bg-tikari-gold/10 px-3 py-1 rounded-full mb-2 inline-block">
                      {faq.category}
                    </span>
                    <h3 className="text-[17px] font-semibold text-tikari-green-dark">
                      {faq.question}
                    </h3>
                  </div>
                  <CaretDown 
                    className={`h-5 w-5 text-tikari-green-dark transition-transform flex-shrink-0 ${
                      openFAQ === idx ? 'rotate-180' : ''
                    }`}
                    weight="bold"
                  />
                </button>
                
                {openFAQ === idx && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[15px] text-tikari-sage leading-relaxed border-t-2 border-tikari-green/10 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Video Tutorials
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Step-by-step video guides for common tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video bg-tikari-green-dark flex items-center justify-center relative overflow-hidden">
                  <VideoCamera className="h-12 w-12 text-white/40" weight="bold" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-white font-semibold">
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      tutorial.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      tutorial.level === 'Intermediate' ? 'bg-tikari-gold/10 text-tikari-gold' :
                      'bg-tikari-green-dark/10 text-tikari-green-dark'
                    }`}>
                      {tutorial.level}
                    </span>
                    <span className="text-xs text-tikari-sage">
                      {tutorial.steps} steps
                    </span>
                  </div>
                  
                  <h3 className="text-[15px] font-bold text-tikari-green-dark group-hover:text-tikari-gold transition-colors">
                    {tutorial.title}
                  </h3>
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
            Can't find what you're looking for?
          </h2>
          <p className="text-[17px] text-tikari-green-dark/80 mb-8 max-w-2xl mx-auto">
            Our support team is ready to help you directly. Reach out via email, phone, or schedule a live demo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="mailto:support@tikari.cm"
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
            >
              Email Support
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/demo"
              className="group bg-white/10 text-tikari-green-dark hover:bg-white/20 border-2 border-tikari-green-dark/20 rounded-none"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
