(function () {
    'use strict';

    const STORAGE_KEY = 'museo-theme';
    const DEFAULT_THEME = 'editorial';
    const THEMES = [
        { id: 'editorial',  label: 'Editoriale'   },
        { id: 'scientific', label: 'Scientifico'  },
        { id: 'heritage',   label: 'Heritage'     },
        { id: 'minimal',    label: 'Minimal'      }
    ];

    function getStoredTheme() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return THEMES.some(t => t.id === stored) ? stored : DEFAULT_THEME;
        } catch (e) {
            return DEFAULT_THEME;
        }
    }

    function applyTheme(id) {
        document.documentElement.dataset.theme = id;
        try { localStorage.setItem(STORAGE_KEY, id); } catch (e) {}
        document.querySelectorAll('.theme-switcher button[data-theme-value]').forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.themeValue === id);
        });
    }

    function buildBar() {
        const bar = document.createElement('div');
        bar.className = 'theme-switcher';
        bar.setAttribute('role', 'region');
        bar.setAttribute('aria-label', 'Selettore tema visivo');

        const label = document.createElement('span');
        label.className = 'theme-switcher__label';
        label.textContent = 'Anteprima tema';
        bar.appendChild(label);

        const group = document.createElement('div');
        group.className = 'theme-switcher__buttons';
        THEMES.forEach(t => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.themeValue = t.id;
            btn.textContent = t.label;
            btn.addEventListener('click', () => applyTheme(t.id));
            group.appendChild(btn);
        });
        bar.appendChild(group);

        return bar;
    }

    function init() {
        if (document.querySelector('.theme-switcher')) return;
        const bar = buildBar();
        document.body.insertBefore(bar, document.body.firstChild);
        applyTheme(getStoredTheme());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
