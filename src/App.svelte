<script lang="ts">
  import { onMount } from "svelte";
  import { themeStore } from "./lib/stores/theme.svelte";
  import Header from "./lib/components/Header.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import Features from "./lib/components/Features.svelte";
  import ColorCustomizer from "./lib/components/ColorCustomizer.svelte";
  import FinalCta from "./lib/components/FinalCta.svelte";
  import Footer from "./lib/components/Footer.svelte";

  onMount(() => {
    // Restore user preferences or detect system defaults
    themeStore.init();

    // Listen for OS dark/light mode preference changes if no manual override is active
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!themeStore.manualTheme) {
        document.documentElement.setAttribute(
          "data-theme",
          themeStore.effectiveMode,
        );
      }
    };

    mq.addEventListener("change", handleSystemThemeChange);
    return () => mq.removeEventListener("change", handleSystemThemeChange);
  });
</script>

<Header />

<main id="top" class="min-h-screen">
  <Hero />
  <Features />
  <ColorCustomizer />
  <FinalCta />
</main>

<Footer />
