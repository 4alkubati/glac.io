# Greenland Lawn Care — Claude Code Context

## Project Identity
- **Client:** Greenland Lawn Care
- **Owner:** Mohammed Nabil
- **Email:** greenlawncare98@gmail.com
- **Phone:** +1 (403) 919-6986
- **Location:** Calgary, AB, Canada

## Hosting Stack
- **GitHub Repo:** https://github.com/4alkubati/glac.io
- **Branch:** main
- **Hosting:** GitHub Pages (serves from root of main branch)
- **DNS/CDN:** Cloudflare (free plan)
- **Domain:** greenlandlawncare.ca
- **Forms:** Formspree — https://formspree.io/f/xojrokey → sends to greenlawncare98@gmail.com
- **No framework** — pure HTML, CSS, vanilla JS

## Local Path
```
C:\Users\amrba\OneDrive\Desktop\AMR\CODE\glac.io
```

## File Structure
```
glac.io/
├── index.html              ← homepage
├── css/
│   └── style.css           ← all styles, CSS variables
├── js/
│   └── main.js             ← nav toggle, FAQ accordion, active link
├── assets/
│   └── images/             ← local images go here
└── pages/
    ├── about.html
    ├── contact.html        ← Formspree form ID: xojrokey
    ├── services.html       ← all 5 services listed
    ├── mowing.html         ← individual service page (to be built)
    ├── weedcontrol.html    ← individual service page (to be built)
    ├── fertilizer.html     ← individual service page (to be built)
    ├── cleanup.html        ← individual service page (to be built)
    └── maintenance.html    ← individual service page (to be built)
```

## Design System

### Colors (CSS variables in style.css)
```css
--green-dark:   #1a4d2a
--green-mid:    #23673a   ← primary brand color
--green-light:  #3a8c52
--green-pale:   #e8f5ec   ← light backgrounds
--green-accent: #5cb87a
--cream:        #faf8f3
--white:        #ffffff
--text-dark:    #1a1a1a
--text-mid:     #444
--text-muted:   #777
--border:       #e0e0dc
```

### Fonts
- **Display:** DM Serif Display (headings, hero)
- **Body:** DM Sans (all body text, UI)
- Loaded via Google Fonts in each HTML `<head>`

### Key CSS Classes
- `.btn .btn-primary` — green filled button
- `.btn .btn-ghost` — transparent white border button
- `.btn .btn-white` — white button (used on dark backgrounds)
- `.btn-lg` — large button size
- `.container` — max-width 1160px, centered, 24px padding
- `.section-header` — centered heading block with `.label` badge
- `.label` — small pill badge (green on light, or `.label--light` on dark)
- `.page-hero` — inner page hero (green gradient, centered text)
- `.cta-banner` — full-width green CTA section
- `.service-card` — card used in services grid
- `.review-card` — testimonial card
- `.faq-item / .faq-q / .faq-a` — accordion FAQ

## Services (5 total)
1. Mowing
2. Spring/Fall Cleanup
3. Weed Control
4. Fertilizer
5. General Lawn Maintenance

## Pages Status
| Page | Status |
|------|--------|
| index.html | ✅ Complete |
| pages/about.html | ✅ Complete |
| pages/contact.html | ✅ Complete (Formspree live) |
| pages/services.html | ✅ Complete |
| pages/mowing.html | ❌ Not built |
| pages/weedcontrol.html | ❌ Not built |
| pages/fertilizer.html | ❌ Not built |
| pages/cleanup.html | ❌ Not built |
| pages/maintenance.html | ❌ Not built |

## Outstanding Tasks
- [ ] Build 5 individual service pages (mowing, weedcontrol, fertilizer, cleanup, maintenance)
- [ ] Add real photos to services pages (owner will provide photos)
- [ ] Replace emoji placeholders in service cards with real images
- [ ] Add CNAME file to repo root with value: `greenlandlawncare.ca`
- [ ] Confirm Cloudflare DNS records are set (A records + CNAME for www)

## Cloudflare DNS Records Needed (GitHub Pages)
```
Type    Name    Value                   Proxy
A       @       185.199.108.153         DNS only
A       @       185.199.109.153         DNS only
A       @       185.199.110.153         DNS only
A       @       185.199.111.153         DNS only
CNAME   www     4alkubati.github.io     DNS only
```

## CNAME File
Create a file called `CNAME` (no extension) in repo root with one line:
```
greenlandlawncare.ca
```

## Git Workflow
```bash
# From C:\Users\amrba\OneDrive\Desktop\AMR\CODE\glac.io
git add -A
git commit -m "your message here"
git push origin main
```

## Nav Structure
```
Home → index.html
About → pages/about.html
Services (dropdown) →
  Weed Control → pages/weedcontrol.html
  Fertilizer → pages/fertilizer.html
  Mowing → pages/mowing.html
  Spring/Fall Cleaning → pages/cleanup.html
  General Maintenance → pages/maintenance.html
Contact → pages/contact.html
```

## Image Sources (currently pulling from HubSpot CDN)
These are temporary — replace with local images in assets/images/ when owner provides photos:
```
https://greenlandlawncare.ca/hs-fs/hubfs/IMG_9512.png
https://greenlandlawncare.ca/hs-fs/hubfs/IMG_9545.png
https://greenlandlawncare.ca/hs-fs/hubfs/IMG_9513.png
https://greenlandlawncare.ca/hs-fs/hubfs/IMG_9547.png
https://greenlandlawncare.ca/hs-fs/hubfs/IMG_9546.png
```

## Testimonials (real, do not modify)
- Timilehin Alo — NorthWest Calgary
- Brenda Allynye — NorthEast Calgary
- Jaypal Chauhan — NorthEast Calgary
- Mohammed Baessa — SouthWest Calgary
- Parsa Parker — SouthWest Calgary
- Taste of Yemen — Downtown Calgary

## Founder Quote
"Our mission is to create and maintain beautiful, healthy lawns that enhance the beauty of every property we serve." — Mohammed Nabil, Founder

## Social Links
- Facebook: https://www.facebook.com/share/1B53fH9sU2/?mibextid=wwXIfr
- Instagram: https://www.instagram.com/greeland_lawn_care_services
- LinkedIn: https://www.linkedin.com/in/moealthilaya/

## Hours
- Mon–Fri: 8am – 8pm
- Sat–Sun: 10am – 8pm
