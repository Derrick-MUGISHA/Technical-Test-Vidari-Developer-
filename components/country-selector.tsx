"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

interface CountrySelectorProps {
  selectedCountry: string
  onCountryChange: (country: string) => void
}

export default function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  const [open, setOpen] = useState(false)

  // Prioritize Rwanda and Nigeria at the top
  const countries = [
    { value: "NG", label: "Nigeria", flag: "🇳🇬", code: "+234", priority: true },
    { value: "RW", label: "Rwanda", flag: "🇷🇼", code: "+250", priority: true },
    { value: "GH", label: "Ghana", flag: "🇬🇭", code: "+233", priority: false },
    { value: "KE", label: "Kenya", flag: "🇰🇪", code: "+254", priority: false },
    { value: "ZA", label: "South Africa", flag: "🇿🇦", code: "+27", priority: false },
    { value: "US", label: "United States", flag: "🇺🇸", code: "+1", priority: false },
    { value: "GB", label: "United Kingdom", flag: "🇬🇧", code: "+44", priority: false },
    { value: "CA", label: "Canada", flag: "🇨🇦", code: "+1", priority: false },
    { value: "IN", label: "India", flag: "🇮🇳", code: "+91", priority: false },
    { value: "UG", label: "Uganda", flag: "🇺🇬", code: "+256", priority: false },
    { value: "TZ", label: "Tanzania", flag: "🇹🇿", code: "+255", priority: false },
    { value: "ET", label: "Ethiopia", flag: "🇪🇹", code: "+251", priority: false },
  ]

  // Sort countries to put priority ones first
  const sortedCountries = [...countries].sort((a, b) => {
    if (a.priority && !b.priority) return -1
    if (!a.priority && b.priority) return 1
    return a.label.localeCompare(b.label)
  })

  const selectedCountryData = countries.find((country) => country.value === selectedCountry)

  return (
    <div className="space-y-2">
      <Label htmlFor="country">Country</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between focus:ring-purple-500 focus:border-purple-500"
          >
            {selectedCountryData ? (
              <div className="flex items-center">
                {/* <span className="mr-2 text-lg">{selectedCountryData.flag}</span> */}
                <span>{selectedCountryData.label}</span>
                <span className="ml-2 text-gray-500">{selectedCountryData.code}</span>
              </div>
            ) : (
              "Select country"
            )}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup heading="Popular Countries" className="border-b">
                {sortedCountries
                  .filter((c) => c.priority)
                  .map((country) => (
                    <CommandItem
                      key={country.value}
                      value={country.value}
                      onSelect={() => {
                        onCountryChange(country.value)
                        setOpen(false)
                      }}
                    >
                      <div className="flex items-center">
                        <span className="mr-2 text-lg">{country.flag}</span>
                        <span>{country.label}</span>
                        <span className="ml-2 text-gray-500">{country.code}</span>
                      </div>
                      <Check
                        className={`ml-auto h-4 w-4 ${selectedCountry === country.value ? "opacity-100" : "opacity-0"}`}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandGroup heading="All Countries">
                {sortedCountries
                  .filter((c) => !c.priority)
                  .map((country) => (
                    <CommandItem
                      key={country.value}
                      value={country.value}
                      onSelect={() => {
                        onCountryChange(country.value)
                        setOpen(false)
                      }}
                    >
                      <div className="flex items-center">
                        <span className="mr-2 text-lg">{country.flag}</span>
                        <span>{country.label}</span>
                        <span className="ml-2 text-gray-500">{country.code}</span>
                      </div>
                      <Check
                        className={`ml-auto h-4 w-4 ${selectedCountry === country.value ? "opacity-100" : "opacity-0"}`}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
