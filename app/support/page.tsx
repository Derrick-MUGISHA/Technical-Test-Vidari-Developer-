import { MobileHeader } from "@/components/mobile-header"
import { DesktopHeader } from "@/components/desktop-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageSquare } from "lucide-react"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">How Can We Help You?</h1>
          <p className="text-[#D86411] max-w-2xl mx-auto">
            Our support team is here to assist you with any questions or issues you may have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Mail className="w-10 h-10 mx-auto text-[#D86411] mb-2 " />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Get help via email</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">support@vidaripay.com</p>
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#41BC3F] hover:bg-[#3aa83a]">Send Email</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Phone className="w-10 h-10 mx-auto text-[#D86411] mb-2" />
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>Talk to a representative</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">+234 800 123 4567</p>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-5pm WAT</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#41BC3F] hover:bg-[#3aa83a]">Call Now</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <MessageSquare className="w-10 h-10 mx-auto text-[#D86411] mb-2" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with our support team</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Available 24/7</p>
              <p className="text-sm text-gray-500 mt-2">Typical response in minutes</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#41BC3F] hover:bg-[#3aa83a]">Start Chat</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I purchase airtime?</AccordionTrigger>
                <AccordionContent>
                  To purchase airtime, select the Airtime tab on our homepage, choose your country and telecom provider,
                  enter the recipient's phone number, select an amount, choose your payment method, and click "Pay Now".
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does it take to receive a gift card?</AccordionTrigger>
                <AccordionContent>
                  Gift cards are typically delivered instantly to the recipient's email address after your payment is
                  confirmed. In some cases, it may take up to 15 minutes depending on system load.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept credit/debit cards, bank transfers, and various digital wallets including PayPal, Apple Pay,
                  Google Pay, and mobile money options depending on your country.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, we use industry-standard encryption and security protocols to protect your payment information.
                  We do not store your full card details on our servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I cancel a transaction?</AccordionTrigger>
                <AccordionContent>
                  Once a transaction is processed, it cannot be canceled as airtime and gift cards are delivered
                  instantly. If you encounter any issues, please contact our support team immediately.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Please describe your issue in detail" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-[#41BC3F] hover:bg-[#3aa83a]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
