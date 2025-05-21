import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, CreditCard, HelpCircle, User } from "lucide-react"
import { NotificationDropdown } from "@/components/notification-dropdown"

export function DesktopHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Vidaripay" className="h-10" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span>Airtime</span>
            </Link>
            <Link
              href="/gift-cards"
              className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              <span>Gift Cards</span>
            </Link>
            <Link href="/support" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <HelpCircle className="h-4 w-4 mr-2" />
              <span>Support</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <NotificationDropdown />
          <Link href="/signin">
            <Button variant="ghost" className="hidden md:flex items-center">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </Link>
          <Link href="/get-started">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
