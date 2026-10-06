<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';

  // Svelte 5 rune for mobile menu state
  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  // Handle keyboard events (ESC key closes menu)
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="top sticky z-20">
  <div class="wrap">
    <a class="brand" href="#top">
      <img src="/img/icon.png" alt="Poketto logo" width="38" height="38" />
      Poketto
    </a>

    <nav class="links" aria-label="Sections">
      <a href="#features">Features</a>
      <a href="#colors">Colors</a>
      <a href="#offline">Offline</a>
    </nav>

    <!-- Mobile menu toggle -->
    <button
      class="icon-btn menu-btn"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
      aria-controls="menuPanel"
      onclick={toggleMenu}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>

    <!-- Theme toggle -->
    <button
      class="icon-btn"
      aria-label="Switch light and dark theme"
      title="Switch light and dark theme"
      onclick={() => themeStore.toggleTheme()}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3a9 9 0 1 0 9 9c0-.5-.05-1-.14-1.47A5.5 5.5 0 0 1 13.47 3.14 9.1 9.1 0 0 0 12 3Z" />
      </svg>
    </button>

    <!-- Google Play button (compact header version) -->
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

  <!-- Mobile navigation drawer -->
  {#if menuOpen}
    <nav class="panel" id="menuPanel" aria-label="Sections">
      <a href="#features" onclick={closeMenu}>Features</a>
      <a href="#colors" onclick={closeMenu}>Colors</a>
      <a href="#offline" onclick={closeMenu}>Offline</a>
    </nav>
  {/if}
</header>

<style>
  header.top {
    top: env(safe-area-inset-top, 0px);
    padding-block: 12px;
    background: color-mix(in srgb, var(--bg) 86%, transparent);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  header.top .wrap {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    font-size: 22px;
    letter-spacing: -0.02em;
    text-decoration: none;
  }

  .brand img {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }

  nav.links {
    display: flex;
    gap: 6px;
    margin-left: auto;
  }

  nav.links a {
    padding: 9px 16px;
    border-radius: 99px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    color: var(--fg2);
    transition: background 0.2s, color 0.2s;
  }

  nav.links a:hover {
    background: var(--sec-c);
    color: var(--on-sec-c);
  }

  .icon-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 0;
    background: var(--sec-c);
    color: var(--on-sec-c);
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: none;
    transition: opacity 0.2s;
  }

  .icon-btn:hover {
    opacity: 0.9;
  }

  .icon-btn svg {
    width: 22px;
    height: 22px;
  }

  .menu-btn {
    display: none;
  }

  .play .short {
    display: none;
  }

  .panel {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    max-width: 1180px;
    margin-inline: auto;
    margin-top: 4px;
    display: grid;
    gap: 6px;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 28px;
    padding: 10px;
    margin-inline: 16px;
  }

  .panel a {
    padding: 14px 18px;
    border-radius: 18px;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    color: var(--fg);
  }

  .panel a:active,
  .panel a:hover {
    background: var(--sec-c);
    color: var(--on-sec-c);
  }

  @media (max-width: 900px) {
    nav.links {
      display: none;
    }
    .menu-btn {
      display: grid;
    }
    header.top .wrap {
      gap: 10px;
    }
    header.top .brand {
      margin-right: auto;
    }
  }

  @media (max-width: 400px) {
    header.top .play b {
      display: none;
    }
    header.top .play b.short {
      display: inline;
      font-size: 15px;
    }
    .brand {
      font-size: 20px;
    }
    .brand img {
      width: 34px;
      height: 34px;
    }
  }

  @media (max-width: 340px) {
    header.top .wrap {
      gap: 6px;
    }
    .icon-btn {
      width: 40px;
      height: 40px;
    }
  }
</style>
