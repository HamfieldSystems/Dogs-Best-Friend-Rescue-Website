# Dogs' Best Friend Rescue: website

A small, fast, static fundraising website for **Dogs' Best Friend Rescue Association**, a dog rescue in Ratchaburi, Thailand.

**Facebook is where the rescue publishes. The website is where people donate.**
The site is evergreen: it explains who the rescue is and what running it costs, and makes giving easy. For current news it sends people to Facebook. There's no CMS, no blog and nothing to update every week.

## Pages

| Page | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Mission, real photos, donate call to action, founder intro, other ways to help |
| Help keep the rescue running | `/donate/` | Ongoing costs, why monthly gifts matter, how to give |
| About | `/about/` | History, mission and founder story |
| Updates & contact | `/contact/` | Points to Facebook, plus email |

## Status: preview

- Online donation buttons are **switched off** (`donations.approved = false` in `src/config/site.ts`). Visitors see "coming soon" and are directed to Facebook or email instead. A yellow preview banner shows on every page.
- The phone number and postal address are hidden until confirmed.
- Nothing has been published, and no domain has been configured.

## Key files

- `src/config/site.ts` holds **all** contact details and donation links, in one place
- `docs/FOUNDER-CHECKLIST.md` lists what the founder needs to confirm before launch
- `docs/HANDOVER.md` covers ownership, free hosting (Cloudflare Pages / GitHub Pages) and maintenance
- `docs/SOURCES.md` records where the content and photos came from

## Quick start

```bash
npm install
npm run dev
```
