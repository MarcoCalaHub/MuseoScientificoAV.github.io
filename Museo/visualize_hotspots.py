#!/usr/bin/env python3
"""
Visualizzatore dei bounding box della mappa interattiva di vetrine.html.

Workflow:
  1. Modifica le coordinate nella lista ITEMS in basso (campi x, y, w, h).
     Le coordinate sono in pixel sul PNG originale 1400x550.
  2. Esegui:
       pip install pillow         # solo la prima volta
       python3 visualize_hotspots.py
  3. Apri il file generato `planimetria_with_hotspots.png` e controlla che
     ogni rettangolo cada sopra la vetrina/strumento corrispondente sulla
     planimetria.
  4. Quando sei soddisfatto, sincronizza i nuovi valori nella lista `items`
     dentro lo script inline di Museo/vetrine.html (cerca il blocco
     "// Mappa inline principale").

Convenzioni:
  - vetrine numerate (1-15) → riquadro blu
  - strumenti esposti (A-V) → riquadro arancione
  - ogni hotspot porta un'etichetta su sfondo bianco per essere leggibile
    anche dove le immagini sono scure.
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
MAP_FILE = os.path.join(HERE, "piantina_3_cut_PLUS.png")
OUT_FILE = os.path.join(HERE, "planimetria_with_hotspots.png")

# Dimensioni del PNG originale — devono corrispondere a quelle dichiarate
# nello script di vetrine.html (MAP_W / MAP_H).
MAP_W = 1400
MAP_H = 550

# =========================================================================
# Coordinate degli hotspot — modifica QUI a mano.
# Stessa struttura della lista `items` in Museo/vetrine.html.
# =========================================================================
ITEMS = [
    # --- Vetrine numerate (1-15) ------------------------------------------
    {"id": "1",  "x": 930,  "y": 405, "w": 110, "h": 46, "label": "Vetrina 1"},
    {"id": "2",  "x": 1035, "y": 298, "w": 120, "h": 42, "label": "Vetrina 2"},
    {"id": "3",  "x": 855,  "y": 405, "w": 110, "h": 46, "label": "Vetrina 3"},
    {"id": "4",  "x": 845,  "y": 295, "w": 108, "h": 42, "label": "Vetrina 4"},
    {"id": "5",  "x": 198,  "y": 430, "w": 110, "h": 42, "label": "Vetrina 5"},
    {"id": "6",  "x": 250,  "y": 285, "w": 120, "h": 34, "label": "Vetrina 6"},
    {"id": "7",  "x": 92,   "y": 430, "w": 105, "h": 46, "label": "Vetrina 7"},
    {"id": "8",  "x": 163,  "y": 280, "w": 95,  "h": 34, "label": "Vetrina 8"},
    {"id": "9",  "x": 915,  "y": 20,  "w": 120, "h": 42, "label": "Vetrina 9"},
    {"id": "10", "x": 791,  "y": 18,  "w": 110, "h": 42, "label": "Vetrina 10"},
    {"id": "11", "x": 646,  "y": 18,  "w": 110, "h": 42, "label": "Vetrina 11"},
    {"id": "12", "x": 408,  "y": 18,  "w": 80,  "h": 42, "label": "Vetrina 12"},
    {"id": "13", "x": 335,  "y": 18,  "w": 70,  "h": 42, "label": "Vetrina 13"},
    {"id": "14", "x": 268,  "y": 18,  "w": 65,  "h": 42, "label": "Vetrina 14"},
    {"id": "15", "x": 335,  "y": 205, "w": 122, "h": 38, "label": "Vetrina 15"},

    # --- Strumenti esposti (A-V) ------------------------------------------
    {"id": "A",  "x": 1190, "y": 352, "w": 90,  "h": 78, "label": "A — Macchina pneumatica"},
    {"id": "B",  "x": 744,  "y": 447, "w": 26,  "h": 26, "label": "B — Pendolo con un peso"},
    {"id": "C",  "x": 716,  "y": 414, "w": 26,  "h": 26, "label": "C — Pendolo reversibile"},
    {"id": "D",  "x": 709,  "y": 300, "w": 26,  "h": 26, "label": "D — Pendolo"},
    {"id": "E",  "x": 737,  "y": 281, "w": 26,  "h": 26, "label": "E — Pendolo"},
    {"id": "F",  "x": 615,  "y": 431, "w": 68,  "h": 38, "label": "F — Atwood"},
    {"id": "G",  "x": 535,  "y": 433, "w": 42,  "h": 34, "label": "G — Doppio effetto"},
    {"id": "H",  "x": 451,  "y": 433, "w": 66,  "h": 38, "label": "H — Bilancia analitica"},
    {"id": "I",  "x": 644,  "y": 310, "w": 28,  "h": 28, "label": "I — Specchi coniugati"},
    {"id": "L",  "x": 526,  "y": 305, "w": 38,  "h": 34, "label": "L — Apparecchio di Dalton"},
    {"id": "M",  "x": 216,  "y": 435, "w": 34,  "h": 30, "label": "M — Spettroscopio"},
    {"id": "N1", "x": 200,  "y": 490, "w": 21,  "h": 22, "label": "N — Barometro"},
    {"id": "N2", "x": 227,  "y": 490, "w": 21,  "h": 22, "label": "N — Barometro"},
    {"id": "O",  "x": 46,   "y": 363, "w": 42,  "h": 52, "label": "O — Camera oscura"},
    {"id": "P",  "x": 95,   "y": 300, "w": 80,  "h": 40, "label": "P — Lanterna di proiezione"},
    {"id": "Q",  "x": 625,  "y": 210, "w": 40,  "h": 52, "label": "Q — Wimshurst"},
    {"id": "R",  "x": 666,  "y": 210, "w": 40,  "h": 52, "label": "R — Wimshurst"},
    {"id": "S",  "x": 875,  "y": 210, "w": 52,  "h": 52, "label": "S — Macchina elettrostatica"},
    {"id": "T",  "x": 963,  "y": 215, "w": 46,  "h": 34, "label": "T — Tubo di Geissler"},
    {"id": "U",  "x": 1040, "y": 180, "w": 92,  "h": 92, "label": "U — Macchina di Winter"},
    {"id": "V",  "x": 583,  "y": 46,  "w": 20,  "h": 34, "label": "V — Apparecchio di Buff"},
]

# Palette (RGBA). Il quarto valore controlla l'opacita': 130 ≈ 50%.
FILL_VETRINA  = (30,  60, 200, 130)
LINE_VETRINA  = (10,  30, 130, 255)
FILL_ESPOSTO  = (220, 120,  0, 130)
LINE_ESPOSTO  = (160,  70,  0, 255)
LABEL_BG      = (255, 255, 255, 230)
LABEL_FG      = (  0,   0,   0, 255)


def _load_font(size):
    """Prova alcuni font comuni; cade sul default di PIL se nessuno funziona."""
    candidates = [
        "DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "Arial Bold.ttf",
        "arialbd.ttf",
    ]
    for c in candidates:
        try:
            return ImageFont.truetype(c, size)
        except (OSError, IOError):
            continue
    return ImageFont.load_default()


def _is_vetrina_numerata(item):
    return item["id"][0].isdigit()


def _draw_hotspot(draw, item, font):
    x, y, w, h = item["x"], item["y"], item["w"], item["h"]
    fill = FILL_VETRINA if _is_vetrina_numerata(item) else FILL_ESPOSTO
    line = LINE_VETRINA if _is_vetrina_numerata(item) else LINE_ESPOSTO

    # Avvisa se l'hotspot esce dai bordi della mappa
    if x < 0 or y < 0 or x + w > MAP_W or y + h > MAP_H:
        print(f"  ! {item['id']:>3}: hotspot fuori dai bordi mappa ({x},{y} {w}x{h})", file=sys.stderr)

    # Rettangolo riempito + bordo
    draw.rectangle([x, y, x + w, y + h], fill=fill, outline=line, width=2)

    # Etichetta in alto a sinistra del rettangolo (su sfondo bianco)
    label = item["id"]
    bbox = draw.textbbox((0, 0), label, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad = 3
    lx, ly = x + 2, y + 2
    draw.rectangle([lx, ly, lx + tw + pad * 2, ly + th + pad * 2], fill=LABEL_BG)
    draw.text((lx + pad, ly + pad), label, fill=LABEL_FG, font=font)


def main():
    if not os.path.exists(MAP_FILE):
        raise SystemExit(f"Mappa non trovata: {MAP_FILE}")

    base = Image.open(MAP_FILE).convert("RGBA")
    if base.size != (MAP_W, MAP_H):
        print(
            f"Attenzione: la planimetria misura {base.size[0]}x{base.size[1]} "
            f"ma lo script usa MAP_W={MAP_W} MAP_H={MAP_H}. Sincronizza i valori.",
            file=sys.stderr,
        )

    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay, "RGBA")
    font = _load_font(14)

    for item in ITEMS:
        _draw_hotspot(draw, item, font)

    out = Image.alpha_composite(base, overlay)
    out.save(OUT_FILE)
    print(f"OK — {len(ITEMS)} hotspot disegnati su {OUT_FILE}")


if __name__ == "__main__":
    main()
