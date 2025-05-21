"use client"

import { Button } from "@/components/ui/button"

import { CreditCard, Wallet, Landmark } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface PaymentMethodsProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
}

export default function PaymentMethods({ selectedMethod, onMethodChange }: PaymentMethodsProps) {
  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "bank", name: "Bank Transfer", icon: Landmark },
    { id: "wallet", name: "Digital Wallet", icon: Wallet },
  ]

  return (
    <div className="space-y-2">
      <Label>Payment Method</Label>
      <RadioGroup value={selectedMethod} onValueChange={onMethodChange}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon
            return (
              <div key={method.id} className="flex items-center">
                <RadioGroupItem value={method.id} id={`payment-${method.id}`} className="peer sr-only" />
                <Label
                  htmlFor={`payment-${method.id}`}
                  className="flex items-center gap-3 w-full p-4 border rounded-lg cursor-pointer transition-all peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:bg-purple-50 hover:bg-gray-50"
                >
                  <Icon className="h-5 w-5 text-gray-600" />
                  <span>{method.name}</span>
                </Label>
              </div>
            )
          })}
        </div>
      </RadioGroup>

      {selectedMethod === "card" && (
        <div className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" className="focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" className="focus:ring-purple-500 focus:border-purple-500" />
            </div>
          </div>
        </div>
      )}

      {selectedMethod === "bank" && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Select your bank from the list below to proceed with bank transfer payment.
          </p>
          <Select>
            <SelectTrigger className="mt-2 focus:ring-purple-500 focus:border-purple-500">
              <SelectValue placeholder="Select your bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bank1">First Bank</SelectItem>
              <SelectItem value="bank2">Access Bank</SelectItem>
              <SelectItem value="bank3">Zenith Bank</SelectItem>
              <SelectItem value="bank4">GTBank</SelectItem>
              <SelectItem value="bank5">UBA</SelectItem>
              <SelectItem value="bank6">Bank of Kigali</SelectItem>
              <SelectItem value="bank7">Equity Bank</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {selectedMethod === "wallet" && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Choose your preferred digital wallet to complete this payment.</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Button variant="outline" className="justify-start">
              <img src="/placeholder.svg?height=20&width=20" alt="PayPal" className="mr-2 h-5 w-5" />
              PayPal
            </Button>
            <Button variant="outline" className="justify-start">
              <img src="/placeholder.svg?height=20&width=20" alt="Apple Pay" className="mr-2 h-5 w-5" />
              Apple Pay
            </Button>
            <Button variant="outline" className="justify-start">
              <img src="/placeholder.svg?height=20&width=20" alt="Google Pay" className="mr-2 h-5 w-5" />
              Google Pay
            </Button>
            <Button variant="outline" className="justify-start">
              <img src="/placeholder.svg?height=20&width=20" alt="Mobile Money" className="mr-2 h-5 w-5" />
              Mobile Money
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
