# IIFC Website

Website for the Independent Interfraternity Council at the University of Nevada, Reno.

- **Live site:** https://unr-iifc.github.io
- **Code:** https://github.com/UNR-IIFC/unr-iifc.github.io (owned by the UNR-IIFC GitHub organization, not any one person)
- Changes pushed to the `main` branch go live in 1–2 minutes.

## Handing off to the next board

Do this each December after elections:

1. An outgoing owner invites the new president (and the VP of Administration) to the
   **UNR-IIFC** organization on GitHub with the **Owner** role: *People → Invite member*.
2. Once they accept, remove owners who are graduating. Always keep at least two owners.
3. Update the officers in `assets/js/data.js` and add new headshots to `assets/img/officers/`.
4. Hand over the council Gmail (nevadaiifcpresident@gmail.com). It's the organization's
   contact email and should own anything else the site depends on, like the complaint form.

## Updating the site

Almost everything you'll want to change lives in **`assets/js/data.js`**:

- **Chapters** — blurbs, Instagram links, photos
- **Officers** — names, positions, emails, headshots
- **Recruitment** — dates, interest form link, requirements
- **Events** — add one line per event; past events hide automatically

Leave a value as `""` if you don't have it yet — the site hides it or shows a "coming soon" note.

Photos go in `assets/img/`, then reference them in `data.js` like `"assets/img/theta-chi.jpg"`.

Officer headshots go in `assets/img/officers/`. Crop them square around the head and shoulders and resize to about 480×480 px (under 100 KB) — full camera files are 5+ MB and make the page slow.

`_originals/` holds full-size source photos. Don't upload that folder with the site.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `chapters.html` | Member chapters |
| `recruitment.html` | How to join |
| `events.html` | Events and executive board |
| `assets/css/style.css` | Colors, fonts, layout |
| `assets/js/site.js` | Puts the content from `data.js` onto the pages |
