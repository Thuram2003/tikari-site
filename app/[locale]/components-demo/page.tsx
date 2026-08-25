"use client";

import { 
  Button, 
  Input, 
  Select, 
  Label, 
  Textarea, 
  Badge,
  Card,
  CardGold,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui";
import { ArrowRight, CheckCircle, ShieldCheck } from "@phosphor-icons/react";

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-tikari-cream-light py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-bold text-tikari-green-dark">
            TIKARI UI Components
          </h1>
          <p className="text-tikari-sage">
            shadcn-style components with Tikari branding and Radix UI primitives
          </p>
        </div>

        {/* Buttons Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-tikari-green-dark mb-2">Buttons</h2>
            <p className="text-sm text-tikari-sage">Various button variants with different sizes</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-tikari-green mb-3">Primary Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="sage">Sage Button</Button>
                <Button variant="cream">Cream Button</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-tikari-green mb-3">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">
                  <CheckCircle className="mr-2" />
                  With Icon
                </Button>
                <Button variant="secondary">
                  Continue
                  <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline">
                  <ShieldCheck className="mr-2" />
                  Secure
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-tikari-green mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-tikari-green mb-3">Icon Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="icon-sm" variant="outline">
                  <CheckCircle />
                </Button>
                <Button size="icon" variant="primary">
                  <ArrowRight />
                </Button>
                <Button size="icon-lg" variant="secondary">
                  <ShieldCheck />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-tikari-green-dark mb-2">Form Inputs</h2>
            <p className="text-sm text-tikari-sage">Input fields, selects, and textareas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select id="country">
                <option value="">Select a country</option>
                <option value="cm">Cameroon</option>
                <option value="ng">Nigeria</option>
                <option value="cd">DR Congo</option>
                <option value="ga">Gabon</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount (XAF)</Label>
              <Input id="amount" type="number" placeholder="10000" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message here..." />
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-tikari-green-dark mb-2">Badges</h2>
            <p className="text-sm text-tikari-sage">Status indicators and labels</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="gold">Gold</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-tikari-green-dark mb-2">Cards</h2>
            <p className="text-sm text-tikari-sage">Premium card components with hover effects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>
                  This is a premium card with subtle border and shadow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-tikari-green-dark/80">
                  Card content goes here with proper spacing and styling.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <CardGold>
              <CardHeader>
                <CardTitle>Gold Card</CardTitle>
                <CardDescription>
                  Premium variant with gold accent border
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-tikari-green-dark/80">
                  This card has a special gold border that appears on hover.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">
                  Get Started
                </Button>
              </CardFooter>
            </CardGold>

            <Card>
              <CardHeader>
                <CardTitle>With Badge</CardTitle>
                <CardDescription>
                  Card with status badge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="success">Active</Badge>
                  <p className="text-sm text-tikari-green-dark/80">
                    Cards can contain any combination of components.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="primary">
                  Primary
                </Button>
                <Button size="sm" variant="ghost">
                  Cancel
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Complete Form Example */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-tikari-green-dark mb-2">Complete Form Example</h2>
            <p className="text-sm text-tikari-sage">All components working together</p>
          </div>

          <Card className="max-w-2xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Request a Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below to schedule your consultation
                  </CardDescription>
                </div>
                <Badge variant="gold">Premium</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo-name">Full Name *</Label>
                    <Input id="demo-name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-email">Email *</Label>
                    <Input id="demo-email" type="email" placeholder="john@company.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="demo-company">Company Name</Label>
                  <Input id="demo-company" placeholder="Your Company Ltd." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="demo-type">Account Type</Label>
                  <Select id="demo-type">
                    <option value="">Select account type</option>
                    <option value="individual">Individual</option>
                    <option value="business">Business</option>
                    <option value="enterprise">Enterprise</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="demo-message">Additional Information</Label>
                  <Textarea 
                    id="demo-message" 
                    placeholder="Tell us about your needs..."
                    className="min-h-[100px]"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="primary" className="flex-1">
                Submit Request
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="ghost">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </section>

      </div>
    </div>
  );
}
