// Shared reactive state for palette and theme.
// Uses Svelte 5's $state rune inside a class — any component
// that reads store.pal or store.manualTheme will re-render when they change.

export const PALETTES = {
  sapphire: ['2051D9', '9FEBDA'],
  meadow: ['49835C', 'D3E9EE'],
  sunset: ['9D572F', 'E8EED3'],
  orchid: ['83497E', 'EED3D5'],
  crimson: ['8C4046', 'EEE7D3'],
} as const;

export type PaletteKey = keyof typeof PALETTES;

class ThemeStore {
  pal = $state<PaletteKey>('sapphire');
  manualTheme = $state<'light' | 'dark' | null>(null);

  // What mode is actually showing right now (manual override OR system preference)
  get effectiveMode(): 'light' | 'dark' {
    if (this.manualTheme) return this.manualTheme;
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  setPalette(p: PaletteKey) {
    this.pal = p;
    document.documentElement.setAttribute('data-pal', p);
    try {
      localStorage.setItem('poketto-pal', p);
    } catch {
      /* private/restricted mode */
    }
  }

  setTheme(t: 'light' | 'dark') {
    this.manualTheme = t;
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem('poketto-theme', t);
    } catch {
      /* private/restricted mode */
    }
  }

  toggleTheme() {
    this.setTheme(this.effectiveMode === 'dark' ? 'light' : 'dark');
  }

  // Call once on app mount to restore the user's saved preferences
  init() {
    try {
      const t = localStorage.getItem('poketto-theme') as 'light' | 'dark' | null;
      const p = localStorage.getItem('poketto-pal') as PaletteKey | null;
      if (t) this.setTheme(t);
      if (p && p in PALETTES) {
        this.setPalette(p);
      } else {
        this.setPalette('sapphire');
      }
    } catch {
      this.setPalette('sapphire');
    }
  }
}

// Single instance — import this in any component that needs theme state
export const themeStore = new ThemeStore();
