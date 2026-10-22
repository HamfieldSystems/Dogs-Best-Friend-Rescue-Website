# Design choices and why

This explains how the site looks and works, and the reasons behind each choice. Use it to keep the site consistent when anything changes.

## The strategy behind the design

- **Facebook is where the rescue publishes. The website is where people give.** The site is evergreen: it builds trust, explains the ongoing costs and makes donating easy. For anything current it sends people to Facebook, so the founder never has to update it.
- **Every page leads to giving.** There's a donate button in the header, a sticky "Donate to the dogs" bar on phones, a donate call to action in the footer, and a closing "One gift. One dog cared for." band at the end of most pages.
- **Nothing is made up.** Every fact, number, story and photo comes from the rescue's own 2022 website or the project brief (see `SOURCES.md`). Anything still to confirm is clearly marked as a placeholder.

## Reference and research

- **Reference site:** [PACS Thailand](https://pacsthailand.com), a Koh Phangan stray animal hospital. We borrowed its fresh feel:
  - bold sans-serif headlines with a second line in an accent colour
  - mostly white and pale backgrounds, with strong colour saved for a few bands
  - a big numbers strip
  - a floating "meet this animal" card over the hero photo
  - dog cards with Adopt/Sponsor tags, and a photo grid linking to social media
- **2026 best-practice guides** for charity sites and donation pages (Elevation Web, Torchbox, Fundraise Up, and M+R's donation-page figures) agreed on:
  - a clear headline that makes sense within five seconds
  - visible impact numbers
  - real people and real animals
  - monthly giving made easy
  - suggested amounts
  - a donate button on every page
  - WCAG 2.2 AA accessibility

## Fonts

| Use | Font | Why |
|---|---|---|
| Headings | **Bricolage Grotesque** (heavy, 700–800) | Fresh and friendly, with a little hand-made character that suits a small rescue, without copying PACS. |
| Body text | **Figtree** | Clean, warm and very easy to read, with a plain zero, which matters on a site full of prices like ฿1,000. |

**Rejected along the way:**
- **Fraunces**, a serif. It was warm, but felt traditional rather than fresh.
- **Atkinson Hyperlegible.** It's very legible, but draws every zero with a slash ("5Ø+", "2Ø16"), which looked wrong in prices and dates.

**Both fonts are bundled with the site**, with no Google Fonts or other outside requests. That's faster, more private, and keeps working if a third-party service changes.

**Readability rules:** body text is 18px, lines are at most about 66 characters, and line spacing is generous.

## Colour

The colours come from the rescue's **logo banner, which is red and teal**. The beige in the first version came from the small dog-and-cat logo and made every page feel the same.

| Colour | Hex | Used for | Contrast |
|---|---|---|---|
| Ink | `#122a30` | Body text | 15:1 on white (AAA) |
| Soft ink | `#475d63` | Secondary text | 7:1 on white (AAA) |
| White | `#ffffff` | Main background | |
| Pale teal | `#eef7f8` | Alternate sections | |
| Pale pink | `#fdf1ef` | Occasional warm sections (quotes, Charcoal, sponsorship) | |
| Deep teal | `#0a3d47` | Bold bands, numbers card, footer, **donate buttons** | white text 11.9:1 (AAA) |
| Teal | `#0b6574` | Links, section labels, button outlines | 6.7:1 on white (AAA) |
| Logo red | `#e31e24` | **Accent only**: icons, the heart on buttons, thin borders | |
| Accent red | `#b3141c` | Accent words in headlines, prices | 6.9:1 on white (AAA) |

**The rule for red:** red is the spice, not the main ingredient.
- **Never put body-size text on a red background.** White on bright red is famously hard to read, which is why the donate buttons moved from red to deep teal.
- **Use red only for:** the heart in each donate button, small icons, thin borders, the accent word in each headline, and tags with dark red text on pale pink.

**Varied backgrounds:** sections alternate between white, pale teal, pale pink and deep teal, so no two neighbouring sections look the same and pages don't feel uniform.

## Buttons

- **Donate (primary):** deep teal with white text and a red heart in a white circle. On dark sections and in the footer it flips to white, with the heart on a pale pink circle.
- **Secondary:** white with a teal outline.
- **Accessibility:** large tap targets (at least 44–52px tall), and a clear teal outline around whichever button is selected for keyboard users.

## Layout and white space

- **Generous spacing** between sections (64–120px depending on screen size). Long text is broken up with subheadings, icons, cards and photos.
- **Phones:** the headline and donate button come first, with the photo after it, so the main message and the ask are on the first screen.
- **Top bar:** "Help with an animal? Call 088 890 1926", as PACS does, so people with an emergency find the number straight away.

## No false bottoms

A "false bottom" is when a section ends exactly at the bottom of the screen with empty space beneath it, so the page looks finished and people stop scrolling.

**How the site avoids it**, by making sure something always crosses the bottom of the first screen:
- **Home, Donate and About:** the numbers card overlaps the bottom of the hero.
- **Get involved, Membership and Contact:** the hero photo or card hangs over into the next section. On wide screens the photo is sized from the screen height, so it always runs past the bottom edge.
- **Tight gaps** after the hero, so the next heading follows closely.

**Tested at 16 screen sizes on every page:** phones from 360px wide, five iPad sizes in both orientations, laptops, and monitors up to 2560px. That's 96 combinations in total, with no false bottoms. Repeat this check after any big layout change.

## Icons

Line icons from [Lucide](https://lucide.dev) (ISC licence) replaced emoji. They're written into the page when the site is built, so visitors download nothing extra. Lucide has no brand logos, so Facebook links use a speech-bubble icon.

## Trust and giving

- **Big numbers ribbon.** It shows the two figures that are already verified (since 2016, and 50+ puppies rescued by Peter), plus clearly marked "X+" placeholders for the founder to fill in. The research shows impact numbers build trust, and rounded-down figures like "200+" are fine.
- **Real people:** Peter and Khung are named and pictured, and appear in a trust line under the main headlines.
- **Dog cards** use only the dogs whose stories are verified (Charcoal, Noodles, Rambo), with Sponsor, Adopt and Adopted tags.
- **Donate page:**
  - the give box sits at the top
  - a clear "Care for one dog for a month · ฿1,000" option
  - a note that PayPal handles payment, so the rescue never sees card details
  - the 2022 gift list with prices
  - a short "Before you give" set of questions and answers
- **"Photo needed" boxes** mark exactly where a new photo would help most, and describe the shot to take.

## Changing the look later

All colours, fonts and spacing are set once, at the top of `src/styles/global.css`, as named colours and sizes such as `--teal-deep` and `--red-text`. Change a value there and the whole site updates. When making changes, keep to three rules:

1. **No body text on red.**
2. **Something should always cross the bottom of the first screen.**
3. **Check new colour pairs against WCAG AA:** 4.5:1 for text, 3:1 for icons and borders.
