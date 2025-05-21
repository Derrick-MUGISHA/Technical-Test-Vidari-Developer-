import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AirtimeForm from "@/components/airtime-form"
import GiftCardForm from "@/components/gift-card-form"
import OneOffPaymentForm from "@/components/one-off-payment-form"
import { MobileHeader } from "@/components/mobile-header"
import { DesktopHeader } from "@/components/desktop-header"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
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
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Pay Your Bills</h1>
          <p className="text-gray-600 text-center mb-8">Quick and secure payments for airtime, gift cards, and more</p>

          <Tabs defaultValue="airtime" className="w-full">
            <TabsList className="flex md:grid md:grid-cols-3 overflow-x-auto gap-2 mb-6 md:mb-8">
              <TabsTrigger 
                value="airtime" 
                className="flex-1 whitespace-nowrap min-w-[120px] md:min-w-0"
              >
                Airtime
              </TabsTrigger>
              <TabsTrigger 
                value="giftcards" 
                className="flex-1 whitespace-nowrap min-w-[120px] md:min-w-0"
              >
                Gift Cards
              </TabsTrigger>
              <TabsTrigger 
                value="oneoff" 
                className="flex-1 whitespace-nowrap min-w-[120px] md:min-w-0"
              >
                One-off Payment
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