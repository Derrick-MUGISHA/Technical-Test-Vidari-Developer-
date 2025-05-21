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
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          {/* Enhanced logo with proper sizing */}
          <img 
            src="/logo-transparent.png" 
            alt="Vidaripay" 
            className="h-12 w-auto min-w-[120px]" 
          />
        </Link>
        <div className="flex items-center space-x-2">
          <NotificationDropdown className="text-[#41BC3F] hover:bg-[#e6f4ea]" />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
            className="text-[#41BC3F] hover:bg-[#e6f4ea]"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#D86411]" />
            ) : (
              <Menu className="h-6 w-6 text-[#41BC3F]" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#e6f4ea] z-50 border-b-2 border-[#41BC3F] shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-[#41BC3F] hover:underline decoration-[#D86411] py-2 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Airtime
            </Link>
            <Link
              href="/gift-cards"
              className="text-gray-800 hover:text-[#41BC3F] hover:underline decoration-[#D86411] py-2 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Gift Cards
            </Link>
            <Link
              href="/support"
              className="text-gray-800 hover:text-[#41BC3F] hover:underline decoration-[#D86411] py-2 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="pt-4 flex flex-col space-y-3 border-t border-[#41BC3F]">
              <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full justify-center border-[#41BC3F] text-[#41BC3F] hover:bg-[#e6f4ea] hover:border-[#D86411]"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="w-full justify-center bg-[#41BC3F] hover:bg-[#3aa83a] text-white shadow-md hover:shadow-lg transition-all"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}