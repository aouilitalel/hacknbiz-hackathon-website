"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const contacts = [
    {
      name: "Rayen Bouallegue",
      title: "Commercial Development Manager",
      phone: "+216 95 273 805",
      email: "boualleguerayen@yahoo.com",
    },
    {
      name: "Slim Chouaib",
      title: "President",
      phone: "+216 55 588 192",
      email: "slimchouaib2003@gmail.com",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-fortum-blue mb-4">Contact Us</h1>
        <div className="w-20 h-1 bg-fortum-teal mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          Have questions about Hack&apos;n&apos;Biz 1.0? Get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-fortum-blue mb-6">Get In Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sponsorship Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full bg-fortum-blue hover:bg-fortum-teal" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitSuccess && (
              <div className="p-4 bg-green-100 text-green-700 rounded-md">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-fortum-blue mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-fortum-teal mr-4 mt-1" />
              <div>
                <h3 className="font-medium">Event Location</h3>
                <p className="text-gray-600">Tekup University, Tunisia</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-fortum-teal mr-4 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">contact@fortumjunior.com</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-xl font-bold text-fortum-blue mb-4">Team Contacts</h3>

              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-fortum-blue">{contact.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{contact.title}</p>
                    <div className="flex items-center mb-1">
                      <Phone className="h-4 w-4 text-fortum-teal mr-2" />
                      <a href={`tel:${contact.phone}`} className="text-gray-600 hover:text-fortum-teal">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-fortum-teal mr-2" />
                      <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-fortum-teal">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
