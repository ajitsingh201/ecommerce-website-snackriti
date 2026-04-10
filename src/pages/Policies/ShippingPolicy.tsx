const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-orange-100">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
  </section>
)

const ShippingPolicy = () => (
  <div>
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-14 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">Shipping Policy</h1>
      <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
    </div>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { emoji: "🚚", title: "Free Shipping", desc: "On orders above ₹499" },
          { emoji: "⚡", title: "Express Delivery", desc: "1–2 days in metro cities" },
          { emoji: "🌍", title: "Pan-India", desc: "We ship to 20,000+ pincodes" },
        ].map(card => (
          <div key={card.title} className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-100">
            <div className="text-3xl mb-2">{card.emoji}</div>
            <h3 className="font-bold text-gray-800 text-sm">{card.title}</h3>
            <p className="text-gray-500 text-xs mt-1">{card.desc}</p>
          </div>
        ))}
      </div>

      <Section title="1. Shipping Charges">
        <p>Our shipping fee structure is straightforward:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr className="bg-orange-50 text-gray-700">
                <th className="text-left px-4 py-3 rounded-tl-xl border border-gray-200">Order Value</th>
                <th className="text-left px-4 py-3 border-t border-b border-gray-200">Delivery Type</th>
                <th className="text-left px-4 py-3 rounded-tr-xl border border-gray-200">Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-600">Below ₹499</td>
                <td className="px-4 py-3 text-gray-600">Standard</td>
                <td className="px-4 py-3 font-medium text-gray-800">₹49</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-600">₹499 and above</td>
                <td className="px-4 py-3 text-gray-600">Standard</td>
                <td className="px-4 py-3 font-semibold text-green-600">FREE</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-600">Any amount</td>
                <td className="px-4 py-3 text-gray-600">Express (select cities)</td>
                <td className="px-4 py-3 font-medium text-gray-800">₹99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="2. Estimated Delivery Times">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Metro cities</strong> (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata): 1–3 business days</li>
          <li><strong>Tier 2 cities</strong>: 3–5 business days</li>
          <li><strong>Remote areas and Tier 3 cities</strong>: 5–8 business days</li>
        </ul>
        <p>These are estimated times and do not include order processing time (usually same day or next business day).</p>
      </Section>

      <Section title="3. Order Processing">
        <p>
          Orders placed before <strong>12:00 PM IST</strong> on business days (Mon–Sat) are typically dispatched the same day.
          Orders placed after 12:00 PM or on Sundays and public holidays will be dispatched the next business day.
        </p>
      </Section>

      <Section title="4. Order Tracking">
        <p>
          Once your order is dispatched, you'll receive a shipping confirmation email with your tracking number and a link
          to track your package in real time. You can also track your order from your account dashboard.
        </p>
      </Section>

      <Section title="5. Failed Deliveries & Returns to Origin">
        <p>
          If a delivery attempt fails (wrong address, recipient unavailable, etc.), our courier partner will make 2 more
          attempts. If all attempts fail, the package will be returned to us. A re-delivery charge of ₹49 will apply.
          Please ensure your address and phone number are accurate at the time of ordering.
        </p>
      </Section>

      <Section title="6. Damaged in Transit">
        <p>
          In the rare event your order arrives damaged, please document it with photos/video upon opening and contact us
          within 48 hours. We'll arrange a free replacement or full refund, no questions asked.
        </p>
      </Section>

      <div className="mt-12 p-5 bg-gray-50 rounded-2xl text-center">
        <p className="text-sm text-gray-500">
          Questions about your shipment? Email{" "}
          <a href="mailto:support@snackriti.com" className="text-orange-500 font-medium hover:underline">
            support@snackriti.com
          </a>{" "}
          or call <strong>+91 98765 43210</strong>
        </p>
      </div>
    </div>
  </div>
)

export default ShippingPolicy
