<script lang="ts">
  import { themeStore } from "../stores/theme.svelte";

  // Svelte 5 state rune for mobile navigation menu
  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<header
  class="sticky top-0 z-20 py-3 bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md"
>
  <div
    class="w-full max-w-[1180px] min-[1500px]:max-w-[1320px] mx-auto px-5 max-[620px]:px-4 flex items-center gap-3.5 max-[340px]:gap-1.5"
  >
    <!-- Brand / Logo -->
    <a
      href="#top"
      class="flex items-center gap-2.5 font-extrabold text-[22px] max-[400px]:text-[20px] tracking-tight text-fg no-underline mr-auto md:mr-0"
    >
      <img
        src="/img/icon.png"
        alt="Poketto logo"
        width="38"
        height="38"
        class="w-[38px] h-[38px] max-[400px]:w-[34px] max-[400px]:h-[34px] rounded-xl"
      />
      <span>Poketto</span>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex gap-1.5 ml-auto" aria-label="Sections">
      <a
        href="#features"
        class="px-4 py-2 rounded-full font-semibold text-[15px] text-fg2 hover:bg-sec-c hover:text-on-sec-c transition-colors"
        >Features</a
      >
      <a
        href="#colors"
        class="px-4 py-2 rounded-full font-semibold text-[15px] text-fg2 hover:bg-sec-c hover:text-on-sec-c transition-colors"
        >Colors</a
      >
      <a
        href="#offline"
        class="px-4 py-2 rounded-full font-semibold text-[15px] text-fg2 hover:bg-sec-c hover:text-on-sec-c transition-colors"
        >Offline</a
      >
    </nav>

    <!-- Mobile Menu Toggle Button -->
    <button
      class="md:hidden grid place-items-center w-11 h-11 max-[340px]:w-10 max-[340px]:h-10 rounded-full bg-sec-c text-on-sec-c shrink-0 cursor-pointer"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
      aria-controls="menuPanel"
      onclick={toggleMenu}
    >
      <svg
        class="w-5.5 h-5.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>

    <!-- Theme Toggle (Light / Dark) -->
    <button
      class="grid place-items-center w-11 h-11 max-[340px]:w-10 max-[340px]:h-10 rounded-full bg-sec-c text-on-sec-c shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
      aria-label="Switch light and dark theme"
      title="Switch light and dark theme"
      onclick={() => themeStore.toggleTheme()}
    >
      <svg class="w-5.5 h-5.5" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12 3a9 9 0 1 0 9 9c0-.5-.05-1-.14-1.47A5.5 5.5 0 0 1 13.47 3.14 9.1 9.1 0 0 0 12 3Z"
        />
      </svg>
    </button>

    <!-- Google Play Store Button -->
    <a
      href="https://play.google.com/store/apps/details?id=com.king_grey.pockit"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-3 bg-pri text-on-pri px-4 py-2 rounded-full hover:rounded-[20px] active:scale-95 transition-all duration-200 shrink-0"
    >
      <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M5 3.4v17.2a1 1 0 0 0 1.5.86l14.2-8.6a1 1 0 0 0 0-1.72L6.5 2.54A1 1 0 0 0 5 3.4Z"
        />
      </svg>
      <span class="flex flex-col text-left leading-none">
        <b class="text-[15px] font-bold hidden min-[401px]:inline"
          >Google Play</b
        >
        <b class="text-[15px] font-bold min-[401px]:hidden">Play</b>
      </span>
    </a>
  </div>

  <!-- Mobile Drawer Panel -->
  {#if menuOpen}
    <nav
      id="menuPanel"
      class="md:hidden absolute left-0 right-0 top-full mx-4 mt-2 p-2.5 bg-card border border-line rounded-[28px] grid gap-1.5 shadow-xl"
      aria-label="Sections"
    >
      <a
        href="#features"
        class="px-4 py-3 rounded-2xl font-bold text-lg text-fg hover:bg-sec-c hover:text-on-sec-c transition-colors"
        onclick={closeMenu}>Features</a
      >
      <a
        href="#colors"
        class="px-4 py-3 rounded-2xl font-bold text-lg text-fg hover:bg-sec-c hover:text-on-sec-c transition-colors"
        onclick={closeMenu}>Colors</a
      >
      <a
        href="#offline"
        class="px-4 py-3 rounded-2xl font-bold text-lg text-fg hover:bg-sec-c hover:text-on-sec-c transition-colors"
        onclick={closeMenu}>Offline</a
      >
    </nav>
  {/if}
</header>
