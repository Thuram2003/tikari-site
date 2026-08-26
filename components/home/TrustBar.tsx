import { useTranslations } from "next-intl";
import { ShieldCheck, Bank, CheckCircle, Lock, Globe, ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr";

export default function TrustBar() {
  const t = useTranslations("home.trustBar");
  
  const frameworks = [
    {
      title: t("items.cobac.title"),
      desc: t("items.cobac.desc"),
      icon: Bank
    },
    {
      title: t("items.aaoifi.title"),
      desc: t("items.aaoifi.desc"),
      icon: CheckCircle
    },
    {
      title: t("items.prudential.title"),
      desc: t("items.prudential.desc"),
      icon: ShieldCheck
    },
    {
      title: t("items.fogadac.title"),
      desc: t("items.fogadac.desc"),
      icon: Lock
    },
    {
      title: t("items.gimac.title"),
      desc: t("items.gimac.desc"),
      icon: ArrowsLeftRight
    },
    {
      title: t("items.shariah.title"),
      desc: t("items.shariah.desc"),
      icon: Globe
    }
  ];

  return (
    <section className="w-full bg-[#E8EFEA] border-y border-tikari-green/10 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold text-tikari-green-dark">{t("title")}</h3>
          <p className="text-sm text-tikari-sage">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {frameworks.map((item, idx) => (
            <div key={idx} className="p-6 bg-white border border-tikari-green/10 rounded-2xl flex items-start gap-4">
              <item.icon className="h-8 w-8 text-tikari-gold shrink-0 mt-1" weight="fill" />
              <div>
                <p className="text-sm font-bold text-tikari-green-dark">{item.title}</p>
                <p className="text-xs text-tikari-sage leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

