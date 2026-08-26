"use client"
import { Check, X } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export default function OperationsSection() {
  const t = useTranslations("home.operations");

  const features = [
    t("features.0"),
    t("features.1"),
    t("features.2"),
    t("features.3"),
    t("features.4"),
    t("features.5"),
  ];

  const members = [
    { name: "Aisha Mahamat", status: true },
    { name: "Fatima Bello", status: true },
    { name: "Zainab Ousman", status: true },
    { name: "Marie Tchouta", status: false },
    { name: "Aminatou Njoya", status: true },
    { name: "Kadija Issa", status: true },
    { name: "Florence Ebong", status: true },
    { name: "Hawa Moussa", status: true },
    { name: "Cecile Ndam", status: false },
    { name: "Rachelle Fotso", status: true },
    { name: "Safiya Abba", status: true },
    { name: "Grace Tanyi", status: false },
  ];

  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-tikari-cream-light border-b border-tikari-green/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-tikari-gold/10 border border-tikari-gold/20 rounded-full">
                <span className="text-xs uppercase tracking-widest text-tikari-gold-dark font-medium">
                  {t("badge")}
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-tikari-green-dark leading-tight">
                {t("title")}
              </h2>

              <p className="text-base lg:text-lg text-tikari-green-dark/70 leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3.5 pt-2">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-tikari-green-dark/80"
                >
                  <Check
                    size={20}
                    weight="bold"
                    className="text-tikari-gold shrink-0 mt-0.5"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <Button variant="primary" href="/platform/operations">
                {t("seeOperations")}
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Njangi Group Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white border border-tikari-green/10 p-8 shadow-glow rounded-2xl space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between pb-5 border-b border-tikari-green/10">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-tikari-green-dark">
                    {t("njangi.title")}
                  </h4>

                  <p className="text-xs text-tikari-green-dark/60">
                    {t("njangi.groupName")}
                  </p>

                  <p className="text-xs text-tikari-green-dark/50">
                    {t("njangi.cycle")}
                  </p>
                </div>

                <span className="bg-emerald-500/10 text-emerald-700 text-xs font-medium px-3 py-1.5 border border-emerald-500/20 rounded-full">
                  {t("njangi.status")}
                </span>
              </div>

              {/* Progress Card */}
              <div className="bg-tikari-cream-light border border-tikari-green/5 p-5 rounded-xl space-y-3">
                <span className="text-[10px] text-tikari-green-dark/60 uppercase tracking-widest block font-medium">
                  {t("njangi.contributionTitle")}
                </span>

                <p className="text-sm font-medium text-tikari-green-dark">
                  {t("njangi.contributionStatus")}
                </p>

                <p className="text-lg font-bold text-tikari-green-dark">
                  {t("njangi.amountCollected")}
                </p>

                <div className="w-full bg-tikari-green/10 h-2 overflow-hidden rounded-full">
                  <div
                    className="bg-tikari-gold h-full rounded-full transition-all duration-300"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>

              {/* Payout Card */}
              <div className="bg-tikari-gold/5 border border-tikari-gold/20 p-5 rounded-xl space-y-2">
                <span className="text-[10px] text-tikari-gold-dark uppercase tracking-widest block font-medium">
                  {t("njangi.recipientTitle")}
                </span>

                <p className="text-base font-bold text-tikari-green-dark">
                  {t("njangi.recipientName")}
                </p>

                <p className="text-xs text-tikari-green-dark/60">
                  {t("njangi.recipientNumber")}
                </p>

                <p className="text-sm text-tikari-gold-dark font-medium pt-1">
                  {t("njangi.disbursementInfo")}
                </p>
              </div>

              {/* Members Grid */}
              <div className="space-y-3">
                <span className="text-[10px] text-tikari-green-dark/60 uppercase tracking-widest block font-medium">
                  {t("njangi.statusTitle")}
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  {members.map((member, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 p-3 border rounded-lg text-xs transition-colors ${member.status
                          ? "bg-tikari-cream-light border-tikari-green/10"
                          : "bg-red-50/50 border-red-200/30"
                        }`}
                    >
                      {member.status ? (
                        <Check
                          size={16}
                          weight="bold"
                          className="text-emerald-600 shrink-0"
                        />
                      ) : (
                        <X
                          size={16}
                          weight="bold"
                          className="text-red-500 shrink-0"
                        />
                      )}

                      <span className="text-tikari-green-dark font-medium truncate">
                        {member.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}