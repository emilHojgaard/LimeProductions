# Portfolio — Emil Højgaard Nielsen

Personal portfolio site. MSc in Software Design, IT University of Copenhagen — specialized in cybersecurity and web architecture.

**Live:** _(add URL once deployed)_

## Design

Broadsheet-editorial layout: sharp corners, flat surfaces, bold Georgia serif headlines with uppercase sans kickers, and one full-width double rule opening each major section. The background is a raw ember-silk photograph with no veil, and the palette is drawn from it — dark brown ink, peach tints, burnt-orange accent.

Five pages, routed client-side by hash: Home, Projects, Journey, Skills & Certs, Contact. Project cards open detail modals. The tag rows on Projects and Skills actually filter, and skill chips reveal a line about proficiency when tapped. The nav hides on scroll down and returns on scroll up.

## Structure

```
index.html        markup for all five pages
styles.css        design tokens + all styling (light and dark themes)
app.js            routing, modals, filters, nav behaviour
assets/           background image
```

No build step and no dependencies — open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Still to do

- Real screenshots for the project cards
- Course length and links for the three certificates
- LinkedIn URL, portrait photo, CV as PDF
- Review the drafted skill-level descriptions on the Skills page
- Rebuild as a React + Vite app

## Credits

Background photograph by Mariola Grobelska on Unsplash.
