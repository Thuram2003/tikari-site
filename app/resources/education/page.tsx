"use client";

import { 
  ArrowRight,
  BookOpen,
  GraduationCap,
  FileText,
  Certificate,
  Coins,
  Users,
  ChartLineUp,
  ShieldCheck,
  Notebook,
  Question
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function EducationPage() {
  const topics = [
    {
      title: "Islamic Finance Principles",
      icon: ShieldCheck,
      description: "Core principles that distinguish Islamic banking from conventional finance.",
      articles: [
        "Prohibition of Riba (Interest)",
        "Risk-Sharing and Profit-Loss Sharing",
        "Asset-Backed Transactions",
        "Shariah Compliance Framework",
        "Halal vs Haram in Finance"
      ],
      badge: "Foundations"
    },
    {
      title: "Islamic Products",
      icon: Coins,
      description: "Detailed breakdowns of common Islamic financing structures.",
      articles: [
        "Murabaha (Cost-Plus Financing)",
        "Mudarabah (Profit-Sharing)",
        "Musharakah (Partnership)",
        "Ijara (Leasing)",
        "Salam (Forward Purchase)"
      ],
      badge: "Products"
    },
    {
      title: "AAOIFI Standards",
      icon: FileText,
      description: "Accounting and auditing standards for Islamic financial institutions.",
      articles: [
        "AAOIFI Chart of Accounts",
        "Financial Statement Requirements",
        "Shariah Governance Standards",
        "Investment Account Reporting",
        "Zakat Calculation Methods"
      ],
      badge: "Standards"
    },
    {
      title: "Shariah Governance",
      icon: GraduationCap,
      description: "How Shariah Supervisory Boards oversee Islamic banking operations.",
      articles: [
        "Role of the Shariah Board",
        "Fatwa Issuance Process",
        "Internal Shariah Audit",
        "Shariah Review Units",
        "Annual Shariah Reports"
      ],
      badge: "Governance"
    },
    {
      title: "CEMAC Context",
      icon: Users,
      description: "Islamic finance within the Central African Economic and Monetary Community.",
      articles: [
        "COBAC Microfinance Regulations",
        "BEAC Monetary Policy",
        "FCFA Denomination Standards",
        "Regional Shariah Compliance",
        "Cross-Border Islamic Banking"
      ],
      badge: "Regional"
    },
    {
      title: "Glossary & Terms",
      icon: BookOpen,
      description: "Comprehensive dictionary of Islamic finance terminology.",
      articles: [
        "Arabic to French Translations",
        "Common Acronyms (MFB, ACE, PSR)",
        "Technical Banking Terms",
        "Shariah Legal Concepts",
        "CEMAC-Specific Vocabulary"
      ],
      badge: "Reference"
    }
  ];

  const guides = [
    {
      title: "What is Islamic Finance?",
      description: "Comprehensive introduction to Shariah-compliant banking, core principles, and how Islamic finance operates in CEMAC.",
      duration: "15 min read",
      level: "Beginner",
      topics: ["Fundamentals", "Shariah"],
      href: "/resources/education/what-is-islamic-finance"
    },
    {
      title: "Understanding Murabaha Financing",
      description: "Step-by-step breakdown of how cost-plus sale financing works in practice.",
      duration: "12 min read",
      level: "Beginner",
      topics: ["Murabaha", "Contracts"],
      href: "/resources/education/understanding-murabaha"
    },
    {
      title: "Profit-Sharing Ratio Disclosure",
      description: "How to properly disclose PSR to customers in Mudarabah accounts.",
      duration: "8 min read",
      level: "Intermediate",
      topics: ["Mudarabah", "Compliance"],
      href: "/resources/education/profit-sharing-ratio"
    },
    {
      title: "AAOIFI vs OHADA: Chart of Accounts",
      description: "Reconciling AAOIFI Islamic accounting with CEMAC OHADA standards.",
      duration: "15 min read",
      level: "Advanced",
      topics: ["AAOIFI", "Reporting"],
      href: "/resources/education/aaoifi-vs-ohada"
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
              <GraduationCap weight="bold" className="h-4 w-4" />
              Education Centre
            </div>
            
            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              Shariah Finance 101
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Comprehensive guides to Islamic finance principles, AAOIFI standards, and Shariah governance tailored to the CEMAC regulatory environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="#guides"
                className="group bg-tikari-gold text-tikari-green-dark hover:bg-tikari-gold/90 rounded-none"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                href="/demo"
                className="group bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 rounded-none"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              Knowledge Topics
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Browse by category to find what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-tikari-green/20 hover:border-tikari-green hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-tikari-green/10 group-hover:bg-tikari-green-dark transition-colors duration-300">
                        <Icon className="h-6 w-6 text-tikari-green-dark group-hover:text-white" weight="bold" />
                      </div>
                      <span className="text-xs font-semibold text-tikari-gold bg-tikari-gold/10 px-3 py-1 rounded-full">
                        {topic.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-tikari-green-dark mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-[15px] text-tikari-sage leading-relaxed mb-6">
                      {topic.description}
                    </p>
                    
                    <ul className="space-y-2.5">
                      {topic.articles.map((article, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-tikari-sage">
                          <span className="text-tikari-green-dark mt-1">•</span>
                          <span>{article}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="guides" className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
                Featured Guides
              </h2>
              <p className="text-[17px] text-tikari-sage max-w-2xl">
                In-depth articles written by our Shariah compliance team.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, idx) => (
              <Link
                key={idx}
                href={guide.href}
                className="block bg-white border-2 border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      guide.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      guide.level === 'Intermediate' ? 'bg-tikari-gold/10 text-tikari-gold' :
                      'bg-tikari-green-dark/10 text-tikari-green-dark'
                    }`}>
                      {guide.level}
                    </span>
                    <span className="text-xs text-tikari-sage">
                      {guide.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-tikari-green-dark mb-3 group-hover:text-tikari-gold transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[15px] text-tikari-sage leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {guide.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="text-xs text-tikari-green-dark bg-tikari-green/5 px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 text-tikari-green-dark">
            Need help with implementation?
          </h2>
          <p className="text-[17px] text-tikari-green-dark/80 mb-8 max-w-2xl mx-auto">
            Our team provides onboarding support, Shariah governance setup, and ongoing training for your institution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="/demo"
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/resources/support"
              className="group bg-white/10 text-tikari-green-dark hover:bg-white/20 border-2 border-tikari-green-dark/20 rounded-none"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
