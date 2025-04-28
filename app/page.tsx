import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ChevronRight, Users, Trophy, Code, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CountdownTimer } from "@/components/countdown-timer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-fortum-blue via-fortum-blue to-fortum-teal py-20 md:py-28">
        {/* Abstract shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white"></div>
          <div className="absolute top-60 -left-20 h-40 w-40 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-60 h-60 w-60 rounded-full bg-white"></div>
          <div className="absolute -bottom-40 left-40 h-80 w-80 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-none px-3 py-1">
                May 10-11, 2023 • Tekup University
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block">Hack&apos;n&apos;Biz</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">1.0</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Where innovation meets business. Join the premier hackathon experience organized by Fortum Junior
                Entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-white text-fortum-blue hover:bg-blue-50 font-medium">
                  <Link href="/register" className="flex items-center">
                    Register Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-fortum-blue bg-white text-fortum-blue hover:bg-fortum-blue hover:text-white hover:border-fortum-blue transition-colors duration-300"
                >
                  <Link href="/agenda">View Schedule</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm rounded-2xl transform -rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Hackathon Illustration"
                    width={300}
                    height={300}
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-fortum-blue">Event Starts In</h2>
            <p className="text-gray-600 mt-2">
              Mark your calendar for May 10-11, {(() => {
                const now = new Date()
                const currentYear = now.getFullYear()
                const targetDate = new Date(`${currentYear}-05-10T09:00:00`)

                // If May 10 of this year has already passed, set to next year
                if (now > targetDate) {
                  return currentYear + 1
                }
                return currentYear
              })()}
            </p>
          </div>
          <CountdownTimer
            targetDate={(() => {
              const now = new Date()
              const currentYear = now.getFullYear()
              const targetDate = new Date(`${currentYear}-05-10T09:00:00`)

              // If May 10 of this year has already passed, set to next year
              if (now > targetDate) {
                targetDate.setFullYear(currentYear + 1)
              }

              return targetDate
            })()}
          />
        </div>
      </section>

      {/* Countdown & Key Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-fortum-blue rounded-full flex items-center justify-center mr-4 shrink-0">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Event Date</h3>
                <p className="text-gray-600">May 10-11, 2023</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-fortum-blue rounded-full flex items-center justify-center mr-4 shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Tekup University, Tunisia</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-fortum-blue rounded-full flex items-center justify-center mr-4 shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Participants</h3>
                <p className="text-gray-600">100+ Expected Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-fortum-blue/10 text-fortum-blue mb-4">About the Event</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hack&apos;n&apos;Biz 1.0: Innovation Meets Business
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hack&apos;n&apos;Biz 1.0 is an innovative hackathon organized by Fortum Junior Entreprise at Tekup
              University. Our philosophy is centered around bringing together the brightest minds to solve real-world
              problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-fortum-blue to-fortum-teal rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Pushing boundaries and creating new solutions to real-world problems through creative thinking and
                cutting-edge technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-fortum-blue to-fortum-teal rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professionalism</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintaining high standards and delivering excellence in all aspects of the event, from organization to
                execution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-fortum-blue to-fortum-teal rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring the highest quality in every aspect of the hackathon, from mentorship to judging criteria and
                prizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <Badge className="bg-fortum-blue/10 text-fortum-blue mb-4">Event Schedule</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Two Days of Innovation</h2>
              <p className="text-lg text-gray-600">Join us for an action-packed hackathon experience</p>
            </div>
            <Link
              href="/agenda"
              className="mt-4 md:mt-0 text-fortum-blue font-medium hover:text-fortum-teal flex items-center group"
            >
              View Full Schedule
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fortum-blue/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-fortum-teal/5 rounded-full transform -translate-x-12 translate-y-12"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <Badge className="bg-fortum-blue text-white mr-3">Day 1</Badge>
                  <h3 className="text-xl font-bold text-gray-900">May 10</h3>
                </div>

                <ul className="space-y-6">
                  <li className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-fortum-blue flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-fortum-teal mb-1">9:00 AM</span>
                      <span className="block font-medium text-gray-900">Registration & Welcome</span>
                      <p className="text-gray-600 text-sm mt-1">Get your badges and welcome kit</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-fortum-blue flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-fortum-teal mb-1">10:00 AM</span>
                      <span className="block font-medium text-gray-900">Opening Ceremony</span>
                      <p className="text-gray-600 text-sm mt-1">Keynote speeches and event kickoff</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-fortum-blue flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-fortum-teal mb-1">11:00 AM</span>
                      <span className="block font-medium text-gray-900">Hackathon Kickoff</span>
                      <p className="text-gray-600 text-sm mt-1">Teams start working on their projects</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fortum-blue/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-fortum-teal/5 rounded-full transform -translate-x-12 translate-y-12"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <Badge className="bg-fortum-teal text-white mr-3">Day 2</Badge>
                  <h3 className="text-xl font-bold text-gray-900">May 11</h3>
                </div>

                <ul className="space-y-6">
                  <li className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-fortum-teal flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-fortum-blue mb-1">9:00 AM</span>
                      <span className="block font-medium text-gray-900">Continued Hacking</span>
                      <p className="text-gray-600 text-sm mt-1">Teams continue working on their projects</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-fortum-teal flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-fortum-blue mb-1">2:00 PM</span>
                      <span className="block font-medium text-gray-900">Project Submissions</span>
                      <p className="text-gray-600 text-sm mt-1">Final submissions and preparation for presentations</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-fortum-teal flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-fortum-blue mb-1">5:00 PM</span>
                      <span className="block font-medium text-gray-900">Awards Ceremony</span>
                      <p className="text-gray-600 text-sm mt-1">Winners announcement and prize distribution</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-fortum-blue/10 text-fortum-blue mb-4">Our Sponsors</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Powered by Industry Leaders</h2>
            <p className="text-lg text-gray-600">
              Hack&apos;n&apos;Biz 1.0 is made possible by our amazing sponsors who believe in nurturing innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-32 w-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=160`}
                  alt={`Sponsor ${i}`}
                  width={160}
                  height={80}
                  className="max-h-20 w-auto"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-fortum-blue text-fortum-blue hover:bg-fortum-blue/5">
              <Link href="/sponsors" className="flex items-center">
                View All Sponsors
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-fortum-blue/10 text-fortum-blue mb-4">Why Participate?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">An Unforgettable Experience</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hack&apos;n&apos;Biz offers more than just a coding competition. It's an opportunity to learn, network,
                and showcase your skills.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-fortum-blue/10 flex items-center justify-center mr-4 shrink-0">
                    <Trophy className="h-5 w-5 text-fortum-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Amazing Prizes</h3>
                    <p className="text-gray-600">Win cash prizes and opportunities from our sponsors</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-fortum-blue/10 flex items-center justify-center mr-4 shrink-0">
                    <Users className="h-5 w-5 text-fortum-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Networking</h3>
                    <p className="text-gray-600">Connect with industry professionals and like-minded peers</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-fortum-blue/10 flex items-center justify-center mr-4 shrink-0">
                    <Code className="h-5 w-5 text-fortum-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Skill Development</h3>
                    <p className="text-gray-600">Enhance your technical and soft skills through challenges</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-fortum-blue to-fortum-teal opacity-10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-1 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hackathon Experience"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fortum-blue/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-fortum-teal/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-fortum-blue/10 text-fortum-blue mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Past Participants Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Developer",
                quote:
                  "Hack'n'Biz was an incredible experience that pushed my limits and helped me grow as a developer.",
              },
              {
                name: "Ahmed Khalil",
                role: "UI/UX Designer",
                quote:
                  "The mentorship and networking opportunities at this hackathon were invaluable for my career growth.",
              },
              {
                name: "Leila Ben Ali",
                role: "Data Scientist",
                quote:
                  "I formed lasting connections and learned so much in just two days. Can't wait for the next edition!",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H12.5C13.163 10 13.7989 10.2634 14.2678 10.7322C14.7366 11.2011 15 11.837 15 12.5V25C15 26.3261 14.4732 27.5979 13.5355 28.5355C12.5979 29.4732 11.3261 30 10 30H9.375C9.04348 30 8.72554 29.8683 8.49112 29.6339C8.2567 29.3995 8.125 29.0815 8.125 28.75C8.125 28.4185 8.2567 28.1005 8.49112 27.8661C8.72554 27.6317 9.04348 27.5 9.375 27.5H10C10.663 27.5 11.2989 27.2366 11.7678 26.7678C12.2366 26.2989 12.5 25.663 12.5 25V20Z"
                      fill="#0A0A6F"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M27.5 20H22.5C21.837 20 21.2011 19.7366 20.7322 19.2678C20.2634 18.7989 20 18.163 20 17.5V12.5C20 11.837 20.2634 11.2011 20.7322 10.7322C21.2011 10.2634 21.837 10 22.5 10H27.5C28.163 10 28.7989 10.2634 29.2678 10.7322C29.7366 11.2011 30 11.837 30 12.5V25C30 26.3261 29.4732 27.5979 28.5355 28.5355C27.5979 29.4732 26.3261 30 25 30H24.375C24.0435 30 23.7255 29.8683 23.4911 29.6339C23.2567 29.3995 23.125 29.0815 23.125 28.75C23.125 28.4185 23.2567 28.1005 23.4911 27.8661C23.7255 27.6317 24.0435 27.5 24.375 27.5H25C25.663 27.5 26.2989 27.2366 26.7678 26.7678C27.2366 26.2989 27.5 25.663 27.5 25V20Z"
                      fill="#0A0A6F"
                      fillOpacity="0.1"
                    />
                  </svg>
                </div>

                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fortum-blue/10 flex items-center justify-center mr-3">
                    <span className="text-fortum-blue font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-fortum-blue to-fortum-teal text-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Hack&apos;n&apos;Biz 1.0?</h2>
            <p className="text-xl opacity-90 mb-8">
              Don&apos;t miss this opportunity to showcase your skills, network with professionals, and win amazing
              prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-fortum-blue hover:bg-blue-50">
                <Link href="/register" className="flex items-center">
                  Register Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white"></div>
          <div className="absolute top-60 -left-20 h-40 w-40 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-60 h-60 w-60 rounded-full bg-white"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-fortum-blue/10 text-fortum-blue mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about Hack&apos;n&apos;Biz 1.0</p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: "Who can participate in Hack'n'Biz?",
                answer:
                  "Hack'n'Biz is open to students, recent graduates, and young professionals with an interest in technology and innovation.",
              },
              {
                question: "Do I need to have a team to register?",
                answer:
                  "No, you can register individually and form teams during the event, or you can register with your pre-formed team.",
              },
              {
                question: "What should I bring to the hackathon?",
                answer:
                  "Bring your laptop, charger, any hardware you might need for your project, and your student ID if applicable.",
              },
              {
                question: "Will food be provided during the event?",
                answer: "Yes, meals and refreshments will be provided throughout the two-day event.",
              },
              {
                question: "Are there any participation fees?",
                answer: "No, participation is completely free thanks to our generous sponsors.",
              },
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
