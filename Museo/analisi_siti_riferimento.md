# Analisi comparativa di siti museali scientifici di riferimento

Report preparato per il progetto **Museo Irpino — Sezione Scientifica**. Obiettivo: individuare
caratteristiche, punti di forza e limiti di tre siti/cataloghi museali scientifici esistenti, per
trarne indicazioni applicabili al sito attuale (`Museo/` — HTML/CSS statico, senza framework né
build system).

Siti analizzati:

1. **PhysLab — Università di Urbino**: <https://physlab.uniurb.it/Collection_index.html>
2. **Catalogo Museo Galileo (Firenze)**: <https://catalogo.museogalileo.it/>
3. **Museo Virtuale Sarpi** (Liceo P. Sarpi, Bergamo): <https://www.museovirtualesarpi.it/home.html>

---

## 1. PhysLab — Collezione di Strumenti Scientifici, Università di Urbino

**Struttura**: menu orizzontale con 6 voci (Home, storia della fisica a Urbino, tour del museo,
collezione, attività, risorse). La collezione è suddivisa in **11 categorie disciplinari**
(Acustica, Fisica atomica, Cosmografia/Meteorologia/Geofisica, Elettricità, Calore, Magnetismo,
Meccanica, Meccanica dei fluidi, Fisica molecolare, Ottica, Pneumatica) più una **bibliografia**
dedicata.

**Percorso di navigazione a 2 livelli**: categoria → elenco numerato di strumenti (es. 24 voci
sotto "Ottica") → scheda di dettaglio individuale. La scheda di dettaglio (verificata su uno
strumento ottico) contiene:

- immagine miniaturizzata cliccabile per ingrandimento;
- titolo bilingue (inglese/italiano);
- categoria tematica, numero di catalogo e inventario;
- costruttore, data, materiali, **dimensioni precise** (es. "Ø 170 mm; altezza 490 mm").

**Punti di forza**
- Tassonomia disciplinare chiara e riconoscibile per chi ha un minimo di background scientifico.
- Ogni strumento ha dati tecnici precisi (dimensioni, materiali, costruttore) — utile come modello
  per uniformare i campi mancanti nelle schede del Museo Irpino (cfr. `Museo/note.txt`).
- Sezione "3D" per alcuni strumenti, segno di attenzione a rappresentazioni interattive anche in un
  sito altrimenti semplice.
- Bibliografia come sezione autonoma, separata dalle singole schede.

**Limiti**
- Nessun motore di ricerca né filtri (bisogna sapere in che categoria cercare).
- Design ed HTML molto datati (ultimo aggiornamento 2011), non responsive.
- Le pagine di categoria sono semplici elenchi testuali numerati, non gallerie visive: la scoperta
  "per immagini" è debole.

---

## 2. Catalogo Museo Galileo (Firenze)

Il più maturo e ricco dei tre come **modello di catalogazione scientifica**, pur con un frontend
HTML molto datato (tabelle, layout anni 2010).

**Accessi multipli alla collezione** (punto di forza chiave):
- **Indice alfabetico oggetti** (`indice/IndiceAlfabeticoOggetti.html`) — oltre 2.000 oggetti,
  raggruppati per lettera iniziale (A, B, C, ... V), ciascuno con link diretto alla scheda
  (`../oggetto/NomeOggetto.html`).
- **Indice per sale** (`indice/IndiceOggettiSala.html`) — stesso patrimonio navigabile per
  collocazione fisica nel museo.
- **Indice video** per area tematica e alfabetico.
- **Indice biografie** delle figure storiche collegate agli strumenti.
- **Indice approfondimenti** (contenuti editoriali monografici).
- **Catalogo PDF** scaricabile in blocco.
- Versione in lingua inglese speculare (`catalogue.museogalileo.it`).

