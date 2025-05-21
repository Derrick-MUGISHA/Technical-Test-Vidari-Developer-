import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AirtimeForm from "@/components/airtime-form"
import GiftCardForm from "@/components/gift-card-form"
import OneOffPaymentForm from "@/components/one-off-payment-form"
import { MobileHeader } from "@/components/mobile-header"
import { DesktopHeader } from "@/components/desktop-header"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center">
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:p-4 md:p-8 border border-gray-100">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4">Pay Your Bills</h1>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-8">
            Quick and secure payments for airtime, gift cards, and more
          </p>

          <Tabs defaultValue="airtime" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4 sm:mb-8 h-auto min-w-0 w-full">
              <TabsTrigger value="airtime" className="text-xs sm:text-sm py-1.5 px-1 sm:px-2 h-auto">
                Airtime
              </TabsTrigger>
              <TabsTrigger value="giftcards" className="text-xs sm:text-sm py-1.5 px-1 sm:px-2 h-auto">
                Gift Cards
              </TabsTrigger>
              <TabsTrigger value="oneoff" className="text-xs sm:text-sm py-1.5 px-1 sm:px-2 h-auto">
                One-off
              </TabsTrigger>
            </TabsList>
            <TabsContent value="airtime">
              <AirtimeForm />
            </TabsContent>
            <TabsContent value="giftcards">
              <GiftCardForm />
            </TabsContent>
            <TabsContent value="oneoff">
              <OneOffPaymentForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </main>
  )
}
