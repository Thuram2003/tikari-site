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
  FileXls,
  FileDoc,
  GlobeHemisphereWest,
  Scales,
  Buildings,
  LockKey,
  X
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function CompliancePage() {
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
    { id: "all", label: "All Resources" },
    { id: "licensing", label: "Licensing & Operations" },
    { id: "reporting", label: "AAOIFI Accounting" },
    { id: "governance", label: "Shariah Governance" },
    { id: "liquidity", label: "Prudential & Liquidity" },
    { id: "aml", label: "AML / CFT & KYC" }
  ];

  const complianceDocuments = [
    {
      id: "licensing-checklist",
      category: "licensing",
      title: "Regional MFB & SFD Licensing Requirements",
      type: "Compliance Checklist",
      pages: "12 pages",
      format: "PDF",
      icon: FilePdf,
      description: "Complete requirements for Unit, Regional, and Category 1, 2, and 3 EMF licences across CEMAC and UMOA/WAEMU. Covers Islamic windows, governance, and licensing dossiers.",
      highlights: [
        "CEMAC Category 1, 2, and 3 EMF application dossiers (COBAC N°01/17)",
        "UMOA SFD Islamic window authorization annexes (Instruction 003-03-2018)",
        "Fit-and-proper criteria for directors, auditors, and Shariah board members"
      ],
      officialFoundation: "Based on Règlement N°01/17/CEMAC & BCEAO SFD Law",
      officialLinks: [
        {
          label: "BEAC Microfinance Regulations",
          url: "https://www.beac.int/supervision-bancaire/microfinance/reglements-de-microfinance/"
        },
        {
          label: "BCEAO SFD Regulatory Law",
          url: "https://www.bceao.int/fr/reglementations/loi-portant-reglementation-des-systemes-financiers-decentralises-de-lumoa"
        },
        {
          label: "UMOA Instruction 003-03-2018 (PDF)",
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0003-03-2018%20RELATIVE%20AUX%20DISPOSITIONS%20PARTICULIERES%20APPLICABLES%20AUX%20SYSTEMES%20FINANCIERS%20DECENTRALISES%20EXERCANT%20UNE%20ACTIVITE%20DE%20FINANCE%20ISLAMIQUE.pdf"
        }
      ]
    },
    {
      id: "aaoifi-template",
      category: "reporting",
      title: "AAOIFI Financial Reporting Template",
      type: "Financial Model",
      pages: "28 sheets",
      format: "Excel (XLSX)",
      icon: FileXls,
      description: "Pre-formatted financial statements compliant with AAOIFI standards. Includes balance sheets, income statements, quasi-equity, and profit-sharing investment accounts.",
      highlights: [
        "Compliant with FAS 1 and newly issued FAS 44–47 (Quasi-equity & Investment Accounts)",
        "Dedicated schedules for Mudarabah, Murabaha, Ijara, and Musharakah",
        "Automated Zakat calculation schedules and charity fund disclosures"
      ],
      officialFoundation: "Based on AAOIFI FAS 1, FAS 44–47 & Illustrative Statements",
      officialLinks: [
        {
          label: "AAOIFI Illustrative Financial Statements (PDF)",
          url: "https://aaoifi.com/wp-content/uploads/2022/12/AAOIFI-Technical-Release_Illustrative-Financial-Statements-for-IFIs_final-issued_29-December-2022.pdf"
        },
        {
          label: "AAOIFI Accounting Standards Portal",
          url: "https://aaoifi.com/standard/accounting-standards/?lang=en"
        }
      ]
    },
    {
      id: "shariah-framework",
      category: "governance",
      title: "Shariah Governance Framework",
      type: "Implementation Guide",
      pages: "45 pages",
      format: "PDF",
      icon: FilePdf,
      description: "Best practices for establishing and maintaining an independent Shariah Supervisory Board / Conseil de Conformité, internal Shariah audit, and Fatwa workflows.",
      highlights: [
        "SSB charter, independence rules, and scholar qualification standards",
        "Annual Shariah audit plan and compliance risk mapping routines",
        "Fatwa issuance workflow, product sign-off forms, and annual reporting"
      ],
      officialFoundation: "Based on AAOIFI GS 1 (Revised 2024) & UMOA Inst. 003-03-2018",
      officialLinks: [
        {
          label: "UMOA Instruction N°003-03-2018 (PDF)",
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0003-03-2018%20RELATIVE%20AUX%20DISPOSITIONS%20PARTICULIERES%20APPLICABLES%20AUX%20SYSTEMES%20FINANCIERS%20DECENTRALISES%20EXERCANT%20UNE%20ACTIVITE%20DE%20FINANCE%20ISLAMIQUE.pdf"
        },
        {
          label: "AAOIFI Issued Governance Standards",
          url: "https://aaoifi.com/issued-standards-2/?lang=en"
        }
      ]
    },
    {
      id: "liquidity-guide",
      category: "liquidity",
      title: "Central Bank Liquidity Calculation Guide",
      type: "Calculation Guide",
      pages: "18 pages",
      format: "PDF",
      icon: FilePdf,
      description: "Step-by-step calculation of Islamic liquidity ratios, reconciling central bank prudential coefficients with IFSB-12 liquidity risk standards.",
      highlights: [
        "COBAC EMF 2002/14 and UMOA prudential short-term liquidity formulas",
        "IFSB-12 displaced commercial risk and Profit Equalization Reserve handling",
        "High-Quality Shariah-Compliant Liquid Assets (HQLA) classification"
      ],
      officialFoundation: "Based on COBAC EMF 2002/14 & IFSB-12 Standard",
      officialLinks: [
        {
          label: "IFSB-12 Liquidity Risk Management (PDF)",
          url: "https://www.ifsb.org/wp-content/uploads/2023/10/eng_IFSB-12-Guiding-Principles-on-Liquidity-Risk-Mgmt-Mar2012.pdf"
        },
        {
          label: "COBAC EMF 2002/14 Liquidity Regulation (PDF)",
          url: "https://www.beac.int/wp-content/uploads/2016/10/R-EMF-2002-14.pdf"
        }
      ]
    },
    {
      id: "aml-matrix",
      category: "aml",
      title: "Regional AML/KYC Document Matrix",
      type: "Reference Matrix",
      pages: "8 pages",
      format: "PDF",
      icon: FilePdf,
      description: "Required identity documents and Customer Due Diligence (CDD) thresholds across CEMAC, UMOA, and Nigeria by customer type and risk classification.",
      highlights: [
        "Tiered KYC thresholds for financial inclusion under FATF guidance",
        "Beneficial ownership (BO) verification protocols for legal entities",
        "Suspicious transaction (STR/CTR) reporting trigger checklists"
      ],
      officialFoundation: "Based on FATF Rec 10, Financial Inclusion & COBAC I-2006/01",
      officialLinks: [
        {
          label: "FATF Recommendations (Rec 10 CDD PDF)",
          url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/recommendations/FATF%20Recommendations%20%28approved%20February%202012%29%20reprint%20Feb%202013%20web%20version.pdf"
        },
        {
          label: "FATF Financial Inclusion & CDD Guidance",
          url: "https://www.fatf-gafi.org/en/publications/Fatfgeneral/Financial-inclusion-cdd-2017.html"
        },
        {
          label: "COBAC AML/CFT Instructions",
          url: "https://www.beac.int/supervision-bancaire/instructions-de-cobac/"
        }
      ]
    },
    {
      id: "mudarabah-psr",
      category: "governance",
      title: "Mudarabah PSR Disclosure Template",
      type: "Contract Template",
      pages: "6 pages",
      format: "Word (DOCX)",
      icon: FileDoc,
      description: "Customer-facing profit-sharing ratio disclosure statement and terms for unrestricted and restricted participatory investment accounts.",
      highlights: [
        "Explicit profit-sharing ratio (Rab-al-Mal vs. Mudarib) disclosure terms",
        "Reserve deduction formulas (PER/IRR) compliant with UMOA SFD rules",
        "Quarterly and annual profit distribution calculation disclosure notes"
      ],
      officialFoundation: "Based on AAOIFI FAS 45 & UMOA Instruction N°005-05-2018",
      officialLinks: [
        {
          label: "UMOA Instruction N°005-05-2018 (PDF)",
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0005-05-2018%20RELATIVE%20AUX%20CARACT%C3%89RISTIQUES%20TECHNIQUES%20DES%20OP%C3%89RATIONS%20DE%20FINANCE%20ISLAMIQUE%20EXERC%C3%89ES%20PAR%20DES%20SFD%20DE%20L%27UMOA.pdf"
        },
        {
          label: "WAMU Banking Commission Islamic Finance Directory",
          url: "https://cb-umoa.org/index.php/en/finance-islamique"
        }
      ]
    }
  ];

  const officialSourceCollections = [
    {
      region: "Central Africa (CEMAC / COBAC & BEAC)",
      authority: "Banque des États de l'Afrique Centrale & COBAC",
      icon: Bank,
      documents: [
        {
          title: "BEAC Règlements de la Microfinance",
          desc: "Full collection of CEMAC microfinance laws, covering EMF categories (1st, 2nd, 3rd), licensing, and governance (Règlement N°01/17).",
          url: "https://www.beac.int/supervision-bancaire/microfinance/reglements-de-microfinance/"
        },
        {
          title: "Règlement COBAC EMF 2002/14 (Liquidité des EMF)",
          desc: "Official statutory prudential liquidity requirement and short-term asset coverage ratio for CEMAC microfinance institutions.",
          url: "https://www.beac.int/wp-content/uploads/2016/10/R-EMF-2002-14.pdf"
        },
        {
          title: "Instructions COBAC de Microfinance (Comptabilité & Déclarations)",
          desc: "COBAC periodic reporting, prudential declarations, and accounting chart instructions for microfinance institutions.",
          url: "https://beac.int/supervision-bancaire/microfinance/instructions-de-microfinance/"
        },
        {
          title: "Instructions COBAC AML/CFT (I-2006/01)",
          desc: "Official supervisory directives on the prevention of money laundering, terror financing, and internal control systems.",
          url: "https://www.beac.int/supervision-bancaire/instructions-de-cobac/"
        }
      ]
    },
    {
      region: "West Africa (UMOA / BCEAO & Commission Bancaire)",
      authority: "Banque Centrale des États de l'Afrique de l'Ouest",
      icon: GlobeHemisphereWest,
      documents: [
        {
          title: "Loi Portant Réglementation des SFD de l'UMOA",
          desc: "Primary legal foundation governing Decentralized Financial Systems (SFDs), licensing, and networks across WAEMU.",
          url: "https://www.bceao.int/fr/reglementations/loi-portant-reglementation-des-systemes-financiers-decentralises-de-lumoa"
        },
        {
          title: "Instruction N°003-03-2018 (SFD Islamiques & Gouvernance)",
          desc: "Mandatory authorization procedures, independent Shariah Board (min. 3 members), compliance audit, and application annexes.",
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0003-03-2018%20RELATIVE%20AUX%20DISPOSITIONS%20PARTICULIERES%20APPLICABLES%20AUX%20SYSTEMES%20FINANCIERS%20DECENTRALISES%20EXERCANT%20UNE%20ACTIVITE%20DE%20FINANCE%20ISLAMIQUE.pdf"
        },
        {
          title: "Instruction N°005-05-2018 (Opérations de Finance Islamique)",
          desc: "Technical definitions, contract rules, and accounting treatment for Murabaha, Mudarabah, Musharakah, Ijara, and Salam.",
          url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0005-05-2018%20RELATIVE%20AUX%20CARACT%C3%89RISTIQUES%20TECHNIQUES%20DES%20OP%C3%89RATIONS%20DE%20FINANCE%20ISLAMIQUE%20EXERC%C3%89ES%20PAR%20DES%20SFD%20DE%20L%27UMOA.pdf"
        },
        {
          title: "Commission Bancaire de l'UMOA (Recueil Finance Islamique)",
          desc: "Official supervisory portal hosting all WAMU Banking Commission Islamic finance instructions and circulars.",
          url: "https://cb-umoa.org/index.php/en/finance-islamique"
        }
      ]
    },
    {
      region: "International Standards (AAOIFI, IFSB & FATF)",
      authority: "Global Islamic & Prudential Standard Setters",
      icon: Scales,
      documents: [
        {
          title: "AAOIFI Illustrative Financial Statements for IFIs",
          desc: "Official model statements and disclosure notes for Islamic institutions, unrestricted investment accounts, and Shariah income.",
          url: "https://aaoifi.com/wp-content/uploads/2022/12/AAOIFI-Technical-Release_Illustrative-Financial-Statements-for-IFIs_final-issued_29-December-2022.pdf"
        },
        {
          title: "AAOIFI Financial Accounting Standards Portal (FAS 1 & FAS 44–47)",
          desc: "Authoritative standards catalog including newly issued FAS 44 (Control), FAS 45 (Quasi-equity), and FAS 46–47.",
          url: "https://aaoifi.com/standard/accounting-standards/?lang=en"
        },
        {
          title: "AAOIFI Shari'ah Governance Standards (GS 1 to GS 21)",
          desc: "Includes GS 1 (Revised 2024 Shari'ah Governance Framework) and standards on SSB composition, audit, and reporting.",
          url: "https://aaoifi.com/issued-standards-2/?lang=en"
        },
        {
          title: "IFSB-12 Liquidity Risk Management Guidelines",
          desc: "Official international guiding principles on liquidity risk, displaced commercial risk (DCR), and liquidity buffer composition.",
          url: "https://www.ifsb.org/wp-content/uploads/2023/10/eng_IFSB-12-Guiding-Principles-on-Liquidity-Risk-Mgmt-Mar2012.pdf"
        },
        {
          title: "FATF 40 Recommendations (Recommendation 10 CDD)",
          desc: "International standards on combatting money laundering, customer identification, beneficial ownership, and PEP controls.",
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
              Regulatory Updates & Compliance Documents
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Stay current with banking guidelines, licensing checklists, and financial reporting standards governing Islamic microfinance across CEMAC, UMOA/WAEMU, Nigeria, and international standard setters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="#documents"
              >
                Download Resources
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="cream"
                size="lg"
                href="#official-sources"
              >
                Official Regulations
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
              Compliance Documents
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto mb-8">
              Download templates, checklists, and reference guides prepared for Islamic microfinance institutions.
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
                      <span className="text-[14px] font-semibold">Download</span>
                    </Button>

                    <div className="pt-2 border-t border-tikari-green/10">
                      <p className="text-[12px] font-semibold text-tikari-sage uppercase tracking-wider mb-2">
                        Official Sources:
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
              Official Regulatory Repository
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Direct access to laws, instructions, and international standards published by official regulatory bodies.
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
              Compliance Webinars
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              Join our expert sessions on regulatory compliance and Islamic finance operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Navigating Regional Islamic Banking Regulations",
                date: "April 15, 2026",
                duration: "90 minutes",
                status: "Upcoming",
                topics: ["COBAC N°01/17", "UMOA Inst. 003-03-2018", "Licensing"]
              },
              {
                title: "AAOIFI Financial Reporting in Practice",
                date: "May 3, 2026",
                duration: "60 minutes",
                status: "Upcoming",
                topics: ["FAS 44–47", "Investment Accounts", "GL Audit"]
              },
              {
                title: "AML/CFT for Islamic MFBs",
                date: "March 28, 2026",
                duration: "75 minutes",
                status: "Recorded",
                topics: ["FATF Rec 10", "Digital ID", "KYC Tiering"]
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
                    <span className="text-[13px] text-tikari-sage">
                      {webinar.duration}
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
                  variant={webinar.status === 'Upcoming' ? 'primary' : 'outline'}
                  href="/resources/support"
                  className="w-full py-2.5 text-[14px]"
                >
                  {webinar.status === 'Upcoming' ? 'Register Now' : 'Watch Recording'}
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
            Questions about compliance?
          </h2>
          <p className="text-[17px] text-tikari-green-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
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
                      Institution Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al-Amana Microfinance / Community Bank"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full px-4 py-2.5 text-[14px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-tikari-green-dark uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="compliance@yourbank.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-[14px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[13px] font-bold text-tikari-green-dark uppercase tracking-wider mb-1.5">
                        Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3 py-2.5 text-[13px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark font-medium"
                      >
                        <option value="Cameroon">Cameroon (CEMAC)</option>
                        <option value="Senegal">Senegal (UMOA)</option>
                        <option value="Côte d'Ivoire">Côte d'Ivoire (UMOA)</option>
                        <option value="Nigeria">Nigeria (CBN)</option>
                        <option value="Chad">Chad (CEMAC)</option>
                        <option value="Mali">Mali (UMOA)</option>
                        <option value="Other">Other Market</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-tikari-green-dark uppercase tracking-wider mb-1.5">
                        Institution Type
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full px-3 py-2.5 text-[13px] rounded-xl border border-tikari-green/20 focus:outline-none focus:border-tikari-green bg-tikari-cream/20 text-tikari-green-dark font-medium"
                      >
                        <option value="Microfinance (EMF / SFD)">Microfinance (EMF / SFD)</option>
                        <option value="Commercial Bank Islamic Window">Islamic Window</option>
                        <option value="Credit Union / Cooperative">Cooperative / Mutuelle</option>
                        <option value="Fintech / Payment Provider">Fintech / Payment</option>
                        <option value="Advisory / Legal Firm">Advisory / Legal</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full py-3 mt-4 text-[14px] font-semibold flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" weight="bold" />
                    Download Resource
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" weight="fill" />
                </div>
                <h3 className="text-[22px] font-bold text-tikari-green-dark mb-2">
                  Download Ready
                </h3>
                <p className="text-[14px] text-tikari-sage leading-relaxed mb-6">
                  {downloadModalDoc.title} has been prepared for <strong>{formData.institutionName || "your institution"}</strong>.
                </p>

                <div className="space-y-3">
                  {downloadModalDoc.officialLinks && downloadModalDoc.officialLinks[0] && (
                    <a
                      href={downloadModalDoc.officialLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-tikari-green-dark hover:bg-tikari-green text-white font-semibold text-[14px] rounded-full transition-colors"
                    >
                      <span>Open Official Reference (PDF)</span>
                      <ArrowSquareOut className="h-4 w-4" weight="bold" />
                    </a>
                  )}

                  <Button
                    variant="outline"
                    className="w-full py-2.5 text-[13px] font-semibold"
                    onClick={() => setDownloadModalDoc(null)}
                  >
                    Close Window
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
