"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Check } from "lucide-react"
import CountrySelector from "@/components/country-selector"
import PaymentMethods from "@/components/payment-methods"
import { useToast } from "@/hooks/use-toast"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

export default function AirtimeForm() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("NG")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")
  const [selectedProvider, setSelectedProvider] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      // Show success toast
      toast({
        title: "Payment Successful!",
        description: `You have successfully purchased airtime worth $${amount} for ${phoneNumber}`,
        variant: "success",
      })

      // Reset form after showing success
      setTimeout(() => {
        setSuccess(false)
        setPhoneNumber("")
        setAmount("")
        setSelectedProvider("")
      }, 3000)
    }, 2000)
  }

  const quickAmounts = [
    { value: "5", label: "$5" },
    { value: "10", label: "$10" },
    { value: "20", label: "$20" },
    { value: "50", label: "$50" },
  ]

  // Telecom providers by country
  const providers = {
    NG: [
      { id: "mtn-ng", name: "MTN Nigeria", logo: "/placeholder.svg?height=40&width=40" },
      { id: "airtel-ng", name: "Airtel Nigeria", logo: "/placeholder.svg?height=40&width=40" },
      { id: "glo", name: "Glo", logo: "/placeholder.svg?height=40&width=40" },
      { id: "9mobile", name: "9Mobile", logo: "/placeholder.svg?height=40&width=40" },
    ],
    RW: [
      { id: "mtn-rw", name: "MTN Rwanda", logo: "/placeholder.svg?height=40&width=40" },
      { id: "airtel-rw", name: "Airtel Rwanda", logo: "/placeholder.svg?height=40&width=40" },
      { id: "tigo", name: "Tigo", logo: "/placeholder.svg?height=40&width=40" },
    ],
    GH: [
      { id: "mtn-gh", name: "MTN Ghana", logo: "/placeholder.svg?height=40&width=40" },
      { id: "vodafone", name: "Vodafone", logo: "/placeholder.svg?height=40&width=40" },
      { id: "airtel-tigo", name: "AirtelTigo", logo: "/placeholder.svg?height=40&width=40" },
    ],
    KE: [
      { id: "safaricom", name: "Safaricom", logo: "/placeholder.svg?height=40&width=40" },
      { id: "airtel-ke", name: "Airtel Kenya", logo: "/placeholder.svg?height=40&width=40" },
      { id: "telkom", name: "Telkom Kenya", logo: "/placeholder.svg?height=40&width=40" },
    ],
  }

  // Get current providers based on selected country
  const currentProviders = providers[selectedCountry as keyof typeof providers] || providers.NG

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <CountrySelector
          selectedCountry={selectedCountry}
          onCountryChange={(country) => {
            setSelectedCountry(country)
            setSelectedProvider("")
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
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300"
                }`}
                onClick={() => setSelectedProvider(provider.id)}
              >
                <img src={provider.logo || "/placeholder.svg"} alt={provider.name} className="h-10 mb-2" />
                <span className="text-sm font-medium text-center">{provider.name}</span>
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
              onChange={setPhoneNumber as (value: string) => void}
              countries={["NG", "RW", "GH", "KE"]}
              className="focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Enter the recipient's phone number including country code</p>
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
            className="focus:ring-purple-500 focus:border-purple-500"
          />

          <div className="grid grid-cols-4 gap-2 mt-2">
            {quickAmounts.map((quickAmount) => (
              <Button
                key={quickAmount.value}
                type="button"
                variant="outline"
                onClick={() => setAmount(quickAmount.value)}
                className={amount === quickAmount.value ? "border-purple-600 bg-purple-50" : ""}
              >
                {quickAmount.label}
              </Button>
            ))}
          </div>
        </div>

        <PaymentMethods selectedMethod={selectedPaymentMethod} onMethodChange={setSelectedPaymentMethod} />
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
            <span>${amount ? (Number.parseFloat(amount) + 1).toFixed(2) : "1.00"}</span>
          </div>
        </CardContent>
      </Card>

      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        disabled={loading || success || !phoneNumber || !amount || !selectedPaymentMethod || !selectedProvider}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {success && <Check className="mr-2 h-4 w-4" />}
        {loading ? "Processing..." : success ? "Payment Successful!" : "Pay Now"}
      </Button>
    </form>
  )
}
