"use client"

import type React from "react"

import { useState } from "react"
import { MobileHeader } from "@/components/mobile-header"
import { DesktopHeader } from "@/components/desktop-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function GetStartedPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState<string | undefined>("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!firstName) newErrors.firstName = "First name is required"
    if (!lastName) newErrors.lastName = "Last name is required"

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!phone) newErrors.phone = "Phone number is required"

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the Terms of Service and Privacy Policy"
    }

    setErrors(newErrors)
    setIsFormValid(Object.keys(newErrors).length === 0)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      toast({
        title: "Account created successfully!",
        description: "Welcome to Vidaripay. You can now sign in with your credentials.",
        variant: "success",
      })

      // Redirect to sign in page
      router.push("/signin")
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.svg')" }}>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Enter your details to create your Vidaripay account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className={errors.firstName ? "text-red-500" : ""}>
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={errors.firstName ? "border-red-300 focus:ring-red-500 focus:border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className={errors.lastName ? "text-red-500" : ""}>
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={errors.lastName ? "border-red-300 focus:ring-red-500 focus:border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "border-red-300 focus:ring-red-500 focus:border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className={errors.phone ? "text-red-500" : ""}>
                  Phone number
                </Label>
                <div className={`phone-input-container ${errors.phone ? "error" : ""}`}>
                  <PhoneInput
                    international
                    defaultCountry="NG"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    className={errors.phone ? "border-red-300 focus:ring-red-500 focus:border-red-500" : ""}
                  />
                </div>
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className={errors.password ? "text-red-500" : ""}>
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "border-red-300 focus:ring-red-500 focus:border-red-500" : ""}
                />
                {errors.password ? (
                  <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                ) : (
                  <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className={errors.confirmPassword ? "text-red-500" : ""}>
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? "border-red-300 focus:ring-red-500 focus:border-red-500" : ""}
                />
                {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                />
                <label htmlFor="terms" className={`text-sm ${errors.terms ? "text-red-500" : "text-gray-600"}`}>
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#D86411] hover:text-orange-700">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#D86411] hover:text-orange-700">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && <p className="text-sm text-red-500 mt-1">{errors.terms}</p>}

              {Object.keys(errors).length > 0 && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Please fix the errors above to create your account.</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-[#41BC3F] hover:bg-[#3aa83a] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                <img src="/placeholder.svg?height=20&width=20" alt="Google" className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline">
                <img src="/placeholder.svg?height=20&width=20" alt="Facebook" className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#D86411] hover:text-orange-700 font-medium">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
