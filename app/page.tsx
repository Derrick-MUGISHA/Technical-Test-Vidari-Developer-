import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AirtimeForm from "@/components/airtime-form";
import GiftCardForm from "@/components/gift-card-form";
import OneOffPaymentForm from "@/components/one-off-payment-form";
import { MobileHeader } from "@/components/mobile-header";
import { DesktopHeader } from "@/components/desktop-header";
import { Toaster } from "@/components/ui/toaster";

// Define global styles or theme constants
const theme = {
  primary: "#00B348", // Green
  secondary: "#FF9500", // Orange
  background: "#FFFFFF", // White
  text: "#333333", // Dark gray for text
  border: "#E0E0E0", // Light gray for borders
};

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-${theme.background} to-white font-sans`}
    >
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="hidden md:block">
          <DesktopHeader />
        </div>
        <div className="md:hidden">
          <MobileHeader />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div
          className={`bg-white rounded-xl shadow-md p-4 md:p-8 ${
            theme.border
          } border border-gray-200`}
        >
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-${theme.text}">
            Pay Your Bills
          </h1>
          <p className="text-gray-600 text-center mb-8">Quick and secure payments for airtime, gift cards, and more</p>

          {/* Tabs Component */}
          <Tabs defaultValue="airtime" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger
                value="airtime"
                className={`text-${theme.primary} hover:bg-${theme.secondary} hover:text-white transition-all duration-300 ease-in-out`}
              >
                Airtime
              </TabsTrigger>
              <TabsTrigger
                value="giftcards"
                className={`text-${theme.primary} hover:bg-${theme.secondary} hover:text-white transition-all duration-300 ease-in-out`}
              >
                Gift Cards
              </TabsTrigger>
              <TabsTrigger
                value="oneoff"
                className={`text-${theme.primary} hover:bg-${theme.secondary} hover:text-white transition-all duration-300 ease-in-out`}
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

      {/* Toaster for notifications */}
      <Toaster />
    </main>
  );
}