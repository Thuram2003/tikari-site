import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button, Card } from "@/components/ui";

export default function PlatformOverviewSection() {
  const t = useTranslations("home.platformOverview");
  
  const modules = [
    {
      title: t("modules.banking.title"),
      desc: t("modules.banking.desc"),
      link: "/platform/banking-operations",
      image: "/muslim-women.webp"
    },
    {
      title: t("modules.financing.title"),
      desc: t("modules.financing.desc"),
      link: "/platform/financing",
      image: "/handshake.jpg"
    },
    {
      title: t("modules.compliance.title"),
      desc: t("modules.compliance.desc"),
      link: "/platform/compliance",
      image: "/compliance.jpg"
    },
    {
      title: t("modules.gl.title"),
      desc: t("modules.gl.desc"),
      link: "/platform/gl-reporting",
      image: "/woman-office.jpg"
    },
    {
      title: t("modules.agent.title"),
      desc: t("modules.agent.desc"),
      link: "/platform/agent-banking",
      image: "/smiling-looking-phone.webp"
    },
    {
      title: t("modules.admin.title"),
      desc: t("modules.admin.desc"),
      link: "/platform/administration",
      image: "/people-smiling-papers.jpeg"
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">{t("badge")}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-tikari-green-dark">
            {t("title")}
          </h2>
          <p className="text-lg text-tikari-sage leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((mod, idx) => (
            <Card key={idx} className="border-tikari-green/20 overflow-hidden hover:shadow-xl transition-all rounded-2xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/80 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-tikari-green-dark">{mod.title}</h3>
                  <p className="text-sm text-tikari-sage leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  href={mod.link} 
                  className="text-tikari-green p-0 hover:bg-transparent font-bold flex items-center gap-1"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
