import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import ContactForm from "../../components/forms/ContactForm"

const ContactInfo = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-600">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-gray-700 font-medium text-sm">{value}</p>
    </div>
  </div>
)

const ContactPage = () => (
  <div>
    {/* Hero */}
    <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-white/85 text-lg">
          Have a question, feedback, or just want to say hi? We'd love to hear from you.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left – Contact info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h2>
          <p className="text-gray-500 mb-8">
            We're here to help! Reach out via any of the channels below and we'll respond within 24 hours.
          </p>

          <div className="space-y-6">
            <ContactInfo
              icon={<FiMail size={20} />}
              label="Email"
              value="support@snackriti.com"
            />
            <ContactInfo
              icon={<FiPhone size={20} />}
              label="Phone"
              value="+91 98765 43210"
            />
            <ContactInfo
              icon={<FaWhatsapp size={20} />}
              label="WhatsApp"
              value="+91 98765 43210 (Mon–Sat, 10am–7pm)"
            />
            <ContactInfo
              icon={<FiMapPin size={20} />}
              label="Address"
              value="Snackriti HQ, MG Road, Bengaluru, Karnataka – 560001"
            />
            <ContactInfo
              icon={<FiClock size={20} />}
              label="Support Hours"
              value="Monday to Saturday, 10:00 AM – 7:00 PM IST"
            />
          </div>

          {/* Map placeholder */}
          <div className="mt-10 rounded-2xl overflow-hidden h-52 bg-gray-100 border border-gray-200 flex items-center justify-center">
            <p className="text-gray-400 text-sm">📍 Map integration coming soon</p>
          </div>
        </div>

        {/* Right – Contact form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
          <p className="text-gray-500 mb-8">
            Fill out the form below and our team will get back to you promptly.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactPage
