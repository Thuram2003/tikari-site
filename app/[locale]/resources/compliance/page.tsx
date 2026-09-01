"use client";

import React, { useState } from "react";
import { 
  ArrowRight,
  ShieldCheck,
  FileText,
  Bank,
  ClipboardText,
  BookOpen,
  Calendar,
  Download,
  ArrowSquareOut,
  CheckCircle,
  FilePdf,
  GlobeHemisphereWest,
  Scales,
  Buildings,
  LockKey,
  X
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function CompliancePage() {
  const t = useTranslations("compliance");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [downloadModalDoc, setDownloadModalDoc] = useState<any | null>(null);
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: "",
    email: "",
    country: "Cameroon",
    institutionType: "Microfinance (EMF / SFD)"
  });

  const categories = [
    { id: "all", label: t("documents.categories.all") },
    { id: "licensing", label: t("documents.categories.licensing") },
    { id: "reporting", label: t("documents.categories.reporting") },
    { id: "governance", label: t("documents.categories.governance") },
    { id: "liquidity", label: t("documents.categories.liquidity") },
    { id: "aml", label: t("documents.categories.aml") }
  ];

  const complianceDocuments = [
    {
      id: "licensing-checklist",
      category: "licensing",
      title: t("documents.items.licensingChecklist.title"),
      type: t("documents.items.licensingChecklist.type"),
      pages: t("documents.items.licensingChecklist.pages"),
      format: t("documents.items.licensingChecklist.format"),
      icon: FilePdf,
      description: t("documents.items.licensingChecklist.description"),
      highlights: [
        t("documents.items.licensingChecklist.highlights.0"),
        t("documents.items.licensingChecklist.highlights.1"),
        t("documents.items.licensingChecklist.highlights.2")
      ],
      officialFoundation: t("documents.items.licensingChecklist.foundation"),
      officialLinks: [
        {
          label: t("documents.items.licensingChecklist.links.beac"),
          url: "https://www.beac.int/supervision-bancaire/microfinance/reglements-de-microfinance/"
        },
        {
          label: t("documents.items.licensingChecklist.links.bceao"),
          url: "https://www.bceao.int/fr/reglementations/loi-portant-reglementation-des-systemes-financiers-decentralises-de-lumoa"
        },
        {
          label: t("documents.items.licensingChecklist.links.umoa"),
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0003-03-2018%20RELATIVE%20AUX%20DISPOSITIONS%20PARTICULIERES%20APPLICABLES%20AUX%20SYSTEMES%20FINANCIERS%20DECENTRALISES%20EXERCANT%20UNE%20ACTIVITE%20DE%20FINANCE%20ISLAMIQUE.pdf"
        }
      ]
    },
    {
      id: "aaoifi-template",
      category: "reporting",
      title: t("documents.items.aaoifiTemplate.title"),
      type: t("documents.items.aaoifiTemplate.type"),
      pages: t("documents.items.aaoifiTemplate.pages"),
      format: t("documents.items.aaoifiTemplate.format"),
      icon: FilePdf,
      description: t("documents.items.aaoifiTemplate.description"),
      highlights: [
        t("documents.items.aaoifiTemplate.highlights.0"),
        t("documents.items.aaoifiTemplate.highlights.1"),
        t("documents.items.aaoifiTemplate.highlights.2")
      ],
      officialFoundation: t("documents.items.aaoifiTemplate.foundation"),
      officialLinks: [
        {
          label: t("documents.items.aaoifiTemplate.links.illustrative"),
          url: "https://aaoifi.com/wp-content/uploads/2022/12/AAOIFI-Technical-Release_Illustrative-Financial-Statements-for-IFIs_final-issued_29-December-2022.pdf"
        },
        {
          label: t("documents.items.aaoifiTemplate.links.portal"),
          url: "https://aaoifi.com/standard/accounting-standards/?lang=en"
        }
      ]
    },
    {
      id: "shariah-framework",
      category: "governance",
      title: t("documents.items.shariahFramework.title"),
      type: t("documents.items.shariahFramework.type"),
      pages: t("documents.items.shariahFramework.pages"),
      format: t("documents.items.shariahFramework.format"),
      icon: FilePdf,
      description: t("documents.items.shariahFramework.description"),
      highlights: [
        t("documents.items.shariahFramework.highlights.0"),
        t("documents.items.shariahFramework.highlights.1"),
        t("documents.items.shariahFramework.highlights.2")
      ],
      officialFoundation: t("documents.items.shariahFramework.foundation"),
      officialLinks: [
        {
          label: t("documents.items.shariahFramework.links.umoa"),
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0003-03-2018%20RELATIVE%20AUX%20DISPOSITIONS%20PARTICULIERES%20APPLICABLES%20AUX%20SYSTEMES%20FINANCIERS%20DECENTRALISES%20EXERCANT%20UNE%20ACTIVITE%20DE%20FINANCE%20ISLAMIQUE.pdf"
        },
        {
          label: t("documents.items.shariahFramework.links.aaoifi"),
          url: "https://aaoifi.com/issued-standards-2/?lang=en"
        }
      ]
    },
    {
      id: "liquidity-guide",
      category: "liquidity",
      title: t("documents.items.liquidityGuide.title"),
      type: t("documents.items.liquidityGuide.type"),
      pages: t("documents.items.liquidityGuide.pages"),
      format: t("documents.items.liquidityGuide.format"),
      icon: FilePdf,
      description: t("documents.items.liquidityGuide.description"),
      highlights: [
        t("documents.items.liquidityGuide.highlights.0"),
        t("documents.items.liquidityGuide.highlights.1"),
        t("documents.items.liquidityGuide.highlights.2")
      ],
      officialFoundation: t("documents.items.liquidityGuide.foundation"),
      officialLinks: [
        {
          label: t("documents.items.liquidityGuide.links.ifsb"),
          url: "https://www.ifsb.org/wp-content/uploads/2023/10/eng_IFSB-12-Guiding-Principles-on-Liquidity-Risk-Mgmt-Mar2012.pdf"
        },
        {
          label: t("documents.items.liquidityGuide.links.cobac"),
          url: "https://www.beac.int/wp-content/uploads/2016/10/R-EMF-2002-14.pdf"
        }
      ]
    },
    {
      id: "aml-matrix",
      category: "aml",
      title: t("documents.items.amlMatrix.title"),
      type: t("documents.items.amlMatrix.type"),
      pages: t("documents.items.amlMatrix.pages"),
      format: t("documents.items.amlMatrix.format"),
      icon: FilePdf,
      description: t("documents.items.amlMatrix.description"),
      highlights: [
        t("documents.items.amlMatrix.highlights.0"),
        t("documents.items.amlMatrix.highlights.1"),
        t("documents.items.amlMatrix.highlights.2")
      ],
      officialFoundation: t("documents.items.amlMatrix.foundation"),
      officialLinks: [
        {
          label: t("documents.items.amlMatrix.links.fatf"),
          url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/recommendations/FATF%20Recommendations%20%28approved%20February%202012%29%20reprint%20Feb%202013%20web%20version.pdf"
        },
        {
          label: t("documents.items.amlMatrix.links.guidance"),
          url: "https://www.fatf-gafi.org/en/publications/Fatfgeneral/Financial-inclusion-cdd-2017.html"
        },
        {
          label: t("documents.items.amlMatrix.links.cobac"),
          url: "https://www.beac.int/supervision-bancaire/instructions-de-cobac/"
        }
      ]
    },
    {
      id: "mudarabah-psr",
      category: "governance",
      title: t("documents.items.mudarabahPsr.title"),
      type: t("documents.items.mudarabahPsr.type"),
      pages: t("documents.items.mudarabahPsr.pages"),
      format: t("documents.items.mudarabahPsr.format"),
      icon: FilePdf,
      description: t("documents.items.mudarabahPsr.description"),
      highlights: [
        t("documents.items.mudarabahPsr.highlights.0"),
        t("documents.items.mudarabahPsr.highlights.1"),
        t("documents.items.mudarabahPsr.highlights.2")
      ],
      officialFoundation: t("documents.items.mudarabahPsr.foundation"),
      officialLinks: [
        {
          label: t("documents.items.mudarabahPsr.links.umoa"),
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0005-05-2018%20RELATIVE%20AUX%20CARACT%C3%89RISTIQUES%20TECHNIQUES%20DES%20OP%C3%89RATIONS%20DE%20FINANCE%20ISLAMIQUE%20EXERC%C3%89ES%20PAR%20DES%20SFD%20DE%20L%27UMOA.pdf"
        },
        {
          label: t("documents.items.mudarabahPsr.links.directory"),
          url: "https://cb-umoa.org/index.php/en/finance-islamique"
        }
      ]
    }
  ];

  const officialSourceCollections = [
    {
      region: t("officialSources.regions.cemac.region"),
      authority: t("officialSources.regions.cemac.authority"),
      icon: Bank,
      documents: [
        {
          title: t("officialSources.regions.cemac.documents.beacReglements.title"),
          desc: t("officialSources.regions.cemac.documents.beacReglements.desc"),
          url: "https://www.beac.int/supervision-bancaire/microfinance/reglements-de-microfinance/"
        },
        {
          title: t("officialSources.regions.cemac.documents.cobacLiquidite.title"),
          desc: t("officialSources.regions.cemac.documents.cobacLiquidite.desc"),
          url: "https://www.beac.int/wp-content/uploads/2016/10/R-EMF-2002-14.pdf"
        },
        {
          title: t("officialSources.regions.cemac.documents.cobacInstructions.title"),
          desc: t("officialSources.regions.cemac.documents.cobacInstructions.desc"),
          url: "https://beac.int/supervision-bancaire/microfinance/instructions-de-microfinance/"
        },
        {
          title: t("officialSources.regions.cemac.documents.cobacAml.title"),
          desc: t("officialSources.regions.cemac.documents.cobacAml.desc"),
          url: "https://www.beac.int/supervision-bancaire/instructions-de-cobac/"
        }
      ]
    },
    {
      region: t("officialSources.regions.umoa.region"),
      authority: t("officialSources.regions.umoa.authority"),
      icon: GlobeHemisphereWest,
      documents: [
        {
          title: t("officialSources.regions.umoa.documents.loiSfd.title"),
          desc: t("officialSources.regions.umoa.documents.loiSfd.desc"),
          url: "https://www.bceao.int/fr/reglementations/loi-portant-reglementation-des-systemes-financiers-decentralises-de-lumoa"
        },
        {
          title: t("officialSources.regions.umoa.documents.instruction003.title"),
          desc: t("officialSources.regions.umoa.documents.instruction003.desc"),
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0003-03-2018%20RELATIVE%20AUX%20DISPOSITIONS%20PARTICULIERES%20APPLICABLES%20AUX%20SYSTEMES%20FINANCIERS%20DECENTRALISES%20EXERCANT%20UNE%20ACTIVITE%20DE%20FINANCE%20ISLAMIQUE.pdf"
        },
        {
          title: t("officialSources.regions.umoa.documents.instruction005.title"),
          desc: t("officialSources.regions.umoa.documents.instruction005.desc"),
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0005-05-2018%20RELATIVE%20AUX%20CARACT%C3%89RISTIQUES%20TECHNIQUES%20DES%20OP%C3%89RATIONS%20DE%20FINANCE%20ISLAMIQUE%20EXERC%C3%89ES%20PAR%20DES%20SFD%20DE%20L%27UMOA.pdf"
        },
        {
          title: t("officialSources.regions.umoa.documents.commissionBancaire.title"),
          desc: t("officialSources.regions.umoa.documents.commissionBancaire.desc"),
          url: "https://cb-umoa.org/index.php/en/finance-islamique"
        }
      ]
    },
    {
      region: t("officialSources.regions.international.region"),
      authority: t("officialSources.regions.international.authority"),
      icon: Scales,
      documents: [
        {
          title: t("officialSources.regions.international.documents.aaoifiIllustrative.title"),
          desc: t("officialSources.regions.international.documents.aaoifiIllustrative.desc"),
          url: "https://aaoifi.com/wp-content/uploads/2022/12/AAOIFI-Technical-Release_Illustrative-Financial-Statements-for-IFIs_final-issued_29-December-2022.pdf"
        },
        {
          title: t("officialSources.regions.international.documents.aaoifiFas.title"),
          desc: t("officialSources.regions.international.documents.aaoifiFas.desc"),
          url: "https://aaoifi.com/standard/accounting-standards/?lang=en"
        },
        {
          title: t("officialSources.regions.international.documents.aaoifiGs.title"),
          desc: t("officialSources.regions.international.documents.aaoifiGs.desc"),
          url: "https://aaoifi.com/issued-standards-2/?lang=en"
        },
        {
          title: t("officialSources.regions.international.documents.ifsb12.title"),
          desc: t("officialSources.regions.international.documents.ifsb12.desc"),
          url: "https://www.ifsb.org/wp-content/uploads/2023/10/eng_IFSB-12-Guiding-Principles-on-Liquidity-Risk-Mgmt-Mar2012.pdf"
        },
        {
          title: t("officialSources.regions.international.documents.fatf40.title"),
          desc: t("officialSources.regions.international.documents.fatf40.desc"),
          url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/recommendations/FATF%20Recommendations%20%28approved%20February%202012%29%20reprint%20Feb%202013%20web%20version.pdf"
        }
      ]
    }
  ];

  const filteredDocuments = selectedCategory === "all" 
    ? complianceDocuments 
    : complianceDocuments.filter(d => d.category === selectedCategory);

  const handleOpenDownloadModal = (doc: any) => {
    setDownloadModalDoc(doc);
    setDownloadSubmitted(false);
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>
        
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
                href="#documents"
              >
                {t("hero.downloadResources")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="cream"
                size="lg"
                href="#official-sources"
              >
                {t("hero.officialRegulations")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Documents Section */}
      <section id="documents" className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("documents.title")}
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto mb-8">
              {t("documents.subtitle")}
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-tikari-green-dark text-white shadow-sm"
                      : "bg-white text-tikari-green-dark hover:bg-tikari-cream border border-tikari-green/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => {
              const DocIcon = doc.icon;
              return (
                <div 
                  key={doc.id}
                  className="bg-white border border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-tikari-cream border border-tikari-green/10 flex items-center justify-center text-tikari-green-dark">
                        <DocIcon className="h-6 w-6" weight="bold" />
                      </div>
                      <span className="text-[13px] font-semibold text-tikari-gold">
                        {doc.type}
                      </span>
                    </div>
                    
                    <h3 className="text-[20px] font-bold text-tikari-green-dark mb-2 leading-snug">
                      {doc.title}
                    </h3>
                    
                    <p className="text-[13px] font-medium text-tikari-green mb-3">
                      {doc.officialFoundation}
                    </p>

                    <p className="text-[14px] text-tikari-sage leading-relaxed mb-5">
                      {doc.description}
                    </p>

                    <div className="space-y-2.5 mb-6 border-t border-tikari-green/10 pt-4">
                      {doc.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-[13px] text-tikari-green-dark leading-normal">
                          <CheckCircle className="h-4 w-4 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-tikari-cream/20 border-t border-tikari-green/10 space-y-4">
                    <div className="flex items-center justify-between text-[13px] text-tikari-sage">
                      <span>{doc.pages}</span>
                      <span className="font-semibold text-tikari-green-dark">{doc.format}</span>
                    </div>

                    <Button 
                      className="w-full flex items-center justify-center gap-2 py-2.5 text-[14px]" 
                      onClick={() => handleOpenDownloadModal(doc)}
                    >
                      <Download className="h-4 w-4" weight="bold" />
                      <span className="text-[14px] font-semibold">{t("documents.download")}</span>
                    </Button>

                    <div className="pt-2 border-t border-tikari-green/10">
                      <p className="text-[12px] font-semibold text-tikari-sage uppercase tracking-wider mb-2">
                        {t("documents.officialSources")}
                      </p>
                      <div className="space-y-2">
                        {doc.officialLinks.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[13px] text-tikari-green-dark hover:text-tikari-gold flex items-center justify-between font-medium transition-colors"
                          >
                            <span className="truncate pr-2">{link.label}</span>
                            <ArrowSquareOut className="h-3.5 w-3.5 flex-shrink-0 text-tikari-gold" weight="bold" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Official Regulatory Source Repository Section */}
      <section id="official-sources" className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("officialSources.title")}
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              {t("officialSources.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {officialSourceCollections.map((col, idx) => {
              const Icon = col.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-tikari-green/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-tikari-cream border border-tikari-green/10 flex items-center justify-center text-tikari-green-dark mb-5">
                      <Icon className="h-6 w-6" weight="bold" />
                    </div>

                    <h3 className="text-[20px] font-bold text-tikari-green-dark mb-1">
                      {col.region}
                    </h3>
                    <p className="text-[13px] font-semibold text-tikari-gold mb-6">
                      {col.authority}
                    </p>

                    <div className="space-y-5">
                      {col.documents.map((doc, dIdx) => (
                        <div key={dIdx} className="space-y-1.5 pb-4 border-b border-tikari-green/10 last:border-0 last:pb-0">
                          <h4 className="text-[15px] font-bold text-tikari-green-dark leading-snug">
                            {doc.title}
                          </h4>
                          <p className="text-[13px] text-tikari-sage leading-relaxed">
                            {doc.desc}
                          </p>
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-tikari-green-dark hover:text-tikari-gold pt-1 transition-colors"
                          >
                            <span>Open Official Document</span>
                            <ArrowSquareOut className="h-3.5 w-3.5 text-tikari-gold" weight="bold" />
                          </a>
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

      {/* Webinars Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("webinars.title")}
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              {t("webinars.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: "regulations",
                title: t("webinars.items.regulations.title"),
                date: t("webinars.items.regulations.date"),
                status: t("webinars.items.regulations.status"),
                topics: [
                  t("webinars.items.regulations.topics.0"),
                  t("webinars.items.regulations.topics.1"),
                  t("webinars.items.regulations.topics.2")
                ]
              },
              {
                id: "aaoifi",
                title: t("webinars.items.aaoifi.title"),
                date: t("webinars.items.aaoifi.date"),
                status: t("webinars.items.aaoifi.status"),
                topics: [
                  t("webinars.items.aaoifi.topics.0"),
                  t("webinars.items.aaoifi.topics.1"),
                  t("webinars.items.aaoifi.topics.2")
                ]
              },
              {
                id: "aml",
                title: t("webinars.items.aml.title"),
                date: t("webinars.items.aml.date"),
                status: t("webinars.items.aml.status"),
                topics: [
                  t("webinars.items.aml.topics.0"),
                  t("webinars.items.aml.topics.1"),
                  t("webinars.items.aml.topics.2")
                ]
              }
            ].map((webinar, idx) => (
              <div 
                key={idx}
                className="bg-white border border-tikari-green/20 hover:border-tikari-green hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-semibold text-tikari-gold">
                      {webinar.status}
                    </span>
                  </div>
                  
                  <h3 className="text-[18px] font-bold text-tikari-green-dark mb-2 leading-snug">
                    {webinar.title}
                  </h3>
                  <p className="text-[14px] text-tikari-sage mb-4">
                    {webinar.date}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {webinar.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="text-[12px] text-tikari-green-dark bg-tikari-green/5 px-2.5 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant={webinar.status === t("webinars.items.regulations.status") ? 'primary' : 'outline'}
                  href="/resources/support"
                  className="w-full py-2.5 text-[14px]"
                >
                  {webinar.status === t("webinars.items.regulations.status") ? t("webinars.register") : t("webinars.watch")}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 text-tikari-green-dark">
            {t("cta.title")}
          </h2>
          <p className="text-[17px] text-tikari-green-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/resources/support"
            >
              {t("cta.contactTeam")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="cream"
              size="lg"
              href="/demo"
            >
              {t("cta.bookDemo")}
            </Button>
          </div>
        </div>
      </section>

      {/* Download Toolkit Modal */}
      {downloadModalDoc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl border border-tikari-green/20 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setDownloadModalDoc(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-tikari-cream text-tikari-green-dark transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" weight="bold" />
            </button>

            {!downloadSubmitted ? (
              <>
                <span className="text-[13px] font-semibold text-tikari-gold uppercase tracking-wider block mb-2">
                  {downloadModalDoc.type}
                </span>

                <h3 className="text-[22px] font-bold text-tikari-green-dark mb-2 leading-snug">
                  {downloadModalDoc.title}
                </h3>
                
                <p className="text-[13px] text-tikari-sage mb-6">
                  {downloadModalDoc.pages} • {downloadModalDoc.format}
                </p>

                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-bold text-tikari-green-dark uppercase tracking-wider mb-1.5">
                      {t("downloadModal.institutionName")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("downloadModal.institutionNamePlaceholder")}
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full px-4 py-2.5 text-[14px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-tikari-green-dark uppercase tracking-wider mb-1.5">
                      {t("downloadModal.workEmail")}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t("downloadModal.workEmailPlaceholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-[14px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[13px] font-bold text-tikari-green-dark uppercase tracking-wider mb-1.5">
                        {t("downloadModal.country")}
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3 py-2.5 text-[13px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark font-medium"
                      >
                        <option value="Cameroon">{t("downloadModal.countries.cameroon")}</option>
                        <option value="Senegal">{t("downloadModal.countries.senegal")}</option>
                        <option value="Côte d'Ivoire">{t("downloadModal.countries.ivoryCoast")}</option>
                        <option value="Nigeria">{t("downloadModal.countries.nigeria")}</option>
                        <option value="Chad">{t("downloadModal.countries.chad")}</option>
                        <option value="Mali">{t("downloadModal.countries.mali")}</option>
                        <option value="Other">{t("downloadModal.countries.other")}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-tikari-green-dark uppercase tracking-wider mb-1.5">
                        {t("downloadModal.institutionType")}
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full px-3 py-2.5 text-[13px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark font-medium"
                      >
                        <option value="Microfinance (EMF / SFD)">{t("downloadModal.institutionTypes.microfinance")}</option>
                        <option value="Commercial Bank Islamic Window">{t("downloadModal.institutionTypes.islamicWindow")}</option>
                        <option value="Credit Union / Cooperative">{t("downloadModal.institutionTypes.cooperative")}</option>
                        <option value="Fintech / Payment Provider">{t("downloadModal.institutionTypes.fintech")}</option>
                        <option value="Advisory / Legal Firm">{t("downloadModal.institutionTypes.advisory")}</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full py-3 mt-4 text-[14px] font-semibold flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" weight="bold" />
                    {t("downloadModal.downloadResource")}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" weight="fill" />
                </div>
                <h3 className="text-[22px] font-bold text-tikari-green-dark mb-2">
                  {t("downloadModal.success.title")}
                </h3>
                <p className="text-[14px] text-tikari-sage leading-relaxed mb-6">
                  {downloadModalDoc.title} {t("downloadModal.success.message")} <strong>{formData.institutionName || "your institution"}</strong>.
                </p>

                <div className="space-y-3">
                  {downloadModalDoc.officialLinks && downloadModalDoc.officialLinks[0] && (
                    <a
                      href={downloadModalDoc.officialLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-tikari-green-dark hover:bg-tikari-green text-white font-semibold text-[14px] rounded-full transition-colors"
                    >
                      <span>{t("downloadModal.success.openReference")}</span>
                      <ArrowSquareOut className="h-4 w-4" weight="bold" />
                    </a>
                  )}

                  <Button
                    variant="outline"
                    className="w-full py-2.5 text-[13px] font-semibold"
                    onClick={() => setDownloadModalDoc(null)}
                  >
                    {t("downloadModal.success.close")}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
