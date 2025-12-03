# Alternative Theme - Warm Emerald/Teal Theme

This document shows how to switch to an alternative warmer theme with emerald/teal accents instead of blue.

## Theme Comparison

### Current Theme (Blue/Slate)
- **Primary Color**: Blue (#3B82F6)
- **Background**: Slate dark (#0f172a to #1e293b)
- **Accent**: Blue tones
- **Feel**: Cool, professional, tech-focused

### Alternative Theme (Emerald/Teal)
- **Primary Color**: Emerald/Teal (#10b981)
- **Background**: Zinc dark (#0a0a0a to #18181b)
- **Accent**: Emerald/Teal tones
- **Feel**: Warmer, more approachable, growth-focused

## How to Switch Themes

### Option 1: Quick Swap (Recommended)
1. Rename `src/index.css` to `src/index-blue-theme.css`
2. Rename `src/index-alt-theme.css` to `src/index.css`
3. Update component colors from `blue-*` to `emerald-*` and `slate-*` to `zinc-*`

### Option 2: Use Theme Switcher (Advanced)
Create a theme context and toggle between themes dynamically.

## Color Replacements Needed

In all component files, replace:
- `blue-400` → `emerald-400`
- `blue-500` → `emerald-500`
- `blue-600` → `emerald-600`
- `blue-700` → `emerald-700`
- `slate-*` → `zinc-*`

## Files to Update

1. `src/components/HeroSection.tsx`
2. `src/components/Navbar.tsx`
3. `src/components/Projects.tsx`
4. `src/components/TopSkills.tsx`
5. `src/components/Testimonials.tsx`
6. `src/components/WorkWithMe.tsx`
7. `src/components/CallToAction.tsx`
8. `src/components/Footer.tsx`
9. `src/pages/Index.tsx`

## Preview

The alternative theme uses:
- **Emerald/Teal** (#10b981) for primary actions and accents
- **Zinc** backgrounds instead of slate for a slightly warmer dark tone
- Same professional structure but with a warmer, more approachable feel

