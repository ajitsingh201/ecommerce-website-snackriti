const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-orange-100">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
  </section>
)

const TermsPage = () => (
  <div>
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-14 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">Terms & Conditions</h1>
      <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
    </div>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gray-600 text-sm leading-relaxed mb-10 p-5 bg-orange-50 rounded-2xl border border-orange-100">
        Please read these Terms and Conditions carefully before using the Snackriti website and services. By accessing
        or using our platform, you agree to be bound by these terms.
      </p>

      <Section title="1. Acceptance of Terms">
        <p>
          By creating an account or making a purchase on Snackriti, you confirm that you are at least 18 years of age
          (or have parental consent), and that you agree to these Terms and Conditions and our Privacy Policy.
        </p>
      </Section>

      <Section title="2. Use of the Platform">
        <p>You agree to use Snackriti only for lawful purposes and in a manner that does not:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Infringe the rights of others or violate any applicable law</li>
          <li>Transmit harmful, offensive, or misleading content</li>
          <li>Attempt to gain unauthorized access to any part of our platform</li>
          <li>Use automated tools to scrape, crawl, or extract data without permission</li>
        </ul>
      </Section>

      <Section title="3. Product Listings & Pricing">
        <p>
          We strive to ensure all product descriptions, images, and prices are accurate. However, errors may occur.
          In the event of a pricing error, we reserve the right to cancel the order and issue a full refund. Product
          availability is subject to change without notice.
        </p>
      </Section>

      <Section title="4. Orders & Payments">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>All prices are listed in Indian Rupees (INR) and include applicable taxes unless stated otherwise</li>
          <li>Payment must be completed at the time of order placement</li>
          <li>We accept UPI, debit/credit cards, net banking, and Cash on Delivery (eligible orders)</li>
          <li>Snackriti reserves the right to refuse or cancel orders at its discretion</li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>
          All content on Snackriti — including logos, text, images, product descriptions, and design — is owned by
          or licensed to Snackriti. You may not reproduce, distribute, or create derivative works without our express
          written consent.
        </p>
      </Section>

      <Section title="6. User Accounts">
        <p>
          You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us
          immediately at <strong>support@snackriti.com</strong> of any unauthorized use of your account. Snackriti will not
          be liable for losses resulting from unauthorized access due to your failure to safeguard your credentials.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Snackriti shall not be liable for any indirect, incidental, special,
          or consequential damages arising from the use of or inability to use our platform or products. Our total
          liability for any claim shall not exceed the amount you paid for the product in question.
        </p>
      </Section>

      <Section title="8. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India, specifically the jurisdiction
          of Bengaluru, Karnataka. Any disputes shall first be attempted to be resolved through mediation before
          proceeding to court.
        </p>
      </Section>

      <Section title="9. Changes to Terms">
        <p>
          Snackriti reserves the right to modify these Terms at any time. Continued use of the platform after changes
          are posted constitutes your acceptance of the updated Terms. We recommend reviewing this page periodically.
        </p>
      </Section>

      <div className="mt-12 p-5 bg-gray-50 rounded-2xl text-center">
        <p className="text-sm text-gray-500">
          Have questions about our Terms? Email{" "}
          <a href="mailto:legal@snackriti.com" className="text-orange-500 font-medium hover:underline">
            legal@snackriti.com
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default TermsPage
