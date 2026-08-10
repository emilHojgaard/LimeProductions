# Portfolio — Emil Højgaard Nielsen

Personal portfolio site. MSc in Software Design, IT University of Copenhagen — specialized in cybersecurity and web architecture.

**Live:** _(add URL once deployed)_

## Design

Broadsheet-editorial layout: sharp corners, flat surfaces, bold Georgia serif headlines with uppercase sans kickers, and one full-width double rule opening each major section. The background is a raw ember-silk photograph with no veil, and the palette is drawn from it — dark brown ink, peach tints, burnt-orange accent.

Five pages, routed client-side by hash: Home, Projects, Journey, Skills & Certs, Contact. Project cards open detail modals holding a captioned gallery of the running application, browsed with the arrows, the dots or the arrow keys; projects with two versions carry a bookmark for each. A single marker made of the sea photograph carries every state on the site — it lies as a line beneath the header on the front page, gathers into a ring around whichever section is open, and crawls along the row on each change, with the filter rows on Projects and Skills speaking the same language. The nav hides on scroll down and returns at the top of the page.

Screenshots were captured from the applications themselves: the two live sites directly, and the other three by cloning each repository, seeding its database where it had one, and running it locally. The screens that sit behind a login — the two games' admin and data pages, and a game session — were taken from a signed-in session.

## Structure

```
index.html        markup for all five pages
styles.css        design tokens + all styling (light and dark themes)
app.js            routing, modals, filters, nav behaviour
assets/           background image, CV as PDF, certificate scan
assets/shots/     project screenshots used by the cards and demos
candidatePhotos/  source photos considered for the background
```

No build step and no dependencies — open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Still to do

- Portrait photo
- Diploma scans for the three educational certificates
- Review the drafted skill-level descriptions on the Skills page
- Rebuild as a React + Vite app

## Credits

Background photograph by Mariola Grobelska on Unsplash.
