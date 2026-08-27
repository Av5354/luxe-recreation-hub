# Pixel Perfect Premier

Build this website in React + Vite using the attached screenshot as the single source of truth.

IMPORTANT — EXACT RECREATION

I need a high-fidelity, pixel-perfect recreation, not a similar or inspired design.

Match the screenshot as closely as possible:

Exact section order and proportions

Spacing, padding, widths and heights

Typography, font sizes and weights

Colors, gradients and textures

Cards, borders, shadows and dividers

Images, cropping and positioning

Icons, buttons and navigation

Timeline and footer

Overall black + gold + red premium aesthetic

Do not redesign, simplify, modernize or add anything.
Do not add extra content or sections. If something looks unusual in the screenshot, reproduce it as shown.

CONTENT & IMAGES

Use the actual content, people, logos and images I provide. Do not replace them with fictional content.

For missing images, create visually matching original images with the same composition, lighting, colors and positioning, and keep them easy to replace later.

TECH STACK

Use:

React

Vite

JavaScript/JSX

GSAP

GSAP ScrollTrigger

Lenis

Lucide React

Do not use TanStack, Next.js or unnecessary frameworks.

Each major section must be a separate component:

Navbar
Hero
Stats
Values
Membership
AdvisoryBoard
Highlights
MembersSpeak
JourneyTimeline
MediaPartner
Footer


ANIMATIONS

Use GSAP + ScrollTrigger for:

Hero entrance animations

Text reveals

Image scale/parallax

Section scroll reveals

Staggered cards

Number counters

Timeline animation

Hover effects

Use Lenis globally for smooth scrolling and synchronize it with ScrollTrigger.

Animations should be smooth, premium and cinematic — not excessive.

RESPONSIVE

Make desktop closely match the screenshot and properly adapt for tablet/mobile without breaking the original visual hierarchy.

FINAL REQUIREMENT

After coding, run the website and visually compare it with the screenshot. Perform multiple refinement passes and fix spacing, typography, image positioning, card sizes and proportions until the result is as close to the reference as possible.

Do not stop after the first implementation.

Finally verify:

npm install
npm run dev
npm run build


npm run build must successfully create the dist/ folder.

The screenshot is the design source of truth. Recreate it as accurately as technically possible.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://luxe-recreation-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e322b0fa-ad64-4500-b824-46e74049fe75).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
