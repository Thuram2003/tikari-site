"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, X, List } from "@phosphor-icons/react/dist/ssr";
import {
  Handshake,
  Coins,
  Notebook,
  ShieldCheck,
  ChartLineUp,
  Users,
  UserGear,
  BuildingOffice,
  GraduationCap,
  BookOpen,
  Question,
  Bookmark,
  UserList,
  Certificate,
  MapPin,
  CaretRight,
} from "@phosphor-icons/react";
import MegaMenu from "./MegaMenu";
import { Button } from "@/components/ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const mobileNavSections = [
    {
      title: "Platform",
      items: [
        { name: "Banking Operations", href: "/platform/banking-operations" },
        { name: "Islamic Financing & Treasury", href: "/platform/financing" },
        { name: "Compliance & Shariah Governance", href: "/platform/compliance" },
        { name: "GL & Financial Reporting", href: "/platform#gl-reporting" },
        { name: "Agent & Field Banking", href: "/platform#agent-banking" },
        { name: "Administration & EOD", href: "/platform#administration" },
      ]
    },
    {
      title: "Solution",
      items: [
        { name: "For Individuals", href: "/solution#individuals" },
        { name: "For Businesses & SMEs", href: "/solution#smes" },
        { name: "For Cooperatives", href: "/solution#cooperatives" },
        { name: "For Institutions", href: "/solution#institutions" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Shariah Finance 101", href: "/resources#education" },
        { name: "Regulatory Updates", href: "/resources#compliance" },
        { name: "Live Calculators", href: "/resources#tools" },
        { name: "Help Center", href: "/resources#faq" },
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About TIKARI", href: "/company#about" },
        { name: "Shariah Board", href: "/company#scholars" },
        { name: "Leadership", href: "/company#team" },
        { name: "Contact & Offices", href: "/company#contact" },
      ]
    },
  ];

  const platformItems = [
    { name: "Banking Operations", desc: "CNI/Passport verification, Njangi groups, SYSTAC transfers.", href: "/platform/banking-operations", icon: Users },
    { name: "Islamic Financing & Treasury", desc: "Murabaha, Mudarabah, Musharakah, Ijara, Salam, Istisna.", href: "/platform/financing", icon: Coins },
    { name: "Compliance & Shariah Governance", desc: "ACE dashboard, Fatwa repository, COBAC returns.", href: "/platform/compliance", icon: ShieldCheck },
    { name: "GL & Financial Reporting", desc: "AAOIFI chart of accounts, real-time trial balance.", href: "/platform/gl-reporting", icon: ChartLineUp },
    { name: "Agent & Field Banking", desc: "Offline transactions, geo-tagging, commission ledger.", href: "/platform/agent-banking", icon: UserGear },
    { name: "Administration & EOD", desc: "RBAC, maker-checker, automated EOD batch processing.", href: "/platform/administration", icon: Notebook },
  ];

  const solutionItems = [
    { name: "For Individuals", desc: "Wadiah + Mudarabah savings without Riba.", href: "/solution#individuals", icon: Users },
    { name: "For Businesses & SMEs", desc: "Murabaha inventory & working capital.", href: "/solution#smes", icon: BuildingOffice },
    { name: "For Cooperatives", desc: "Digital group savings and rotative ledger.", href: "/solution#cooperatives", icon: Handshake },
    { name: "For Institutions", desc: "Migration services to native AAOIFI cores.", href: "/solution#institutions", icon: Certificate },
  ];

  const resourceItems = [
    { name: "Shariah Finance 101", desc: "Guides to Murabaha, AAOIFI, and Islamic principles.", href: "/resources#education", icon: GraduationCap },
    { name: "Regulatory Updates", desc: "BEAC regulations & compliance standards.", href: "/resources#compliance", icon: Bookmark },
    { name: "Live Calculators", desc: "Estimator tools for Murabaha and Zakat.", href: "/resources#tools", icon: BookOpen },
    { name: "Help Center", desc: "Tutorials, FAQs, and KYC step-by-step guides.", href: "/resources#faq", icon: Question },
  ];

  const companyItems = [
    { name: "About TIKARI", desc: "Our mission, vision, and the legend of the camel.", href: "/company#about", icon: Bookmark },
    { name: "Shariah Board", desc: "Credentials of our verifying Islamic scholars.", href: "/company#scholars", icon: UserList },
    { name: "Leadership", desc: "The executives backing our core compliance system.", href: "/company#team", icon: Users },
    { name: "Contact & Offices", desc: "Reach us in our headquarters.", href: "/company#contact", icon: MapPin },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-tikari-green/10"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10">
            <Image
              src="/logo.svg"
              alt="TIKARI Logo"
              width={40}
              height={49}
              className="object-contain max-h-10 sm:max-h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <MegaMenu
              label="Platform"
              scrolled={scrolled}
              items={platformItems}
              featuredItem={{
                badge: "Native Ledger",
                title: "AAOIFI Core Banking Engine",
                desc: "Engineered from the ground up for strict, zero-interest financial operations.",
                href: "/platform",
              }}
            />
            <MegaMenu
              label="Solution"
              scrolled={scrolled}
              items={solutionItems}
              featuredItem={{
                badge: "SME Support",
                title: "Halal Working Capital",
                desc: "Get Shariah-compliant inventory financing within 48 hours.",
                href: "/solution",
              }}
            />
            <MegaMenu
              label="Resources"
              scrolled={scrolled}
              items={resourceItems}
              featuredItem={{
                badge: "Live Tool",
                title: "Murabaha Calculator",
                desc: "Calculate cost markups and installment schedules dynamically.",
                href: "/resources#tools",
              }}
            />
            <MegaMenu
              label="Company"
              scrolled={scrolled}
              items={companyItems}
              featuredItem={{
                badge: "Trust Board",
                title: "Scholar Verified",
                desc: "Learn about the independent scholars supervising our ledger code.",
                href: "/company#scholars",
              }}
            />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              href="/demo"
              className="uppercase tracking-wider hidden sm:inline-flex"
            >
              Book Demo
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-tikari-green-dark hover:bg-tikari-green/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" weight="bold" />
              ) : (
                <List className="h-6 w-6" weight="bold" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <div className="p-4 space-y-1">
              {mobileNavSections.map((section, idx) => (
                <div key={idx} className="border-b border-tikari-green/10 pb-1">
                  <button
                    onClick={() => setMobileExpandedSection(mobileExpandedSection === section.title ? null : section.title)}
                    className="w-full flex items-center justify-between p-3 text-left font-semibold text-tikari-green-dark hover:bg-tikari-green/5 transition-colors"
                  >
                    {section.title}
                    <CaretRight 
                      className={`h-5 w-5 transition-transform duration-300 ${mobileExpandedSection === section.title ? 'rotate-90' : ''}`} 
                      weight="bold" 
                    />
                  </button>
                  
                  {mobileExpandedSection === section.title && (
                    <div className="pl-4 pb-2 space-y-1">
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block p-2.5 text-sm text-tikari-sage hover:text-tikari-green-dark hover:bg-tikari-green/5 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Button
                  variant="secondary"
                  href="/demo"
                  className="w-full uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}