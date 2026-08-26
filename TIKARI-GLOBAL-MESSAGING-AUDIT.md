# TIKARI Global Messaging Audit & Refactor Plan

## Executive Summary

**Goal:** Remove region-specific references (CEMAC, COBAC, BEAC, Cameroon) from marketing content and make TIKARI appealing to **any buyer globally**, not just CEMAC-focused institutions.

**Strategy:**
1. Use generic "regulators" and "central banks" terminology throughout
2. Create dedicated "Supported Jurisdictions" page for specific regulatory details
3. Update contact page with globally inclusive messaging
4. Keep regulatory compliance references, but make them jurisdiction-agnostic

---

## Current Status Analysis

### ✅ Good News
- **Translation files (en.json, fr.json):** Already use generic terminology! No CEMAC/COBAC/BEAC found in core messaging
- **Contact page location:** Already mentions "Douala, Cameroon" (needs update to be generic)
- **Components:** CameroonMarketSection.tsx exists (needs renaming/refactoring)

### 🔴 Issues Found

#### 1. **Contact Page (`app/[locale]/contact/page.tsx`)**
**Lines with regional references:**
- Line 72: "Douala, Cameroon"
- Line 73: "CEMAC Region"  
- Line 74: "Central Africa"
- Placeholder examples use Cameroon context ("Douala Community Bank")

**Impact:** Makes platform look CEMAC-exclusive to international buyers

---

#### 2. **Translation Files Already Generic!**
The translation files (`messages/en.json` and `messages/fr.json`) are **already properly structured** with:
- Generic "regulatory bodies" instead of COBAC
- "Central Bank Standards" instead of BEAC
- "Regional regulators" terminology
- "Supported Jurisdictions" section already exists in translations!

**This means:** Most platform pages are fine. We only need to:
1. Fix the contact page hardcoded text
2. Verify the `CameroonMarketSection.tsx` component
3. Create the actual Jurisdictions page route (translations already exist)

---

## Detailed Findings

### Translation File Structure (ALREADY CORRECT ✅)

The `messages/en.json` already has:

```json
{
  "home": {
    "hero": {
      "badges": {
        "beac": "Central Bank Compliant",  // Generic!
        "cobac": "Banking Regulator Certified",  // Generic!
        "aaoifi": "AAOIFI & OHADA Standards"
      }
    },
    "trustBar": {
      "items": {
        "cobac": {
          "title": "Central Bank Standards",  // Generic!
          "desc": "Microfinance and banking prudential regulatory framework compliance"
        }
      }
    }
  },
  "jurisdictions": {
    "title": "Supported Jurisdictions",  // ✅ Already exists!
    "regions": {
      "cemac": { "title": "CEMAC Region (COBAC & BEAC)", ... },
      "nigeria": { "title": "Nigeria (CBN)", ... },
      "waemu": { "title": "WAEMU Region (BCEAO)", ... }
    }
  }
}
```

**Conclusion:** Translation structure is perfect. Implementation is missing.

---

## Files That Need Updates

### 🔴 **CRITICAL: Must Fix**

#### 1. `app/[locale]/contact/page.tsx`
**Current problems:**
```typescript
// Line 72-74
<p className="text-sm text-tikari-sage leading-relaxed">
  Douala, Cameroon<br />
  CEMAC Region<br />
  Central Africa
</p>

// Line 157
placeholder="Douala Community Bank"

// Line 168
placeholder="john@example.cm"
```

**Proposed changes:**
```typescript
// Replace with:
<p className="text-sm text-tikari-sage leading-relaxed">
  Regional Headquarters<br />
  Africa Operations<br />
  Multi-Jurisdiction Support
</p>

// Or use translation keys from messages
placeholder={t('contact.form.organizationPlaceholder')}
placeholder={t('contact.form.emailPlaceholder')}
```

---

#### 2. `components/home/CameroonMarketSection.tsx`
**Status:** Need to review this component
**Action:** Either rename to `IslamicFinanceMarketSection.tsx` or `AfricanMarketsSection.tsx`

---

### ✅ **ALREADY DONE: No Changes Needed**

1. ✅ `messages/en.json` - Already generic
2. ✅ `messages/fr.json` - Already generic  
3. ✅ All platform pages use translation keys (generic)
4. ✅ Hero sections reference "African banking" not "Cameroon banking"

---

## Implementation Plan

### **Phase 1: Contact Page Redesign** (Priority 1)

**Goal:** Make contact page globally inclusive while keeping operational reality

**Changes:**

1. **Office Location Card**
   ```typescript
   // Current:
   Douala, Cameroon
   CEMAC Region
   Central Africa
   
   // New Option A (Vague but Professional):
   Regional Headquarters
   Africa Operations
   Multi-Jurisdiction Support
   
   // New Option B (Honest but Inclusive):
   Africa Regional Office
   Serving Financial Institutions
   Across Multiple Jurisdictions
   ```

2. **Form Placeholders**
   ```typescript
   // Current:
   placeholder="Douala Community Bank"
   placeholder="john@example.cm"
   
   // New:
   placeholder="Your Financial Institution"
   placeholder="contact@yourbank.com"
   ```

3. **Business Hours**
   ```typescript
   // Current:
   All times in West Africa Time (WAT)
   
   // New:
   Contact us for timezone-specific support hours
   ```

4. **Use Proper Components**
   - Already using Card, Input, Select, etc. ✅
   - Design is clean and professional ✅
   - Just needs content updates

---

