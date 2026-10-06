<script lang="ts">
  import { themeStore, PALETTES, type PaletteKey } from '../stores/theme.svelte';

  const paletteEntries = Object.entries(PALETTES) as [PaletteKey, readonly [string, string]][];
</script>

<section id="colors" class="mine">
  <div class="wrap">
    <div>
      <span class="kicker">Material You</span>
      <h2>Your wallpaper, your colors.</h2>
      <p class="lede" style="margin-top:14px">
        Poketto follows your Android theme. Pick a wallpaper and every screen re-colors. Try a
        palette here and watch this page change with it.
      </p>
      <div class="swatches" id="swatches" role="group" aria-label="Palette">
        {#each paletteEntries as [key, [primaryHex, secondaryHex]]}
          <button
            class="sw"
            data-pal={key}
            aria-pressed={themeStore.pal === key}
            onclick={() => themeStore.setPalette(key)}
          >
            <i style="background:#{primaryHex};--b:#{secondaryHex}"></i>{key}
          </button>
        {/each}
      </div>
      <div class="seg" role="group" aria-label="Appearance">
        <button
          id="segLight"
          aria-pressed={themeStore.effectiveMode === 'light'}
          onclick={() => themeStore.setTheme('light')}
        >
          Light
        </button>
        <button
          id="segDark"
          aria-pressed={themeStore.effectiveMode === 'dark'}
          onclick={() => themeStore.setTheme('dark')}
        >
          Dark
        </button>
      </div>
    </div>
    <div class="fan">
      <div class="blob"></div>
      <img
        class="f1"
        data-tab="bud"
        src="/img/{themeStore.pal}_bud.webp"
        alt="Budgets screen in the chosen palette"
        loading="lazy"
        width="560"
        height="1184"
      />
      <img
        class="f2"
        data-tab="ov"
        src="/img/{themeStore.pal}_ov.webp"
        alt="Overview screen in the chosen palette"
        loading="lazy"
        width="560"
        height="1184"
      />
      <img
        class="f3"
        data-tab="cat"
        src="/img/{themeStore.pal}_cat.webp"
        alt="Category screen in the chosen palette"
        loading="lazy"
        width="560"
        height="1184"
      />
    </div>
  </div>
</section>
