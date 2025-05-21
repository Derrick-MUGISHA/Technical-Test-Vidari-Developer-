import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, CreditCard, HelpCircle, User } from "lucide-react"
import { NotificationDropdown } from "@/components/notification-dropdown"

export function DesktopHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            {/* Logo with improved visibility */}
            <img 
              src="/logo-transparent.png" 
              alt="Vidaripay" 
              className="h-16 w-auto"  // Slightly reduced height for better proportion
              style={{ minWidth: '100px' }} // Ensure logo never gets too small
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-[#41BC3F] transition-colors group"
            >
              <Phone className="h-4 w-4 mr-2 group-hover:text-[#D86411] transition-colors" />
              <span>Airtime</span>
            </Link>
            <Link
              href="/gift-cards"
              className="flex items-center text-gray-600 hover:text-[#41BC3F] transition-colors group"
            >
              <CreditCard className="h-4 w-4 mr-2 group-hover:text-[#D86411] transition-colors" />
              <span>Gift Cards</span>
            </Link>
            <Link 
              href="/support" 
              className="flex items-center text-gray-600 hover:text-[#41BC3F] transition-colors group"
            >
              <HelpCircle className="h-4 w-4 mr-2 group-hover:text-[#D86411] transition-colors" />
              <span>Support</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <NotificationDropdown />
          <Link href="/signin">
            <Button variant="ghost" className="hidden md:flex items-center hover:bg-[#e6f4ea]">
              <User className="h-4 w-4 mr-2 text-[#41BC3F]" />
              <span className="text-[#41BC3F]">Sign In</span>
            </Button>
          </Link>
          <Link href="/get-started">
            <Button className="bg-[#41BC3F] hover:bg-[#3aa83a] text-white shadow-md hover:shadow-lg transition-all">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}