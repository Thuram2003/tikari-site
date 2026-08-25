"use client";

import { useState } from "react";
import { Metadata } from "next";
import { 
  MapPin,
  Phone,
  Envelope,
  Clock,
  ArrowRight,
  CheckCircle,
  Warning
} from "@phosphor-icons/react";

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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-tikari-green-dark text-white py-16 lg:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/85 leading-relaxed">
            Have questions about TIKARI? Want to schedule a demo? We're here to help your institution transition to Shariah-compliant banking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Office Location */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <h3 className="text-lg font-bold text-tikari-green-dark">Head Office</h3>
                </div>
                <p className="text-tikari-sage leading-relaxed">
                  Douala, Cameroon<br />
                  CEMAC Region<br />
                  Central Africa
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <h3 className="text-lg font-bold text-tikari-green-dark">Phone</h3>
                </div>
                <p className="text-tikari-sage">
                  +237 677 777 777<br />
                  <span className="text-sm text-tikari-sage/70">Mon-Fri, 8:00 AM - 6:00 PM WAT</span>
                </p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center">
                    <Envelope className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <h3 className="text-lg font-bold text-tikari-green-dark">Email</h3>
                </div>
                <div className="space-y-2 text-tikari-sage">
                  <p>
                    <span className="font-semibold">General:</span><br />
                    <a href="mailto:info@tikari.cm" className="hover:text-tikari-gold transition-colors">
                      info@tikari.cm
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Sales & Demos:</span><br />
                    <a href="mailto:sales@tikari.cm" className="hover:text-tikari-gold transition-colors">
                      sales@tikari.cm
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Support:</span><br />
                    <a href="mailto:support@tikari.cm" className="hover:text-tikari-gold transition-colors">
                      support@tikari.cm
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-tikari-gold/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-tikari-gold" weight="fill" />
                  </div>
                  <h3 className="text-lg font-bold text-tikari-green-dark">Business Hours</h3>
                </div>
                <div className="space-y-2 text-tikari-sage text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span>Closed</span>
                  </div>
                  <p className="text-xs text-tikari-sage/70 pt-2">
                    All times in West Africa Time (WAT)
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-tikari-cream/30 border-2 border-tikari-green/10 p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-tikari-green-dark mb-6">
                  Send Us a Message
                </h2>

                {formState === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" weight="fill" />
                    <div>
                      <p className="font-semibold text-green-900">Message sent successfully!</p>
                      <p className="text-sm text-green-800 mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {formState === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3">
                    <Warning className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" weight="fill" />
                    <div>
                      <p className="font-semibold text-red-900">Something went wrong</p>
                      <p className="text-sm text-red-800 mt-1">Please try again or email us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-tikari-green-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-tikari-green/20 focus:border-tikari-gold focus:outline-none transition-colors text-tikari-green-dark"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-tikari-green-dark mb-2">
                      Organization/Institution *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-tikari-green/20 focus:border-tikari-gold focus:outline-none transition-colors text-tikari-green-dark"
                      placeholder="Douala Community Bank"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-tikari-green-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-tikari-green/20 focus:border-tikari-gold focus:outline-none transition-colors text-tikari-green-dark"
                        placeholder="john@example.cm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-tikari-green-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-tikari-green/20 focus:border-tikari-gold focus:outline-none transition-colors text-tikari-green-dark"
                        placeholder="+237 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-tikari-green-dark mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-tikari-green/20 focus:border-tikari-gold focus:outline-none transition-colors text-tikari-green-dark"
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Request a Demo</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="shariah">Shariah Compliance Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-tikari-green-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border-2 border-tikari-green/20 focus:border-tikari-gold focus:outline-none transition-colors text-tikari-green-dark resize-none"
                      placeholder="Tell us about your institution and how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-tikari-green-dark text-white py-4 px-6 font-bold uppercase tracking-wider hover:bg-tikari-green transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-5 w-5" weight="bold" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-tikari-sage/70 text-center">
                    By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-tikari-cream/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-tikari-green-dark mb-8">
            Looking for Something Specific?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="/demo"
              className="p-6 bg-white border-2 border-tikari-green/10 hover:border-tikari-gold hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                Schedule a Demo
              </h3>
              <p className="text-sm text-tikari-sage">
                See TIKARI in action
              </p>
            </a>
            <a
              href="/resources/support"
              className="p-6 bg-white border-2 border-tikari-green/10 hover:border-tikari-gold hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                Help Center
              </h3>
              <p className="text-sm text-tikari-sage">
                FAQs and documentation
              </p>
            </a>
            <a
              href="/resources/education"
              className="p-6 bg-white border-2 border-tikari-green/10 hover:border-tikari-gold hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="font-bold text-tikari-green-dark mb-2 group-hover:text-tikari-gold transition-colors">
                Islamic Finance 101
              </h3>
              <p className="text-sm text-tikari-sage">
                Learn the fundamentals
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
