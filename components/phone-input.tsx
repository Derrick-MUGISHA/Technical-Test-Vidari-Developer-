"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface PhoneInputProps {
  id: string
  value: string
  onChange: (value: string) => void
  country: string
  required?: boolean
}

export default function PhoneInput({ id, value, onChange, country, required }: PhoneInputProps) {
  const [formattedValue, setFormattedValue] = useState(value)

  // Country code mapping
  const countryCodes: Record<string, string> = {
    rwanda: "+250",
    nigeria: "+234",
    ghana: "+233",
    kenya: "+254",
    southafrica: "+27",
    usa: "+1",
    uk: "+44",
    canada: "+1",
    india: "+91",
    uganda: "+256",
    tanzania: "+255",
    ethiopia: "+251",
  }

  // Format patterns for different countries
  const formatPatterns: Record<string, (val: string) => string> = {
    rwanda: (val) => {
      // Rwanda format: +250 7XX XXX XXX
      const digits = val.replace(/\D/g, "")
      let formatted = ""

      if (digits.length > 0) {
        formatted = "+" + digits.substring(0, 3)
      }
      if (digits.length > 3) {
        formatted += " " + digits.substring(3, 4)
      }
      if (digits.length > 4) {
        formatted += digits.substring(4, 6)
      }
      if (digits.length > 6) {
        formatted += " " + digits.substring(6, 9)
      }
      if (digits.length > 9) {
        formatted += " " + digits.substring(9, 12)
      }

      return formatted
    },
    nigeria: (val) => {
      // Nigeria format: +234 XX XXXX XXXX
      const digits = val.replace(/\D/g, "")
      let formatted = ""

      if (digits.length > 0) {
        formatted = "+" + digits.substring(0, 3)
      }
      if (digits.length > 3) {
        formatted += " " + digits.substring(3, 5)
      }
      if (digits.length > 5) {
        formatted += " " + digits.substring(5, 9)
      }
      if (digits.length > 9) {
        formatted += " " + digits.substring(9, 13)
      }

      return formatted
    },
    // Default formatter for other countries
    default: (val) => {
      const digits = val.replace(/\D/g, "")
      const countryCode = countryCodes[country] || ""

      if (digits.length <= 3) {
        return "+" + digits
      }

      // Simple grouping for other countries
      let formatted = "+" + digits.substring(0, 3)
      if (digits.length > 3) {
        formatted += " " + digits.substring(3, 6)
      }
      if (digits.length > 6) {
        formatted += " " + digits.substring(6, 10)
      }
      if (digits.length > 10) {
        formatted += " " + digits.substring(10)
      }

      return formatted
    },
  }

  // Update the formatted value when the country changes
  useEffect(() => {
    if (!value) {
      // If there's no value, prefill with country code
      const countryCode = countryCodes[country] || ""
      setFormattedValue(countryCode)
      onChange(countryCode)
    } else if (!value.startsWith("+")) {
      // If value doesn't start with +, add the country code
      const countryCode = countryCodes[country] || ""
      const newValue = countryCode + " " + value.replace(/\D/g, "")
      setFormattedValue(newValue)
      onChange(newValue)
    }
  }, [country])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    // Use the appropriate formatter based on country
    const formatter = formatPatterns[country] || formatPatterns.default
    const formatted = formatter(inputValue)

    setFormattedValue(formatted)
    onChange(formatted)
  }

  return (
    <div className="relative">
      <Input
        id={id}
        value={formattedValue}
        onChange={handleChange}
        placeholder={`${countryCodes[country] || "+"} Phone number`}
        required={required}
        className="focus:ring-[#41BC3F] focus:border-[#41BC3F]"
      />
    </div>
  )
}
