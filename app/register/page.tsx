"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    year: "",
    teamName: "",
    teamMembers: "",
    skills: "",
    expectations: "",
    dietaryRestrictions: "",
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (submitSuccess) {
    return (
      <div className="container mx-auto px-6 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-fortum-blue">Registration Successful!</CardTitle>
            <CardDescription>Thank you for registering for Hack&apos;n&apos;Biz 1.0</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Your registration has been received. We&apos;re excited to have you join us for this event!</p>
            <p>You will receive a confirmation email shortly with more details about the event.</p>
            <p>If you have any questions, please don&apos;t hesitate to contact us.</p>
            <Button className="bg-fortum-blue hover:bg-fortum-teal mt-4" onClick={() => (window.location.href = "/")}>
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-fortum-blue mb-4">Register for Hack&apos;n&apos;Biz 1.0</h1>
        <div className="w-20 h-1 bg-fortum-teal mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          Join us for an exciting hackathon experience at Tekup University on May 10-11, 2023.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-fortum-blue">Participant Registration</CardTitle>
          <CardDescription>Please fill out the form below to register for the event.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
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
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+216 XX XXX XXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="university">University/Institution</Label>
                <Input
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  placeholder="Tekup University"
                />
              </div>

              <div>
                <Label htmlFor="major">Field of Study/Major</Label>
                <Input
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  placeholder="Computer Science"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="year">Year of Study</Label>
              <Select onValueChange={(value) => handleSelectChange("year", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your year of study" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Year</SelectItem>
                  <SelectItem value="2">2nd Year</SelectItem>
                  <SelectItem value="3">3rd Year</SelectItem>
                  <SelectItem value="4">4th Year</SelectItem>
                  <SelectItem value="5">5th Year</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="teamName">Team Name (Optional)</Label>
              <Input
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                placeholder="If you already have a team"
              />
            </div>

            <div>
              <Label htmlFor="teamMembers">Team Members (Optional)</Label>
              <Textarea
                id="teamMembers"
                name="teamMembers"
                value={formData.teamMembers}
                onChange={handleChange}
                placeholder="List the names and emails of your team members, if any"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="skills">Skills & Expertise</Label>
              <Textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                placeholder="Describe your technical skills and areas of expertise"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="expectations">Expectations from the Event</Label>
              <Textarea
                id="expectations"
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                required
                placeholder="What do you hope to learn or achieve at this hackathon?"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="dietaryRestrictions">Dietary Restrictions (Optional)</Label>
              <Input
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Any dietary restrictions or preferences"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="agreeTerms" checked={formData.agreeTerms} onCheckedChange={handleCheckboxChange} required />
              <Label htmlFor="agreeTerms" className="text-sm">
                I agree to the event terms and conditions, and I consent to the processing of my personal data for the
                purpose of this event.
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-fortum-blue hover:bg-fortum-teal"
              disabled={isSubmitting || !formData.agreeTerms}
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
