// =========================================================
// Sezione "Vedi anche" nelle pagine strumento.
//
// INSTRUMENT_CATALOG e' l'unico posto da modificare per:
//  - correggere il nome o il settore di uno strumento usato per
//    il raggruppamento (di solito basta pero' rigenerare questo
//    file dai campi "Settore" delle pagine, se cambiano li');
//  - aggiungere un nuovo strumento;
//  - escludere uno strumento dai suggerimenti "Vedi anche"
//    (basta togliere la sua voce da questo elenco).
//
// Ogni pagina strumento include questo file e un
// <div id="relatedInstruments"></div> vuoto: lo script qui sotto
// calcola da solo, a runtime, quali sono gli strumenti correlati
// (stesso Settore) e li disegna al posto del placeholder. Non
// serve piu' toccare l'HTML delle singole schede.
// =========================================================
var INSTRUMENT_CATALOG = [
    {
        "path": "vetrina4/strumento_1.html",
        "nome": "Apparecchio per le forze",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina2/strumento_2.html",
        "nome": "Piano inclinato",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_3.html",
        "nome": "Pendolo",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_4.html",
        "nome": "Barometro",
        "settore": "Meteorologia"
    },
    {
        "path": "esposto/strumento_5.html",
        "nome": "Barometro",
        "settore": "Meteorologia"
    },
    {
        "path": "vetrina4/strumento_6.html",
        "nome": "Igrometro a capello",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina6/strumento_7.html",
        "nome": "Cornetto acustico",
        "settore": "Acustica"
    },
    {
        "path": "vetrina5/strumento_8.html",
        "nome": "Apparecchio per riflessione e rifrazione",
        "settore": "Ottica"
    },
    {
        "path": "vetrina11/strumento_9.html",
        "nome": "Bottiglia di Leyda",
        "settore": "Elettricità"
    },
    {
        "path": "vetrina11/strumento_10.html",
        "nome": "Batteria di bottiglie di Leyda",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina9/strumento_11.html",
        "nome": "Amperometro",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina6/strumento_12.html",
        "nome": "Sonometro",
        "settore": "Acustica"
    },
    {
        "path": "vetrina2/strumento_13.html",
        "nome": "Piano inclinato",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina1/strumento_14.html",
        "nome": "Apparecchio per le leve di primo genere",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_15.html",
        "nome": "Macchina di Atvood",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_16.html",
        "nome": "Macchina di Wimshurst",
        "settore": "Elettrostatica"
    },
    {
        "path": "esposto/strumento_17.html",
        "nome": "Macchina di Wimshurst",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina6/strumento_18.html",
        "nome": "Ingranditore in legno",
        "settore": "Ottica"
    },
    {
        "path": "vetrina6/strumento_19.html",
        "nome": "Macchina fotografica",
        "settore": "Ottica"
    },
    {
        "path": "vetrina2/strumento_20.html",
        "nome": "Vasi di Pellat",
        "settore": "Idraulica"
    },
    {
        "path": "vetrina3/strumento_21.html",
        "nome": "Tubo per Diavoletto di Cartesio",
        "settore": "Idraulica"
    },
    {
        "path": "vetrina1/strumento_22.html",
        "nome": "Pompa aspirante",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina1/strumento_23.html",
        "nome": "Pompa premente e aspirante",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina4/strumento_24.html",
        "nome": "Macchina per lo studio dei moti parabolici",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina2/strumento_25.html",
        "nome": "Disco eterogeneo su piano inclinato",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina3/strumento_26.html",
        "nome": "Arganetto idraulico",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina3/strumento_27.html",
        "nome": "Tellurio",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina4/strumento_28.html",
        "nome": "Vasi comunicanti",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina4/strumento_29.html",
        "nome": "Bilancia idrostatica",
        "settore": "Idraulica"
    },
    {
        "path": "esposto/strumento_30.html",
        "nome": "Macchina a doppio effetto",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina1/strumento_31.html",
        "nome": "Macchina rotatoria",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_32.html",
        "nome": "Macchina pneumatica a olio di Geryc o di Fleus",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina2/strumento_33.html",
        "nome": "Fontana intermittente",
        "settore": "Idraulica"
    },
    {
        "path": "vetrina2/strumento_34.html",
        "nome": "Fontana di Erone",
        "settore": "Idraulica"
    },
    {
        "path": "vetrina4/strumento_35.html",
        "nome": "Apparecchio per la verifica del principio di Pascal",
        "settore": "Idraulica"
    },
    {
        "path": "vetrina3/strumento_36.html",
        "nome": "Apparecchio di Hope",
        "settore": "Idraulica"
    },
    {
        "path": "vetrina4/strumento_37.html",
        "nome": "Resistenza del mezzo nei gas",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina3/strumento_38.html",
        "nome": "Piezometro di Oersted",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina3/strumento_39.html",
        "nome": "Bilancia analitica",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina3/strumento_40.html",
        "nome": "Bilancia analitica",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina7/strumento_41.html",
        "nome": "Anello di Gravesande",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina7/strumento_42.html",
        "nome": "Termoscopio dilatometro",
        "settore": "Termologia"
    },
    {
        "path": "vetrina6/strumento_43.html",
        "nome": "Apparecchio per le lamine vibranti",
        "settore": "Acustica"
    },
    {
        "path": "esposto/strumento_44.html",
        "nome": "Specchi coniugati",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_45.html",
        "nome": "Colorimetro di Hellige",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_46.html",
        "nome": "Colorimetro di Dubosq",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_47.html",
        "nome": "Eliofanografo",
        "settore": "Ottica"
    },
    {
        "path": "esposto/strumento_48.html",
        "nome": "Spettroscopio",
        "settore": "Ottica"
    },
    {
        "path": "vetrina6/strumento_49.html",
        "nome": "Apparecchio di Tyndall",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_50.html",
        "nome": "Microscopio solare",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_51.html",
        "nome": "Disco ottico di Hartl",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_52.html",
        "nome": "Modello di occhio schematico",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_53.html",
        "nome": "Microscopio",
        "settore": "Ottica"
    },
    {
        "path": "vetrina5/strumento_54.html",
        "nome": "Camera oscura a prisma di Chevalier",
        "settore": "Ottica"
    },
    {
        "path": "esposto/strumento_55.html",
        "nome": "Lanterna di proiezione",
        "settore": "Ottica"
    },
    {
        "path": "vetrina8/strumento_56.html",
        "nome": "Proiettore a manovella",
        "settore": "Ottica"
    },
    {
        "path": "esposto/strumento_57.html",
        "nome": "Macchina elettrostatica",
        "settore": "Elettrostatica"
    },
    {
        "path": "esposto/strumento_58.html",
        "nome": "Macchina di Winter",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina10/strumento_59.html",
        "nome": "Globo scintillante",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina10/strumento_60.html",
        "nome": "Elettroscopio condensatore",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina10/strumento_61.html",
        "nome": "Elettrocalamita",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina10/strumento_62.html",
        "nome": "Elettrocalamita",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina11/strumento_63.html",
        "nome": "Elettroforo di Volta",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina8/strumento_64.html",
        "nome": "Lampada ad arco voltaico",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina10/strumento_65.html",
        "nome": "Galvanometro a due aghi",
        "settore": "elettrostatica"
    },
    {
        "path": "vetrina9/strumento_66.html",
        "nome": "Pozzo di Beccaria",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina7/strumento_67.html",
        "nome": "Pila termoelettrica di Melloni",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina9/strumento_68.html",
        "nome": "Telegrafo Morse ricevitore",
        "settore": "Comunicazione"
    },
    {
        "path": "vetrina10/strumento_69.html",
        "nome": "Galvanometro astatico",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina11/strumento_70.html",
        "nome": "Pila a Colonna",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina11/strumento_71.html",
        "nome": "Pila orizzontale",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina11/strumento_72.html",
        "nome": "Pila a corona di tazze",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina11/strumento_73.html",
        "nome": "Pila di Grenet",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina10/strumento_74.html",
        "nome": "Elettroscopio di Bohnenberger",
        "settore": "Elettrostatica"
    },
    {
        "path": "vetrina9/strumento_75.html",
        "nome": "Apparecchio di Epino",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina8/strumento_76.html",
        "nome": "Reostato a tastiera",
        "settore": "Elettrostatica"
    },
    {
        "path": "esposto/strumento_77.html",
        "nome": "Apparecchio di Buff",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina10/strumento_78.html",
        "nome": "Scaricatore a doppia forcella",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina7/strumento_79.html",
        "nome": "Termoscopio di Rumford",
        "settore": "Termologia"
    },
    {
        "path": "vetrina7/strumento_80.html",
        "nome": "Termometro differenziale",
        "settore": "Termologia"
    },
    {
        "path": "esposto/strumento_81.html",
        "nome": "Apparecchio di Dalton per la tensione dei vapori",
        "settore": ""
    },
    {
        "path": "esposto/strumento_83.html",
        "nome": "Tubo di Geissler",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina9/strumento_84.html",
        "nome": "Reostato a cursore",
        "settore": "Elettrologia"
    },
    {
        "path": "vetrina9/strumento_85.html",
        "nome": "Magnetini",
        "settore": "Magnetismo"
    },
    {
        "path": "vetrina9/strumento_86.html",
        "nome": "Quadro scintillante",
        "settore": "Elettrologia"
    },
    {
        "path": "esposto/strumento_87.html",
        "nome": "Bilancia analitica",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_88.html",
        "nome": "Pendolo con un peso",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_89.html",
        "nome": "Pendolo reversibile",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_90.html",
        "nome": "Pendolo",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina10/strumento_91.html",
        "nome": "Sostegno per magnete",
        "settore": "Magnetismo"
    },
    {
        "path": "vetrina4/strumento_92.html",
        "nome": "Manometro di Bourdon",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina1/strumento_93.html",
        "nome": "Vasi di Pellat",
        "settore": "Idraulica"
    },
    {
        "path": "vetrina3/strumento_94.html",
        "nome": "Piezometro di Oersted",
        "settore": "Meccanica"
    },
    {
        "path": "esposto/strumento_95.html",
        "nome": "Quadro elettrico",
        "settore": "Elettricità"
    },
    {
        "path": "esposto/strumento_96.html",
        "nome": "Pannello dimostrativo di lampade in serie e parallelo",
        "settore": "Elettricità"
    },
    {
        "path": "vetrina11/strumento_97.html",
        "nome": "Arco scaricatore",
        "settore": "Elettromagnetismo"
    },
    {
        "path": "vetrina4/strumento_98.html",
        "nome": "Baroscopio",
        "settore": "Meccanica"
    },
    {
        "path": "vetrina11/strumento_99.html",
        "nome": "Bacchetta in vetro",
        "settore": "Elettromagnetismo"
    }
];

