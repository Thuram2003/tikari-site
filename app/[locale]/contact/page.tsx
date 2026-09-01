"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { 
  MapPin,
  Phone,
  Envelope,
  Clock,
  ArrowRight,
  CheckCircle,
  Warning
} from "@phosphor-icons/react";
import { 
  Button, 
  Input, 
  Select, 
  Label, 
  Textarea, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, send to your API endpoint
    console.log('Form submitted:', formData);
    
    setFormState('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormState('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-tikari-cream-light font-sans">
      {/* Hero Section */}
      <section className="bg-tikari-green-dark text-white pt-28 pb-16 px-6 md:px-12 border-b border-tikari-gold/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">{t("hero.badge")}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
            {t("hero.title")}
          </h1>
          <p className="text-sm text-tikari-cream/80 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
            
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Office Location Card */}
            <Card className="rounded-2xl border border-tikari-green/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center rounded-xl shrink-0">
                    <MapPin className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">{t("contactInfo.office.title")}</h3>
                    <p className="text-sm text-tikari-sage leading-relaxed">
                      {t("contactInfo.office.line1")}<br />
                      {t("contactInfo.office.line2")}<br />
                      {t("contactInfo.office.line3")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="rounded-2xl border border-tikari-green/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center rounded-xl shrink-0">
                    <Phone className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">{t("contactInfo.phone.title")}</h3>
                    <p className="text-sm text-tikari-sage font-mono">
                      {t("contactInfo.phone.number")}
                    </p>
                    <p className="text-xs text-tikari-sage/70">{t("contactInfo.phone.hours")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="rounded-2xl border border-tikari-green/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center rounded-xl shrink-0">
                    <Envelope className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">{t("contactInfo.email.title")}</h3>
                    <div className="space-y-2 text-sm text-tikari-sage">
                      <div>
                        <p className="text-xs font-semibold text-tikari-green-dark">{t("contactInfo.email.general.label")}</p>
                        <a href={`mailto:${t("contactInfo.email.general.address")}`} className="hover:text-tikari-gold transition-colors">
                          {t("contactInfo.email.general.address")}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-tikari-green-dark">{t("contactInfo.email.sales.label")}</p>
                        <a href={`mailto:${t("contactInfo.email.sales.address")}`} className="hover:text-tikari-gold transition-colors">
                          {t("contactInfo.email.sales.address")}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-tikari-green-dark">{t("contactInfo.email.support.label")}</p>
                        <a href={`mailto:${t("contactInfo.email.support.address")}`} className="hover:text-tikari-gold transition-colors">
                          {t("contactInfo.email.support.address")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="rounded-2xl border border-tikari-green/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center rounded-xl shrink-0">
                    <Clock className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <div className="space-y-2 w-full">
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">{t("contactInfo.hours.title")}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold text-tikari-green-dark">{t("contactInfo.hours.weekdays.label")}</span>
                        <span className="text-tikari-sage">{t("contactInfo.hours.weekdays.time")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-tikari-green-dark">{t("contactInfo.hours.saturday.label")}</span>
                        <span className="text-tikari-sage">{t("contactInfo.hours.saturday.time")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-tikari-green-dark">{t("contactInfo.hours.sunday.label")}</span>
                        <span className="text-tikari-sage">{t("contactInfo.hours.sunday.time")}</span>
                      </div>
                      <p className="text-xs text-tikari-sage/70 pt-2 border-t border-tikari-green/5">
                        {t("contactInfo.hours.timezone")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {formState === 'success' ? (
              <Card className="text-center py-16 rounded-2xl border border-tikari-green/10 shadow-lg">
                <CardContent className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-tikari-sage-light flex items-center justify-center text-tikari-gold rounded-2xl">
                    <CheckCircle className="h-10 w-10 text-tikari-gold" weight="fill" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-tikari-green-dark font-serif">{t("form.success.title")}</h2>
                    <p className="text-sm text-tikari-sage max-w-sm mx-auto leading-relaxed">
                      {t("form.success.message")}
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center pt-4">
                    <Button variant="primary" onClick={() => setFormState('idle')} className="rounded-xl">
                      {t("form.success.button")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-2xl border border-tikari-green/10 shadow-lg">
                <CardHeader className="border-b border-tikari-green/5 pb-6">
                  <CardTitle className="text-2xl font-bold text-tikari-green-dark font-serif">
                    {t("form.title")}
                  </CardTitle>
                  <CardDescription className="text-tikari-sage mt-1">
                    {t("form.description")}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6">
                  {formState === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3 rounded-xl">
                      <Warning className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" weight="fill" />
                      <div>
                        <p className="font-semibold text-red-900 text-sm">{t("form.error.title")}</p>
                        <p className="text-xs text-red-800 mt-1">{t("form.error.message")}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-tikari-green-dark font-semibold">
                        {t("form.fields.name.label")} *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("form.fields.name.placeholder")}
                        className="rounded-xl"
                      />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-tikari-green-dark font-semibold">
                        {t("form.fields.organization.label")} *
                      </Label>
                      <Input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        placeholder={t("form.fields.organization.placeholder")}
                        className="rounded-xl"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-tikari-green-dark font-semibold">
                          {t("form.fields.email.label")} *
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t("form.fields.email.placeholder")}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-tikari-green-dark font-semibold">
                          {t("form.fields.phone.label")}
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("form.fields.phone.placeholder")}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-tikari-green-dark font-semibold">
                        {t("form.fields.subject.label")} *
                      </Label>
                      <Select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                      >
                        <option value="">{t("form.fields.subject.options.placeholder")}</option>
                        <option value="demo">{t("form.fields.subject.options.demo")}</option>
                        <option value="sales">{t("form.fields.subject.options.sales")}</option>
                        <option value="support">{t("form.fields.subject.options.support")}</option>
                        <option value="partnership">{t("form.fields.subject.options.partnership")}</option>
                        <option value="shariah">{t("form.fields.subject.options.shariah")}</option>
                        <option value="other">{t("form.fields.subject.options.other")}</option>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-tikari-green-dark font-semibold">
                        {t("form.fields.message.label")} *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder={t("form.fields.message.placeholder")}
                        className="rounded-xl min-h-[150px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-2">
                      <Button
                        type="submit"
                        variant="secondary"
                        size="lg"
                        disabled={formState === 'submitting'}
                        className="rounded-xl"
                      >
                        {formState === 'submitting' ? (
                          t("form.buttons.submitting")
                        ) : (
                          <>
                            {t("form.buttons.submit")}
                            <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setFormData({
                          name: '',
                          organization: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: ''
                        })}
                        className="rounded-xl"
                      >
                        {t("form.buttons.clear")}
                      </Button>
                    </div>

                    <p className="text-xs text-tikari-sage/70 pt-2">
                      {t("form.privacy")}
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 md:px-12 bg-tikari-sage-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-tikari-green-dark mb-2 font-serif">
            {t("quickLinks.title")}
          </h2>
          <p className="text-sm text-tikari-sage mb-8">
            {t("quickLinks.subtitle")}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="rounded-2xl border border-tikari-green/10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <a href="/demo" className="block">
                  <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                    {t("quickLinks.demo.title")}
                  </h3>
                  <p className="text-sm text-tikari-sage">
                    {t("quickLinks.demo.description")}
                  </p>
                  <ArrowRight className="h-5 w-5 text-tikari-gold mx-auto mt-3 group-hover:translate-x-1 transition-transform" weight="bold" />
                </a>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-tikari-green/10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <a href="/resources/support" className="block">
                  <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                    {t("quickLinks.help.title")}
                  </h3>
                  <p className="text-sm text-tikari-sage">
                    {t("quickLinks.help.description")}
                  </p>
                  <ArrowRight className="h-5 w-5 text-tikari-gold mx-auto mt-3 group-hover:translate-x-1 transition-transform" weight="bold" />
                </a>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-tikari-green/10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <a href="/resources/education" className="block">
                  <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                    {t("quickLinks.education.title")}
                  </h3>
                  <p className="text-sm text-tikari-sage">
                    {t("quickLinks.education.description")}
                  </p>
                  <ArrowRight className="h-5 w-5 text-tikari-gold mx-auto mt-3 group-hover:translate-x-1 transition-transform" weight="bold" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
