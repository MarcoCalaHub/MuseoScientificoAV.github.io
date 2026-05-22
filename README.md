# Museo Irpino — Sezione Scientifica

Sito statico (HTML + CSS) dedicato alla sezione scientifica del **Museo Irpino**, ospitato nel Complesso Monumentale del Carcere Borbonico di Avellino. Pubblicato tramite GitHub Pages.

Autore: [Marco Calabrese](https://www.linkedin.com/in/marco-calabrese-lin/)

## Anteprima locale

Non c'è nessun sistema di build: basta aprire i file HTML in un browser, oppure servire la cartella radice con un server statico qualsiasi:

```bash
python3 -m http.server
```

e visitare `http://localhost:8000/Museo/home.html`.

## Struttura del sito

Il contenuto reale del sito si trova dentro la cartella [Museo/](Museo/). Il file [index.html](index.html) nella radice è solo un segnaposto.

```
Museo/
├── home.html                     ← pagina iniziale del sito
├── museo_style.css               ← foglio di stile condiviso da tutte le pagine
├── vetrine.html                  ← indice di tutte le vetrine e degli strumenti esposti
├── gallery.html                  ← galleria fotografica ("Vecchi ricordi")
├── planimetria_interattiva.html  ← mappa cliccabile con <area> HTML
├── vetrina_map_autoResize.html   ← mappa cliccabile responsive (hotspot in JS)
├── piantina_*.png                ← planimetrie del museo
│
├── vetrina1/ … vetrina15/        ← una cartella per ogni vetrina (display case)
│   ├── info_vetrina_N.html       ← pagina descrittiva della vetrina
│   ├── vetrina_N.jpg             ← foto della vetrina
│   └── strumento_NN.html         ← pagine degli strumenti contenuti nella vetrina
│
├── esposto/                      ← strumenti esposti fuori dalle vetrine
│   └── strumento_NN.html         ← (identificati sulla mappa con lettere A–V)
│
├── gallery/                      ← immagini per la galleria fotografica
├── Experimental/                 ← bozze sperimentali di layout (non collegate)
├── note.txt                      ← appunti su dati mancanti e completezza vetrine
└── minute.txt                    ← verbali degli incontri con la lista delle modifiche
```

### Tipi di pagina

Il sito è costruito a partire da tre template HTML che si ripetono (non c'è un motore di template: ogni pagina è scritta a mano copiando una pagina sorella).

1. **Pagina iniziale** — [Museo/home.html](Museo/home.html)
   Descrizione generale della collezione e collegamenti alle vetrine e alla galleria.

2. **Indice delle vetrine** — [Museo/vetrine.html](Museo/vetrine.html)
   Mostra la planimetria del museo seguita da una griglia di card: una per ogni vetrina numerata (1–15) e una per ogni strumento esposto fuori dalle vetrine (lettere A–V).

3. **Pagina di vetrina** — `Museo/vetrinaN/info_vetrina_N.html`
   Foto della vetrina, descrizione testuale e griglia con gli strumenti contenuti.

4. **Pagina di strumento** — `strumento_NN.html`
   Scheda dettagliata con i campi: *Scuola di provenienza, Settore, Costruttori, Materiali, Accessori, Stato di conservazione, Descrizione*, più una barra di navigazione *precedente / tutte le vetrine / successivo*.

### Dove vivono gli strumenti

Le schede strumento si trovano in **due posti diversi** a seconda di dove lo strumento è esposto fisicamente:

- `Museo/vetrinaN/strumento_NN.html` — strumento collocato **dentro** la vetrina *N*.
- `Museo/esposto/strumento_NN.html` — strumento esposto **fuori** dalle vetrine (identificato con una lettera A–V sulla mappa).

### Mappe interattive

Due implementazioni alternative della stessa idea (cliccare sulla planimetria per andare alla vetrina/strumento):

- [Museo/planimetria_interattiva.html](Museo/planimetria_interattiva.html) — usa `<map>` e `<area>` HTML con coordinate fisse in pixel.
- [Museo/vetrina_map_autoResize.html](Museo/vetrina_map_autoResize.html) — disegna gli hotspot con JavaScript, riscalandoli al ridimensionamento della finestra.

## Convenzioni utili da sapere

- **Lingua**: tutti i contenuti sono in italiano.
- **Foglio di stile unico**: tutte le pagine includono [Museo/museo_style.css](Museo/museo_style.css). Le pagine in sottocartelle (es. `vetrina1/`) lo referenziano come `../museo_style.css`.
- **Immagini `_old.png`**: i file con suffisso `_old` o `_old_old` sono versioni precedenti delle foto degli strumenti, conservate volutamente come archivio.
- **Banner "Work in Progress"**: alcune pagine mostrano un `wip-banner` perché i contenuti non sono ancora definitivi.
- **TODO e appunti**: i file [Museo/note.txt](Museo/note.txt) e [Museo/minute.txt](Museo/minute.txt) contengono note interne sui dati mancanti, le vetrine ancora da completare e le decisioni prese negli incontri di lavoro.

## Sede

Complesso Monumentale Carcere Borbonico
Piazza Alfredo De Marsico, 83100 Avellino
Tel. +39 0825 790 733 | 539 — Museo Irpino
Email: info@museoirpino.it
