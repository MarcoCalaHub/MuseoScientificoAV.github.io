// =========================================================
// Immagini del carosello della home.
//
// Per cambiare le foto mostrate basta modificare questo elenco:
// ogni voce ha il percorso dell'immagine (relativo a home.html),
// un testo alternativo descrittivo, la didascalia mostrata sotto
// il carosello e il link alla scheda dello strumento (cliccando
// sull'immagine si va direttamente lì). L'ordine qui sotto è
// l'ordine di rotazione.
// =========================================================
var HERO_SLIDES = [
    {
        src: "esposto/strumento_48.png",
        alt: "Lo spettroscopio della collezione",
        caption: "Uno spettroscopio della collezione, usato per scomporre la luce nei suoi colori.",
        link: "esposto/strumento_48.html"
    },
    {
        src: "esposto/strumento_83.png",
        alt: "Il tubo di Geissler della collezione",
        caption: "Il tubo di Geissler a reticolo quadrato, antenato dei moderni tubi al neon.",
        link: "esposto/strumento_83.html"
    },
    {
        src: "esposto/strumento_57.png",
        alt: "La macchina elettrostatica della collezione",
        caption: "La macchina elettrostatica, tra gli strumenti di maggior pregio della collezione.",
        link: "esposto/strumento_57.html"
    },
    {
        src: "vetrina2/strumento_2.png",
        alt: "Il piano inclinato della collezione",
        caption: "Il piano inclinato, usato per studiare l'equilibrio dei corpi su una superficie inclinata.",
        link: "vetrina2/strumento_2.html"
    },
    {
        src: "vetrina5/strumento_54.png",
        alt: "La camera oscura a prisma di Chevalier",
        caption: "La camera oscura a prisma di Chevalier, per l'osservazione ottica.",
        link: "vetrina5/strumento_54.html"
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

        if (slide.link) {
            fg.classList.add("hero-fg-clickable");
            fg.setAttribute("role", "link");
            fg.setAttribute("tabindex", "0");
            fg.title = "Vai alla scheda di questo strumento";
            var goToSlide = function () {
                window.location.href = slide.link;
            };
            fg.addEventListener("click", goToSlide);
            fg.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goToSlide();
                }
            });
        }

        el.appendChild(bg);
        el.appendChild(fg);
        carousel.appendChild(el);
    });

    // SVG al posto dei caratteri "‹ ›": quei glifi non sono centrati
    // otticamente nel proprio riquadro su molti font, e nel pallino
    // circolare risultavano visibilmente spostati in basso.
    var ARROW_ICON_LEFT = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var ARROW_ICON_RIGHT = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    var prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "hero-arrow hero-arrow-prev";
    prevBtn.setAttribute("aria-label", "Immagine precedente");
    prevBtn.innerHTML = ARROW_ICON_LEFT;
    carousel.appendChild(prevBtn);

    var nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "hero-arrow hero-arrow-next";
    nextBtn.setAttribute("aria-label", "Immagine successiva");
    nextBtn.innerHTML = ARROW_ICON_RIGHT;
    carousel.appendChild(nextBtn);

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

    function prev() {
        show((current - 1 + slides.length) % slides.length);
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

    if (slides.length > 1) {
        prevBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            prev();
            start();
        });
        nextBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            next();
            start();
        });
    } else {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    }

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);

    if (caption) caption.textContent = HERO_SLIDES[0].caption || "";
    start();
})();
