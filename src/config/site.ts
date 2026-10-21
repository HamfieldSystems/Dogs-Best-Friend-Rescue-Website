/**
 * ─────────────────────────────────────────────────────────────
 *  THE ONLY FILE THAT NORMALLY NEEDS EDITING.
 *  Contact details, donation links and social links all live here.
 *  Every page reads from this file, so a change here updates the whole site.
 *
 *  Details below were recovered from the rescue's archived website (2022).
 *  They are shown on the site so it looks as it should, but each one still
 *  needs the founder's confirmation — see docs/FOUNDER-CHECKLIST.md.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Dogs' Best Friend Rescue",
  legalName: "Dogs' Best Friend Rescue Association",
  location: 'Ratchaburi, Thailand',
  description:
    "Dogs' Best Friend Rescue is a small dog rescue and shelter in Ratchaburi, Thailand, caring for sick, injured and unwanted street dogs. Help keep the shelter running.",
  // Keep false until launch so search engines don't list the preview.
  indexable: false,
};

export const facebook = {
  url: 'https://www.facebook.com/DOGSBFRESCUE',
  handle: '@DOGSBFRESCUE',
};

// Older accounts linked from the archived site (2022).
export const olderSocials = [
  { label: 'Facebook (older page)', url: 'https://www.facebook.com/K9DRAS' },
  { label: 'X / Twitter @K9DRAS', url: 'https://twitter.com/K9DRAS' },
];

export const contact = {
  // Main contact on the archived homepage.
  email: 'dogsbfrescue@gmail.com',
  // Used on the archived About and Donate pages, and for PayPal.
  secondaryEmail: 'k9dras@gmail.com',
  // Archived site: "For help with an animal please call". Set show: false to hide.
  phone: { display: '088 890 1926', tel: '+66888901926', show: true },
  // Archived site: head office, mail only. Set show: false to hide.
  postalAddress: {
    lines: ['86 Moo 1 Soi Raewadee 2', 'Tambon Talad Kwan', 'Nonthaburi 11000', 'Thailand'],
    show: true,
  },
};

/**
 * MEMBERSHIP — the yearly levels from the archived Membership page (2022).
 * People enquire by email; the rescue replies with payment details.
 */
export const membership = {
  levels: [
    { name: 'The Pups', amount: 1000, note: 'Junior members under 18', perks: ['Membership certificate', 'Name a dog!'] },
    { name: 'The Chihuahua', amount: 2000, perks: ['Membership certificate', 'Monthly newsletter', 'Invitation to the Annual General Meeting'] },
    { name: 'The Bulldog', amount: 5000, perks: ['Membership certificate', 'Monthly newsletter', 'Invitation to the Annual General Meeting', 'Special offers from our partners'] },
    { name: 'The Great Dane', amount: 10000, perks: ['Membership certificate', 'Monthly newsletter', 'Invitation to the Annual General Meeting', 'Special offers from our partners', 'End of year celebration invitation', 'Name a dog'] },
  ],
};

/** PARTNERS — thanked on the archived Partners page (2022). */
export const partners = [
  { name: 'Floyd Felines & Friends', text: '' },
  { name: 'Cibes Lift Thailand', text: 'Providing recycled crates for use as dog beds and climbing equipment.' },
];

/**
 * DONATIONS
 * `approved: false` switches every PayPal button off in one go (visitors are
 * pointed to Facebook / email instead) if a link ever needs to be pulled.
 */
const paypalItem = (amount: number) =>
  `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=k9dras@gmail.com&item_name=Dogs%27%20Best%20Friend%20Rescue%C2%A0Association&amount=${amount}&currency_code=THB`;

export const donations = {
  approved: true,

  // One-off gift of any amount. From the archived site (2022).
  oneOff: {
    label: 'Give with PayPal',
    url: 'https://paypal.me/K9DRAS',
  },

  // Monthly gift. Leave empty until a recurring option is set up and tested
  // (e.g. a PayPal "Donate" button with the monthly option switched on).
  // When empty, the monthly button is hidden and visitors are invited to
  // get in touch to set up a regular gift.
  monthly: {
    label: 'Give monthly with PayPal',
    url: '',
  },

  // The archived site offered bank details on request rather than publishing them.
  bankTransferOnRequest: true,

  // "Take your pick" gifts from the archived Donate page, with 2022 prices.
  // `url` empty = "contact us" instead of a PayPal button.
  pricesYear: 2022,
  gifts: [
    { amount: 1000, title: 'All a dog needs, for a month', text: 'Covers the basic care of one dog at the shelter for a month: food, preventative medicine, vaccinations and a health check.', url: paypalItem(1000), monthly: true },
    { amount: 3000, title: 'A year of worm, tick and flea protection', text: 'A year’s supply of preventative medication for one dog, including a dewormer to prevent deadly diseases such as heartworm.', url: paypalItem(3000) },
    { amount: 300, title: 'One metre of fencing', text: 'Bigger, safer runs for the dogs, with a high brick layer to keep out unwanted visitors such as cobras.', url: paypalItem(300) },
    { amount: 200, title: 'A harness and lead', text: 'The dogs love to chew everything, so the rescue gets through a lot of collars and leads.', url: paypalItem(200) },
    { amount: 3000, title: 'A travel crate for a Freedom Flight', text: 'Helps send an adopted dog to their new family abroad. Please write “travel crate” in the PayPal note.', url: paypalItem(3000) },
    { amount: 10000, title: 'A Freedom Flight', text: 'Covers a dog’s flight to their new family as a flight volunteer’s oversized luggage. Get in touch to ask which dogs need to fly.', url: '' },
  ],
};
