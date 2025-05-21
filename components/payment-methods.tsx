"use client";

import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Landmark } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentMethodsProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

export default function PaymentMethods({
  selectedMethod,
  onMethodChange,
}: PaymentMethodsProps) {
  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "bank", name: "Bank Transfer", icon: Landmark },
    { id: "wallet", name: "Digital Wallet", icon: Wallet },
  ];

  return (
    <div className="space-y-2">
      <Label className="text-sm md:text-base">Payment Method</Label>
      <RadioGroup value={selectedMethod} onValueChange={onMethodChange}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div key={method.id} className="flex items-center">
                <RadioGroupItem
                  value={method.id}
                  id={`payment-${method.id}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`payment-${method.id}`}
                  className="flex items-center gap-2 md:gap-3 w-full p-3 md:p-4 border rounded-lg cursor-pointer transition-all peer-data-[state=checked]:border-[#41BC3F] peer-data-[state=checked]:bg-[#e6f4ea] hover:bg-[#e6f4ea] text-sm md:text-base"
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                  <span className="truncate">{method.name}</span>
                </Label>
              </div>
            );
          })}
        </div>
      </RadioGroup>

      {selectedMethod === "card" && (
        <div className="mt-4 grid gap-3 md:gap-4">
          <div className="grid gap-2">
            <Label htmlFor="cardNumber" className="text-sm md:text-base">
              Card Number
            </Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="focus:ring-[#41BC3F] focus:border-[#41BC3F] text-sm md:text-base"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="grid gap-2">
              <Label htmlFor="expiry" className="text-sm md:text-base">
                Expiry Date
              </Label>
              <Input
                id="expiry"
                placeholder="MM/YY"
                className="focus:ring-[#41BC3F] focus:border-[#41BC3F] text-sm md:text-base"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc" className="text-sm md:text-base">
                CVC
              </Label>
              <Input
                id="cvc"
                placeholder="123"
                className="focus:ring-[#41BC3F] focus:border-[#41BC3F] text-sm md:text-base"
              />
            </div>
          </div>
        </div>
      )}

      {selectedMethod === "bank" && (
        <div className="mt-4 p-3 md:p-4 bg-gray-50 rounded-lg">
          <p className="text-xs md:text-sm text-gray-600">
            Select your bank from the list below to proceed with bank transfer
            payment.
          </p>
          <Select>
            <SelectTrigger className="mt-2 focus:ring-[#41BC3F] focus:border-[#41BC3F] text-sm md:text-base">
              <SelectValue placeholder="Select your bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bank1" className="text-sm md:text-base">
                First Bank
              </SelectItem>
              <SelectItem value="bank2" className="text-sm md:text-base">
                Access Bank
              </SelectItem>
              <SelectItem value="bank3" className="text-sm md:text-base">
                Zenith Bank
              </SelectItem>
              <SelectItem value="bank4" className="text-sm md:text-base">
                GTBank
              </SelectItem>
              <SelectItem value="bank5" className="text-sm md:text-base">
                UBA
              </SelectItem>
              <SelectItem value="bank6" className="text-sm md:text-base">
                Bank of Kigali
              </SelectItem>
              <SelectItem value="bank7" className="text-sm md:text-base">
                Equity Bank
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {selectedMethod === "wallet" && (
        <div className="mt-4 p-3 md:p-4 bg-gray-50 rounded-lg">
          <p className="text-xs md:text-sm text-gray-600">
            Choose your preferred digital wallet to complete this payment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            <Button
              variant="outline"
              className="justify-start text-sm md:text-base h-10 md:h-11"
            >
              <img
                src="https://st4.depositphotos.com/5225467/20987/i/1600/depositphotos_209876646-stock-photo-paypal-logo-printed-white-paper.jpg"
                alt="PayPal"
                className="mr-2 h-4 w-4 md:h-5 md:w-5"
              />
              PayPal
            </Button>
            <Button
              variant="outline"
              className="justify-start text-sm md:text-base h-10 md:h-11"
            >
              <img
                src="data:image/png;base64,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"
                alt="Apple Pay"
                className="mr-2 h-4 w-4 md:h-5 md:w-5"
              />
              Apple Pay
            </Button>
            <Button
              variant="outline"
              className="justify-start text-sm md:text-base h-10 md:h-11"
            >
              <img
                src="https://brandlogos.net/wp-content/uploads/2021/10/google-pay-logo-symbol-768x768.png"
                alt="Google Pay"
                className="mr-2 h-4 w-4 md:h-5 md:w-5"
              />
              Google Pay
            </Button>
            <Button
              variant="outline"
              className="justify-start text-sm md:text-base h-10 md:h-11"
            >
              <img
                src="https://seeklogo.com/images/M/mobilepay-logo-3C8DA59ADA-seeklogo.com.png"
                alt="Mobile Money"
                className="mr-2 h-4 w-4 md:h-5 md:w-5"
              />
              Mobile Money
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}