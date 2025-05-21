'use client'

import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import type { Country } from 'react-phone-number-input'
import "react-phone-number-input/style.css"

interface PhoneInputClientProps {
  value?: string;
  onChange?: (value?: string) => void;
  defaultCountry?: Country;
  className?: string;
}

export default function PhoneInputClient({ 
  value, 
  onChange, 
  defaultCountry = "NG" as Country, 
  className = "" 
}: PhoneInputClientProps) {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(value || '')
  
  const handleChange = (newValue?: string) => {
    setPhoneNumber(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div className="phone-input-container">
      <PhoneInput
        international
        defaultCountry={defaultCountry}
        placeholder="Enter phone number"
        className={`focus:ring-purple-500 focus:border-purple-500 ${className}`}
        value={phoneNumber}
        onChange={handleChange}
      />
    </div>
  )
}