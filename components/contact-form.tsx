"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Phone, Mail} from "lucide-react"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Inter } from "next/font/google"
import ButtonZen from "./style/buttonZen"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  console.log(isSubmitting)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-center">
      {/* Contact Information */}
      <div className="w-full md:w-1/2 space-y-8">
        <ContactInfoItem
          icon={<Clock className="h-6 w-6 text-white" />}
          title="Official Hours"
          description="You can connect with us in between 10 am to 5 pm."
        />

        <ContactInfoItem
          icon={<Phone className="h-6 w-6 text-white" />}
          title="Talk to us"
          description="You can call to us at (+91) 1234-567-890. Monday to Saturday from 10 am to 5pm."
        />

        <ContactInfoItem
          icon={<Mail className="h-6 w-6 text-white" />}
          title="Email Us"
          description="Drop us an email at zenqor@support.com and you'll receive a reply within 24 hours."
        />
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2">
        <div className="bg-[#1a1a1a] p-8 rounded-[16px] border border-[#FDF7FFCC] relative">
          <h2 className="text-[23.04px] font-medium text-white">Enquiry Now</h2>
          <p className="text-[16px] font-normal text-[#8B888C] mb-[40px] ">We’ll get back to you soon</p>

          {submitted ? (
            <div className="text-green-400 py-4 text-center">Thank you! Your message has been sent successfully.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <p className={` text-[16px] text-[#FDF7FF] font-light ${inter.className}`}>First Name *</p>
                    <Input
                    type="text"
                    name="firstName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-[#69656E80]/50 border-0 text-white placeholder:text-gray-400"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className={` text-[16px] text-[#FDF7FF] font-light ${inter.className}`}>Last Name *</p>
                    <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-[#69656E80]/50 border-0 text-white placeholder:text-gray-400"
                    />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className={` text-[16px] text-[#FDF7FF] font-light ${inter.className}`}>Email *</p>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#69656E80]/50 border-0 text-white w-full placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className={` text-[16px] text-[#FDF7FF] font-light ${inter.className}`}>Subject *</p>
                <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[#69656E80]/50 border-0 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className={` text-[16px] text-[#FDF7FF] font-light ${inter.className}`}>Messsage *</p>
                <Textarea
                    name="message"
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-[#69656E80]/50 border-0 text-white placeholder:text-gray-400 min-h-[150px]"
                />
              </div>

              <ButtonZen
                // type=""
                // disabled={isSubmitting}
                className="transition-all ease-in-out font-extralight h-[40px] duration-300 mt-6 sm:mt-8 md:mt-10 w-full"
              >
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
  description: string
}

function ContactInfoItem({ icon, title, description }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  )
}

