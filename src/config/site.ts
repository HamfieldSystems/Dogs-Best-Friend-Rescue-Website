/**
 * ─────────────────────────────────────────────────────────────
 *  THE ONLY FILE THAT NORMALLY NEEDS EDITING.
 *  Contact details, donation links and social links all live here.
 *  Every page reads from this file, so a change here updates the whole site.
 *
 *  Anything marked `confirmed: false` was recovered from the 2022 archived
 *  website and must be checked by the founder before the site goes public.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Dogs' Best Friend Rescue",
  legalName: "Dogs' Best Friend Rescue Association",
  location: 'Ratchaburi, Thailand',
  description:
    "Dogs' Best Friend Rescue is a small dog rescue and shelter in Ratchaburi, Thailand, caring for sick, injured and unwanted street dogs. Help keep the shelter running.",
};

export const facebook = {
  url: 'https://www.facebook.com/DOGSBFRESCUE',
  handle: '@DOGSBFRESCUE',
};

export const contact = {
  // Shown on the archived homepage (2022). Confirm it is still monitored.
  email: 'dogsbfrescue@gmail.com',
  // Archived site: "For help with an animal please call". Hidden until confirmed.
  phone: { display: '088 890 1926', tel: '+66888901926', confirmed: false },
  // Archived site listed a mail-only head office in Nonthaburi. Hidden until confirmed.
  postalAddress: {
    lines: ['86 Moo 1 Soi Raewadee 2', 'Tambon Talad Kwan', 'Nonthaburi 11000', 'Thailand'],
    confirmed: false,
  },
};

/**
 * DONATIONS
 * Set `approved: true` only after the founder has confirmed each link is correct,
 * belongs to the rescue, and is happy for it to be public.
 * While `approved` is false, donate buttons explain that links are being confirmed
 * and point people to Facebook / email instead. No money can be sent by mistake.
 */
export const donations = {
  approved: false,

  // One-off gift. From the archived site (2022): paypal.me/K9DRAS
  oneOff: {
    label: 'Give once with PayPal',
    url: 'https://paypal.me/K9DRAS',
  },

  // Monthly gift. Leave empty until a recurring option is set up and tested
  // (e.g. a PayPal "Donate" button with the monthly option switched on).
  // When empty, the monthly button is hidden and visitors are invited to
  // set up a regular transfer by getting in touch.
  monthly: {
    label: 'Give monthly with PayPal',
    url: '',
  },

  // The archived site offered bank details on request rather than publishing them.
  bankTransferOnRequest: true,
};
