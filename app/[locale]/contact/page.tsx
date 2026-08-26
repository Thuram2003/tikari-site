"use client";

import { useState } from "react";
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
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
            Get in Touch
          </h1>
          <p className="text-sm text-tikari-cream/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about TIKARI? Want to schedule a demo? We're here to help your institution transition to Shariah-compliant banking.
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
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">Head Office</h3>
                    <p className="text-sm text-tikari-sage leading-relaxed">
                      Douala, Cameroon<br />
                      CEMAC Region<br />
                      Central Africa
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
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">Phone</h3>
                    <p className="text-sm text-tikari-sage font-mono">
                      +237 677 777 777
                    </p>
                    <p className="text-xs text-tikari-sage/70">Mon-Fri, 8:00 AM - 6:00 PM WAT</p>
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
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">Email</h3>
                    <div className="space-y-2 text-sm text-tikari-sage">
                      <div>
                        <p className="text-xs font-semibold text-tikari-green-dark">General:</p>
                        <a href="mailto:info@tikari.cm" className="hover:text-tikari-gold transition-colors">
                          info@tikari.cm
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-tikari-green-dark">Sales & Demos:</p>
                        <a href="mailto:sales@tikari.cm" className="hover:text-tikari-gold transition-colors">
                          sales@tikari.cm
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-tikari-green-dark">Support:</p>
                        <a href="mailto:support@tikari.cm" className="hover:text-tikari-gold transition-colors">
                          support@tikari.cm
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
                    <h3 className="text-sm font-bold text-tikari-green-dark uppercase tracking-wider">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold text-tikari-green-dark">Monday - Friday</span>
                        <span className="text-tikari-sage">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-tikari-green-dark">Saturday</span>
                        <span className="text-tikari-sage">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-tikari-green-dark">Sunday</span>
                        <span className="text-tikari-sage">Closed</span>
                      </div>
                      <p className="text-xs text-tikari-sage/70 pt-2 border-t border-tikari-green/5">
                        All times in West Africa Time (WAT)
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
                    <h2 className="text-2xl font-bold text-tikari-green-dark font-serif">Message Sent Successfully!</h2>
                    <p className="text-sm text-tikari-sage max-w-sm mx-auto leading-relaxed">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center pt-4">
                    <Button variant="primary" onClick={() => setFormState('idle')} className="rounded-xl">
                      Send Another Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-2xl border border-tikari-green/10 shadow-lg">
                <CardHeader className="border-b border-tikari-green/5 pb-6">
                  <CardTitle className="text-2xl font-bold text-tikari-green-dark font-serif">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-tikari-sage mt-1">
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6">
                  {formState === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3 rounded-xl">
                      <Warning className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" weight="fill" />
                      <div>
                        <p className="font-semibold text-red-900 text-sm">Something went wrong</p>
                        <p className="text-xs text-red-800 mt-1">Please try again or email us directly.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-tikari-green-dark font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="rounded-xl"
                      />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-tikari-green-dark font-semibold">
                        Organization/Institution *
                      </Label>
                      <Input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        placeholder="Douala Community Bank"
                        className="rounded-xl"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-tikari-green-dark font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.cm"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-tikari-green-dark font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+237 XXX XXX XXX"
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-tikari-green-dark font-semibold">
                        Subject *
                      </Label>
                      <Select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                      >
                        <option value="">Select a subject</option>
                        <option value="demo">Request a Demo</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="shariah">Shariah Compliance Question</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-tikari-green-dark font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your institution and how we can help..."
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
                          'Sending...'
                        ) : (
                          <>
                            Send Message
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
                        Clear
                      </Button>
                    </div>

                    <p className="text-xs text-tikari-sage/70 pt-2">
                      By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
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
            Looking for Something Specific?
          </h2>
          <p className="text-sm text-tikari-sage mb-8">
            Explore our resources and services
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="rounded-2xl border border-tikari-green/10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <a href="/demo" className="block">
                  <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                    Schedule a Demo
                  </h3>
                  <p className="text-sm text-tikari-sage">
                    See TIKARI in action
                  </p>
                  <ArrowRight className="h-5 w-5 text-tikari-gold mx-auto mt-3 group-hover:translate-x-1 transition-transform" weight="bold" />
                </a>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-tikari-green/10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <a href="/resources/support" className="block">
                  <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                    Help Center
                  </h3>
                  <p className="text-sm text-tikari-sage">
                    FAQs and documentation
                  </p>
                  <ArrowRight className="h-5 w-5 text-tikari-gold mx-auto mt-3 group-hover:translate-x-1 transition-transform" weight="bold" />
                </a>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-tikari-green/10 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <a href="/resources/education" className="block">
                  <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                    Islamic Finance 101
                  </h3>
                  <p className="text-sm text-tikari-sage">
                    Learn the fundamentals
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
