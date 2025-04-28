import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SponsorsPage() {
  const sponsorPackages = [
    {
      name: "Starter",
      price: "300 TND",
      features: [
        "Logo on the event website",
        "Sharing a digitized poster including the company's logo and description",
        "Logo on communication materials",
      ],
      color: "bg-gray-100",
    },
    {
      name: "Advanced",
      price: "600 TND",
      features: [
        "All Starter benefits",
        "Sharing the database (Mailing-List) of event participants with the company",
        "Insertion of the company's logo on Invitations, Newsletters, and the After-Movie of the event",
      ],
      color: "bg-fortum-teal bg-opacity-10",
      highlight: true,
    },
    {
      name: "Premium",
      price: "1000 TND",
      features: [
        "All Advanced benefits",
        "Advertising spot during the panel",
        "Logo on the organizing team badges",
        "Prizes specifically named after the sponsor",
      ],
      color: "bg-fortum-blue bg-opacity-10",
    },
  ]

  const sponsors = {
    premium: [1, 2],
    advanced: [3, 4, 5],
    starter: [6, 7, 8, 9],
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-fortum-blue mb-4">Our Sponsors</h1>
        <div className="w-20 h-1 bg-fortum-teal mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          Hack&apos;n&apos;Biz 1.0 is made possible by our amazing sponsors. We are grateful for their support.
        </p>
      </div>

      {/* Current Sponsors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-fortum-blue mb-8 text-center">Premium Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center mb-12">
          {sponsors.premium.map((i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-40 w-full">
              <Image
                src={`/placeholder.svg?height=120&width=240`}
                alt={`Premium Sponsor ${i}`}
                width={240}
                height={120}
                className="max-h-28 w-auto"
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-fortum-blue mb-8 text-center">Advanced Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center mb-12">
          {sponsors.advanced.map((i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-lg flex items-center justify-center h-32 w-full">
              <Image
                src={`/placeholder.svg?height=100&width=200`}
                alt={`Advanced Sponsor ${i}`}
                width={200}
                height={100}
                className="max-h-24 w-auto"
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-fortum-blue mb-8 text-center">Starter Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
          {sponsors.starter.map((i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24 w-full">
              <Image
                src={`/placeholder.svg?height=80&width=160`}
                alt={`Starter Sponsor ${i}`}
                width={160}
                height={80}
                className="max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fortum-blue mb-4">Sponsorship Packages</h2>
          <div className="w-20 h-1 bg-fortum-teal mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Interested in sponsoring Hack&apos;n&apos;Biz? Choose from our sponsorship packages below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sponsorPackages.map((pkg) => (
            <Card key={pkg.name} className={`${pkg.color} ${pkg.highlight ? "border-fortum-teal" : ""}`}>
              <CardHeader>
                <CardTitle className="text-fortum-blue text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-fortum-teal flex-shrink-0 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-fortum-blue hover:bg-fortum-teal">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-6 text-gray-600">
            For custom sponsorship packages or more information, please contact our team.
          </p>
          <Button className="bg-fortum-blue hover:bg-fortum-teal">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
