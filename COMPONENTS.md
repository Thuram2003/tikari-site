# TIKARI UI Components Documentation

## Overview
Professional shadcn-style UI components built with Radix UI primitives and styled with TIKARI's brand colors. All components are fully typed with TypeScript and support all standard HTML attributes.

## Installation & Setup

### Dependencies Installed
```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.6.0",
  "lucide-react": "^1.28.0",
  "@radix-ui/react-slot": "^1.3.3"
}
```

### Path Aliases
All components use `@/` aliases configured in `tsconfig.json`:
- `@/components/ui` - UI components
- `@/lib/utils` - Utility functions

## Components

### Button
Professional button component with 6 variants and multiple sizes.

#### Variants
- **primary**: Tikari green (#1B4332) - Main CTAs
- **secondary**: Tikari gold (#CEA058) - Secondary actions
- **outline**: White with green border - Alternative actions
- **ghost**: Transparent with hover - Subtle interactions
- **sage**: Sage green (#8EA89D) - Neutral actions
- **cream**: Cream background (#F5F1E8) - Soft actions

#### Sizes
- **sm**: Small - Compact spaces
- **default**: Standard - Most use cases
- **lg**: Large - Prominent CTAs
- **xl**: Extra large - Hero sections
- **icon-sm/icon/icon-lg**: Icon-only buttons

#### Usage
```tsx
import { Button } from "@/components/ui";

// Basic button
<Button variant="primary">Click Me</Button>

// With icon
<Button variant="secondary">
  Continue
  <ArrowRight className="ml-2" />
</Button>

// As link
<Button href="/demo" variant="outline">
  Book Demo
</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="xl">Extra Large</Button>

// Icon button
<Button size="icon" variant="primary">
  <CheckCircle />
</Button>
```

#### Features
- Hover animation: -2px translateY on hover
- Active state: scale-95
- Soft shadows with brand colors
- Support for `asChild` prop (Radix Slot)
- Automatic link rendering with `href` prop

---

### Input
Text input component with consistent styling.

#### Usage
```tsx
import { Input } from "@/components/ui";

<Input 
  type="email" 
  placeholder="your@email.com"
  className="w-full"
/>
```

#### Features
- Rounded corners (xl)
- Subtle border (#1B4332/10)
- Focus ring in Tikari green
- Soft shadow
- Placeholder in sage color (#8EA89D)
- Full accessibility support

---

### Select
Native select dropdown with custom styling and chevron icon.

#### Usage
```tsx
import { Select } from "@/components/ui";

<Select>
  <option value="">Select option</option>
  <option value="cm">Cameroon</option>
  <option value="ng">Nigeria</option>
</Select>
```

#### Features
- Custom chevron icon (Lucide)
- Consistent with Input styling
- Rounded corners (xl)
- Focus states matching brand
- Hidden native arrow (appearance-none)

---

### Label
Form label component with proper accessibility.

#### Usage
```tsx
import { Label } from "@/components/ui";

<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />
```

#### Features
- Small font size
- Medium weight
- Dark green color (#0D2818)
- Peer-disabled support

---

### Textarea
Multi-line text input with resize handle.

#### Usage
```tsx
import { Textarea } from "@/components/ui";

<Textarea 
  placeholder="Enter your message..."
  className="min-h-[120px]"
/>
```

#### Features
- Same styling as Input
- Vertical resize only
- Minimum height: 120px
- Focus states

---

### Badge
Status indicators and labels with multiple variants.

#### Variants
- **default**: Tikari green
- **secondary**: Sage green
- **gold**: Gold accent
- **outline**: Bordered
- **success**: Emerald green
- **warning**: Amber
- **error**: Red

#### Usage
```tsx
import { Badge } from "@/components/ui";

<Badge>Default</Badge>
<Badge variant="gold">Premium</Badge>
<Badge variant="success">Active</Badge>
```

#### Features
- Rounded full
- Small text (xs)
- Bold font
- Transition colors

---

### Card Components
Premium card system with two variants and sub-components.

#### Main Components
- **Card**: Standard premium card
- **CardGold**: Gold-accented variant
- **CardHeader**: Card header section
- **CardTitle**: Card title (serif font)
- **CardDescription**: Card subtitle
- **CardContent**: Main content area
- **CardFooter**: Footer with actions

#### Usage
```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent,
  CardFooter 
} from "@/components/ui";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Features
- Hover animations (translateY -4px)
- Dynamic shadows
- Border color transitions
- Uses global CSS classes from globals.css:
  - `.premium-card`
  - `.premium-card-gold`

---

## Theme Colors

All components use TIKARI's color palette defined in `app/globals.css`:

```css
--color-tikari-green-dark: #0D2818    /* Dark green - text */
--color-tikari-green: #1B4332          /* Primary green */
--color-tikari-green-light: #2D6A4F    /* Light green - hover */
--color-tikari-sage: #8EA89D           /* Sage - secondary */
--color-tikari-sage-light: #E8EFEA     /* Light sage - bg */
--color-tikari-cream: #F5F1E8          /* Cream - bg */
--color-tikari-cream-light: #FAF9F6    /* Light cream - page bg */
--color-tikari-gold-dark: #A5812E      /* Dark gold */
--color-tikari-gold: #CEA058           /* Gold - accent */
--color-tikari-gold-light: #F4D35E     /* Light gold */
```

## Typography

### Font Families
- **Sans**: GT Walsheim - Body text, UI elements
- **Serif**: GT Sectra - Headlines, card titles

### Usage in Components
```tsx
// Serif for headings
<h1 className="font-serif">Title</h1>

// Sans for body (default)
<p className="font-sans">Body text</p>
```

## Best Practices

### 1. Combining Components
```tsx
<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Form Title</CardTitle>
      <Badge variant="gold">Premium</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select id="country">
          <option>Select...</option>
        </Select>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Submit</Button>
  </CardFooter>
</Card>
```

### 2. Custom Styling
All components accept `className` prop for extending styles:

```tsx
<Button className="w-full">Full Width</Button>
<Input className="max-w-xs">Constrained Width</Input>
```

### 3. Accessibility
- Always use `Label` with form inputs
- Set proper `id` and `htmlFor` attributes
- Use semantic HTML
- Include `aria-` attributes when needed

### 4. Icon Usage
Use Phosphor Icons (already installed) for consistency:

```tsx
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

<Button>
  Continue
  <ArrowRight className="ml-2" />
</Button>
```

## Demo Page

View all components in action:
```
/components-demo
```

This page showcases:
- All button variants and sizes
- Form inputs with labels
- Badge variations
- Card examples
- Complete form demonstration

## Utility Function

### cn()
Combines class names intelligently using `clsx` and `tailwind-merge`:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  condition && "conditional-class",
  className
)} />
```

This ensures Tailwind classes merge properly without conflicts.

## Adding More Components

To add new shadcn components:

1. Create file in `components/ui/`
2. Use consistent styling patterns
3. Import from Radix UI when needed
4. Apply TIKARI color tokens
5. Export from `components/ui/index.ts`

Example:
```tsx
// components/ui/NewComponent.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const NewComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("base-styles", className)}
    {...props}
  />
));

NewComponent.displayName = "NewComponent";
export { NewComponent };
```

## Support

For issues or questions:
- Check the demo page: `/components-demo`
- Review component source in `components/ui/`
- Check Radix UI docs: https://radix-ui.com
- Check shadcn docs: https://ui.shadcn.com
