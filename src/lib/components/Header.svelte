<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';

  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<svelte:window
  onkeydown={(e) => { if (e.key === 'Escape') closeMenu(); }}
  onresize={() => { if (typeof window !== 'undefined' && window.innerWidth > 900) closeMenu(); }}
/>

<header class="top">
  <div class="wrap">
    <a class="brand" href="#top">
      <img src="/img/icon.png" alt="" width="38" height="38" />
      Poketto
    </a>
    <nav class="links" aria-label="Sections">
      <a href="#features">Features</a>
      <a href="#colors">Colors</a>
      <a href="#offline">Offline</a>
    </nav>
    <button
      class="icon-btn menu-btn"
      id="menuBtn"
      aria-label="Menu"
      aria-expanded={menuOpen}
      aria-controls="menuPanel"
      onclick={toggleMenu}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
    <button
      class="icon-btn"
      id="themeBtn"
      aria-label="Switch light and dark"
      title="Switch light and dark"
      onclick={() => themeStore.toggleTheme()}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3a9 9 0 1 0 9 9c0-.5-.05-1-.14-1.47A5.5 5.5 0 0 1 13.47 3.14 9.1 9.1 0 0 0 12 3Z" />
      </svg>
    </button>
    <a
      class="play sm"
      href="https://play.google.com/store/apps/details?id=com.king_grey.pockit"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 3.4v17.2a1 1 0 0 0 1.5.86l14.2-8.6a1 1 0 0 0 0-1.72L6.5 2.54A1 1 0 0 0 5 3.4Z" />
      </svg>
      <span>
        <small>Get it on</small>
        <b>Google Play</b>
        <b class="short">Play</b>
      </span>
    </a>
  </div>
  <nav class="panel" id="menuPanel" aria-label="Sections" hidden={!menuOpen}>
    <a href="#features" onclick={closeMenu}>Features</a>
    <a href="#colors" onclick={closeMenu}>Colors</a>
    <a href="#offline" onclick={closeMenu}>Offline</a>
  </nav>
</header>
