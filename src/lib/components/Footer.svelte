<script lang="ts">
  import { router } from '../stores/router.svelte';

  function openPrivacy(e: MouseEvent) {
    e.preventDefault();
    router.navigate('/privacy');
  }
</script>

<footer>
  <div class="wrap">
    <span>© Poketto. Made by King Grey.</span>
    <a href="/privacy" onclick={openPrivacy}>Privacy Policy</a>
    <span>Android only. Google Play is a trademark of Google LLC.</span>
  </div>
</footer>

<style>
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