**Scheda oggetto** (verificata su "Cannocchiale di Galileo", inv. 2427) — il modello di scheda più
completo tra i tre siti:
- **Breadcrumb** di collocazione: Home > Indice delle Sale > Sala > Sezione.
- Metadati: inventario, ideatore/costruttore, luogo e data di fattura, materiali, dimensioni.
- Immagini multiple collegate (galleria).
- Descrizione tecnica estesa e specialistica (es. misure dell'obiettivo/oculare, ingrandimento).
- **Sezioni correlate** distinte: Ideatori/Costruttori, Persone correlate, Tipologia, Oggetti
  correlati, Contesto (voci tematiche collegate, es. "Accademia dei Lincei", "Astronomia"),
  Approfondimenti collegati.
- Pulsanti di condivisione social e conversione/stampa PDF della scheda.

**Punti di forza**
- **Ridondanza di accesso**: lo stesso oggetto è raggiungibile per nome, per sala, per categoria —
  copre stili di ricerca diversi (chi sa cosa cerca, chi vuole esplorare fisicamente, chi segue un
  tema).
- Rete di **collegamenti incrociati** oggetto↔persona↔tema↔approfondimento: trasforma un catalogo
  in un piccolo "grafo di conoscenza" navigabile, aumentando il tempo di permanenza e la
  comprensione del contesto storico.
- Bilinguismo strutturale (IT/EN) con URL paralleli.
- Il PDF scaricabile del catalogo completo è un buon "asset offline" per scuole/ricercatori.

**Limiti**
- Nessuna ricerca full-text/avanzata rilevata nella navigazione principale (solo indici
  precompilati) — per un catalogo di 2000+ oggetti è un limite significativo.
- Interfaccia visivamente obsoleta, poco mobile-friendly.
- La ricchezza di metadati richiede uno sforzo di catalogazione notevole, difficilmente replicabile
  in toto con le sole risorse volontarie del Museo Irpino.

---

## 3. Museo Virtuale Sarpi (Liceo Paolo Sarpi, Bergamo)

Il progetto più simile per **scala e finalità didattica** al Museo Irpino (collezione di
strumentazione scientifica scolastica storica).

**Struttura**: navigazione orizzontale semplice (Home, Progetto, Personaggi, Storia) + un
**percorso per "armadi"** tematici (equivalente concettuale delle "vetrine" del Museo Irpino):
Meccanica (armadi 1-3, 5), Acustica (armadio 4), Ottica (armadio 6), Fluidi (armadio 7),
Elettricità (armadio 8), Varie (armadio 9), Termologia (armadi 10-12), più una "Sala" di sintesi.

**Pagina "armadio"**: testo introduttivo storico-disciplinare (es. storia della meccanica da
Archimede a Newton) + un'unica immagine dell'armadio fisico + pulsanti "esplora" che portano a
sotto-pagine con **più strumenti raggruppati per ripiano** (es. `piano1.0.html`), ciascuno con:
codice identificativo, nome, materiali, dimensioni, epoca, descrizione tecnico-didattica, dati di
acquisizione (produttore/anno), riferimenti archivistici. **Nessuna foto individuale per
strumento** in queste pagine di dettaglio — solo testo.

**Contenuti aggiuntivi**:
- **Catalogo PDF completo** scaricabile.
- **Tour virtuale 3D** (Easypano) ospitato su dominio/percorso separato — tecnologia di
  virtual-tour "a stanze" con navigazione panoramica.
- Sezione "Filmati".

**Punti di forza**
- Modello di "armadio/vetrina" molto vicino concettualmente alla struttura già in uso nel Museo
  Irpino (vetrina → strumenti raggruppati).
- Investimento in un tour virtuale 3D come esperienza immersiva complementare al catalogo testuale.
- Sezione "Personaggi" dedicata alle figure storiche legate alla collezione (parallelo possibile
  con "Scuola di provenienza" già presente nelle schede del Museo Irpino).

**Limiti**
- Le schede di dettaglio strumento sono **solo testuali**, senza foto per singolo oggetto — un
  netto passo indietro rispetto al Museo Irpino, che già include immagini (`strumento_NN.png`) per
  ogni scheda.
- Nessun motore di ricerca, nessuna mappa/planimetria cliccabile nel sito principale (il tour 3D è
  un sistema separato, non integrato con hotspot sulla pagina).
- Caricamento lento, design minimale.

---

## Tabella comparativa

| Caratteristica | PhysLab Urbino | Museo Galileo | Museo Sarpi | Museo Irpino (stato attuale) |
|---|---|---|---|---|
| Categorie/vetrine tematiche | Sì (11 discipline) | Sì (sale + categorie) | Sì (12 armadi) | Sì (vetrine 1-N + esposto) |
| Scheda per singolo strumento | Sì, con dati tecnici | Sì, molto ricca | Sì, solo testo | Sì, con foto + campi fissi |
| Foto per strumento | Sì | Sì (galleria) | **No** | Sì |
| Indice alfabetico globale | No | **Sì** (2000+ voci) | No | Parziale (`vetrine.html`) |
| Ricerca full-text | No | No | No | No |
| Mappa/planimetria interattiva | No | No (indice sale testuale) | No (tour 3D separato) | **Sì** (`planimetria_interattiva.html`, incompleta) |
| Tour virtuale 3D/360° | Parziale (alcuni modelli 3D) | No | **Sì** (Easypano) | No |
| Collegamenti incrociati (persone/temi/oggetti correlati) | No | **Sì**, estesi | Parziale (Personaggi) | No |
| Catalogo PDF scaricabile | No | Sì | Sì | No |
| Multilingua | No | **Sì** (IT/EN) | No | No |
| Responsive/mobile | No | No | Parziale | Da verificare |

Il Museo Irpino è **già avanti** rispetto a tutti e tre su un punto: possiede sia foto per
strumento sia una planimetria interattiva cliccabile — nessuno degli altri tre unisce entrambe le
cose in modo integrato.

---

## Raccomandazioni concrete per il Museo Irpino

Coerenti con i vincoli reali del progetto (nessun build system, nessun framework, HTML/CSS statico
puro, contenuti in italiano):

1. **Indice alfabetico globale degli strumenti** (ispirato a Museo Galileo). `vetrine.html` è già
   un indice per vetrina; si potrebbe aggiungere una vista alternativa ordinata per nome strumento
   (A-Z), utile a chi cerca un oggetto specifico senza sapere in che vetrina si trova. Realizzabile
   come pagina HTML statica aggiuntiva, senza JS.

2. **Uniformare i campi mancanti nelle schede strumento** con l'esempio di rigore di PhysLab/Museo
   Galileo: dove possibile aggiungere dimensioni fisiche precise e data/periodo di costruzione nei
   campi già esistenti (*Scuola di provenienza, Settore, Costruttori, Materiali...*) — il gap dati
   è già tracciato in `Museo/note.txt`, questa è conferma che colmarlo alza il livello percepito di
   serietà scientifica del sito.

3. **Completare la planimetria interattiva** (`planimetria_interattiva.html`, che ha ancora
   `coords="TBD"`): è l'elemento in cui il Museo Irpino è già più avanti della concorrenza; portarlo
   a completamento è probabilmente il miglioramento con il miglior rapporto sforzo/impatto,
   perché nessuno dei tre siti confrontati offre una mappa cliccabile integrata col catalogo.

4. **Collegamenti "vedi anche" tra schede correlate** (ispirato al modello a grafo di Museo
   Galileo, in forma minimale): nelle pagine `strumento_NN.html`, oltre a prev/all/next, un paio di
   link manuali a strumenti della stessa disciplina/epoca aiuterebbero la scoperta — senza bisogno
   di un motore di ricerca.

5. **Un semplice tour fotografico o galleria panoramica per vetrina** (ispirato al tour 3D di
   Sarpi/PhysLab), realizzabile anche solo con foto ad alta risoluzione zoomabili delle vetrine
   fisiche, senza bisogno di piattaforme esterne come Easypano — coerente con "niente build
   system": basta una libreria JS leggera caricata via CDN o poche righe di CSS/JS per zoom/pan.

6. **Nessuna urgenza per una ricerca full-text**: nessuno dei tre siti di riferimento la offre in
   modo efficace; l'indice alfabetico + la planimetria + gli indici per vetrina coprono già i
   principali stili di ricerca degli utenti reali di un museo scientifico di queste dimensioni
   (~100 strumenti, contro i 2000+ di Museo Galileo dove la ricerca sarebbe più necessaria).

7. **Verificare la responsività mobile** del sito attuale: è l'unico ambito in cui tutti e tre i
   siti di confronto sono deboli o assenti — un buon comportamento mobile sarebbe un vantaggio
   competitivo immediato e a basso costo per il Museo Irpino.

---

## Sintesi

- **PhysLab (Urbino)**: modello di tassonomia disciplinare e rigore nei dati tecnici, ma debole in
  scoperta visiva e ricerca.
- **Museo Galileo**: il riferimento più maturo per **profondità di catalogazione** e **accessi
  multipli** (alfabetico, per sala, per tema, per persona) — il migliore a cui ispirarsi per
  organizzazione dei contenuti, anche senza replicarne la scala.
- **Museo Sarpi**: il più vicino concettualmente per struttura (armadi/vetrine, contesto
  scolastico) ma più debole del Museo Irpino sul fronte foto-per-strumento; il suo punto di forza
  esportabile è il tour virtuale 3D.
- **Museo Irpino**: parte già da una buona base (foto + planimetria interattiva); i miglioramenti a
  più alto impatto sono completare la planimetria, aggiungere un indice alfabetico globale e
  colmare i campi dati mancanti nelle schede strumento.
