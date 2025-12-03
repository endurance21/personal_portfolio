# Theme Switching Guide

## Current Theme: Blue/Slate (Professional)
- Primary: Blue (#3B82F6)
- Background: Slate dark
- Feel: Cool, tech-focused

## Alternative Theme: Emerald/Teal (Warm)
- Primary: Emerald (#10b981)
- Background: Zinc dark
- Feel: Warmer, growth-focused

## Quick Switch Instructions

### To Switch to Emerald/Teal Theme:

1. **Update CSS:**
   ```bash
   mv src/index.css src/index-blue-theme.css
   mv src/index-alt-theme.css src/index.css
   ```

2. **Update Components:**
   Replace all instances in component files:
   - `blue-*` → `emerald-*`
   - `slate-*` → `zinc-*`

3. **Files to Update:**
   - `src/components/HeroSection.tsx`
   - `src/components/Navbar.tsx`
   - `src/components/Projects.tsx`
   - `src/components/TopSkills.tsx`
   - `src/components/Testimonials.tsx`
   - `src/components/WorkWithMe.tsx`
   - `src/components/CallToAction.tsx`
   - `src/components/Footer.tsx`
   - `src/pages/Index.tsx`

### Example Replacements:

**HeroSection.tsx:**
- `text-blue-400` → `text-emerald-400`
- `bg-blue-600` → `bg-emerald-600`
- `border-blue-500` → `border-emerald-500`
- `text-slate-50` → `text-zinc-50`
- `bg-slate-950` → `bg-zinc-950`

**Navbar.tsx:**
- `bg-blue-600` → `bg-emerald-600`
- `hover:bg-blue-700` → `hover:bg-emerald-700`
- `text-slate-*` → `text-zinc-*`

**Projects.tsx:**
- `text-blue-400` → `text-emerald-400`
- `hover:text-blue-400` → `hover:text-emerald-400`

**CallToAction.tsx:**
- `bg-blue-600` → `bg-emerald-600`
- `hover:bg-blue-700` → `hover:bg-emerald-700`
- `text-blue-400` → `text-emerald-400`

### Automated Script (Optional):

You can use find/replace in your editor:
- Find: `blue-` → Replace: `emerald-`
- Find: `slate-` → Replace: `zinc-`

## Visual Differences

### Blue Theme:
- Cool, professional
- Tech industry standard
- High contrast
- Modern SaaS feel

### Emerald Theme:
- Warmer, approachable
- Growth-focused
- Softer on eyes
- More creative feel

## Recommendation

- **Blue Theme**: Best for tech companies, SaaS products, enterprise
- **Emerald Theme**: Best for creative portfolios, growth-focused brands, eco/health tech

