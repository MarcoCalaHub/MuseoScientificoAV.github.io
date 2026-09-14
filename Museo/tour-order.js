// =========================================================
// Percorso prev/next tra le pagine del museo (strumenti + pagine vetrina).
//
// TOUR_SEQUENCE elenca, in un unico posto, l'ordine di visita completo:
// ogni pagina strumento e ogni pagina vetrina, nell'ordine in cui si
// susseguono nel percorso reale. Per ogni pagina, "precedente" e
// "successivo" nella barra in fondo sono semplicemente il vicino di
// sinistra e di destra in questo elenco.
//
// Per correggere o riordinare il percorso: sposta, aggiungi o togli
// una riga qui. Non serve piu' toccare l'HTML delle singole pagine.
//
// NOTE SULLA RICOSTRUZIONE (settembre 2026):
// Questo ordine e' stato ricostruito seguendo i link "precedente/
// successivo" gia' funzionanti nelle pagine esistenti. Alcune parti
// non avevano pero' un ordine affidabile da cui partire, e sono state
// riempite con un ordine provvisorio (di solito numerico). Punti da
// rivedere quando comodo:
//  - Vetrina 4: nessun collegamento interno funzionante trovato,
//    ordine numerico provvisorio.
//  - Vetrina 9, 10, 11: sezioni non ancora complete al museo (come
//    confermato), ordine numerico provvisorio.
//  - Strumento 22 (vetrina 1) e strumenti 39, 94 (vetrina 3): erano
//    "orfani" (mai collegati alla catena originale), inseriti in una
//    posizione ragionevole ma da verificare.
//  - Strumenti "esposto" 55, 95, 96: nessun collegamento affidabile
//    trovato, messi in coda in attesa di una posizione migliore.
//  - vetrina7/strumento_42.html aveva un link "successivo" rotto
//    (puntava a vetrina5/strumento_54.html per errore) - qui e' stato
//    ignorato a favore del percorso verso gli strumenti esposto 48/5/4.
// =========================================================
var TOUR_SEQUENCE = [
    "esposto/strumento_32.html",
    "vetrina1/info_vetrina_1.html",
    "vetrina1/strumento_23.html",
    "vetrina1/strumento_93.html",
    "vetrina1/strumento_22.html",
    "vetrina1/strumento_14.html",
    "vetrina1/strumento_31.html",
    "vetrina2/info_vetrina_2.html",
    "vetrina2/strumento_2.html",
    "vetrina2/strumento_13.html",
    "vetrina2/strumento_25.html",
    "vetrina2/strumento_34.html",
    "vetrina2/strumento_33.html",
    "vetrina2/strumento_20.html",
    "vetrina3/info_vetrina_3.html",
    "vetrina3/strumento_21.html",
    "vetrina3/strumento_36.html",
    "vetrina3/strumento_38.html",
    "vetrina3/strumento_27.html",
    "vetrina3/strumento_26.html",
    "vetrina3/strumento_39.html",
    "vetrina3/strumento_94.html",
    "vetrina3/strumento_40.html",
    "vetrina4/info_vetrina_4.html",
    "vetrina4/strumento_1.html",
    "vetrina4/strumento_6.html",
    "vetrina4/strumento_24.html",
    "vetrina4/strumento_28.html",
    "vetrina4/strumento_29.html",
    "vetrina4/strumento_35.html",
    "vetrina4/strumento_37.html",
    "vetrina4/strumento_92.html",
    "vetrina4/strumento_98.html",
    "esposto/strumento_88.html",
    "esposto/strumento_89.html",
    "esposto/strumento_3.html",
    "esposto/strumento_90.html",
    "esposto/strumento_15.html",
    "esposto/strumento_30.html",
    "esposto/strumento_87.html",
    "esposto/strumento_44.html",
    "esposto/strumento_81.html",
    "vetrina5/info_vetrina_5.html",
    "vetrina5/strumento_52.html",
    "vetrina5/strumento_47.html",
    "vetrina5/strumento_45.html",
    "vetrina5/strumento_53.html",
    "vetrina5/strumento_50.html",
    "vetrina5/strumento_54.html",
    "vetrina5/strumento_51.html",
    "vetrina5/strumento_8.html",
    "vetrina5/strumento_46.html",
    "vetrina6/info_vetrina_6.html",
    "vetrina6/strumento_12.html",
    "vetrina6/strumento_19.html",
    "vetrina6/strumento_18.html",
    "vetrina6/strumento_43.html",
    "vetrina6/strumento_49.html",
    "vetrina6/strumento_7.html",
    "vetrina7/info_vetrina_7.html",
    "vetrina7/strumento_80.html",
    "vetrina7/strumento_79.html",
    "vetrina7/strumento_67.html",
    "vetrina7/strumento_41.html",
    "vetrina7/strumento_42.html",
    "esposto/strumento_48.html",
    "esposto/strumento_5.html",
    "esposto/strumento_4.html",
    "vetrina8/info_vetrina_8.html",
    "vetrina8/strumento_64.html",
    "vetrina8/strumento_56.html",
    "vetrina8/strumento_76.html",
    "vetrina9/info_vetrina_9.html",
    "vetrina9/strumento_11.html",
    "vetrina9/strumento_66.html",
    "vetrina9/strumento_68.html",
    "vetrina9/strumento_75.html",
    "vetrina9/strumento_84.html",
    "vetrina9/strumento_85.html",
    "vetrina9/strumento_86.html",
    "esposto/strumento_16.html",
    "esposto/strumento_17.html",
    "esposto/strumento_57.html",
    "esposto/strumento_83.html",
    "esposto/strumento_58.html",
    "vetrina10/info_vetrina_10.html",
    "vetrina10/strumento_59.html",
    "vetrina10/strumento_60.html",
    "vetrina10/strumento_61.html",
    "vetrina10/strumento_62.html",
    "vetrina10/strumento_65.html",
    "vetrina10/strumento_69.html",
    "vetrina10/strumento_74.html",
    "vetrina10/strumento_78.html",
    "vetrina10/strumento_91.html",
    "vetrina11/info_vetrina_11.html",
    "vetrina11/strumento_9.html",
    "vetrina11/strumento_10.html",
    "vetrina11/strumento_63.html",
    "vetrina11/strumento_70.html",
    "vetrina11/strumento_71.html",
    "vetrina11/strumento_72.html",
    "vetrina11/strumento_73.html",
    "vetrina11/strumento_97.html",
    "vetrina11/strumento_99.html",
    "esposto/strumento_77.html",
    "vetrina12/info_vetrina_12.html",
    "vetrina13/info_vetrina_13.html",
    "vetrina14/info_vetrina_14.html",
    "vetrina15/info_vetrina_15.html",
    "esposto/strumento_55.html",
    "esposto/strumento_95.html",
    "esposto/strumento_96.html"
];

