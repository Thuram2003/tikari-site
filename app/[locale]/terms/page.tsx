export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="bg-tikari-green-dark text-white pt-32 pb-16 px-6 md:px-12 border-b border-tikari-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Use</h1>
          <p className="text-sm text-tikari-cream/80">Last Revised: August 21, 2026</p>
        </div>
      </section>

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-tikari-green-dark">
        <article className="prose prose-slate max-w-none space-y-8 text-sm md:text-base leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              1. Acceptance
            </h2>
            <p className="text-tikari-sage">
              By accessing tikari.cm (the "Website"), you agree to be bound by these Terms of Use in compliance with Law No. 2010/013 of 21 December 2010 governing electronic communications in Cameroon. If you do not agree, please do not use the Website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              2. Website content
            </h2>
            <p className="text-tikari-sage">
              The content on this Website is provided for informational purposes only. All product descriptions, feature lists, and platform screenshots represent the TIKARI platform as of the date of publication. Features and capabilities are subject to change without prior notice.
            </p>
            <p className="text-tikari-sage">
              Nothing on this Website constitutes a legally binding offer, warranty, representation, or contractual commitment. Software licensing and implementation are governed by a separate Software Licence and Services Agreement between TIKARI Technology Limited and the customer institution.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              3. No financial or Shariah advice
            </h2>
            <p className="text-tikari-sage">
              The resources, articles, and platform descriptions on this Website are educational and informational in nature. They do not constitute financial advice, legal advice, or a Shariah ruling. Determinations of Shariah compliance for specific products and structures must be made by a qualified Shariah scholar or the Advisory Committee of Experts (ACE) engaged by your institution.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              4. Intellectual property
            </h2>
            <p className="text-tikari-sage">
              All content, trademarks, logos, and software on this Website are the property of TIKARI Technology Limited or its licensors. You may not reproduce, distribute, or create derivative works from any content on this Website without prior written permission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              5. Limitation of liability
            </h2>
            <p className="text-tikari-sage">
              To the fullest extent permitted by the laws of the Republic of Cameroon, TIKARI Technology Limited excludes all liability for loss or damage (including indirect, consequential, or incidental loss) arising from use of or reliance on this Website or its content.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              6. External links
            </h2>
            <p className="text-tikari-sage">
              This Website may contain links to third-party websites. We do not control those websites and are not responsible for their content, privacy practices, or availability.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              7. Governing law
            </h2>
            <p className="text-tikari-sage font-semibold">
              These Terms are governed by and construed in accordance with the laws of the Republic of Cameroon. Any dispute arising under these Terms is subject to the exclusive jurisdiction of the competent courts of Cameroon (specifically located in Douala).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              8. Changes
            </h2>
            <p className="text-tikari-sage">
              We may update these Terms at any time. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-tikari-green/20">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2">
              9. Contact
            </h2>
            <p className="text-tikari-sage">
              For legal queries, you may contact our legal department at:<br />
              Email: <a href="mailto:legal@tikari.cm" className="text-tikari-gold hover:underline font-bold">legal@tikari.cm</a>
            </p>
          </div>

        </article>
      </main>

    </div>
  );
}
