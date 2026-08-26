"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, ArrowRight, Mail, Phone, MapPin, Clock, ShieldAlert } from "lucide-react";
import { Button, Input, Select, Label, Textarea, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";

export default function DemoPage() {
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

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
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
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-tikari-cream-light font-sans min-h-screen">
      
      {/* Small Hero Section */}
      <section className="bg-tikari-green-dark text-white pt-28 pb-16 px-6 md:px-12 border-b border-tikari-gold/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">Request a Demonstration</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">See TIKARI in action</h1>
          <p className="text-sm text-tikari-cream/80 max-w-2xl mx-auto">
            Schedule a 45-minute technical walkthrough with our banking infrastructure specialists.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-tikari-green-dark">
                Personalized Core Demo
              </h2>
              <p className="text-base text-tikari-sage leading-relaxed">
                Discover how our Shariah-compliant core maps your daily accounting entries, manages Murabaha, and produces on-demand COBAC returns.
              </p>
            </div>

            {/* Visual Image Block (Sharp Corners) */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-tikari-green/10">
              <Image
                src="/women-market.jpg"
                alt="TIKARI Core Platform demo presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-tikari-gold">Shariah Assured</p>
                <p className="text-xs font-semibold">COBAC and BEAC Compliant Core Infrastructure</p>
              </div>
            </div>

            {/* What to expect list */}
            <div className="space-y-4 bg-white border border-tikari-green/10 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/5">What to expect</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-tikari-gold/25 flex items-center justify-center font-bold text-xs text-tikari-gold shrink-0 rounded-md">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-tikari-green-dark">Core platform walk-through</h4>
                    <p className="text-xs text-tikari-sage leading-relaxed">A live look at Murabaha, Mudarabah, and Wadiah accounting ledgers on TIKARI.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-tikari-gold/25 flex items-center justify-center font-bold text-xs text-tikari-gold shrink-0 rounded-md">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-tikari-green-dark">Migration feasibility study</h4>
                    <p className="text-xs text-tikari-sage leading-relaxed">Feasibility check for migrating account history from legacy Symphonie, Delta, or Excel databases.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-tikari-gold/25 flex items-center justify-center font-bold text-xs text-tikari-gold shrink-0 rounded-md">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-tikari-green-dark">Q&A and compliance check</h4>
                    <p className="text-xs text-tikari-sage leading-relaxed">A direct session mapping your specific operations to COBAC EMF guidelines.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contacts Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-tikari-green/10 p-4 rounded-2xl flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-tikari-sage uppercase tracking-wider font-bold">Office</p>
                  <p className="text-xs text-tikari-green-dark leading-normal">4 Etage, Bonaberi, Douala</p>
                </div>
              </div>
              <div className="bg-white border border-tikari-green/10 p-4 rounded-2xl flex items-start gap-2.5">
                <Phone className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-tikari-sage uppercase tracking-wider font-bold">Phone</p>
                  <p className="text-xs text-tikari-green-dark font-mono">+237 677 777 777</p>
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
                    <h2 className="text-2xl font-bold text-tikari-green-dark">Request Received</h2>
                    <p className="text-sm text-tikari-sage max-w-sm mx-auto leading-relaxed">
                      Thank you for your interest. A regional core integration engineer will review your request and contact you within 24 business hours to schedule your demonstration.
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center pt-4">
                    <Button variant="primary" href="/" className="rounded-md font-bold">
                      Return Home
                    </Button>
                    <Button variant="ghost" onClick={() => setSubmitted(false)} className="rounded-md font-bold">
                      Submit Another
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-md border border-tikari-green/10 shadow-lg">
                <CardHeader className="border-b border-tikari-green/5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-tikari-green-dark">Book Your Demo</CardTitle>
                      <CardDescription className="text-tikari-sage mt-1">Submit your details to request a custom session</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-tikari-green-dark font-semibold">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Jean"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-tikari-green-dark font-semibold">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Fouda"
                          required
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-tikari-green-dark font-semibold">Work Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@institution.cm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-tikari-green-dark font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+237 677 777 777"
                        />
                      </div>
                    </div>

                    {/* Institution Name */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-tikari-green-dark font-semibold">Institution Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Al-Baraka Microfinance Douala"
                        required
                      />
                    </div>

                    {/* Account Type and Capital */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountType" className="text-tikari-green-dark font-semibold">Institution Type *</Label>
                        <Select
                          id="accountType"
                          name="accountType"
                          value={formData.accountType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select type</option>
                          <option value="microfinance">Microfinance Bank (EMF)</option>
                          <option value="cooperative">Cooperative / Credit Union</option>
                          <option value="commercial">Commercial Bank Window</option>
                          <option value="agency">Agency / Other</option>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="estimatedCapital" className="text-tikari-green-dark font-semibold">Estimated Assets (XAF)</Label>
                        <Select
                          id="estimatedCapital"
                          name="estimatedCapital"
                          value={formData.estimatedCapital}
                          onChange={handleChange}
                        >
                          <option value="">Select range</option>
                          <option value="under-100m">Under 100M XAF</option>
                          <option value="100m-500m">100M - 500M XAF</option>
                          <option value="500m-1b">500M - 1B XAF</option>
                          <option value="over-1b">Over 1B XAF</option>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-tikari-green-dark font-semibold">Specific requirements</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="List any specific product modules (e.g. Murabaha, Njangi) or core systems you migrate from..."
                        className="min-h-[100px]"
                      />
                    </div>

                    {/* Form Controls */}
                    <div className="flex gap-4 pt-2">
                      <Button
                        type="submit"
                        variant="secondary"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit request"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          company: "",
                          accountType: "",
                          estimatedCapital: "",
                          message: "",
                        })}
                      >
                        Clear
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
