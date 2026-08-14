# Aditya Raj — Portfolio

Premium Framer layout (withhoney.com mirror) customized with portfolio content from [adityago.tech](https://adityago.tech/). **Visual style and animations unchanged.**

## Run

```bash
npm run dev
```

Open [http://localhost:3456](http://localhost:3456)

## What's customized

- **Name & branding:** Aditya Raj (replaces Honey)
- **Hero:** "Build at the frontier / shipping things that matter."
- **About, Skills, Journey, Projects, Philosophy, Contact** — mapped from adityago.tech
- **Links:** GitHub → [github.com/adityarajIITj](https://github.com/adityarajIITj), Email → b25bs1020@iitj.ac.in
- **Original Honey mirror** preserved in `mirror.html`

## How it works

Framer's client JS rehydrates the page and would revert text changes. `portfolio-overrides.js` re-applies your copy after hydration so content stays yours while animations stay intact.

To re-run bulk text replacement on the HTML:

```bash
python3 scripts/customize_portfolio.py
```

## Reference

Screen recording: `reference/recording.webm`
