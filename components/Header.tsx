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
  Bank,
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
        { name: "Microfinance Banks", href: "/solutions/microfinance" },
        { name: "Community Banks", href: "/solutions/community-banks" },
        { name: "Cooperatives & Islamic Windows", href: "/solutions/cooperatives" },
        { name: "For Businesses & SMEs", href: "/solutions/smes" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Shariah Finance 101", href: "/resources/education" },
        { name: "Regulatory Updates", href: "/resources/compliance" },
        { name: "Help Center", href: "/resources/support" },
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About TIKARI", href: "/about" },
        { name: "Shariah Board", href: "/about#scholars" },
        { name: "Contact Us", href: "/contact" },
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
    { name: "Microfinance Banks", desc: "Unit, Regional, and National MFB licences.", href: "/solutions/microfinance", icon: Bank },
    { name: "Community Banks", desc: "Community development banks and cooperatives.", href: "/solutions/community-banks", icon: Handshake },
    { name: "Cooperatives & Islamic Windows", desc: "Njangi groups and ring-fenced operations.", href: "/solutions/cooperatives", icon: Users },
    { name: "For Businesses & SMEs", desc: "Murabaha inventory & working capital.", href: "/solutions/smes", icon: BuildingOffice },
  ];

  const resourceItems = [
    { name: "Shariah Finance 101", desc: "Guides to Murabaha, AAOIFI, and Islamic principles.", href: "/resources/education", icon: GraduationCap },
    { name: "Regulatory Updates", desc: "BEAC regulations & compliance standards.", href: "/resources/compliance", icon: Bookmark },
    { name: "Help Center", desc: "Tutorials, FAQs, and support channels.", href: "/resources/support", icon: Question },
  ];

  const companyItems = [
    { name: "About TIKARI", desc: "Our mission, vision, and the legend of the camel.", href: "/about", icon: Bookmark },
    { name: "Shariah Board", desc: "Credentials of our verifying Islamic scholars.", href: "/about#scholars", icon: UserList },
    { name: "Contact Us", desc: "Get in touch with our team.", href: "/contact", icon: MapPin },
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
                badge: "Community Scale",
                title: "Islamic Banking for Communities",
                desc: "Full compliance tools for community banks, cooperatives, and Islamic windows.",
                href: "/solutions/community-banks",
              }}
            />
            <MegaMenu
              label="Resources"
              scrolled={scrolled}
              items={resourceItems}
              featuredItem={{
                badge: "Support",
                title: "24/7 Help Center",
                desc: "Access tutorials, FAQs, and direct support channels for your institution.",
                href: "/resources/support",
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