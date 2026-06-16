# scottamboyd.com — Personal Website

## What this is
Scott Boyd's personal website. A static HTML/CSS/JS site hosted on GitHub Pages at scottamboyd.com.

## Stack
- Plain HTML, CSS, vanilla JS — no frameworks or build tools
- Served via GitHub Pages (repo: github.com/scottamboyd-stack/personal-website)
- Custom domain: scottamboyd.com (DNS via Namecheap)
- Local dev server: `python3 -m http.server 3000 --directory .` (launch config in ../.claude/launch.json)

## File structure
```
index.html        — single page with all sections
css/style.css     — all styles
js/main.js        — wave animation on hero heading
CLAUDE.md         — this file
```

## Sections
1. **Hero** — "Hi, I'm Scott." with wave + Scottish Saltire flag animation (3 reps on load)
2. **About** — Bio, Vonnegut quote, 4 skills (Relationship Building, Process Design, Business Management, Sales & Marketing)
3. **Career** — Full timeline from CV, most recent first
4. **Contact** — Email (scottamboyd@gmail.com), social links (placeholder)

## Career timeline (newest first)
- Aug 2025–Present: Client & Business Development Manager, Smart Financial (Manchester/Glasgow)
- 2018–Jun 2024: Co-Founder, Group EAST (Singapore)
- 2017–2018: Head of Business Development Asia, Mediapro (Singapore)
- 2013–2017: VP SEA + Head of Content APAC → Senior Director Sales, UFC (Singapore)
- 2011–2013: Senior Director Sales & Acquisitions APAC/MEA, Lagardere (Hong Kong)
- 2005–2011: Director Sales & Marketing MEA, IEC in Sports / Lagardere (Dubai)
- 2001–2005: Manager Sales & Marketing IMEA, Sportsbrand Media Group (Dubai)
- 1998–2001: Sales Manager, Corus Group (UK & Dubai)

## Colour scheme
- Background: #0d1117 (dark navy)
- Surface: #161c26
- Accent (red): #c0392b — used for dates, underlines, section markers
- Accent2 (blue): #1a4f8f — used for company names, CTA button
- Text: #f0f4f8 (off-white)
- Muted: #8a9ab5 (steel grey)

## Deploying changes
```bash
git add .
git commit -m "description"
git push
```
GitHub Pages auto-deploys within ~1 minute. No token needed (credentials cached).

## Still to do
- Update hero tagline ("I build things and think about problems" is placeholder)
- Add real LinkedIn / GitHub / social links in Contact section
- Consider adding a headshot/photo
