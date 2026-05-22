# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Italian-language static website for the **Museo Irpino — Sezione Scientifica** (scientific section of the Museo Irpino, in the Carcere Borbonico, Avellino), hosted on GitHub Pages. The site catalogues ~100 historical scientific instruments organised by display case ("vetrina"). Author: Marco Calabrese.

There is **no build system, no package manager, no tests, no JS framework** — pure HTML/CSS with a few small inline scripts. To preview locally, open the HTML files directly in a browser or serve the repo root with any static file server (e.g. `python3 -m http.server`).

## Entry points

- The root [index.html](index.html) is a near-empty placeholder. The real site lives under [Museo/](Museo/) and starts at [Museo/home.html](Museo/home.html).
- [Museo/museo_style.css](Museo/museo_style.css) is the single shared stylesheet used by virtually every page.

## Page-type architecture

Three repeated page templates form almost the entire site. When adding or editing a page, copy the structure of a sibling rather than designing from scratch — the layout, header/footer, and navigation are duplicated across all pages (no templating engine).

1. **Showcase index page** — `Museo/vetrinaN/info_vetrina_N.html` (e.g. [Museo/vetrina1/info_vetrina_1.html](Museo/vetrina1/info_vetrina_1.html)). One per display case. Contains a description, a photo of the case, and a `.grid` of cards linking to the instruments inside.
2. **Instrument detail page** — `strumento_NN.html` (e.g. [Museo/esposto/strumento_3.html](Museo/esposto/strumento_3.html)). Uses the `.details` / `.details-content` / `.details-text` structure with a fixed field set: *Scuola di provenienza, Settore, Costruttori, Materiali, Accessori, Stato di conservazione, Descrizione*. Includes a `.bottom-nav` with prev/all/next links — those links are hand-maintained and easy to break.
3. **Global index** — [Museo/vetrine.html](Museo/vetrine.html) lists every showcase and every standalone instrument as cards. It's linked from `home.html` as "Esplora le Vetrine". Variants `vetrine_old.html`, `vetrine_new.html`, `vetrine_updated.html` are drafts; `vetrine.html` is canonical.

### Two locations for instrument pages

- `Museo/vetrinaN/strumento_NN.html` — instrument lives **inside** display case *N*.
- `Museo/esposto/strumento_NN.html` — instrument is exposed **outside** any case (free-standing, labelled with letters A–V on the map).

Anywhere a link references a specific instrument, check which of the two folders the file actually sits in.

### Interactive floor plan

[Museo/planimetria_interattiva.html](Museo/planimetria_interattiva.html) and [Museo/vetrina_map_autoResize.html](Museo/vetrina_map_autoResize.html) overlay clickable hotspots on `piantina_3_cut_PLUS.png`. They use two different techniques (HTML `<map>` with `<area>` coords vs. JS-rendered absolutely-positioned `<a>` overlays that rescale with viewport). The `planimetria_interattiva.html` map still has several `coords="TBD"` entries — incomplete.

## Conventions and gotchas

- **Italian throughout** — UI text, file content, and `note.txt`/`minute.txt` are all in Italian. Keep new copy in Italian unless told otherwise.
- **Mixed path separators**: many `href` attributes in [Museo/vetrine.html](Museo/vetrine.html) and [Museo/planimetria_interattiva.html](Museo/planimetria_interattiva.html) use Windows-style backslashes (`esposto\strumento_32.html`). Browsers tolerate this on GitHub Pages, but it breaks on case-sensitive Unix filesystems for some tools. When editing, prefer forward slashes; don't bulk-rewrite existing ones without testing.
- **`_old.png` / `_old_old.png` images** are intentionally kept as archived previous versions of `strumento_NN.png`. Don't delete them.
- **Relative-path discipline**: pages under `Museo/vetrinaN/` and `Museo/esposto/` reference the stylesheet as `../museo_style.css` and the home icon as `../home.png`. Pages directly in `Museo/` use bare filenames. Match this when creating new pages.
- **Bottom-nav prev/next links** in `strumento_NN.html` are manually wired, not generated. They sometimes break when instruments are reordered — `Museo/minute.txt` tracks known issues (e.g. "Fixare next e prev di vetrina 7,9,10,11").
- **TODO/notes**: living TODO lists are in [Museo/note.txt](Museo/note.txt) (data gaps per instrument, vetrina completeness report) and [Museo/minute.txt](Museo/minute.txt) (meeting minutes with action items, in Italian).
- **WIP banner**: pages with `<div class="wip-banner">⚠️ Sito in costruzione</div>` are flagged as work-in-progress. Many but not all pages have it.

## Things to ignore

- [Museo/create_folder_andd_file.py](Museo/create_folder_andd_file.py) is a one-off scaffolding script with hardcoded Windows paths (`d:/GitRepository/...`). It is not part of any workflow and won't run as-is.
- [Museo/Experimental/](Museo/Experimental/) holds abandoned alternative gallery layouts — don't link new pages into it.
- [Museo/instrument_gallery.html](Museo/instrument_gallery.html) references nonexistent `img/thumbN.jpg` paths; it appears to be an unfinished draft.
