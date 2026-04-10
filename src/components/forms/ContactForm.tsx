import { useState } from "react"
import { useForm } from "react-hook-form"
import { FiSend, FiCheckCircle } from "react-icons/fi"
import Input from "../ui/Input"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    // Plug in EmailJS or API here
    console.log("Contact form:", data)
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FiCheckCircle size={56} className="text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-orange-500 hover:underline text-sm font-medium"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          id="name"
          placeholder="John Doe"
          error={errors.name}
          {...register("name", { required: "Name is required" })}
        />
        <Input
          label="Email Address"
          id="email"
          type="email"
          placeholder="you@example.com"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
        />
      </div>

      <Input
        label="Subject"
        id="subject"
        placeholder="How can we help you?"
        error={errors.subject}
        {...register("subject", { required: "Subject is required" })}
      />

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
        <textarea
          rows={5}
          placeholder="Write your message here..."
          className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-800
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
            placeholder:text-gray-400 resize-none transition-all
            ${errors.message ? "border-red-400" : "border-gray-200"}`}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 20, message: "Please write at least 20 characters" },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold
          flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md
          disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <FiSend size={16} />
        )}
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}

export default ContactForm
