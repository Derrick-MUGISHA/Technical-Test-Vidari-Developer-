import { MobileHeader } from "@/components/mobile-header"
import { DesktopHeader } from "@/components/desktop-header"
import GiftCardForm from "@/components/gift-card-form"
import { Toaster } from "@/components/ui/toaster"

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Gift Cards</h1>
          <p className="text-gray-600 text-center mb-8">Purchase gift cards for yourself or send as a gift</p>

          <GiftCardForm />
        </div>
      </div>
      <Toaster />
    </main>
  )
}
