const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-orange-100">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
  </section>
)

const PrivacyPolicy = () => (
  <div>
    {/* Header */}
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-14 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">Privacy Policy</h1>
      <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
    </div>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gray-600 text-sm leading-relaxed mb-10 p-5 bg-orange-50 rounded-2xl border border-orange-100">
        At Snackriti, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard
        your personal information when you use our website and services.
      </p>

      <Section title="1. Information We Collect">
        <p>We collect information you provide directly, including:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Name, email address, phone number, and delivery address when you register or place an order</li>
          <li>Payment information (processed securely via Razorpay — we do not store card details)</li>
          <li>Reviews, feedback, and communications you send us</li>
        </ul>
        <p>We also automatically collect usage data such as IP address, browser type, pages visited, and device information.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>Your information is used to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Process and deliver your orders, and send order confirmations and updates</li>
          <li>Improve our website, product recommendations, and customer experience</li>
          <li>Send promotional offers and newsletters (you can unsubscribe at any time)</li>
          <li>Prevent fraud, comply with legal obligations, and enforce our policies</li>
        </ul>
      </Section>

      <Section title="3. Sharing Your Information">
        <p>We do not sell or rent your personal data. We may share it with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Logistics partners (Delhivery, Shiprocket, etc.) solely for order delivery</li>
          <li>Payment processors (Razorpay) for secure transaction handling</li>
          <li>Analytics providers (e.g., Google Analytics) in anonymized form</li>
          <li>Law enforcement if required by applicable law</li>
        </ul>
      </Section>

      <Section title="4. Cookies">
        <p>
          We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences,
          and analyze site traffic. You may disable cookies through your browser settings, although some features may not
          function correctly.
        </p>
      </Section>

      <Section title="5. Data Security">
        <p>
          We implement industry-standard SSL encryption and security measures to protect your personal data. However, no
          transmission over the internet is 100% secure. We encourage you to use strong, unique passwords and to contact
          us immediately if you suspect unauthorized access.
        </p>
      </Section>

      <Section title="6. Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Access, correct, or delete your personal information at any time</li>
          <li>Opt out of marketing communications</li>
          <li>Request data portability in machine-readable format</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>To exercise these rights, contact us at <strong>privacy@snackriti.com</strong>.</p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a
          prominent notice on our website. Continued use of our services after the effective date constitutes acceptance
          of the revised policy.
        </p>
      </Section>

      <div className="mt-12 p-5 bg-gray-50 rounded-2xl text-center">
        <p className="text-sm text-gray-500">
          Questions? Email us at{" "}
          <a href="mailto:support@snackriti.com" className="text-orange-500 font-medium hover:underline">
            support@snackriti.com
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default PrivacyPolicy
