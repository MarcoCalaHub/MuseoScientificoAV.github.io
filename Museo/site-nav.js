// =========================================================
// Barra di navigazione condivisa tra le pagine del sito.
//
// Per aggiungere, togliere o riordinare le voci di menu basta
// modificare questo elenco: la modifica si riflette automaticamente
// su tutte le pagine che includono questo file.
//
// "href" e' il nome del file cosi' come si trova dentro Museo/
// (senza "../"): questo script calcola da solo il percorso corretto
// a seconda di quanto e' annidata la pagina che lo include.
// =========================================================
var SITE_NAV_LINKS = [
    { label: "Home", href: "home.html" },
    { label: "La Storia", href: "la_storia.html" },
    { label: "Esplora le Vetrine", href: "vetrine.html" },
    { label: "Indice Alfabetico", href: "indice_strumenti.html" },
    { label: "Vecchi Ricordi", href: "gallery.html" },
    { label: "Crediti", href: "crediti.html" }
];

(function () {
    var placeholder = document.getElementById("siteNav");
    if (!placeholder) return;

    // Risale alla cartella Museo/ a partire dal percorso con cui e' stato
    // caricato questo stesso script: funziona sia per le pagine in Museo/
    // sia per quelle in una sottocartella (vetrinaN/, esposto/...).
    var scriptEl = document.currentScript;
    if (!scriptEl) {
        var scripts = document.getElementsByTagName("script");
        scriptEl = scripts[scripts.length - 1];
    }
    var base = scriptEl.src.replace(/site-nav\.js(\?.*)?$/, "");

    var currentPath = location.pathname;

    var nav = document.createElement("nav");
    nav.className = "site-nav";

    SITE_NAV_LINKS.forEach(function (link) {
        var a = document.createElement("a");
        var fullHref = base + link.href;
        a.href = fullHref;
        a.textContent = link.label;
        try {
            if (new URL(fullHref).pathname === currentPath) {
                a.classList.add("is-active");
            }
        } catch (e) {
            // ignora eventuali URL non valide in contesti particolari
        }
        nav.appendChild(a);
    });

    placeholder.replaceWith(nav);
})();
