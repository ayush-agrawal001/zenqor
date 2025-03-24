"use client"

import React from "react"
import { useRef, useState } from "react"
import { Clock, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Inter } from "next/font/google"
import ButtonZen from "./style/buttonZen"
import Link from "next/link"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

interface FormInputProps {
  label: string
  name: string
  type: "text" | "email" | "textarea"
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
}

const FormInput = ({ label, name, type, placeholder, value, onChange, required }: FormInputProps) => {
  const commonClasses = "bg-transparent border border-[#6A686B] text-white placeholder:text-gray-400"

  return (
    <div className="flex flex-col gap-2">
      <p className={`text-sm sm:text-[16px] text-[#FDF7FF] font-light ${inter.className}`}>{label} *</p>
      {type === "textarea" ? (
        <Textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${commonClasses} min-h-[120px] sm:min-h-[150px]`}
        />
      ) : (
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={commonClasses}
        />
      )}
    </div>
  )
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  // const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  //console.log(isSubmitting);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    //console.log("Form submitted:", formData)
    // setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-[5vw] items-start justify-center">
      <div className="w-full md:w-1/2 space-y-12 sm:space-y-16 md:space-y-[84px] py-4">
        <ContactInfoItem
          id={1}
          icon={<Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
          className=""
          title="Official Hours"
          description={
            <>
              You can connect with us in between <br className="hidden sm:block" />{" "}
              <span className="text-[#FDF7FF]">10 am to 5 pm.</span>
            </>
          }
        />
        <ContactInfoItem
        id={2}
          icon={<Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
          title="Talk to us"
          className=""
          description={
            <>
              You can call to us at <span className="text-[#FDF7FF]">(+91) 1234-567-890.</span>{" "}
              <br className="hidden sm:block" /> Monday to Saturday from 10 am to 5pm.
            </>
          }
        />
        <ContactInfoItem
        id={3}
          icon={<Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
          title="Email Us"
          className=""
          description={
            <>
              Drop us an email at <span className="text-[#FDF7FF]">zenqor@support.com</span>{" "}
              <br className="hidden sm:block" /> and you&apos;ll receive a reply within 24 hours.
            </>
          }
        />
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="bg-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-[16px] border border-[#FDF7FFCC] relative motion-translate-x-in-[0%] motion-translate-y-in-[80%] duration-700">
          <h2 className="text-xl sm:text-[23.04px] font-semibold text-white">Enquiry Now</h2>
          <p
            className={`text-sm sm:text-[16px] font-normal text-[#8B888C] mb-6 sm:mb-8 md:mb-[40px] ${inter.className}`}
          >
            We&apos;ll get back to you soon
          </p>

          {submitted ? (
            <div className="text-green-400 py-4 text-center">Thank you! Your message has been sent successfully.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Message"
                name="message"
                type="textarea"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <ButtonZen className="transition-all ease-in-out font-extralight h-[40px] duration-300 mt-6 sm:mt-8 md:mt-10 w-full">
                <Link href="/technology">Send Message</Link>
              </ButtonZen>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

interface ContactInfoItemProps {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  className?: string
  id : number
}

const ContactInfoItem = React.forwardRef<HTMLDivElement, ContactInfoItemProps>(
  ({ icon, title, description, className, id }) => {
    const ref = useRef(null)
    // const isInView = useInView(ref, {
    //   amount: 0.1,
    //   once: true,
    // })

    const initialX = 20 + (10 * id)
    //console.log(initialX)

    return (
      <div ref={ref} className="w-full h-full">
        <motion.div
          initial={{ x: `-${initialX}%`, y : 0, opacity : 0 }}
          whileInView={{ x : 0, y : 0, opacity : 1 }}
          viewport={{amount : 0, once : true}}
          transition={{ duration: 0.5, ease : "easeInOut" }}
          className={`flex items-start gap-3 sm:gap-4 ${(title === `Email Us` || title === `Official Hours` || title === `Talk to us`) && className}`}
        >
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-900/50 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-base sm:text-lg md:text-[19.2px] font-normal text-white">{title}</h3>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm md:text-[13.33px] font-normal">{description}</p>
          </div>
        </motion.div>
      </div>
    )
  },
)

ContactInfoItem.displayName = "ContactInfoItem"

