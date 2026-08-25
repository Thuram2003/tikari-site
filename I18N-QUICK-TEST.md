# TIKARI i18n Quick Test Guide

## 🎯 Quick Verification Steps

### 1. **Start Development Server**
```bash
cd tikari-site
npm run dev
```

### 2. **Test English Version**
Navigate to: `http://localhost:3000/en`

**Expected Results:**
- ✅ Header shows "Book Demo" button
- ✅ Navigation menus: "Platform", "Solution", "Resources", "Company"
- ✅ Footer brand text in English
- ✅ Footer sections: "Platform", "Company", "Resources"
- ✅ "BEAC Compliant" and "CEMAC Region" badges
- ✅ Legal links: "Privacy Policy", "Terms of Service", "Security"

### 3. **Test French Version**
Navigate to: `http://localhost:3000/fr`

**Expected Results:**
- ✅ Header shows "Réserver une Démo" button
- ✅ Navigation menus: "Plateforme", "Solution", "Ressources", "Entreprise"
- ✅ Footer brand text in French
- ✅ Footer sections: "Plateforme", "Entreprise", "Ressources"
- ✅ "Conforme BEAC" and "Région CEMAC" badges
- ✅ Legal links: "Politique de Confidentialité", "Conditions d'Utilisation", "Sécurité"

### 4. **Test Navigation**

#### Desktop Mega Menu (English)
- Hover "Platform" → Should show:
  - "Banking Operations"
  - "Islamic Financing & Treasury"
  - "Compliance & Shariah Governance"
  - etc.

#### Desktop Mega Menu (French)
- Hover "Plateforme" → Should show:
  - "Opérations Bancaires"
  - "Financement et Trésorerie Islamique"
  - "Conformité et Gouvernance Shariah"
  - etc.

#### Mobile Menu (English)
1. Click hamburger menu
2. Click "Platform" → Expands to show all items
3. Click "Banking Operations" → Should navigate to `/en/platform/banking-operations`

#### Mobile Menu (French)
1. Click hamburger menu
2. Click "Plateforme" → Expands to show all items
3. Click "Opérations Bancaires" → Should navigate to `/fr/platform/banking-operations`

### 5. **Test Footer Links**

#### English Footer
- Click "About TIKARI" → `/en/about`
- Click "Shariah Board" → `/en/about#scholars`
- Click "Contact Us" → `/en/contact`

#### French Footer
- Click "À Propos de TIKARI" → `/fr/about`
- Click "Conseil Shariah" → `/fr/about#scholars`
- Click "Contactez-Nous" → `/fr/contact`

---

## 🔍 What to Look For

### ✅ Correct Behavior
- URLs automatically prefix with locale (`/en/...` or `/fr/...`)
- All text changes based on locale
- No English text appears on French pages (and vice versa)
- Links maintain locale when navigating

### ❌ Issues to Check
- Mixed languages on same page
- Broken links or 404 errors
- Missing translations (showing keys like `header.platform.title`)
- Layout shifts between languages

---

## 🛠️ Troubleshooting

### If you see translation keys instead of text:
```
header.bookDemo  ← Bad
Book Demo        ← Good
```

**Fix**: Check that translation key exists in both `messages/en.json` and `messages/fr.json`

### If links don't work:
- Ensure you're using `Link` from `@/i18n/navigation`, not `next/link`
- Check that the target page exists in `app/[locale]/...`

### If styles are broken:
- Verify `globals.css` is imported in layout
- Check Tailwind classes are not being purged

---

## 📱 Responsive Testing

### Desktop (> 1024px)
- ✅ Full navigation with mega menus
- ✅ "Book Demo" button visible
- ✅ Footer in 5 columns

### Tablet (768px - 1024px)
- ✅ Hamburger menu appears
- ✅ Footer in 2-3 columns

### Mobile (< 768px)
- ✅ Hamburger menu
- ✅ Expandable sections
- ✅ Footer stacks vertically
- ✅ Contact info readable

---

## ✨ Success Criteria

All tests pass if:
1. ✅ Both `/en` and `/fr` routes load without errors
2. ✅ All header navigation is translated
3. ✅ All footer sections are translated
4. ✅ Mobile menu works in both languages
5. ✅ Links navigate correctly with locale prefix
6. ✅ No console errors
7. ✅ Page loads in < 2 seconds

---

## 🎉 Expected Output

### English Page Meta
```html
<html lang="en">
<title>TIKARI Finance - Non-Interest & Faith-Based Financial Infrastructure</title>
```

### French Page Meta
```html
<html lang="fr">
<title>TIKARI Finance - Infrastructure Financière Sans Intérêt et Conforme à la Foi</title>
```

---

## 📝 Manual Verification Checklist

- [ ] English homepage loads correctly
- [ ] French homepage loads correctly
- [ ] Header "Book Demo" button shows correct text
- [ ] All 4 mega menus work in English
- [ ] All 4 mega menus work in French
- [ ] Mobile menu expands/collapses
- [ ] Footer brand description is translated
- [ ] Footer badges show correct text
- [ ] Footer links work
- [ ] Legal links in footer are translated
- [ ] No "Bank Partners" or "Careers" links visible
- [ ] Copyright year displays correctly

---

## 🚀 Next Steps After Verification

Once layout/header/footer are confirmed working:
1. Add translations for home page sections
2. Translate platform pages
3. Translate solutions pages
4. Add language switcher component
5. Implement locale redirects based on browser language

---

## 💡 Pro Tips

- Use browser DevTools to check `<html lang="...">` attribute
- Check Network tab to see if messages are loading
- Use React DevTools to inspect translation context
- Test with browser language set to French to verify auto-detection
