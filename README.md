# Dogs' Best Friend Rescue: website

A small, fast, static fundraising website for **Dogs' Best Friend Rescue Association**, a dog rescue in Ratchaburi, Thailand.

**Facebook is where the rescue publishes. The website is where people donate.**
The site is evergreen: it explains who the rescue is and what running it costs, and makes giving easy. For current news it sends people to Facebook. There's no CMS, no blog and nothing to update every week.

## Pages

| Page | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Mission, real photos, donate call to action, founder intro, other ways to help |
| Help keep the rescue running | `/donate/` | Ongoing costs, why monthly gifts matter, how to give |
| About | `/about/` | History, mission, vision and founder story |
| Get involved | `/get-involved/` | Adopt (2022 dogs), foster, sponsor, fly with a dog, volunteer, partners |
| Membership | `/membership/` | Four yearly membership levels and perks, joined by email |
| Contact | `/contact/` | Points to Facebook, plus email, phone and postal address |

## Status: preview

- All contact and donation details recovered from the 2022 site are **shown**: PayPal buttons, gift prices, both emails, phone and postal address. They still need the founder's confirmation (see the checklist).
- To switch every PayPal button off at once, set `donations.approved = false` in `src/config/site.ts`.
- A `noindex` tag keeps search engines away until launch. Set `site.indexable = true` to remove it.
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
