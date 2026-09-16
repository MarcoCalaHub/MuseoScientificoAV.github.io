// =========================================================
// Zoom a schermo intero per le foto strumento, con frecce per
// scorrere tra piu' immagini quando uno strumento ne ha piu' di una
// (es. vetrina7/strumento_99.html).
//
// Le frecce compaiono solo se la pagina ha piu' di una foto in
// <main>. Funziona anche con tastiera (← →) ed ESC per chiudere.
// =========================================================
(function () {
    var modal = document.getElementById("imageModal");
    if (!modal) return;

    var modalImg = document.getElementById("modalImg");
    var closeBtn = modal.querySelector(".close");
    var prevBtn = modal.querySelector(".modal-arrow-prev");
    var nextBtn = modal.querySelector(".modal-arrow-next");

    // Le pagine hanno ancora i caratteri "‹ ›" nel markup statico, ma
    // quei glifi non sono centrati otticamente nel pallino: li
    // sostituiamo qui con delle icone SVG, così basta questo file per
    // sistemare tutte le pagine in un colpo solo.
    var ARROW_ICON_LEFT = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var ARROW_ICON_RIGHT = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    if (prevBtn) prevBtn.innerHTML = ARROW_ICON_LEFT;
    if (nextBtn) nextBtn.innerHTML = ARROW_ICON_RIGHT;

    var images = Array.prototype.slice.call(document.querySelectorAll("main img"));
    var currentIndex = 0;

    function show(index) {
        if (!images.length) return;
        currentIndex = (index + images.length) % images.length;
        var img = images[currentIndex];
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    }

    function open(index) {
        if (!images.length) return;
        show(index);
        modal.style.display = "flex";
        var multi = images.length > 1;
        if (prevBtn) prevBtn.style.display = multi ? "flex" : "none";
        if (nextBtn) nextBtn.style.display = multi ? "flex" : "none";
    }

    function close() {
        modal.style.display = "none";
    }

    images.forEach(function (img, i) {
        img.onclick = function () {
            open(i);
        };
    });

    if (closeBtn) {
        closeBtn.onclick = close;
    }
    if (prevBtn) {
        prevBtn.onclick = function (event) {
            event.stopPropagation();
            show(currentIndex - 1);
        };
    }
    if (nextBtn) {
        nextBtn.onclick = function (event) {
            event.stopPropagation();
            show(currentIndex + 1);
        };
    }

    modal.onclick = function (event) {
        if (event.target === modal) {
            close();
        }
    };

    document.addEventListener("keydown", function (event) {
        if (modal.style.display !== "flex") return;
        if (event.key === "Escape") close();
        if (event.key === "ArrowLeft") show(currentIndex - 1);
        if (event.key === "ArrowRight") show(currentIndex + 1);
    });
})();
