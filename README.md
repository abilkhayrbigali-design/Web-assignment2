# Steam Game Hub - Assignment 2

Responsive student website for Web Technologies I. Team Eggs, group SE-2507.

Repository: https://github.com/abilkhayrbigali-design/Web-assignment2

Website address: https://abilkhayrbigali-design.github.io/Web-assignment2/

## Run locally

Open `index.html` in a browser. All styles, scripts and images are local; no installation, build process, API key or server is required.

## Assignment requirements

| Requirement | Implementation |
| --- | --- |
| Task 1: Flexbox navigation | All eight pages use `.navbar` and `.nav-menu`, horizontal alignment, vertical centering, wrapping and gaps. |
| Task 2: Flexbox card row | Home (4 cards), Featured Games (8), Games (6); each has an image, heading, description and working link styled as a button. Equal heights and bottom-aligned buttons within each row. |
| Task 3: Grid areas | Every page uses named `header`, `sidebar`, `main`, `footer` areas. Header and footer span both columns; sidebar sits on the left. |
| Task 4: image gallery | Community contains 9 separate local SVG illustrations in a Grid, equal cells, 20px gaps and captions on hover or keyboard focus. Touch devices show captions automatically. |
| Part 3: combined responsive site | Shared styles and navigation across all pages; Grid for structure, Flexbox for navigation and components. |
| Part 4: publishing | Static GitHub Pages site, branch `main`, root folder. |

## Files

- `index.html`, `featured.html`, `games.html`, `categories.html`, `news.html`, `community.html`, `about.html`, `contact.html`: eight site pages.
- `css/style.css`: existing visual theme and component styles.
- `css/part1.css`: shared Flexbox navigation and card components.
- `css/assignment2.css`: named Grid areas, gallery, responsive rules and accessibility styles.
- `js/site.js`: local feedback for the two demonstration forms.
- `images/gallery/`: nine original vector illustrations, without external image requests.
- `DEFENSE_RU.md`: Russian guide for the practical defense.

## Responsive behavior

The outer Grid becomes a single column at 1200px. Game cards use 4 / 2 / 1 columns at widths above 1000px, 621-1000px and up to 620px. The gallery uses 3 / 2 / 1 columns at the same two breakpoints. Wide tables scroll inside their own container.

## Verification

All eight pages passed browser checks at 1440, 1280, 1201, 1200, 1024, 1000, 768, 621, 620, 375 and 320px: 88 layouts in total. Checks covered horizontal overflow, local images, links and fragment targets, Grid placement, Flexbox card alignment, gallery cell sizes, hover and keyboard captions, and native form validation. No browser script errors were observed.

## Project scope

This is a static educational project, not a store or live community. Prices, ratings, stories and activity counts are demonstration content. The contact and newsletter forms validate input locally and do not transmit or store it. Original artwork and portraits from Assignment 1 were retained; the nine gallery illustrations were created for Assignment 2. No CSS framework or float-based layout is used.

## Team

- Ташкенбаев Нурсултан
- Бигали Абулхаир
- Султанкулов Шынгыс
- Лопаткин Артем

Every member must submit the project ZIP, PDF report and deployed URL in the LMS by the course deadline, and defend the work during the practical lesson.
