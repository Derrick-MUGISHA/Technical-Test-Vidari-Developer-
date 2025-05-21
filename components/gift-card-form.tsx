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
    { id: "amazon", name: "Amazon", image: "https://huuray.com/wp-content/uploads/2023/02/amazon-gift-card-1.png", popular: true },
    { id: "netflix", name: "Netflix", image: "data:image/jpeg;base64,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", popular: true },
    { id: "spotify", name: "Spotify", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAABEVBMVEX///8lznsjHyCC0KeZtqcYznciz3r7/v3G2c86vX1jv5AkHiAl0n0jFx0jHR8lznwkGx8zz4IVFBMYJBwkFh0ZWjozuHY3sHUjDRohFRsiBxgiABY2pG8iEBomaEgmx3gkiVciWT0hQjAiYUIlgFQnwXYmwXUfKCMiNSojbEcmqmgcDRUaOSgwv3gYGBYjUzsmnWIjc0weRzEkkVshh1IkrmnE4NKU0bGv1cLj6OdPxoqNwqdmsYzt9/Sawa2q3sRQrYAiLicsflYwmWYTMyEVIBg6uXsPFg8WPSgTAAstPjUVKR0yil8UDhEtUj8wpms9yoYtOTMRAAAenlwbkFExdVEeckU+imHY2tmywLrCyca1d1ZaAAAM6ElEQVR4nO2dC3faRhbHjdpO16tBIzkKCGFZAiSBhAcEY7Xbx+7GkDhNjSvvJva2/f4fZO/owSMhYIukkc+Z/zkxGKTR/HRn7mM0OT46EhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhLa1Lffff/Vk9T3//jhIXzf/fjNk5X307f7+eg3tScrRH7eR/jPH9GX7uUhQt6/9gD+237SgDX0Yo8Jv/rSPTxQ6Or3nXzf/v1pG7CGjv8mAJ+0BKAArLgEoACsuASgAKy4BKAArLgEoACsuASgAKy4BKAArLgEoACsuD4xIPlc/SytTwGIMa7Ztu/bNrz9C/r8KB0KSDAmodvr9i3D0PvdnhMTjKpkxwMBMWkEfUBTFRmkqLphXU5olex4ECAYb2xairQuWbWMTgNXxjUdAohpx6pLH0rWW4FdFSOWB0RkPtLlLXwc0bpMKkJYGhBpk/cG54bUoUMqMUzLAiKtZ3zEfJkUc6L9xSxbVRZQ61m78NJhGpAKxItygEg7G+7hAw1nFZiH5QCxM9w5PnMbnpx+ecJSgLjxWt3PB57m2fEndjSY1B55z8oAIm28Cn88f8kEycz7hHqgfXh6+YmJNHdwzjLvDCkiwQ9ImUpZcJ5PQMjMDEu6HHRB54NLyTKNzcgvD5PNMyEr973SOTmeGWrdjPjJxJn2+5fjcG9DZQC1AR+gsmF0AxZSm99ILmLTkAXTettajV91uh4rsOd29Xbb6HeY/3BEBKWKzc2OtKnORwWpIW/criuKarr7z348IJlzDyOPHI8XSuvhHKWY4WRgLHOAYXONL+pbKnwhK3Wj7zw4SmrPFUkJOCHp6HBfXXg7G/Jm1KH7OSyYzUBlsUyo35tUQBlP+kZmxtbZ8lt8OlR5txQ+VVWz6z0YUFegGWgHJ6/M9jlF6PalKsmtwWD4OSyIrl5x84yauMBZqTgWY9vpp5mOek3zD9HtNfDp1uVly4AcVj33Huhhtef1/D4RTBnzeBdey1LLJcTzPwMgXrR4z1szTmTHkTM564zH415w70SxTwr/gTV3xEfyybz4YA7ErcDjFXLP0kcNnN2cWq34Vyj1jmjV0HMdAHH+Ib+LuHkiyyfHOD+/uKkbp5UHJL3UUcqjSeRO+yY4Tr0O0nXLME2pG0R+dg1EJnyUtu7yMUruLUn9RcNpX8KXMJNI5LpuBMbudLvPmVb0DOF4Nu52xy7lI4IwtwtzsAuHOjaFnxcedc9GMIRmDhcrmmfwS0JixuyNKfNowHT8p4SWmbqMDUFNb5pTZvOuwZwDE9bHuTfRerqkjvO4iDiN9rxttc+SvlFXVb09ivIA14AiGj6pG2aHYqJ1TX491bKMV8enbwxj1EjepGWaZXANG1mLTfhqOE9Y1HQ2JvfjAY9fr+K5rNYts50LYmCGXjf7ExiJOEh79vI2a4FMLDD76doQ4pNL+XWkymmGAAVWat1kpPM7xYe3fhlibVoEHeWanp7IyrNGsp4ntjJHimctfgCLFs8b0WGAzZtlkDPqg44bhbHneTQOmdsZ1I06N6piqbMkSOeq/LpI1xjUH8qwE9nFxOGAkgLGkSTuc+U3PCto3oCDrBuSwj9SnzW0bju9T4bZfn2cA76xUguaJrzCqEd873lXlfSJFs1/C+hhgDDwCr4uo2mQR/wK6SQnlPWUdj0bwFm5L5/k7jbzomBeaezGGBeAkj4NfT/pwt2oTzWkncNBVi/0vagL4HpHi0/Bhuo4iaJEywDtaDGCdhdR5IL104wewzfSSZOwxIsYPQwwygGVZ8c4n84IofwoALajcWt9KaMAhE6MUvek1C0jzShTwHqHexesjdW0+uBlCpRZ3B1qPKwPE5yFidRJZoA486JNjLVf1DSzgfHfSu+PzRiLN/zo4wGXiegvt5nZbJ9S6vmk8NkYN3prKelNAQjuY9rW0zAvqe0xRbznMIKzk5oQVFozAkkEpHeZtzm+5t3X8jhIMjsBIEI5IC/bJOXVbRb50zm8FowPtaCkMkjLYN71FV3X6xJf9Q1t3j7Eosa0Lr9vwXSZMV1FTR1IN+15vZONAsRNWO/xjlpOPjDwmcppszi4FRAdXyuSxTBOAPR6a232eCeTFE5Gti5bbfCc6ZqvpPBV33aLp9H8RnrneQSRX1+ttQDTNHY6isULDSc1zSTH1wIdaK9eyXxU5gcvbiTlnO4ArJGzFg9E/OTW2Ra8MoBXJ4Vt5IIB8ksp+5D7vx5MEqR11MK53743ZjD2JjDTICZuBZQ2AQc7ASGowLuGd63ABN66BFQi0F+vorsMVjPT8kiBeGjoSuY/IUAno/w21KdFzYugzMkb4fjqeTZEszwA8XiXD1G3SE6CfUMUWoLTWndQ30BzW3Pbx6dqq3JeNsxBAAmo59tQxtLE6fXbaRGhS78uc5xVOYEnYy+3Dblr5YDyyVXmZBq5kwGmbtZVRF8qENvIKtneAsiLb2Xwm8LP3cZXJtmGnCEfoU4RBrM4Ae+p2zW4e1mWvPLNooCam/qI2am79wZKPkTBwh5Pn70pwI4SGJUwRgOShokeXOgmDxM9jJZhYgNQewZN8RBDtxqwDOBpPgnhTqdXBadCSFbWIwSOsmOuLVsoz67y8xLoumIOZlEcOgM4gjsZnpS1ziMPonrKqqWrBbI1Tnw/mvJA/xxiPxym9OcxC+wtgGSWLtCqnY8U0CXqQa2bZ9ujxKaR2zuHONFSJcjaErAPLxWma2sWy/Q6HPACUYUEy+STFkZokarxnJlPY179QzxUebpjGgZH5tUkca10jptFLroBiBqveNQZRu+TlQaEe1aM0RavltI4wdcP6lZb4ZkmDK6XS8LhfGl5r2cuMxzZgoQkTbb/c5PfLnWYVY7J8pGOYg2gaAS/nR2ibgUk6ThQX35khJYBRLTwkNIH1RIUEo69UQGsfBuC0atAJQS1o9ECR5uV6kEyMKGg1M3zPDpAuWQZ/BNDDTKnhJ2WAeWmee5BuWSecECojf6bAhKYMhCYrY+4mHKramSyY91eMQaLs1ZhqKGzfiJ4l2jS63QCJ61l8yTTZsF4HERFwUug4HV703EvOyg9j7q9XsB8RC+gwvWgdoDXCw+ltT8kpquM/tMAInq9a2FbWSWi4CI/iPLZEiP/Jff/aHPpITsKbSSVuS+rLdd68wUg7T6I5lB/1D/mYsou3c93mHBN8s3Ox6CrAFdS6PiV1TbVnQ9Byj182f/wLNVwsrP3+WpSaT6iuUZ6H80dd6nk4zMel/eq1dmePS0BO22z3TsE0IHUyTCtYMfD5JIPQFHjWt33AK2+b+WThCxi4SEPSbEdgtehu+5R2Se8uHG9x4Z6d+eFa9n656H7Td5zTx+q/C6LxvnOeWhMaSU2y5QHhGTY+mi0UIeT3fPvL9MBG4H4RpntO0kU4zKqhPlqh27l8ibqh1ZUDcmtzEangzfjUfcSKnol96iQclvtgeNVBu/w7ZS8AJyc84fXBo9IUteNa7hK+2I/wYbY9ClaGDEWhbGNcYXguD7Rlma0+QC0QhKb0gVgxSUABWDFJQAFYMUlAAVgxSUABWDFJQAFYMUlAAVgxXX4uuj69x/b6YDw+ver3ee11XZ7tDw3b3HtAfbym/UFZbzrimvXPhAwZGHxnyZqth2SdDMQ3/JEcfE8Htux9pZk/ymGLy1SRtNPvcZbDZO36RZnTKIYfqS7oBjlq6t+zH/xoZHsHWBTJyLLi9Ekfd37ePEwQHT7jlAWMSe6aF7M77V7p+HQmEXR/P7UabLEcVjCEjcK7+fOPEzcAD6y3zrNiyhiMzYPokS7SEIWLZyQLRqh50QODZ0kSOJTd+4kF/PAi5wI3jmnLK6Rd7fRnM0vnDmLCbu4upg7zGG08TktqL2j0eyeLVgyabhMu4gmd+HbZuAu4M3dvTt/t7hzZ6cRnb9zHEKhs8EdjU8n0YJFbrJ4O3d4A5P7F+FidnrfoNB5Ep8yuC//S9yzGRymsavJ4g5ulxvZ5N1xcAc3ZLFwIm3iwCFONEvuqf0ZAZEfenHsUc/3QtvT4tgObdumlMZe7Mee73teTEPf9mnsE0IpvMLgSxgcAEfZESU+8WLPs6EJppGY+jWbfxPzBqjv+TaLbPiNN+PXfA2a8W34xbNtbc4aLlw68j8nIJ/lqHAK6VtUvMe5A8g2rGc/sldUI/kGxeI/qfAPiV1bnpx+ueZlUG11ldVPvs2pZu+ZhCJMCMCKSwAKwIprH+DRz1+6hwcKNff85Z6fnvifRCE/7+Y7+uHFl+7iQdo7Qo+O/myiJ2tDhOjX+/iOjn7/mZIv/QeiygnZL/7Yz8cR//j6aerPB/1pMCEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIaEH6v9TJvIS4l92BQAAAABJRU5ErkJggg==", popular: true },
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
                      ? "border-[#41BC3F] bg-[#e6f4ea]"
                      : "border-gray-200 hover:border-[#D86411]"
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
                      ? "border-[#41BC3F] bg-[#e6f4ea]"
                      : "border-gray-200 hover:border-[#D86411]"
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
            className="focus:ring-[#41BC3F] focus:border-[#41BC3F]"
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
        className="w-full bg-[#41BC3F] hover:bg-[#3aa83a] text-white shadow-md hover:shadow-lg transition-all"
        disabled={loading || success || !email || !selectedCard || !selectedAmount || !selectedPaymentMethod}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {success && <Check className="mr-2 h-4 w-4" />}
        {loading ? "Processing..." : success ? "Purchase Successful!" : "Purchase Gift Card"}
      </Button>
    </form>
  )
}