// Quanti strumenti correlati mostrare al massimo per pagina.
var RELATED_MAX = 3;

// =========================================================
// Suggerimenti manuali.
//
// Usa questo elenco quando ha senso collegare uno strumento a uno
// specifico altro strumento (es. venivano usati insieme, sono
// collegati storicamente...) anche se non sono nello stesso Settore
// o non capiterebbero tra i successivi scelti automaticamente.
//
// Chiave: il "path" dello strumento di partenza (come nel catalogo
// sopra). Valore: elenco di "path" da suggerire per primi, nell'ordine
// scritto qui. Se avanzano posti (fino a RELATED_MAX), vengono
// completati automaticamente con strumenti dello stesso Settore, come
// prima. Il collegamento vale in un solo senso: se vuoi che compaia
// anche nella pagina dello strumento suggerito, aggiungi anche la
// riga inversa.
//
// Esempio:
// "esposto/strumento_83.html": ["esposto/strumento_57.html"],
// =========================================================
var MANUAL_RELATED = {
    "vetrina4/strumento_1.html": [], // Apparecchio per le forze
    "vetrina2/strumento_2.html": [], // Piano inclinato
    "esposto/strumento_3.html": [], // Pendolo
    "esposto/strumento_4.html": [], // Barometro
    "esposto/strumento_5.html": [], // Barometro
    "vetrina4/strumento_6.html": [], // Igrometro a capello
    "vetrina6/strumento_7.html": [], // Cornetto acustico
    "vetrina5/strumento_8.html": [], // Apparecchio per riflessione e rifrazione
    "vetrina11/strumento_9.html": [], // Bottiglia di Leyda
    "vetrina11/strumento_10.html": [], // Batteria di bottiglie di Leyda
    "vetrina9/strumento_11.html": [], // Amperometro
    "vetrina6/strumento_12.html": [], // Sonometro
    "vetrina2/strumento_13.html": [], // Piano inclinato
    "vetrina1/strumento_14.html": [], // Apparecchio per le leve di primo genere
    "esposto/strumento_15.html": [], // Macchina di Atvood
    "esposto/strumento_16.html": [], // Macchina di Wimshurst
    "esposto/strumento_17.html": [], // Macchina di Wimshurst
    "vetrina6/strumento_18.html": [], // Ingranditore in legno
    "vetrina6/strumento_19.html": [], // Macchina fotografica
    "vetrina2/strumento_20.html": [], // Vasi di Pellat
    "vetrina3/strumento_21.html": [], // Tubo per Diavoletto di Cartesio
    "vetrina1/strumento_22.html": [], // Pompa aspirante
    "vetrina1/strumento_23.html": [], // Pompa premente e aspirante
    "vetrina4/strumento_24.html": [], // Macchina per lo studio dei moti parabolici
    "vetrina2/strumento_25.html": [], // Disco eterogeneo su piano inclinato
    "vetrina3/strumento_26.html": [], // Arganetto idraulico
    "vetrina3/strumento_27.html": [], // Tellurio
    "vetrina4/strumento_28.html": [], // Vasi comunicanti
    "vetrina4/strumento_29.html": [], // Bilancia idrostatica
    "esposto/strumento_30.html": [], // Macchina a doppio effetto
    "vetrina1/strumento_31.html": [], // Macchina rotatoria
    "esposto/strumento_32.html": [], // Macchina pneumatica a olio di Geryc o di Fleus
    "vetrina2/strumento_33.html": [], // Fontana intermittente
    "vetrina2/strumento_34.html": [], // Fontana di Erone
    "vetrina4/strumento_35.html": [], // Apparecchio per la verifica del principio di Pascal
    "vetrina3/strumento_36.html": [], // Apparecchio di Hope
    "vetrina4/strumento_37.html": [], // Resistenza del mezzo nei gas
    "vetrina3/strumento_38.html": [], // Piezometro di Oersted
    "vetrina3/strumento_39.html": [], // Bilancia analitica
    "vetrina3/strumento_40.html": [], // Bilancia analitica
    "vetrina7/strumento_41.html": [], // Anello di Gravesande
    "vetrina7/strumento_42.html": [], // Termoscopio dilatometro
    "vetrina6/strumento_43.html": [], // Apparecchio per le lamine vibranti
    "esposto/strumento_44.html": [], // Specchi coniugati
    "vetrina5/strumento_45.html": [], // Colorimetro di Hellige
    "vetrina5/strumento_46.html": [], // Colorimetro di Dubosq
    "vetrina5/strumento_47.html": [], // Eliofanografo
    "esposto/strumento_48.html": [], // Spettroscopio
    "vetrina6/strumento_49.html": [], // Apparecchio di Tyndall
    "vetrina5/strumento_50.html": [], // Microscopio solare
    "vetrina5/strumento_51.html": [], // Disco ottico di Hartl
    "vetrina5/strumento_52.html": [], // Modello di occhio schematico
    "vetrina5/strumento_53.html": [], // Microscopio
    "vetrina5/strumento_54.html": [], // Camera oscura a prisma di Chevalier
    "esposto/strumento_55.html": [], // Lanterna di proiezione
    "vetrina8/strumento_56.html": [], // Proiettore a manovella
    "esposto/strumento_57.html": [], // Macchina elettrostatica
    "esposto/strumento_58.html": [], // Macchina di Winter
    "vetrina10/strumento_59.html": [], // Globo scintillante
    "vetrina10/strumento_60.html": [], // Elettroscopio condensatore
    "vetrina10/strumento_61.html": [], // Elettrocalamita
    "vetrina10/strumento_62.html": [], // Elettrocalamita
    "vetrina11/strumento_63.html": [], // Elettroforo di Volta
    "vetrina8/strumento_64.html": [], // Lampada ad arco voltaico
    "vetrina10/strumento_65.html": [], // Galvanometro a due aghi
    "vetrina9/strumento_66.html": [], // Pozzo di Beccaria
    "vetrina7/strumento_67.html": [], // Pila termoelettrica di Melloni
    "vetrina9/strumento_68.html": [], // Telegrafo Morse ricevitore
    "vetrina10/strumento_69.html": [], // Galvanometro astatico
    "vetrina11/strumento_70.html": [], // Pila a Colonna
    "vetrina11/strumento_71.html": [], // Pila orizzontale
    "vetrina11/strumento_72.html": [], // Pila a corona di tazze
    "vetrina11/strumento_73.html": [], // Pila di Grenet
    "vetrina10/strumento_74.html": [], // Elettroscopio di Bohnenberger
    "vetrina9/strumento_75.html": [], // Apparecchio di Epino
    "vetrina8/strumento_76.html": [], // Reostato a tastiera
    "esposto/strumento_77.html": [], // Apparecchio di Buff
    "vetrina10/strumento_78.html": [], // Scaricatore a doppia forcella
    "vetrina7/strumento_79.html": [], // Termoscopio di Rumford
    "vetrina7/strumento_80.html": [], // Termometro differenziale
    "esposto/strumento_81.html": [], // Apparecchio di Dalton per la tensione dei vapori
    "esposto/strumento_83.html": [], // Tubo di Geissler
    "vetrina9/strumento_84.html": [], // Reostato a cursore
    "vetrina9/strumento_85.html": [], // Magnetini
    "vetrina9/strumento_86.html": [], // Quadro scintillante
    "esposto/strumento_87.html": [], // Bilancia analitica
    "esposto/strumento_88.html": [], // Pendolo con un peso
    "esposto/strumento_89.html": [], // Pendolo reversibile
    "esposto/strumento_90.html": [], // Pendolo
    "vetrina10/strumento_91.html": [], // Sostegno per magnete
    "vetrina4/strumento_92.html": [], // Manometro di Bourdon
    "vetrina1/strumento_93.html": [], // Vasi di Pellat
    "vetrina3/strumento_94.html": [], // Piezometro di Oersted
    "esposto/strumento_95.html": [], // Quadro elettrico
    "esposto/strumento_96.html": [], // Pannello dimostrativo di lampade in serie e parallelo
    "vetrina11/strumento_97.html": [], // Arco scaricatore
    "vetrina4/strumento_98.html": [], // Baroscopio
    "vetrina11/strumento_99.html": [], // Bacchetta in vetro
};