(function () {
    var placeholder = document.getElementById("tourNav");
    if (!placeholder) return;

    var scriptEl = document.currentScript;
    if (!scriptEl) {
        var scripts = document.getElementsByTagName("script");
        scriptEl = scripts[scripts.length - 1];
    }
    var base = scriptEl.src.replace(/tour-order\.js(\?.*)?$/, "");

    function resolvedPath(relPath) {
        try {
            return new URL(base + relPath).pathname;
        } catch (e) {
            return null;
        }
    }

    var currentPath = location.pathname;
    var currentIndex = -1;
    for (var i = 0; i < TOUR_SEQUENCE.length; i++) {
        if (resolvedPath(TOUR_SEQUENCE[i]) === currentPath) {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex === -1) return; // pagina non nel percorso (es. placeholder non compilato)

    function isVetrinaInfo(path) {
        return /info_vetrina_/.test(path);
    }

    function labelFor(path, direction) {
        var isVetrina = isVetrinaInfo(path);
        if (direction === "prev") {
            return isVetrina ? "← Vetrina precedente" : "← Strumento precedente";
        }
        return isVetrina ? "Prossima vetrina →" : "Prossimo strumento →";
    }

    var nav = document.createElement("nav");
    nav.className = "bottom-nav";

    if (currentIndex > 0) {
        var prevPath = TOUR_SEQUENCE[currentIndex - 1];
        var prevA = document.createElement("a");
        prevA.href = base + prevPath;
        prevA.textContent = labelFor(prevPath, "prev");
        nav.appendChild(prevA);
    } else {
        var prevSpan = document.createElement("span");
        prevSpan.className = "disabled";
        prevSpan.textContent = "← Strumento precedente";
        nav.appendChild(prevSpan);
    }

    nav.appendChild(document.createTextNode(" | "));

    var allA = document.createElement("a");
    allA.href = base + "vetrine.html";
    allA.textContent = "\ud83c\udfdb\ufe0f Tutte le vetrine";
    nav.appendChild(allA);

    nav.appendChild(document.createTextNode(" | "));

    if (currentIndex < TOUR_SEQUENCE.length - 1) {
        var nextPath = TOUR_SEQUENCE[currentIndex + 1];
        var nextA = document.createElement("a");
        nextA.href = base + nextPath;
        nextA.textContent = labelFor(nextPath, "next");
        nav.appendChild(nextA);
    } else {
        var nextSpan = document.createElement("span");
        nextSpan.className = "disabled";
        nextSpan.textContent = "Prossimo strumento →";
        nav.appendChild(nextSpan);
    }

    placeholder.replaceWith(nav);
})();
