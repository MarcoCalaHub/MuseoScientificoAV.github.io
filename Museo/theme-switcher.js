(function () {
    'use strict';

    var THEME_KEY = 'museo-theme';
    var DEFAULT_THEME = 'editorial';
    var THEMES = [
        { id: 'editorial',  label: 'Editoriale'  },
        { id: 'scientific', label: 'Scientifico' },
        { id: 'heritage',   label: 'Heritage'    },
        { id: 'minimal',    label: 'Minimal'     }
    ];

    var FONT_SIZE_KEY = 'museo-font-size';
    var DEFAULT_FONT_SIZE = 'normal';
    var FONT_SIZES = [
        { id: 'small',  label: 'Piccolo' },
        { id: 'normal', label: 'Normale' },
        { id: 'large',  label: 'Grande'  }
    ];

    function getStored(key, options, fallback) {
        try {
            var stored = localStorage.getItem(key);
            var ok = options.some(function (o) { return o.id === stored; });
            return ok ? stored : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function applyTheme(id) {
        document.documentElement.dataset.theme = id;
        try { localStorage.setItem(THEME_KEY, id); } catch (e) {}
        document.querySelectorAll('[data-theme-value]').forEach(function (btn) {
            btn.classList.toggle('is-active', btn.dataset.themeValue === id);
        });
    }

    function applyFontSize(id) {
        document.documentElement.dataset.fontSize = id;
        try { localStorage.setItem(FONT_SIZE_KEY, id); } catch (e) {}
        document.querySelectorAll('[data-font-size-value]').forEach(function (btn) {
            btn.classList.toggle('is-active', btn.dataset.fontSizeValue === id);
        });
    }

    function buildSection(labelText, gridModifier) {
        var section = document.createElement('div');
        section.className = 'settings-panel__section';

        var label = document.createElement('span');
        label.className = 'settings-panel__label';
        label.textContent = labelText;
        section.appendChild(label);

        var group = document.createElement('div');
        group.className = 'settings-panel__buttons settings-panel__buttons--' + gridModifier;
        section.appendChild(group);

        return { section: section, group: group };
    }

    function buildPanel() {
        var panel = document.createElement('div');
        panel.className = 'settings-panel';
        panel.id = 'settingsPanel';
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-label', 'Impostazioni del sito');
        panel.hidden = true;

        var themeSection = buildSection('Tema', 'theme');
        THEMES.forEach(function (t) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.themeValue = t.id;
            btn.textContent = t.label;
            btn.addEventListener('click', function () { applyTheme(t.id); });
            themeSection.group.appendChild(btn);
        });
        panel.appendChild(themeSection.section);

        var fontSection = buildSection('Dimensione testo', 'fontsize');
        FONT_SIZES.forEach(function (f) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.fontSizeValue = f.id;
            btn.textContent = f.label;
            btn.addEventListener('click', function () { applyFontSize(f.id); });
            fontSection.group.appendChild(btn);
        });
        panel.appendChild(fontSection.section);

        var footer = document.createElement('div');
        footer.className = 'settings-panel__footer';
        var resetBtn = document.createElement('button');
        resetBtn.type = 'button';
        resetBtn.className = 'settings-panel__reset';
        resetBtn.textContent = '↺ Ripristina impostazioni';
        resetBtn.addEventListener('click', function () {
            applyTheme(DEFAULT_THEME);
            applyFontSize(DEFAULT_FONT_SIZE);
        });
        footer.appendChild(resetBtn);
        panel.appendChild(footer);

        return panel;
    }

    function buildToggle() {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'settings-toggle';
        btn.id = 'settingsToggle';
        btn.setAttribute('aria-label', 'Impostazioni del sito');
        btn.setAttribute('aria-haspopup', 'true');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span aria-hidden="true">⚙️</span>';
        return btn;
    }

    function init() {
        if (document.getElementById('settingsToggle')) return;

        var toggle = buildToggle();
        var panel = buildPanel();
        document.body.appendChild(toggle);
        document.body.appendChild(panel);

        function openPanel() {
            panel.hidden = false;
            toggle.classList.add('is-active');
            toggle.setAttribute('aria-expanded', 'true');
        }
        function closePanel() {
            panel.hidden = true;
            toggle.classList.remove('is-active');
            toggle.setAttribute('aria-expanded', 'false');
        }

        toggle.addEventListener('click', function (event) {
            event.stopPropagation();
            if (panel.hidden) openPanel(); else closePanel();
        });

        document.addEventListener('click', function (event) {
            if (!panel.hidden && !panel.contains(event.target) && event.target !== toggle) {
                closePanel();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !panel.hidden) {
                closePanel();
                toggle.focus();
            }
        });

        applyTheme(getStored(THEME_KEY, THEMES, DEFAULT_THEME));
        applyFontSize(getStored(FONT_SIZE_KEY, FONT_SIZES, DEFAULT_FONT_SIZE));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
