"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Check } from "lucide-react";
import CountrySelector from "@/components/country-selector";
import PaymentMethods from "@/components/payment-methods";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function AirtimeForm() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [amount, setAmount] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Show success toast
      toast({
        title: "Payment Successful!",
        description: `You have successfully purchased airtime worth $${amount} for ${phoneNumber}`,
        variant: "success",
      });

      // Reset form after showing success
      setTimeout(() => {
        setSuccess(false);
        setPhoneNumber("");
        setAmount("");
        setSelectedProvider("");
      }, 3000);
    }, 2000);
  };

  const quickAmounts = [
    { value: "5", label: "$5" },
    { value: "10", label: "$10" },
    { value: "20", label: "$20" },
    { value: "50", label: "$50" },
  ];

  // Telecom providers by country
  const providers = {
    NG: [
      {
        id: "mtn-ng",
        name: "MTN Nigeria",
        logo: "https://techafricanews.com/wp-content/uploads/2024/11/MTN-PR-54.jpg",
      },
      {
        id: "airtel-ng",
        name: "Airtel Nigeria",
        logo: "https://campuscybercafe.s3.amazonaws.com/assets/images/post/2024-10-24/1729725195-airtel-sme-data-api-integration-nigeria.png?",
      },
      {
        id: "glo",
        name: "Glo",
        logo: "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_517,q_auto:best,w_1440/v1/glo/production/cms_pages/12/yjd9wi30t8gwpgvopkdj.png",
      },
      {
        id: "9mobile",
        name: "9Mobile",
        logo: "https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2025/03/9Mobile_Receives_a_Boost_with_LH_Telecoms_Acquisition.jpg?fit=900%2C450&ssl=1",
      },
    ],
    RW: [
      {
        id: "mtn-rw",
        name: "MTN Rwanda",
        logo: "data:image/png;base64,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",
      },
      {
        id: "airtel-rw",
        name: "Airtel Rwanda",
        logo: "data:image/png;base64,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",
      },
      // { id: "tigo", name: "Tigo", logo: "/placeholder.svg?height=40&width=40" },
    ],
    GH: [
      {
        id: "mtn-gh",
        name: "MTN Ghana",
        logo: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "vodafone",
        name: "Vodafone",
        logo: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "airtel-tigo",
        name: "AirtelTigo",
        logo: "/placeholder.svg?height=40&width=40",
      },
    ],
    KE: [
      {
        id: "safaricom",
        name: "Safaricom",
        logo: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "airtel-ke",
        name: "Airtel Kenya",
        logo: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "telkom",
        name: "Telkom Kenya",
        logo: "/placeholder.svg?height=40&width=40",
      },
    ],
  };

  // Get current providers based on selected country
  const currentProviders =
    providers[selectedCountry as keyof typeof providers] || providers.NG;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <CountrySelector
          selectedCountry={selectedCountry}
          onCountryChange={(country) => {
            setSelectedCountry(country);
            setSelectedProvider("");
          }}
        />

        <div className="space-y-2">
          <Label>Select Provider</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {currentProviders.map((provider) => (
              <div
                key={provider.id}
                className={`border rounded-lg p-3 cursor-pointer transition-all flex flex-col items-center justify-center ${
                  selectedProvider === provider.id
                    ? "border-[#41BC3F] bg-[#e6f4ea]"
                    : "border-gray-200 hover:border-[#D86411]"
                }`}
                onClick={() => setSelectedProvider(provider.id)}
              >
                <img
                  src={provider.logo || "/placeholder.svg"}
                  alt={provider.name}
                  className="h-10 mb-2"
                />
                <span className="text-sm font-medium text-center">
                  {provider.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <div className="phone-input-container">
            <PhoneInput
              international
              defaultCountry="NG"
              value={phoneNumber}
              onChange={setPhoneNumber}
              countries={["NG", "RW", "GH", "KE"]}
              className="focus:ring-[#41BC3F] focus:border-[#41BC3F]"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Enter the recipient's phone number including country code
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="focus:ring-[#41BC3F] focus:border-[#41BC3F]"
          />

          <div className="grid grid-cols-4 gap-2 mt-2">
            {quickAmounts.map((quickAmount) => (
              <Button
                key={quickAmount.value}
                type="button"
                variant="outline"
                onClick={() => setAmount(quickAmount.value)}
                className={
                  amount === quickAmount.value
                    ? "border-[#41BC3F] bg-[#e6f4ea]"
                    : "hover:border-[#D86411]"
                }
              >
                {quickAmount.label}
              </Button>
            ))}
          </div>
        </div>

        <PaymentMethods
          selectedMethod={selectedPaymentMethod}
          onMethodChange={setSelectedPaymentMethod}
        />
      </div>

      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Airtime Amount:</span>
            <span className="font-medium">${amount || "0.00"}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Service Fee:</span>
            <span className="font-medium">$1.00</span>
          </div>
          <div className="flex justify-between font-bold mt-4 pt-4 border-t">
            <span>Total:</span>
            <span>
              ${amount ? (Number.parseFloat(amount) + 1).toFixed(2) : "1.00"}
            </span>
          </div>
        </CardContent>
      </Card>

      <Button
        type="submit"
        className="w-full bg-[#41BC3F] hover:bg-[#3aa83a] text-white"
        disabled={
          loading ||
          success ||
          !phoneNumber ||
          !amount ||
          !selectedPaymentMethod ||
          !selectedProvider
        }
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {success && <Check className="mr-2 h-4 w-4" />}
        {loading
          ? "Processing..."
          : success
          ? "Payment Successful!"
          : "Pay Now"}
      </Button>
    </form>
  );
}
