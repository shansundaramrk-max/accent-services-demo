# Ascent Services — Production Website

React + TypeScript + Vite + Tailwind + Framer Motion.

## Current service structure

- `src/data/services.ts` — all service content and unique service imagery.
- `src/data/site.ts` — navigation and nested cybersecurity dropdown.
- `src/pages/ServicePage.tsx` — shared detail-page template.
- `src/components/service/*` — reusable service-page sections.
- `vercel.json` — SPA rewrite so refreshing any React route works on Vercel instead of returning a 404.

### Cybersecurity pages

The IT Solutions navigation now includes a dedicated Cybersecurity submenu with:

- Cybersecurity Overview
- Essential Eight
- NIST Cybersecurity Framework
- ISO/IEC 27001
- SOC 2 Readiness
- CIS Controls
- Penetration Testing
- Vulnerability Assessment
- Security Operations (SOC)
- Privileged Access Management, including password vaulting

**Terminology correction:** `NIST` is the standard acronym for the National Institute of Standards and Technology cybersecurity framework; `SOC` is the correct acronym, not `SOCK`. I could not verify `TCIDSS` as a recognized cybersecurity framework, so it has not been published as a claim. `CIS Controls` is used instead as a recognized practical control framework. Confirm if `TCIDSS` was intended to mean a specific framework and it can be added precisely.

## Contact form — Google email

The contact form is wired for a Google Apps Script web-app endpoint. The Apps Script sends each enquiry through Gmail/Google Workspace using `MailApp`.

### Setup

1. Open Google Apps Script and create a new project.
2. Copy `google-apps-script/Code.gs` into the project.
3. Set `RECIPIENT_EMAIL` to the Gmail/Google Workspace mailbox that should receive enquiries.
4. Deploy the script as a **Web app**, executing as your account and allowing access for anyone.
5. Copy the deployed `/exec` URL.
6. Create `.env.local` in the website root:

```bash
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

7. For Vercel, add the same variable under **Project Settings → Environment Variables**, then redeploy.

The browser sends the form without exposing a Gmail password or API credential.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

The included `vercel.json` handles client-side React routes, so URLs such as `/solutions/essential-eight` continue to work after a browser refresh.

