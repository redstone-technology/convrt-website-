# convrt.qa

The Convrt website: English (`/`) and Arabic (`/ar`) landing pages, the qualify form (`/start`, `/ar/start`), a blog, and privacy and terms pages.

Built with Astro and hosted on Vercel. The hero animation uses the [Stageshow](https://github.com/benjitaylor/skills) kit by Benji Taylor (MIT, see `src/stageshow/LICENSE`).

## Run it

```sh
npm install
npm run dev     # http://localhost:4321
npm run build
```

## How leads arrive

`/start` asks five quick questions plus contact details. `src/pages/api/lead.ts` adds each lead to the Notion **Sales Pipeline** with Stage `New`, so a setter can call them back.

Set these in Vercel (Project → Settings → Environment Variables):

| Name | Value |
| --- | --- |
| `NOTION_TOKEN` | Secret of a Notion internal integration. In Notion, open the Sales Pipeline database → ••• → Connections → add that integration. |
| `NOTION_DATABASE_ID` | Optional. Defaults to the Convrt Sales Pipeline (`2b3089ce89584a009590c0bdd5ee4d4e`). |

## Edit the words

- Page copy: `src/i18n/en.ts` and `src/i18n/ar.ts`
- Blog posts: `src/content/blog/en` and `src/content/blog/ar` (same file name = translation of each other)
- Privacy and terms: `src/pages/privacy.astro`, `src/pages/terms.astro`

Copy rules: describe the work as custom software development (setup) and software maintenance and support (monthly). Never call Convrt a marketing agency, advertising, or social media management. Real results only, no prices.

## Before launch

- [ ] Replace the stand-in logo (`src/components/Logo.astro`, `public/favicon.svg`) with the official SVG
- [ ] Check privacy and terms (drafts rewritten from the current site)
- [ ] Add `NOTION_TOKEN` in Vercel and send one test lead
- [ ] Point only `convrt.qa` and `www.convrt.qa` at Vercel. Do not touch `app.convrt.qa` or `book.convrt.qa`
