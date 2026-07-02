# Image Folder Structure Guide

## 📁 Image Directories Created

Your project now has the following image folders:

```
public/
├── images/
│   ├── hero/           # Hero section images
│   ├── services/       # Service card images
│   └── gallery/        # Gallery before/after images
```

## 🖼️ How to Add Images

### 1. **Hero Section Images** (`public/images/hero/`)
- **File**: `pest-control.jpg` or `pest-control.png`
- **Size**: ~800x600px (recommended width: 800px)
- **Usage**: Main hero section image on homepage
- **Current Usage**: Referenced in `app/page.tsx` as `heroImage="/images/hero/pest-control.jpg"`

### 2. **Service Images** (`public/images/services/`)
Add images for each service (optional):
- `cockroach-control.jpg`
- `termite-control.jpg`
- `rodent-control.jpg`
- `bedbugs-treatment.jpg`
- `mosquito-control.jpg`
- `spider-control.jpg`

**Size**: ~400x300px (recommended)
**Usage**: Can be added to ServiceCard component for visual enhancement

### 3. **Gallery Images** (`public/images/gallery/`)
Add before/after project images:
- `project-1-before.jpg` & `project-1-after.jpg`
- `project-2-before.jpg` & `project-2-after.jpg`
- etc.

**Size**: ~600x400px (recommended)
**Usage**: Gallery page before/after showcases

## 📝 Steps to Add Images

1. **Locate your images** on your computer
2. **Drag and drop** images into the appropriate folder:
   - Finder → Navigate to `/Users/mydigital/Documents/removepest/public/images/`
   - Or use VS Code File Explorer
3. **Update component references** if needed (examples below)

## 💡 Example Usage in Components

### Using Images in Hero Section (Already Configured)
```typescript
<HeroSection 
  title="Your Title"
  subtitle="Your subtitle"
  showContactForm={true}
  heroImage="/images/hero/pest-control.jpg"
/>
```

### Using Images in Service Cards (Future Enhancement)
```typescript
<ServiceCard 
  icon="🪳"
  title="Cockroach Control"
  description="..."
  features={[...]}
  image="/images/services/cockroach-control.jpg"  // Add this
/>
```

### Using Images in Gallery
```typescript
{
  id: 1,
  title: "Cockroach Treatment - Home",
  location: "Andheri West",
  category: "Cockroach Control",
  description: "Complete elimination in residential apartment",
  beforeImage: "/images/gallery/project-1-before.jpg",
  afterImage: "/images/gallery/project-1-after.jpg",
  status: "completed"
}
```

## ✅ Image Format Recommendations

| Purpose | Format | Size | Quality |
|---------|--------|------|---------|
| Hero Section | JPG/PNG | 800x600px | High (quality 80-90) |
| Services | JPG/PNG | 400x300px | High (quality 75-85) |
| Gallery Before/After | JPG/PNG | 600x400px | High (quality 80-90) |

## 🎨 Image Optimization Tips

1. **Compress images** before adding:
   - Use: https://tinypng.com or https://imageoptim.com
   - Keeps site performance fast

2. **Use modern formats**:
   - JPEG for photos (smaller file size)
   - PNG for images needing transparency

3. **Maintain aspect ratios**:
   - Hero: 4:3 or 16:9
   - Services: 4:3
   - Gallery: 3:2

## 🔧 Current Implementation

✅ **Hero Section**: Already configured to display images
- Component: `app/components/HeroSection.tsx`
- Contact Form: Built-in with form validation
- Image prop: `heroImage="/images/hero/pest-control.jpg"`

✅ **Contact Form in Hero**: Added and ready to use
- Component: `app/components/HeroContactForm.tsx`
- Location: Right side of hero section on desktop
- Sticky positioning for easy access while scrolling

## 🚀 Next Steps

1. **Add images** to the folders created
2. **Refresh browser** (localhost:3000) to see changes
3. **Optional**: Update ServiceCard and Gallery components to use images
4. **Test**: Verify images display correctly on desktop and mobile

---

Need help? Edit the image references in component files to match your image filenames.
