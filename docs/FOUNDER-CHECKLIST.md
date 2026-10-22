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

## Activities

- [ ] Is the rescue still doing **adoptions** and **flight volunteers** (USA, Canada, Europe)? Are **volunteer visits** still by appointment only?
- [ ] Does the rescue still run, or want to mention, the **Ratchaburi sterilisation work**? A Facebook post mentions raising 100,000 THB for it, but we couldn't read the full post, so the site doesn't mention it.

## Membership, sponsorship and partners (restored from the 2022 site)

- [ ] **Membership page.** It shows the four 2022 yearly levels: The Pups ฿1,000 (under 18s), The Chihuahua ฿2,000, The Bulldog ฿5,000 and The Great Dane ฿10,000, each with its perks. "Join" buttons open an email; the rescue replies with payment details, as before. Do the levels, prices and perks still stand? Each one promises ongoing work (a monthly newsletter, an annual general meeting, partner offers, naming a dog, an end-of-year celebration). Are you happy to keep those up? If not, edit `membership` in `src/config/site.ts`.
- [ ] **Sponsorship.** The Get involved page offers partial and full sponsorship with regular updates, a certificate and free Bulldog membership. Charcoal is shown as the 2022 example, with her surgery (40,000–50,000 baht) and X-ray (1,200 baht) estimates. Does Charcoal still need sponsoring, or should she be replaced or removed?
- [ ] **Partners.** The Get involved page thanks **Floyd Felines & Friends** and **Cibes Lift Thailand** (recycled crates for dog beds and climbing equipment), by name only. Are they still partners? The Cibes logo was left out until they give permission to use it.
- [ ] **Adoption.** The 2022 wording is back: "no fees and we can assist with relocation", every dog sterilised and vaccinated, "adopt, don't shop". It also shows all 15 dogs from the 2022 adoption and sponsor pages with their dates of birth, clearly labelled as from 2022. Is the wording still true? Are you happy to show those dogs?
- [ ] **Outreach.** The donate page quotes the 2022 statement that leftover funds go to education in local schools, sterilisation clinics and Freedom Flight costs. The About page includes the vision of mobile sterilisation clinics. Are these still accurate?
- [ ] **Older social accounts.** The contact page links `facebook.com/K9DRAS` and `twitter.com/K9DRAS`. Are these still active, or should the links be removed?

## Big numbers ribbon (home, donate and about pages)

Two numbers are already verified from the 2022 site and are shown: **since 2016** (Peter started fostering) and **50+** (dumped puppies Peter rescued and rehomed). The rest show as "X+" with a "Number to confirm" tag. Rough, rounded-down totals are fine and still build trust ("200+" beats an exact figure nobody can check). Fill in whichever you can:

- [ ] Dogs rescued in total (X+)
- [ ] Dogs adopted into new homes (X+)
- [ ] Dogs sterilised (X+)
- [ ] Dogs vaccinated (X+)
- [ ] Optional swaps if any of those are unknown: dogs living at the shelter for life, dogs flown to new homes abroad, countries dogs have flown to, years of Freedom Flights, local sterilisation clinic days

Each number goes in `impact.stats` in `src/config/site.ts`. Before launch, set `impact.showPlaceholders: false` to hide any you couldn't confirm.

## Photos needed (shown as striped "Photo needed" boxes)

- [ ] **Home:** a wide shot of the shelter today, ideally with Peter or Khung
- [ ] **About:** the shelter on the Ratchaburi farmland (fences, shade, dogs relaxing)
- [ ] **Donate:** the carer at work: feeding time, giving medicine or cleaning the runs
- [ ] **Get involved:** a foster dog at home; a dog in a travel crate or meeting its new family; a volunteer walking or playing with the dogs

Phone photos are fine. Natural light and the dogs' faces matter more than polish.

## Photos

- [ ] All photos come from the rescue's own 2022 website: the 15 dogs (Happy, Charcoal, Noodles, Bella, Angus, Pip, Macey, Tux, Zoe, Missy & Sox, Wrinkles, Oreo, Dahlia, Trixie, Penny), plus Rambo, Mousie (membership page), the cat and kitten photo from the Partners page, and Peter and Khung. Are you happy for them to be used? Would you like to swap any for newer photos?
- [ ] Stock photos from the old Wix site were deliberately left out.

## Domain

- [ ] Who owns `dogsbfrescue.org` now? Does the rescue want to use it? (Nothing has been configured.)
