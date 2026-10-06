<script lang="ts">
  import LottieTile from './LottieTile.svelte';
</script>

<div class="final">
  <div class="wrap">
    <div class="box">
      <LottieTile />
      <div>
        <h2>Keep your money in your pocket.</h2>
        <p>Poketto is on Google Play for Android. Offline, private and colored by you.</p>
        <a
          class="play"
          href="https://play.google.com/store/apps/details?id=com.king_grey.pockit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M5 3.4v17.2a1 1 0 0 0 1.5.86l14.2-8.6a1 1 0 0 0 0-1.72L6.5 2.54A1 1 0 0 0 5 3.4Z"
            />
          </svg>
          <span>
            <small>Get it on</small>
            <b>Google Play</b>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
