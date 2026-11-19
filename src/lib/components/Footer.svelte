<script lang="ts">
  import { router } from '../stores/router.svelte';

  function openPrivacy(e: MouseEvent) {
    e.preventDefault();
    router.navigate('/privacy');
  }

  function openTerms(e: MouseEvent) {
    e.preventDefault();
    router.navigate('/terms');
  }
</script>

<footer>
  <div class="wrap">
    <span>© Poketto. Made by King Grey.</span>
    <div class="links">
      <a href="/privacy" onclick={openPrivacy}>Privacy Policy</a>
      <span class="sep">·</span>
      <a href="/terms" onclick={openTerms}>Terms of Service</a>
    </div>
    <span>Android only. Google Play is a trademark of Google LLC.</span>
  </div>
</footer>

<style>
  footer .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 16px;
    justify-content: space-between;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sep {
    color: var(--fg2);
    opacity: 0.5;
  }

  a {
    color: var(--fg2);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s ease;
  }
  a:hover {
    color: var(--pri);
  }
</style>
