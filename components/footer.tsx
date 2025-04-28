import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-fortum-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://facebook.com" className="hover:text-fortum-teal">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://instagram.com" className="hover:text-fortum-teal">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-fortum-teal">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:contact@fortumjunior.com" className="hover:text-fortum-teal">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
          <Link href="tel:+21655588192" className="hover:text-fortum-teal">
            <span className="sr-only">Phone</span>
            <Phone className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src="/images/logo.png"
              alt="Fortum Junior Entreprise Logo"
              width={120}
              height={48}
              className="h-auto w-auto object-contain object-center max-h-10 bg-white p-2 rounded-md"
            />
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-gray-300 md:text-left">
            &copy; {new Date().getFullYear()} Fortum Junior Entreprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
