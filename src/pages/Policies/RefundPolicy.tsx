const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-orange-100">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
  </section>
)

const RefundPolicy = () => (
  <div>
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-14 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">Refund & Return Policy</h1>
      <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
    </div>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gray-600 text-sm leading-relaxed mb-10 p-5 bg-orange-50 rounded-2xl border border-orange-100">
        We want you to be 100% satisfied with every purchase. If you're not happy, we're not happy. Here's everything you
        need to know about our return and refund process.
      </p>

      <Section title="1. Return Eligibility">
        <p>You may return most items within <strong>7 days</strong> of delivery if:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>The item is unused, unopened, and in its original packaging</li>
          <li>The item is damaged, defective, or not as described</li>
          <li>You received the wrong product</li>
        </ul>
        <p className="mt-2 font-medium text-gray-700">Non-returnable items include:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Opened food and consumable products (for hygiene and safety reasons)</li>
          <li>Personalized or custom-made items</li>
          <li>Products marked "Final Sale" at the time of purchase</li>
        </ul>
      </Section>

      <Section title="2. How to Initiate a Return">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Email us at <strong>returns@snackriti.com</strong> within 7 days of delivery with your order ID and a photo of the item</li>
          <li>Our team will review your request within 24–48 hours and provide a return authorization</li>
          <li>Pack the item securely and ship it using a traceable method. We'll provide a prepaid label for defective/wrong items.</li>
          <li>Once received and inspected, your refund or replacement will be processed</li>
        </ol>
      </Section>

      <Section title="3. Refund Process">
        <p>Once your return is approved and the item is received:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Refunds are processed within <strong>5–7 business days</strong></li>
          <li>The refund will be credited to your original payment method (UPI, card, bank account)</li>
          <li>For Cash on Delivery orders, refunds are credited to your bank account or Snackriti wallet</li>
        </ul>
      </Section>

      <Section title="4. Damaged or Defective Products">
        <p>
          If you receive a damaged or defective product, please contact us within <strong>48 hours</strong> of delivery with clear photos.
          We will arrange a free replacement or full refund — your choice. No return shipping needed for our fault.
        </p>
      </Section>

      <Section title="5. Cancellations">
        <p>
          Orders can be cancelled within <strong>2 hours</strong> of placement by contacting our support team. Once the order has been
          dispatched, cancellations are not possible; however, you may initiate a return after delivery.
        </p>
      </Section>

      <Section title="6. Exceptions & Special Cases">
        <p>
          In rare cases (natural disasters, pandemic-related disruptions, etc.), we may modify our return window or process.
          We'll always communicate this clearly and work to find a fair solution for our customers.
        </p>
      </Section>

      <div className="mt-12 p-5 bg-gray-50 rounded-2xl text-center">
        <p className="text-sm text-gray-500">
          Need help with a return? Email{" "}
          <a href="mailto:returns@snackriti.com" className="text-orange-500 font-medium hover:underline">
            returns@snackriti.com
          </a>{" "}
          or call <strong>+91 98765 43210</strong>
        </p>
      </div>
    </div>
  </div>
)

export default RefundPolicy
