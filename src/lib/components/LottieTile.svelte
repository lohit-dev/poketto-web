<script lang="ts">
  import { themeStore } from "../stores/theme.svelte";

  let container: HTMLDivElement | undefined = $state();
  let hasAnimation = $state(false);

  // Re-run whenever palette or light/dark mode changes
  $effect(() => {
    const pal = themeStore.pal;
    const mode = themeStore.effectiveMode;
    let anim: any = null;

    async function load() {
      // Ensure the browser and container are ready
      if (
        !container ||
        typeof window === "undefined" ||
        !(window as any).lottie
      ) {
        return;
      }

      try {
        const res = await fetch(`/lottie/${pal}_${mode}.json`);
        if (!res.ok) return;
        const animationData = await res.json();

        // Clear container contents before mounting SVG animation
        if (container) {
          container.innerHTML = "";
          anim = (window as any).lottie.loadAnimation({
            container,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData,
          });
          hasAnimation = true;
        }
      } catch {
        // Fallback to static app icon on network/json failure
        hasAnimation = false;
      }
    }

    load();

    // Svelte 5 cleanup runs when dependencies change or component unmounts
    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  });
</script>

<div
  bind:this={container}
  class="tile-anim"
  aria-label="Poketto app animated icon"
>
  {#if !hasAnimation}
    <img src="/img/icon.png" alt="Poketto app icon" width="132" height="132" />
  {/if}
</div>

<style>
  .tile-anim {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .tile-anim :global(svg),
  .tile-anim img {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
