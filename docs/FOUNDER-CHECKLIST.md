# Things to confirm with the founder before going live

Everything on the site came from the rescue's own website as archived in 2022, the public Facebook page title, or the project brief. Nothing has been made up. These points still need a yes or no from the founder.

The preview already shows all the contact and donation details recovered from the 2022 site, so it looks as it should. A `noindex` tag keeps search engines away until launch (`site.indexable` in `src/config/site.ts`).

## Donations (live in the preview; to switch every PayPal button off at once, set `donations.approved: false`)

- [ ] **PayPal link.** The 2022 site used `paypal.me/K9DRAS`. Is it still active, and does it belong to the rescue?
- [ ] **Gift buttons.** The donate page lists the 2022 "take your pick" items with PayPal buttons going to `k9dras@gmail.com`: ฿1,000 a month for one dog's basic care, ฿3,000 for a year of parasite medication, ฿300 a metre of fencing, ฿200 a harness and lead, ฿3,000 a travel crate, and ฿10,000 a Freedom Flight (contact only). Are the PayPal account and prices still right? Are Freedom Flights still happening?
- [ ] **Monthly giving.** Do you want a monthly option? PayPal.me can't take recurring gifts. A PayPal **Donate button** with "make this monthly" switched on can. Once it's set up, paste its link into `monthly.url` in `src/config/site.ts`.
- [ ] **Bank transfer.** Should the site keep saying "email us for bank details"? That's what the 2022 site did. We have **not** published any bank details.
- [ ] **What donations pay for.** Please check the four costs listed: vet care, food, electricity and running costs, and one carer's wage. Is the wording right? Are you happy for the carer's wage to be mentioned in public?
- [ ] **Charcoal's story.** The donate page mentions her 2022 surgery estimate of 40,000 to 50,000 baht, clearly dated 2022. Keep it, update it, or remove it?

## Identity and legal status

- [ ] **Legal name and status.** The 2022 site said "a non-profit charitable animal welfare organization". Is the Association formally registered in Thailand? If so, what's the registration number? Can donors claim tax relief anywhere? (The site makes **no** registration or tax claims at the moment.)
- [ ] **Location.** The site says Ratchaburi. Is that still correct?
- [ ] **Founder story.** The About page uses Peter's story from the 2022 site. Is Peter happy with it and with naming Khung?
- [ ] **Photo of Peter and Khung.** Is it really them, and are they happy for it to be used?

## Contact

- [ ] **Email.** The site shows `dogsbfrescue@gmail.com` as the main address and `k9dras@gmail.com` as a second one. Are both still monitored? Should one be dropped?
- [ ] **Phone** `088 890 1926` ("for help with an animal"). It's shown on the contact page and in the footer. Still correct? To hide it, set `phone.show: false`.
- [ ] **Postal address** (Nonthaburi, mail only). It's shown on the contact page. Still correct, and are you happy for it to be public? To hide it, set `postalAddress.show: false`.
- [ ] **Facebook.** The site links to `facebook.com/DOGSBFRESCUE`. The 2022 site linked to `facebook.com/K9DRAS` and `twitter.com/K9DRAS`. Should the older accounts be linked too?

## Activities

- [ ] Is the rescue still doing **adoptions** and **flight volunteers** (USA, Canada, Europe)? Are **volunteer visits** still by appointment only?
- [ ] Does the rescue still run, or want to mention, the **Ratchaburi sterilisation work**? A Facebook post mentions raising 100,000 THB for it, but we couldn't read the full post, so the site doesn't mention it.

## Membership and partners (found on the 2022 site, not used on the new one)

- [ ] **Membership.** In 2022 the Association offered yearly membership at ฿1,000 (Pups, under 18), ฿2,000 (Chihuahua), ฿5,000 (Bulldog) and ฿10,000 (Great Dane). Benefits included a certificate, a monthly newsletter, an AGM invitation and partner offers. The new site leaves it out because newsletters and AGMs create admin work. Does membership still exist? If it does, the simplest option would be one line on the donate page that says "ask us about membership".
- [ ] **Partners.** The 2022 site thanked **Floyd Felines & Friends** and **Cibes Lift Thailand** (which provided recycled crates for dog beds and climbing equipment). Are they still partners, and would they like to be thanked on the site? This would help build trust.

## Photos

- [ ] All photos come from the rescue's own 2022 website: Happy, Rambo, Charcoal, Bella, Angus, Pip, Macey, Tux, Zoe, Missy & Sox, and Peter and Khung. Are you happy for them to be used? Would you like to swap any for newer photos?
- [ ] Stock photos from the old Wix site were deliberately left out.

## Domain

- [ ] Who owns `dogsbfrescue.org` now? Does the rescue want to use it? (Nothing has been configured.)