(function () {
    var placeholder = document.getElementById("relatedInstruments");
    if (!placeholder) return;

    // Risale alla cartella Museo/ a partire dal percorso con cui e'
    // stato caricato questo script (stesso meccanismo di site-nav.js).
    var scriptEl = document.currentScript;
    if (!scriptEl) {
        var scripts = document.getElementsByTagName("script");
        scriptEl = scripts[scripts.length - 1];
    }
    var base = scriptEl.src.replace(/related-instruments\.js(\?.*)?$/, "");

    function resolvedPath(relPath) {
        try {
            return new URL(base + relPath).pathname;
        } catch (e) {
            return null;
        }
    }

    var currentPath = location.pathname;
    var currentIndex = -1;
    for (var i = 0; i < INSTRUMENT_CATALOG.length; i++) {
        if (resolvedPath(INSTRUMENT_CATALOG[i].path) === currentPath) {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex === -1) return; // pagina non in catalogo (es. placeholder non compilato)

    function pathToIndex(path) {
        for (var i2 = 0; i2 < INSTRUMENT_CATALOG.length; i2++) {
            if (INSTRUMENT_CATALOG[i2].path === path) return i2;
        }
        return -1;
    }

    var currentPathInCatalog = INSTRUMENT_CATALOG[currentIndex].path;
    var relatedIndexes = [];

    // 1) suggerimenti manuali, nell'ordine in cui sono scritti
    (MANUAL_RELATED[currentPathInCatalog] || []).forEach(function (relPath) {
        var idx = pathToIndex(relPath);
        if (idx !== -1 && idx !== currentIndex && relatedIndexes.indexOf(idx) === -1) {
            relatedIndexes.push(idx);
        }
    });

    // 2) completa i posti rimasti (fino a RELATED_MAX) con strumenti dello
    //    stesso Settore, nello stesso ordine circolare di prima
    var mySettore = (INSTRUMENT_CATALOG[currentIndex].settore || "").trim().toLowerCase();
    if (relatedIndexes.length < RELATED_MAX && mySettore) {
        var group = [];
        for (var j = 0; j < INSTRUMENT_CATALOG.length; j++) {
            if ((INSTRUMENT_CATALOG[j].settore || "").trim().toLowerCase() === mySettore) {
                group.push(j);
            }
        }
        var posInGroup = group.indexOf(currentIndex);
        if (posInGroup !== -1) {
            for (var k = 1; k < group.length && relatedIndexes.length < RELATED_MAX; k++) {
                var candidate = group[(posInGroup + k) % group.length];
                if (candidate !== currentIndex && relatedIndexes.indexOf(candidate) === -1) {
                    relatedIndexes.push(candidate);
                }
            }
        }
    }

    if (relatedIndexes.length === 0) return; // niente da suggerire

    function locLabel(path) {
        var folder = path.split("/")[0];
        if (folder === "esposto") return "Esposto";
        var m = folder.match(/^vetrina(\d+)$/);
        return m ? "Vetrina " + m[1] : folder;
    }

    var section = document.createElement("div");
    section.className = "related-instruments";

    var h4 = document.createElement("h4");
    h4.textContent = "Vedi anche";
    section.appendChild(h4);

    var ul = document.createElement("ul");
    relatedIndexes.forEach(function (idx) {
        var item = INSTRUMENT_CATALOG[idx];
        var li = document.createElement("li");

        var a = document.createElement("a");
        a.href = base + item.path;
        a.textContent = item.nome;
        li.appendChild(a);

        li.appendChild(document.createTextNode(" "));

        var loc = document.createElement("span");
        loc.className = "loc";
        loc.textContent = "(" + locLabel(item.path) + ")";
        li.appendChild(loc);

        ul.appendChild(li);
    });
    section.appendChild(ul);

    placeholder.replaceWith(section);
})();