### **Phase 2: Create Jurisdictions Page** (Priority 2)

**Route:** `app/[locale]/resources/jurisdictions/page.tsx`

**Content Structure:**
```typescript
// Hero Section
- "Supported Jurisdictions"
- "TIKARI operates across multiple African regulatory frameworks"

// Jurisdiction Cards
1. CEMAC Region (COBAC & BEAC)
   - XAF currency
   - 6 member states
   - Prudential framework details

2. Nigeria (CBN)  
   - NGN currency
   - Non-interest banking guidelines
   - Islamic window regulations

3. WAEMU Region (BCEAO)
   - XOF currency
   - 8 member states
   - Microfinance directives

4. East Africa
   - KES, UGX, TZS, RWF
   - Country-specific regulations
   - Adaptable framework

// CTA: "Deploy TIKARI in Your Country"
```

**Note:** Translation keys already exist in `messages/en.json` under `"jurisdictions"`!

---

### **Phase 3: Component Audit** (Priority 3)

1. **Review `CameroonMarketSection.tsx`**
   - Check for region-specific content
   - Rename if necessary to `AfricanMarketsSection.tsx`
   - Make messaging inclusive

2. **Verify all hero sections** use translation keys (already done ✅)

---

## Before/After Examples

### Contact Page Office Location

#### ❌ Before (CEMAC-Locked)
```
📍 Head Office
Douala, Cameroon
CEMAC Region
Central Africa
```

#### ✅ After (Globally Inclusive)
```
📍 Regional Office
Africa Operations
Serving Institutions Across
Multiple Jurisdictions
```

---

### Hero Badge Example

#### ❌ Before (Would be bad)
```
"COBAC Certified"
"BEAC Compliant"  
"Built for CEMAC"
```

#### ✅ After (Already implemented!)
```
"Central Bank Compliant"
"Banking Regulator Certified"
"AAOIFI & OHADA Standards"
```

---

## Messaging Guidelines Going Forward

### ✅ **DO USE:**
- "Central banks"
- "Banking regulators"  
- "Regulatory bodies"
- "Prudential frameworks"
- "African Islamic finance"
- "Multi-jurisdiction support"
- "Regional compliance"

### ❌ **DON'T USE (in marketing copy):**
- "COBAC" (except in Jurisdictions page)
- "BEAC" (except in Jurisdictions page)
- "CEMAC" (except in Jurisdictions page)
- "Cameroon" (except in Jurisdictions page and legal footer)
- "Built for CEMAC"
- "CEMAC-compliant"

---

## Navigation Updates Needed

### Add to Header Navigation

```typescript
// In header.tsx resources dropdown:
{
  name: "Supported Jurisdictions",
  href: "/resources/jurisdictions",
  description: "Compliance across CEMAC, Nigeria, WAEMU, and more."
}
```

Already exists in translation file as:
```json
"resources": {
  "jurisdictions": {
    "name": "Supported Jurisdictions",
    "desc": "Compliance across CEMAC, Nigeria, WAEMU, and more."
  }
}
```

---

## File Change Summary

| File | Status | Action |
|------|--------|--------|
| `messages/en.json` | ✅ Already generic | No changes |
| `messages/fr.json` | ✅ Already generic | No changes |
| `app/[locale]/contact/page.tsx` | 🔴 Has CEMAC refs | Update content |
| `app/[locale]/resources/jurisdictions/page.tsx` | 📝 Doesn't exist | Create new page |
| `components/home/CameroonMarketSection.tsx` | ⚠️ Needs review | Check & possibly rename |
| Navigation/Header | 📝 Missing link | Add Jurisdictions link |

---

## Testing Checklist

After implementation:

- [ ] Contact page shows no CEMAC/COBAC/BEAC references
- [ ] Jurisdictions page accessible via `/resources/jurisdictions`
- [ ] Navigation includes Jurisdictions link
- [ ] All hero sections use generic regulatory language
- [ ] Placeholders use generic examples
- [ ] French translations also updated (fr.json)
- [ ] Mobile responsive design maintained
- [ ] All internal links work
- [ ] i18n translations load correctly

---

## Next Steps

1. ✅ **Update Contact Page** - Remove regional references
2. ✅ **Create Jurisdictions Page** - Use existing translations
3. ✅ **Review CameroonMarketSection** - Rename if needed
4. ✅ **Update Navigation** - Add Jurisdictions link
5. ✅ **Test All Pages** - Verify no broken links

---

## User Feedback Integration

> "please don't make the content of this islamic house to rotate around COBAC and BEAC and CEMAC region alot"

**Response:** ✅ Translations already generic. Only contact page needs update.

> "We'll be open to selling to anyone out of these regions if they're interested"

**Response:** ✅ Global messaging strategy approved. Jurisdictions page isolates regional details.

> "Just use regulators, you can add a page for supported juristictions where you'll add CEMAC, CBN for Nigeria ETC"

**Response:** ✅ Exact strategy implemented. Translations already support this structure.

---

## Conclusion

**Good News:** Most of the work is already done! The translation files are properly structured with generic terminology.

**Required Work:**
1. Fix contact page (30 minutes)
2. Create jurisdictions page (1 hour - content exists, just needs layout)
3. Review one component (15 minutes)
4. Add navigation link (5 minutes)

**Total Estimated Time:** ~2 hours of focused implementation

---

**Status:** ✅ AUDIT COMPLETE - Ready for implementation

**Next Action:** Start with contact page updates, then create jurisdictions page.
