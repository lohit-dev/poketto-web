<script lang="ts">
  import {
    themeStore,
    PALETTES,
    type PaletteKey,
  } from "../stores/theme.svelte";

  const paletteEntries = Object.entries(PALETTES) as [
    PaletteKey,
    readonly [string, string],
  ][];
</script>

<section id="colors" class="py-10 md:py-14">
  <div
    class="w-full max-w-[1180px] min-[1500px]:max-w-[1320px] mx-auto px-5 max-[620px]:px-4 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 items-center"
  >
    <!-- Left Configuration Controls -->
    <div class="min-w-0">
      <span class="font-bold text-pri text-sm tracking-widest uppercase"
        >Material You</span
      >
      <h2
        class="text-[clamp(34px,5vw,60px)] max-[400px]:text-[clamp(30px,9.5vw,40px)] leading-[1.03] tracking-[-0.035em] font-extrabold text-balance mt-2.5"
      >
        Your wallpaper, your colors.
      </h2>
      <p
        class="text-[clamp(18px,2vw,22px)] text-fg2 max-w-[30em] text-pretty mt-3.5"
      >
        Poketto follows your Android theme. Pick a wallpaper and every screen
        re-colors. Try a palette here and watch this page change with it.
      </p>

      <!-- Palette Color Swatches -->
      <div
        class="flex flex-wrap gap-3 max-[620px]:gap-2 mt-6.5"
        role="group"
        aria-label="Palette selection"
      >
        {#each paletteEntries as [key, [primaryHex, secondaryHex]]}
          <button
            class="flex items-center gap-2.5 py-2 px-4.5 max-[620px]:px-3.5 max-[620px]:py-1.5 rounded-full border-2 font-bold capitalize cursor-pointer transition-all duration-200 active:scale-95 {themeStore.pal ===
            key
              ? 'border-pri bg-pri-c text-on-pri-c rounded-2xl shadow-sm'
              : 'border-line bg-card text-fg hover:border-fg2'}"
            aria-pressed={themeStore.pal === key}
            onclick={() => themeStore.setPalette(key)}
          >
            <!-- Dual tone color badge -->
            <span
              class="relative w-8.5 h-8.5 max-[620px]:w-7.5 max-[620px]:h-7.5 rounded-full overflow-hidden block shrink-0"
              style="background: #{primaryHex};"
            >
              <span
                class="absolute inset-y-0 right-0 w-1/2 block"
                style="background: #{secondaryHex};"
              ></span>
            </span>
            <span>{key}</span>
          </button>
        {/each}
      </div>

      <!-- Light / Dark Appearance Toggle -->
      <div
        class="inline-flex bg-sec-c rounded-full p-1 mt-5"
        role="group"
        aria-label="Appearance selection"
      >
        <button
          class="font-bold py-2.5 px-5.5 rounded-full transition-colors cursor-pointer {themeStore.effectiveMode ===
          'light'
            ? 'bg-pri text-on-pri shadow-sm'
            : 'text-on-sec-c hover:opacity-80'}"
          aria-pressed={themeStore.effectiveMode === "light"}
          onclick={() => themeStore.setTheme("light")}
        >
          Light
        </button>
        <button
          class="font-bold py-2.5 px-5.5 rounded-full transition-colors cursor-pointer {themeStore.effectiveMode ===
          'dark'
            ? 'bg-pri text-on-pri shadow-sm'
            : 'text-on-sec-c hover:opacity-80'}"
          aria-pressed={themeStore.effectiveMode === "dark"}
          onclick={() => themeStore.setTheme("dark")}
        >
          Dark
        </button>
      </div>
    </div>

    <!-- Right Phone Fan Showcase -->
    <div
      class="group relative min-h-[640px] max-[900px]:min-h-[520px] max-[620px]:min-h-[430px] w-full max-w-[640px] mx-auto grid place-items-center"
    >
      <!-- Animated Morphing Blob -->
      <div
        class="absolute inset-[6%] bg-pri-c rounded-[63%_37%_54%_46%/55%_48%_52%_45%] animate-[morph_18s_ease-in-out_infinite_alternate] pointer-events-none"
      ></div>

      <!-- Fan 1 (Budgets - Left tilted) -->
      <img
        class="absolute left-[2%] w-[min(215px,33%)] max-[340px]:hidden -rotate-8 translate-y-[30px] drop-shadow-[0_24px_34px_rgba(0,0,0,0.3)] group-hover:-rotate-11 group-hover:-translate-x-2.5 group-hover:translate-y-6 transition-transform duration-500 ease-out"
        src="/img/{themeStore.pal}_bud.webp"
        alt="Budgets screen in the chosen palette"
        loading="lazy"
        width="560"
        height="1184"
      />

      <!-- Fan 2 (Overview - Center prominent) -->
      <img
        class="relative z-10 w-[min(245px,38%)] max-[340px]:w-[min(240px,60%)] -translate-y-2.5 drop-shadow-[0_24px_34px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out"
        src="/img/{themeStore.pal}_ov.webp"
        alt="Overview screen in the chosen palette"
        loading="lazy"
        width="560"
        height="1184"
      />

      <!-- Fan 3 (Category - Right tilted) -->
      <img
        class="absolute right-[2%] w-[min(215px,33%)] max-[340px]:hidden rotate-8 translate-y-[30px] drop-shadow-[0_24px_34px_rgba(0,0,0,0.3)] group-hover:rotate-11 group-hover:translate-x-2.5 group-hover:translate-y-6 transition-transform duration-500 ease-out"
        src="/img/{themeStore.pal}_cat.webp"
        alt="Category screen in the chosen palette"
        loading="lazy"
        width="560"
        height="1184"
      />
    </div>
  </div>
</section>
