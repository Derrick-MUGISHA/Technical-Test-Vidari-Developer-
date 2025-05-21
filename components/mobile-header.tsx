"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NotificationDropdown } from "@/components/notification-dropdown"

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Vidaripay" className="h-8" />
        </Link>
        <div className="flex items-center space-x-2">
          <NotificationDropdown />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 py-2" onClick={() => setIsMenuOpen(false)}>
              Airtime
            </Link>
            <Link
              href="/gift-cards"
              className="text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gift Cards
            </Link>
            <Link
              href="/support"
              className="text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-center bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
