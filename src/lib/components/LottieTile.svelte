<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';

  let container: HTMLDivElement | undefined = $state();

  $effect(() => {
    const pal = themeStore.pal;
    const mode = themeStore.effectiveMode;
    let anim: any = null;

    if (!container || typeof window === 'undefined') return;

    fetch(`/lottie/${pal}_${mode}.json`)
      .then((r) => r.json())
      .then((data) => {
        if (!container) return;
        if ((window as any).lottie) {
          container.innerHTML = '';
          anim = (window as any).lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: data,
          });
        }
      })
      .catch(() => {});

    return () => {
      if (anim) anim.destroy();
    };
  });
</script>

<div bind:this={container} class="tile-anim" data-lottie>
  <img src="/img/icon.png" alt="Poketto app icon" />
</div>
