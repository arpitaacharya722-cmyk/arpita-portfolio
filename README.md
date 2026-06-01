<<<<<<< HEAD
# Arpita Acharya — Personal Portfolio

A fully interactive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

**Live features:**
- Smooth scroll-triggered animations throughout every section
- Download CV button that generates and saves a formatted PDF in the browser
- Contact form with real email delivery via EmailJS
- Dark theme with an energetic orange accent, Outfit + Space Mono fonts
- Fully responsive layout

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 + shadcn/ui components |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| PDF Generation | jsPDF |
| Email Delivery | EmailJS |
| Routing | Wouter |
| Language | TypeScript |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky nav with smooth scroll
│   ├── Hero.tsx          # Landing section + Download CV button
│   ├── About.tsx         # Bio + quick facts
│   ├── Skills.tsx        # Technical skills by category
│   ├── Projects.tsx      # Project cards
│   ├── Education.tsx     # Timeline + certifications
│   ├── Contact.tsx       # Contact form + info
│   └── ui/               # shadcn/ui component library
├── lib/
│   ├── generateCV.ts     # PDF CV generator (jsPDF)
│   └── utils.ts          # Tailwind class utilities
├── pages/
│   ├── Home.tsx          # Composes all sections
│   └── not-found.tsx     # 404 page
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.tsx
├── App.tsx               # Router setup
├── main.tsx              # Entry point
└── index.css             # Theme variables + global styles
```

---

## Getting Started

### Prerequisites

Make sure you have **Node.js 18+** and **npm** installed.

Check: `node --version` and `npm --version` in your terminal.

---
## Making your profile image public

If you want your profile image to be visible to everyone who visits your deployed site, add a file named `profile.jpg` to the project's `public/` folder and push it to GitHub. The site will serve that image at the root (`/profile.jpg`).

Quick options:

- Manually: copy your chosen image into `artifacts/portfolio/public/profile.jpg`, then run:

```powershell
cd artifacts/portfolio
git add public/profile.jpg
git commit -m "Add public profile image"
git push
```

- Helper script: from the project root run:

```powershell
node scripts/save-profile.js C:\path\to\your\image.jpg
git add public/profile.jpg
git commit -m "Add public profile image"
git push
```

After pushing, the site will show `/profile.jpg` to all visitors.


### Step 1 — Get the code

**Option A — Download the source:**
1. Download the project ZIP or clone the repository.
2. Unzip or open it in your terminal.
3. Navigate into the `artifacts/portfolio` folder.

**Option B — Clone via Git:**
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO/artifacts/portfolio
```

---

### Step 2 — Open in VS Code

```bash
# From inside the artifacts/portfolio folder:
code .
```

Or open VS Code manually → File → Open Folder → select the `artifacts/portfolio` folder.

---

### Step 3 — Install dependencies

```bash
npm install
```

---

### Step 4 — Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` — for basic local development you only need the defaults (already set). See the EmailJS section below if you want the contact form to send real emails.

---

### Step 5 — Run the development server

```bash
npm run dev
```

Open your browser at **http://localhost:3000** — the site is live with hot reload.

---

### Build for production

```bash
npm run build
```

Output goes into `dist/public/`. You can host it on GitHub Pages, Vercel, Netlify, or any static host.

---

## Enabling the Contact Form (EmailJS)

The contact form works out of the box in "mailto fallback" mode (opens your email app). To enable **direct in-browser email delivery**:

1. Sign up free at [https://www.emailjs.com](https://www.emailjs.com) — 200 emails/month free
2. **Create an Email Service** → connect your Gmail → copy the **Service ID** (e.g. `service_abc123`)
3. **Create an Email Template** → use these variables in the template body:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   
   {{message}}
   ```
   Copy the **Template ID** (e.g. `template_abc123`)
4. Go to **Account** → copy your **Public Key**
5. Add all three to your `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_abc123
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Restart the dev server — the form button changes to "Send Message"

---

## Deploying to GitHub Pages

### One-time setup

1. Install the GitHub Pages plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist/public"
   ```

3. In `vite.config.ts`, set the base to your repo name:
   ```ts
   const basePath = process.env.BASE_PATH ?? "/your-repo-name/";
   ```

4. Push the deploy:
   ```bash
   npm run deploy
   ```

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Pushing to GitHub

```bash
# Inside the artifacts/portfolio folder

# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit: Arpita Acharya portfolio"

# 4. Create a new repo on github.com, then connect it:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 5. Push
git branch -M main
git push -u origin main
```

> Make sure `.env` is listed in `.gitignore` (it is by default) so your EmailJS keys are never committed.

---

## Customisation

All personal content lives in the component files — no config file needed:

| What to change | Where |
|---|---|
| Name, bio, objective | `src/components/Hero.tsx`, `src/components/About.tsx` |
| Skills list | `src/components/Skills.tsx` |
| Projects | `src/components/Projects.tsx` |
| Education & certifications | `src/components/Education.tsx` |
| Contact info | `src/components/Contact.tsx` |
| CV PDF content | `src/lib/generateCV.ts` |
| Colours & fonts | `src/index.css` (CSS custom properties) |

---

## License

This project is personal and not licensed for redistribution. Feel free to use it as inspiration for your own portfolio.

---

*Built with React + Vite*
=======
# arpita-portfolio
>>>>>>> 2bd22f4e573c031eea994a37125fe67be4dfb1bb
