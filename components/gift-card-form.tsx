"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Check } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import PaymentMethods from "@/components/payment-methods"
import { useToast } from "@/hooks/use-toast"

export default function GiftCardForm() {
  const [email, setEmail] = useState("")
  const [selectedCard, setSelectedCard] = useState("")
  const [selectedAmount, setSelectedAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")
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
        title: "Gift Card Purchased!",
        description: `Your ${getCardName(selectedCard)} gift card worth $${selectedAmount} has been sent to ${email}`,
        variant: "success",
      })

      // Reset form after showing success
      setTimeout(() => {
        setSuccess(false)
        setEmail("")
        setSelectedCard("")
        setSelectedAmount("")
      }, 3000)
    }, 2000)
  }

  const getCardName = (id: string) => {
    const card = giftCards.find((card) => card.id === id)
    return card ? card.name : id
  }

  const giftCards = [
    { id: "amazon", name: "Amazon", image: "/placeholder.svg?height=60&width=100", popular: true },
    { id: "netflix", name: "Netflix", image: "/placeholder.svg?height=60&width=100", popular: true },
    { id: "spotify", name: "Spotify", image: "/placeholder.svg?height=60&width=100", popular: true },
    { id: "apple", name: "Apple", image: "/placeholder.svg?height=60&width=100", popular: true },
    { id: "google", name: "Google Play", image: "/placeholder.svg?height=60&width=100", popular: true },
    { id: "xbox", name: "Xbox", image: "/placeholder.svg?height=60&width=100", popular: true },
    { id: "playstation", name: "PlayStation", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "steam", name: "Steam", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "uber", name: "Uber", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "starbucks", name: "Starbucks", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "walmart", name: "Walmart", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "target", name: "Target", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "ebay", name: "eBay", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "sephora", name: "Sephora", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "bestbuy", name: "Best Buy", image: "/placeholder.svg?height=60&width=100", popular: false },
    { id: "airbnb", name: "Airbnb", image: "/placeholder.svg?height=60&width=100", popular: false },
  ]

  const denominations = [
    { value: "25", label: "$25" },
    { value: "50", label: "$50" },
    { value: "100", label: "$100" },
    { value: "200", label: "$200" },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Popular Gift Cards</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {giftCards
              .filter((card) => card.popular)
              .map((card) => (
                <div
                  key={card.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all flex flex-col items-center justify-center ${
                    selectedCard === card.id
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                  onClick={() => setSelectedCard(card.id)}
                >
                  <img src={card.image || "/placeholder.svg"} alt={card.name} className="h-12 mb-2" />
                  <span className="text-sm font-medium">{card.name}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>More Gift Cards</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {giftCards
              .filter((card) => !card.popular)
              .map((card) => (
                <div
                  key={card.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-all flex flex-col items-center justify-center ${
                    selectedCard === card.id
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                  onClick={() => setSelectedCard(card.id)}
                >
                  <img src={card.image || "/placeholder.svg"} alt={card.name} className="h-10 mb-2" />
                  <span className="text-xs font-medium">{card.name}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Select Amount</Label>
          <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="grid grid-cols-2 gap-2">
            {denominations.map((denom) => (
              <div key={denom.value} className="flex items-center space-x-2">
                <RadioGroupItem value={denom.value} id={`amount-${denom.value}`} />
                <Label htmlFor={`amount-${denom.value}`} className="cursor-pointer">
                  {denom.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Recipient Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter recipient's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <PaymentMethods selectedMethod={selectedPaymentMethod} onMethodChange={setSelectedPaymentMethod} />
      </div>

      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Gift Card Amount:</span>
            <span className="font-medium">${selectedAmount || "0.00"}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Service Fee:</span>
            <span className="font-medium">$2.50</span>
          </div>
          <div className="flex justify-between font-bold mt-4 pt-4 border-t">
            <span>Total:</span>
            <span>${selectedAmount ? (Number.parseFloat(selectedAmount) + 2.5).toFixed(2) : "2.50"}</span>
          </div>
        </CardContent>
      </Card>

      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        disabled={loading || success || !email || !selectedCard || !selectedAmount || !selectedPaymentMethod}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {success && <Check className="mr-2 h-4 w-4" />}
        {loading ? "Processing..." : success ? "Purchase Successful!" : "Purchase Gift Card"}
      </Button>
    </form>
  )
}
