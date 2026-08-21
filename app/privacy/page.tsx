export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      
      {/* Page Header */}
      <section className="bg-tikari-green-dark text-white pt-32 pb-16 px-6 md:px-12 border-b border-tikari-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-sm text-tikari-cream/80">Last Revised: August 21, 2026</p>
        </div>
      </section>

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-tikari-green-dark">
        <article className="prose prose-slate max-w-none space-y-8 text-sm md:text-base leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              1. About this policy
            </h2>
            <p className="text-tikari-sage">
              This privacy policy explains how TIKARI Technology Limited ("TIKARI", "we", "us") collects, uses, discloses, and protects information about you when you visit tikari.cm or enquire about our platform. It does not cover data processed within the TIKARI platform on behalf of our institutional customers, which is governed by our Data Processing Agreement with each customer institution.
            </p>
            <p className="text-tikari-sage font-semibold">
              Our operations comply with Law No. 2010/012 of 21 December 2010 on cybersecurity and cybercrime in Cameroon, supervised by ANTIC (National Agency for Information and Communication Technologies), and relevant COBAC guidelines on banking secrecy and customer data protection.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              2. Information we collect
            </h2>
            <p className="text-tikari-sage">
              From website visitors: We collect information you provide when you submit our demo request form, including name, work email address, institution name, role, and any message you include. We may also collect standard web server logs (IP address, browser type, pages visited) for security and analytics purposes.
            </p>
            <p className="text-tikari-sage font-bold">
              We do not: use third-party advertising trackers, sell your information to third parties, or send unsolicited marketing emails to people who have not opted in.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              3. How we use your information
            </h2>
            <p className="text-tikari-sage">
              When you submit a demo request, we use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-tikari-sage">
              <li>Contact you to schedule the requested demo</li>
              <li>Tailor the demo to your institution type and stated questions</li>
              <li>Send follow-up information related to TIKARI that you have requested</li>
            </ul>
            <p className="text-tikari-sage">
              We do not add you to a bulk marketing mailing list without explicit consent.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              4. Data retention
            </h2>
            <p className="text-tikari-sage">
              Demo enquiry data is retained for 24 months from the date of submission, or until you request deletion. We delete data on request. You may contact us at <a href="mailto:privacy@tikari.cm" className="text-tikari-gold hover:underline font-bold">privacy@tikari.cm</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              5. Data security
            </h2>
            <p className="text-tikari-sage">
              We use encryption in transit (HTTPS/TLS) for all web communications. Form submission data is stored in access-controlled systems available only to the TIKARI team. We do not store payment card data. No payment is collected on this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              6. Third-party services
            </h2>
            <p className="text-tikari-sage">
              Our website may use third-party services for hosting and basic analytics. These services are bound by their own privacy policies and are not permitted to use data about visitors to our site for their own advertising purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              7. Your rights
            </h2>
            <p className="text-tikari-sage">
              You have the right to request access to, correction of, or deletion of any personal information we hold about you under regional CEMAC consumer safety guidelines. To exercise any of these rights, contact us at <a href="mailto:privacy@tikari.cm" className="text-tikari-gold hover:underline font-bold">privacy@tikari.cm</a>. We will respond within 30 days.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              8. Changes to this policy
            </h2>
            <p className="text-tikari-sage">
              We may update this policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of the website following an update constitutes acceptance of the revised policy.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-tikari-green/20">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2">
              9. Contact
            </h2>
            <p className="text-tikari-sage">
              TIKARI Technology Limited<br />
              Douala, Cameroon<br />
              Email: <a href="mailto:privacy@tikari.cm" className="text-tikari-gold hover:underline font-bold">privacy@tikari.cm</a>
            </p>
          </div>

        </article>
      </main>

    </div>
  );
}
