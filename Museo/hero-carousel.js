// =========================================================
// Immagini del carosello della home.
//
// Per cambiare le foto mostrate basta modificare questo elenco:
// ogni voce ha il percorso dell'immagine (relativo a home.html),
// un testo alternativo descrittivo e la didascalia mostrata sotto
// il carosello. L'ordine qui sotto è l'ordine di rotazione.
// =========================================================
var HERO_SLIDES = [
    {
        src: "esposto/strumento_48.png",
        alt: "Lo spettroscopio della collezione",
        caption: "Uno spettroscopio della collezione, usato per scomporre la luce nei suoi colori."
    },
    {
        src: "esposto/strumento_83.png",
        alt: "Il tubo di Geissler della collezione",
        caption: "Il tubo di Geissler a reticolo quadrato, antenato dei moderni tubi al neon."
    },
    {
        src: "esposto/strumento_57.png",
        alt: "La macchina elettrostatica della collezione",
        caption: "La macchina elettrostatica, tra gli strumenti di maggior pregio della collezione."
    },
    {
        src: "vetrina2/strumento_2.png",
        alt: "Il piano inclinato della collezione",
        caption: "Il piano inclinato, usato per studiare l'equilibrio dei corpi su una superficie inclinata."
    },
    {
        src: "vetrina5/strumento_54.png",
        alt: "La camera oscura a prisma di Chevalier",
        caption: "La camera oscura a prisma di Chevalier, per l'osservazione ottica."
    }
];

// Secondi tra un'immagine e la successiva.
var HERO_INTERVAL_MS = 8000;

(function () {
    var carousel = document.querySelector(".hero-carousel");
    var caption = document.getElementById("heroCaption");
    if (!carousel || !HERO_SLIDES.length) return;

    HERO_SLIDES.forEach(function (slide, i) {
        var el = document.createElement("div");
        el.className = "hero-slide" + (i === 0 ? " is-active" : "");

        var bg = document.createElement("img");
        bg.className = "hero-bg";
        bg.src = slide.src;
        bg.alt = "";
        bg.setAttribute("aria-hidden", "true");

        var fg = document.createElement("img");
        fg.className = "hero-fg";
        fg.src = slide.src;
        fg.alt = slide.alt || "";

        el.appendChild(bg);
        el.appendChild(fg);
        carousel.appendChild(el);
    });

    var dotsWrap = document.createElement("div");
    dotsWrap.className = "hero-dots";
    HERO_SLIDES.forEach(function (slide, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hero-dot" + (i === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", "Vai all'immagine " + (i + 1));
        dot.dataset.index = i;
        dotsWrap.appendChild(dot);
    });
    carousel.appendChild(dotsWrap);

    var slides = carousel.querySelectorAll(".hero-slide");
    var dots = dotsWrap.querySelectorAll(".hero-dot");
    var current = 0;
    var timer = null;
    var prefersReducedMotion = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(index) {
        slides[current].classList.remove("is-active");
        dots[current].classList.remove("is-active");
        current = index;
        slides[current].classList.add("is-active");
        dots[current].classList.add("is-active");
        if (caption) caption.textContent = HERO_SLIDES[current].caption || "";
    }

    function next() {
        show((current + 1) % slides.length);
    }

    function start() {
        if (prefersReducedMotion || slides.length < 2) return;
        stop();
        timer = setInterval(next, HERO_INTERVAL_MS);
    }

    function stop() {
        if (timer) clearInterval(timer);
        timer = null;
    }

    dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            show(i);
            start();
        });
    });

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);

    if (caption) caption.textContent = HERO_SLIDES[0].caption || "";
    start();
})();
