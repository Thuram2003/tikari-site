import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck,
  Target,
  Users,
  Certificate,
  BookOpen,
  ArrowRight,
  CheckCircle,
  MapPin
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "About TIKARI | Islamic Banking Platform",
  description: "Learn about TIKARI's mission to bring Shariah-compliant banking to African financial markets. Meet our Shariah Supervisory Board and discover our commitment to regulatory compliance.",
  openGraph: {
    title: "About TIKARI - Faith-Based Banking Solutions",
    description: "A leading Islamic banking platform, certified by scholars and compliant with regional central bank regulations.",
  },
};

export default function AboutPage() {
  const scholars = [
    {
      name: "Sheikh Dr. Abdulrahman Al-Faisal",
      title: "Chairman, Shariah Supervisory Board",
      credentials: "PhD Islamic Finance, Al-Azhar University",
      expertise: "30+ years in Islamic banking supervision",
      certifications: ["AAOIFI Certified", "CIBAFI Member"],
    },
    {
      name: "Dr. Fatima Bint Abdullah",
      title: "Shariah Advisor",
      credentials: "PhD Fiqh al-Muamalat, International Islamic University",
      expertise: "Specialist in Murabaha and Musharakah contracts",
      certifications: ["AAOIFI Certified", "IFSB Advisory Board"],
    },
    {
      name: "Sheikh Ibrahim Kamara",
      title: "Regional Shariah Officer",
      credentials: "Master's Islamic Law, University of Madinah",
      expertise: "Regional regulatory compliance and local fatwa adaptation",
      certifications: ["Central Bank Approved", "Compliance Certified"],
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "100% Shariah Compliant",
      description: "Every transaction, every line of code, every financial product is verified by independent Islamic scholars before deployment."
    },
    {
      icon: Certificate,
      title: "Regulator Ready",
      description: "Fully compliant with regional central bank guidelines (such as BEAC/COBAC, BCEAO, and CBN directives)."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Built for the underserved microfinance institutions, cooperatives, and community banks across supported jurisdictions in Africa."
    },
    {
      icon: BookOpen,
      title: "Transparent Operations",
      description: "Open documentation, clear profit-sharing ratios, and full disclosure of all terms. No hidden fees, no gharar (uncertainty)."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Banking Without Riba<br />for African Markets
          </h1>
          
          <p className="text-xl text-white/85 leading-relaxed max-w-2xl">
            TIKARI is a faith-based, non-interest banking platform engineered for Islamic banking, microfinance, and traditional savings systems across multiple African jurisdictions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Mission */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-tikari-gold" weight="fill" />
                <span className="text-sm font-bold tracking-wider text-tikari-green-dark uppercase">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-tikari-green-dark mb-6">
                Bringing Ethical Banking to the Underserved
              </h2>
              <p className="text-tikari-sage leading-relaxed mb-6">
                Millions of Muslims across Africa avoid conventional banks due to riba (interest) concerns. At the same time, community banks and cooperatives struggle with outdated systems that don't support Shariah-compliant operations.
              </p>
              <p className="text-tikari-sage leading-relaxed mb-6">
                TIKARI bridges this gap providing a complete, AAOIFI-certified core banking engine that handles everything from Murabaha financing to profit-sharing investment accounts, while staying fully compliant with regional central bank and accounting regulations.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white border-2 border-tikari-green/20 px-4 py-2 text-sm font-semibold text-tikari-green-dark rounded-full">
                  Zero Interest
                </div>
                <div className="bg-white border-2 border-tikari-green/20 px-4 py-2 text-sm font-semibold text-tikari-green-dark rounded-full">
                  Asset-Backed Only
                </div>
                <div className="bg-white border-2 border-tikari-green/20 px-4 py-2 text-sm font-semibold text-tikari-green-dark rounded-full">
                  Profit-Sharing
                </div>
              </div>
            </div>

            {/* Vision */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-tikari-gold" weight="fill" />
                <span className="text-sm font-bold tracking-wider text-tikari-green-dark uppercase">Our Vision</span>
              </div>
              <h2 className="text-3xl font-bold text-tikari-green-dark mb-6">
                The TIKARI Story
              </h2>
              <p className="text-tikari-sage leading-relaxed mb-6">
                In Arabic, "tikari" means <strong>camel</strong> the animal that carried wealth, trade, and trust across deserts for centuries. Camels never charged interest. They carried goods, shared burdens, and built economies on mutual benefit.
              </p>
              <p className="text-tikari-sage leading-relaxed mb-6">
                Like the camel, TIKARI is a <strong>vehicle of ethical exchange</strong>. We don't profit from money itself we profit from <em>productive activity</em>. We don't charge interest we share in <em>real economic outcomes</em>.
              </p>
              <p className="text-tikari-sage leading-relaxed">
                Our vision: every community bank, cooperative, and microfinance institution across our supported regions should have access to world-class Islamic banking infrastructure—transparent, auditable, and certified by scholars.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-tikari-green-dark mb-4">
              Our Foundational Principles
            </h2>
            <p className="text-lg text-tikari-sage">
              Four commitments that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="p-8 bg-white border-1 border-tikari-green/10 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <Icon className="h-12 w-12 text-tikari-gold mb-4" weight="fill" />
                  <h3 className="text-xl font-bold text-tikari-green-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-tikari-sage leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shariah Board */}
      <section id="scholars" className="py-20 lg:py-24 px-6 bg-tikari-green-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Shariah Supervisory Board
            </h2>
            <p className="text-lg text-white/80">
              Every TIKARI product is reviewed and certified by qualified Islamic scholars before it reaches customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {scholars.map((scholar, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm rounded-2xl">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {scholar.name}
                  </h3>
                  <p className="text-tikari-gold font-semibold mb-3">
                    {scholar.title}
                  </p>
                  <p className="text-sm text-white/70 mb-4">
                    {scholar.credentials}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-white/60 uppercase mb-2">Expertise</p>
                    <p className="text-sm text-white/80">{scholar.expertise}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white/60 uppercase mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {scholar.certifications.map((cert, certIdx) => (
                        <span key={certIdx} className="text-xs bg-tikari-gold/10 border border-tikari-gold/30 text-tikari-gold px-3 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white/5 border border-tikari-gold/20 rounded-2xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 text-tikari-gold flex-shrink-0 mt-1" weight="fill" />
              <div>
                <h4 className="text-xl font-bold mb-3">How Shariah Certification Works</h4>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>All financial products are submitted to the Board before launch</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>Scholars review contract structures, pricing mechanisms, and risk-sharing models</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>Only after written fatwa approval can a product go live</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>Annual Shariah audits ensure ongoing compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-tikari-green-dark mb-6">
            Ready to Bring Islamic Banking to Your Institution?
          </h2>
          <p className="text-lg text-tikari-sage mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how TIKARI can help you serve your community with Shariah-compliant financial services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="w-full sm:w-auto"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
