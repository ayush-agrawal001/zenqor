"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Inter } from "next/font/google"
import { useSmoothScroller } from "@/components/smoothScrollerContext"

const inter = Inter({ subsets: ["latin"] })

const formSchema = z.object({
  subjectType: z.string({
    required_error: "Please select a subject type.",
  }),
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and policy.",
  }),
})

export default function ContactFormDialog() {
  const lenis = useSmoothScroller()
  const [isOpen, setIsOpen] = useState(false)
  
  // Stop Lenis when dialog opens, re-enable when closed
  useEffect(() => {
    if (isOpen && lenis) {
      lenis.stop()
    } else if (!isOpen && lenis) {
      lenis.start()
    }
  }, [isOpen, lenis])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`relative glow-effect
                glow-purple bg-gradient-to-b from-[#A15BE4] to-[#000EA3] hidden w-[112ppx] h-[36px] 
                font-normal text-[#E6E1E8] md:flex justify-center transition-all ease-in-out duration-300 ${inter.className} `}>
            Get started
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] z-50 max-w-[90vw] p-0 gap-0 rounded-lg border-none overflow-hidden">
        <div className="h-[90vh] max-h-[90vh] overflow-y-auto" data-lenis-prevent>
          <ContactForm setIsOpen={setIsOpen} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ContactForm({ setIsOpen } : { setIsOpen : (isOpen : boolean) => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
      termsAccepted: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(values)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto p-6 rounded-lg bg-black/80 border border-purple-500/20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-gray-300 mb-6">Your message has been sent. We&apos;ll get back to you soon.</p>
        <Button
          onClick={() => {
            form.reset()
            setIsSubmitted(false)
            setIsOpen(false)
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
        <div className="h-full w-[80vw] md:w-[45vw] lg:w-[40vw] mt-28 flex flex-col gap-[96px] justify-center mx-auto pb-12">
        <div className="w-[80vw] md:w-[40vw] mt-16 md:mt-24 lg:mt-32 flex flex-col justify-center items-center relative">
            <div className="absolute top-16 -z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-24 bg-gradient-to-br from-[#A15BE4] to-[#000EA3] rounded-full opacity-100 blur-3xl"></div>
            <h1 className="text-2xl md:text-[33.81px] lg:text-[33.18px] font-semibold tracking-tight leading-tight text-center">
            Connect with the Zenqor Team - Let&apos;s Innovate Together!
            </h1>
            <p className="mx-auto mt-4 md:mt-6 w-[60vw] text-center md:max-w-[40vw] lg:max-w-[582px] text-sm md:text-base font-thin text-muted-foreground px-4 md:px-0"> 
            Fill out the form to get in touch
            </p>
        </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="subjectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Select the Industry Type *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-black/50 border-gray-700 text-gray-300">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Company name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your company"
                    {...field}
                    className="bg-black/50 border-gray-700 text-gray-300 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Full name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="bg-black/50 border-gray-700 text-gray-300 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Phone number *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your phone number"
                    {...field}
                    className="bg-black/50 border-gray-700 text-gray-300 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Email *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your email"
                    {...field}
                    className="bg-black/50 border-gray-700 text-gray-300 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">How can we help? Share your insights</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    className="bg-black/50 border-gray-700 text-gray-300 placeholder:text-gray-500 min-h-[100px]"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-gray-400">
                    I agree with the{" "}
                    <a href="#" className="text-purple-400 hover:underline">
                      Terms & Policy
                    </a>
                  </FormLabel>
                  <FormMessage className="text-red-400" />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`relative glow-effect 
                glow-purple bg-gradient-to-b from-[#A15BE4] to-[#000EA3] hidden w-full h-[36px] 
                font-normal text-[#E6E1E8] md:flex justify-center transition-all ease-in-out duration-300 ${inter.className} `}
          >
            {isSubmitting ? "Submitting..." : "Let's Connect"}
          </Button>
        </form>
      </Form>
        </div>
  )
}