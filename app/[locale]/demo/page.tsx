"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircle, ArrowRight, Mail, Phone, MapPin, Clock, ShieldAlert } from "lucide-react";
import { Button, Input, Select, Label, Textarea, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";

export default function DemoPage() {
  const t = useTranslations("demo");
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    accountType: "",
    estimatedCapital: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "demo",
          data: formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        accountType: "",
        estimatedCapital: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-tikari-cream-light font-sans min-h-screen">
      
      {/* Small Hero Section */}
      <section className="bg-tikari-green-dark text-white pt-28 pb-16 px-6 md:px-12 border-b border-tikari-gold/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">{t("hero.badge")}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t("hero.title")}</h1>
          <p className="text-sm text-tikari-cream/80 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-tikari-green-dark">
                {t("content.title")}
              </h2>
              <p className="text-base text-tikari-sage leading-relaxed">
                {t("content.description")}
              </p>
            </div>

            {/* Visual Image Block (Sharp Corners) */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-tikari-green/10">
              <Image
                src="/consulting-team.jpg"
                alt={t("content.imageAlt")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-tikari-gold">{t("content.imageCaption.badge")}</p>
                <p className="text-xs font-semibold">{t("content.imageCaption.text")}</p>
              </div>
            </div>

            {/* What to expect list */}
            <div className="space-y-4 bg-white border border-tikari-green/10 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/5">{t("expectations.title")}</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-tikari-gold/25 flex items-center justify-center font-bold text-xs text-tikari-gold shrink-0 rounded-md">{t("expectations.items.platform.number")}</div>
                  <div>
                    <h4 className="text-sm font-bold text-tikari-green-dark">{t("expectations.items.platform.title")}</h4>
                    <p className="text-xs text-tikari-sage leading-relaxed">{t("expectations.items.platform.description")}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-tikari-gold/25 flex items-center justify-center font-bold text-xs text-tikari-gold shrink-0 rounded-md">{t("expectations.items.migration.number")}</div>
                  <div>
                    <h4 className="text-sm font-bold text-tikari-green-dark">{t("expectations.items.migration.title")}</h4>
                    <p className="text-xs text-tikari-sage leading-relaxed">{t("expectations.items.migration.description")}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-tikari-gold/25 flex items-center justify-center font-bold text-xs text-tikari-gold shrink-0 rounded-md">{t("expectations.items.qa.number")}</div>
                  <div>
                    <h4 className="text-sm font-bold text-tikari-green-dark">{t("expectations.items.qa.title")}</h4>
                    <p className="text-xs text-tikari-sage leading-relaxed">{t("expectations.items.qa.description")}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contacts Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-tikari-green/10 p-4 rounded-2xl flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-tikari-sage uppercase tracking-wider font-bold">{t("contactInfo.office.label")}</p>
                  <p className="text-xs text-tikari-green-dark leading-normal">{t("contactInfo.office.address")}</p>
                </div>
              </div>
              <div className="bg-white border border-tikari-green/10 p-4 rounded-2xl flex items-start gap-2.5">
                <Phone className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-tikari-sage uppercase tracking-wider font-bold">{t("contactInfo.phone.label")}</p>
                  <p className="text-xs text-tikari-green-dark font-mono">{t("contactInfo.phone.number")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div>
            {submitted ? (
              <Card className="text-center py-16 rounded-2xl border border-tikari-green/10 shadow-lg">
                <CardContent className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-tikari-sage-light flex items-center justify-center text-tikari-gold rounded-2xl">
                    <CheckCircle className="h-10 w-10 text-tikari-gold" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-tikari-green-dark">{t("success.title")}</h2>
                    <p className="text-sm text-tikari-sage max-w-sm mx-auto leading-relaxed">
                      {t("success.message")}
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center pt-4">
                    <Button variant="primary" href="/" className="rounded-md font-bold">
                      {t("success.buttons.home")}
                    </Button>
                    <Button variant="ghost" onClick={() => setSubmitted(false)} className="rounded-md font-bold">
                      {t("success.buttons.another")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-md border border-tikari-green/10 shadow-lg">
                <CardHeader className="border-b border-tikari-green/5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-tikari-green-dark">{t("form.title")}</CardTitle>
                      <CardDescription className="text-tikari-sage mt-1">{t("form.description")}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstName"
                            className="text-tikari-green-dark font-semibold"
                          >
                            {t("form.fields.firstName.label")} *
                          </Label>

                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder={t("form.fields.firstName.placeholder")}
                            required
                          />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="lastName"
                            className="text-tikari-green-dark font-semibold"
                          >
                            {t("form.fields.lastName.label")} *
                          </Label>

                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder={t("form.fields.lastName.placeholder")}
                            required
                          />
                        </div>
                      </div>

                      {/* Email and Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-tikari-green-dark font-semibold"
                          >
                            {t("form.fields.email.label")} *
                          </Label>

                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("form.fields.email.placeholder")}
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-tikari-green-dark font-semibold"
                          >
                            {t("form.fields.phone.label")}
                          </Label>

                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t("form.fields.phone.placeholder")}
                          />
                        </div>
                      </div>

                      {/* Institution Name */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-tikari-green-dark font-semibold"
                        >
                          {t("form.fields.company.label")} *
                        </Label>

                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t("form.fields.company.placeholder")}
                          required
                        />
                      </div>

                      {/* Account Type and Capital */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Account Type */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="accountType"
                            className="text-tikari-green-dark font-semibold"
                          >
                            {t("form.fields.accountType.label")} *
                          </Label>

                          <Select
                            id="accountType"
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">
                              {t("form.fields.accountType.options.placeholder")}
                            </option>

                            <option value="microfinance">
                              {t("form.fields.accountType.options.microfinance")}
                            </option>

                            <option value="cooperative">
                              {t("form.fields.accountType.options.cooperative")}
                            </option>

                            <option value="commercial">
                              {t("form.fields.accountType.options.commercial")}
                            </option>

                            <option value="agency">
                              {t("form.fields.accountType.options.agency")}
                            </option>
                          </Select>
                        </div>

                        {/* Estimated Capital */}
                        <div className="space-y-2">
                          <Label
                            htmlFor="estimatedCapital"
                            className="text-tikari-green-dark font-semibold"
                          >
                            {t("form.fields.estimatedCapital.label")}
                          </Label>

                          <Select
                            id="estimatedCapital"
                            name="estimatedCapital"
                            value={formData.estimatedCapital}
                            onChange={handleChange}
                          >
                            <option value="">
                              {t("form.fields.estimatedCapital.options.placeholder")}
                            </option>

                            <option value="under-200k">
                              {t("form.fields.estimatedCapital.options.under-200k")}
                            </option>

                            <option value="200k-1m">
                              {t("form.fields.estimatedCapital.options.200k-1m")}
                            </option>

                            <option value="1m-2m">
                              {t("form.fields.estimatedCapital.options.1m-2m")}
                            </option>

                            <option value="over-2m">
                              {t("form.fields.estimatedCapital.options.over-2m")}
                            </option>
                          </Select>
                        </div>
                      </div>

                      {/* Additional Message */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-tikari-green-dark font-semibold"
                        >
                          {t("form.fields.message.label")}
                        </Label>

                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("form.fields.message.placeholder")}
                          className="min-h-[100px]"
                        />
                      </div>

                      {/* Form Controls */}
                      <div className="flex gap-4 pt-2">
                        {/* Submit Button */}
                        <Button
                          type="submit"
                          variant="secondary"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? t("form.buttons.submitting")
                            : t("form.buttons.submit")}
                        </Button>

                        {/* Clear Button */}
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          onClick={() =>
                            setFormData({
                              firstName: "",
                              lastName: "",
                              email: "",
                              phone: "",
                              company: "",
                              accountType: "",
                              estimatedCapital: "",
                              message: "",
                            })
                          }
                        >
                          {t("form.buttons.clear")}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
              </Card>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
