<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';
  import LottieTile from './LottieTile.svelte';
</script>

<div class="hero">
  <div class="wrap">
    <div>
      <span class="eyebrow">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M17.6 9.5 19 7.2a.5.5 0 0 0-.87-.5l-1.4 2.4A8.6 8.6 0 0 0 12 8c-1.7 0-3.3.4-4.7 1.1L5.9 6.7a.5.5 0 0 0-.87.5L6.4 9.5A7.4 7.4 0 0 0 3 15h18a7.4 7.4 0 0 0-3.4-5.5ZM8.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
          />
        </svg>
        Made for Android
      </span>
      <h1>Know where your <em>money</em> goes.</h1>
      <p class="lede">
        Poketto is an offline expense tracker with analytics that make sense. Spending, what’s left
        and your daily average, in one glance.
      </p>
      <div class="cta-row">
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
        <a class="ghost" href="#features">See what’s inside</a>
      </div>
      <p class="note">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
        </svg>
        Nothing leaves your phone.
      </p>
    </div>
    <div class="stage" aria-hidden="false">
      <div class="blob"></div>
      <img
        class="p1"
        data-tab="ov"
        src="/img/{themeStore.pal}_ov.webp"
        alt="Poketto overview screen showing monthly spending, budget left and daily average"
        width="560"
        height="1184"
      />
      <img
        class="p2"
        data-tab="in"
        src="/img/{themeStore.pal}_in.webp"
        alt="Poketto insights screen"
        width="560"
        height="1184"
      />
      <LottieTile />
      <div class="chip c1">₹60,000 left<small>12 days to go</small></div>
      <div class="chip c2">₹2,230<small>Daily average</small></div>
    </div>
  </div>
</div>
