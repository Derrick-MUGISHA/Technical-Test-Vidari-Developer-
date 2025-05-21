"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Check } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import PaymentMethods from "@/components/payment-methods"
import { useToast } from "@/hooks/use-toast"

export default function OneOffPaymentForm() {
  const [recipientName, setRecipientName] = useState("")
  const [recipientEmail, setRecipientEmail] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
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
        title: "Payment Sent!",
        description: `You have successfully sent $${amount} to ${recipientName}`,
        variant: "success",
      })

      // Reset form after showing success
      setTimeout(() => {
        setSuccess(false)
        setRecipientName("")
        setRecipientEmail("")
        setAmount("")
        setDescription("")
      }, 3000)
    }, 2000)
  }

  return (
 <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="recipientName">Recipient Name</Label>
          <Input
            id="recipientName"
            placeholder="Enter recipient's name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            required
            className="focus:ring-[#41BC3F] focus:border-[#41BC3F]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="recipientEmail">Recipient Email</Label>
          <Input
            id="recipientEmail"
            type="email"
            placeholder="Enter recipient's email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
            className="focus:ring-[#41BC3F] focus:border-[#41BC3F]"
          />
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Payment Description</Label>
          <Textarea
            id="description"
            placeholder="What is this payment for?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="focus:ring-[#41BC3F] focus:border-[#41BC3F]"
          />
        </div>

        <PaymentMethods selectedMethod={selectedPaymentMethod} onMethodChange={setSelectedPaymentMethod} />
      </div>

      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Payment Amount:</span>
            <span className="font-medium">${amount || "0.00"}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Service Fee:</span>
            <span className="font-medium">$1.50</span>
          </div>
          <div className="flex justify-between font-bold mt-4 pt-4 border-t">
            <span>Total:</span>
            <span>${amount ? (Number.parseFloat(amount) + 1.5).toFixed(2) : "1.50"}</span>
          </div>
        </CardContent>
      </Card>

      <Button
        type="submit"
        className="w-full bg-[#41BC3F] hover:bg-[#3aa83a] text-white shadow-md hover:shadow-lg transition-all"
        disabled={loading || success || !recipientName || !recipientEmail || !amount || !selectedPaymentMethod}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {success && <Check className="mr-2 h-4 w-4" />}
        {loading ? "Processing..." : success ? "Payment Successful!" : "Send Payment"}
      </Button>
    </form>
  )
}
