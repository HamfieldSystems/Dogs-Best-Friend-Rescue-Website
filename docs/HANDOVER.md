# Deployment and handover

The site is plain static files with no CMS, database, server or paid services. Hosting is free.

## 1. Ownership first

The rescue, not the volunteer developer, should own every account:

1. **GitHub.** Create a free GitHub account or organisation with the rescue's email, for example `dogsbfrescue@gmail.com`. Transfer this repository to it (repo → Settings → Transfer). Keep the developer as a collaborator if useful.
2. **Hosting.** Create the Cloudflare account with the rescue's email too (instructions below).
3. **Domain.** If `dogsbfrescue.org` is reused, it must be registered in the rescue's name and renewed by the rescue. Write down where it's registered and when it renews.
4. **PayPal.** Donations go straight into the rescue's own PayPal. The website never touches money.

Keep a note of these logins somewhere safe that more than one trusted person can reach.

## 2. Hosting option A: Cloudflare Pages (recommended)

1. Sign in at dash.cloudflare.com, then go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Choose this repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variable: `SITE_URL` = the final address, e.g. `https://www.dogsbfrescue.org`
4. Save. Cloudflare gives you a free `*.pages.dev` address. Check it there first.
5. Add a custom domain only after the founder has approved the site.

After that, every change merged to `main` publishes itself within about a minute.

## 3. Hosting option B: GitHub Pages

This is what the staging site uses now: https://hamfieldsystems.github.io/Dogs-Best-Friend-Rescue-Website/

The workflow at `.github/workflows/deploy.yml` **republishes the site automatically every time `main` changes**, about a minute after each change. To redeploy without a change, go to **Actions → Deploy to GitHub Pages → Run workflow**.

To set it up on a new repo:

1. On a free GitHub account the repo must be **public**. Pages for private repos needs a paid plan.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`, or run the workflow by hand. Without a custom domain, the site appears at `https://<owner>.github.io/<repo>/`. The workflow sets the sub-path for you.

## 4. Going live checklist

- [ ] Founder has worked through `docs/FOUNDER-CHECKLIST.md`
- [ ] `src/config/site.ts` updated with the confirmed details
- [ ] Test a small real donation through each button
- [ ] `site.indexable` set to `true` so search engines can find the site
- [ ] Custom domain connected, if wanted
- [ ] Add the website link to the Facebook page's "About" section

## 5. Day-to-day: nothing

News, photos and appeals stay on Facebook. The website doesn't need regular updates.

Only touch it when one of these changes:

| Change | Where |
| --- | --- |
| Email, phone, address, Facebook link | `src/config/site.ts` |
| Donation links, or turning giving on and off | `src/config/site.ts` |
| Page wording | `src/pages/*.astro` (text sits between the HTML tags) |
| Photos | replace the file in `src/assets/photos/` keeping the same name |

Small text edits can be made straight on github.com: open the file, click the pencil icon, then **Commit changes**. The host rebuilds the site automatically.

## 6. Running it locally (developers only)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/
```

Requires Node 18.17+ (20 or 22 recommended). Astro is the only dependency.
