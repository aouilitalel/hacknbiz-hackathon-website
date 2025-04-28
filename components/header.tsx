"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.agenda"), href: "/agenda" },
    { name: t("nav.sponsors"), href: "/sponsors" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm dark:bg-gray-900 dark:border-b dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hack&apos;n&apos;Biz</span>
            <Image
              src="/images/logo.png"
              alt="Fortum Junior Entreprise Logo"
              width={150}
              height={60}
              className="h-auto w-auto object-contain object-center max-h-12"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-fortum-teal dark:text-gray-200 dark:hover:text-fortum-teal"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <Button className="bg-fortum-blue hover:bg-fortum-teal dark:bg-fortum-teal dark:hover:bg-fortum-blue">
            <Link href="/register">{t("nav.register")}</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-800">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Hack&apos;n&apos;Biz</span>
                <Image
                  src="/images/logo.png"
                  alt="Fortum Junior Entreprise Logo"
                  width={120}
                  height={48}
                  className="h-auto w-auto object-contain object-center max-h-10"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <ThemeToggle />
                      <LanguageToggle />
                    </div>
                  </div>
                  <Button className="w-full bg-fortum-blue hover:bg-fortum-teal dark:bg-fortum-teal dark:hover:bg-fortum-blue">
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav.register")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
