<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';
  import LottieTile from './LottieTile.svelte';
</script>

<div class="hero">
  <div class="wrap">
    <div>
      <span class="eyebrow">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 9.5 19 7.2a.5.5 0 0 0-.87-.5l-1.4 2.4A8.6 8.6 0 0 0 12 8c-1.7 0-3.3.4-4.7 1.1L5.9 6.7a.5.5 0 0 0-.87.5L6.4 9.5A7.4 7.4 0 0 0 3 15h18a7.4 7.4 0 0 0-3.4-5.5ZM8.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>
        Made for Android
      </span>

      <h1>Know where your <em>money</em> goes.</h1>

      <p class="lede">
        Poketto is an offline expense tracker with analytics that make sense. Spending, what’s left and your daily average, in one glance.
      </p>

      <div class="cta-row">
        <a
          class="play"
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

      <!-- Screenshots dynamically change with the reactive palette store -->
      <img
        class="p1"
        src="/img/{themeStore.pal}_ov.webp"
        alt="Poketto overview screen showing monthly spending, budget left and daily average"
        width="560"
        height="1184"
      />
      <img
        class="p2"
        src="/img/{themeStore.pal}_in.webp"
        alt="Poketto insights screen"
        width="560"
        height="1184"
      />

      <div class="tile-wrapper">
        <LottieTile />
      </div>

      <div class="chip c1">
        ₹60,000 left
        <small>12 days to go</small>
      </div>

      <div class="chip c2">
        ₹2,230
        <small>Daily average</small>
      </div>
    </div>
  </div>
</div>

<style>
  .hero {
    padding-block: 28px 72px;
  }

  .hero .wrap {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 24px;
    align-items: center;
  }

  .hero .wrap > * {
    min-width: 0;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--ter-c);
    color: var(--on-ter-c);
    font-weight: 700;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 99px;
    letter-spacing: 0.01em;
  }

  .eyebrow svg {
    width: 18px;
    height: 18px;
  }

  h1 {
    font-size: clamp(44px, 7.2vw, 96px);
    line-height: 0.98;
    font-weight: 850;
    letter-spacing: -0.04em;
    margin-block: 22px 20px;
    text-wrap: balance;
  }

  h1 em {
    font-style: normal;
    color: var(--pri);
  }

  .lede {
    font-size: clamp(18px, 2vw, 22px);
    color: var(--fg2);
    max-width: 30em;
    text-wrap: pretty;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin-top: 30px;
  }

  .note {
    margin-top: 16px;
    font-size: 14px;
    color: var(--fg2);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .note svg {
    width: 18px;
    height: 18px;
    color: var(--pri);
  }

  .stage {
    position: relative;
    min-height: 600px;
    display: grid;
    place-items: center;
  }

  .blob {
    position: absolute;
    inset: 4% 0 2% 4%;
    background: var(--pri-c);
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    animation: morph 14s ease-in-out infinite alternate;
  }

  .stage .p1 {
    position: relative;
    width: min(270px, 58%);
    filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.28));
    animation: bob 7s ease-in-out infinite alternate;
  }

  .stage .p2 {
    position: absolute;
    width: min(190px, 36%);
    right: 0;
    bottom: 0;
    transform: rotate(6deg);
    filter: drop-shadow(0 24px 30px rgba(0, 0, 0, 0.28));
  }

  .tile-wrapper {
    position: absolute;
    left: 0;
    top: 6%;
    width: 132px;
    height: 132px;
    border-radius: 32px;
    background: var(--card3);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    overflow: hidden;
    transform: rotate(-6deg);
  }

  .chip {
    position: absolute;
    background: var(--card);
    border: 1px solid var(--line);
    padding: 10px 16px;
    border-radius: 22px 22px 22px 6px;
    font-weight: 700;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
    font-size: 15px;
    white-space: nowrap;
  }

  .chip small {
    display: block;
    font-weight: 500;
    color: var(--fg2);
    font-size: 12px;
  }

  .chip.c1 {
    left: -2%;
    bottom: 24%;
  }

  .chip.c2 {
    right: 2%;
    top: 4%;
    border-radius: 22px 22px 6px 22px;
  }

  @media (min-width: 1500px) {
    .hero .wrap {
      gap: 48px;
    }
    .stage {
      min-height: 680px;
    }
    .stage .p1 {
      width: min(310px, 58%);
    }
    .stage .p2 {
      width: min(220px, 36%);
    }
  }

  @media (max-width: 900px) {
    .hero .wrap {
      grid-template-columns: 1fr;
    }
    .hero {
      padding-block: 16px 48px;
    }
    .hero .wrap > div:first-child {
      text-align: left;
    }
    .stage {
      min-height: 520px;
      max-width: 560px;
      width: 100%;
      margin-inline: auto;
    }
  }

  @media (max-width: 620px) {
    .cta-row {
      width: 100%;
    }
    .cta-row :global(.play),
    .cta-row :global(.ghost) {
      flex: 1 1 220px;
      justify-content: center;
    }
    .stage {
      min-height: 480px;
    }
    .stage .p1 {
      width: min(230px, 58%);
    }
    .stage .p2 {
      width: min(160px, 38%);
    }
    .tile-wrapper {
      width: 96px;
      height: 96px;
      border-radius: 26px;
    }
    .chip {
      font-size: 13px;
      padding: 8px 12px;
    }
    .chip small {
      font-size: 11px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: clamp(38px, 12.5vw, 52px);
    }
    .stage {
      min-height: 430px;
    }
    .chip.c1 {
      bottom: 2%;
    }
  }

  @media (max-width: 340px) {
    .stage .p2 {
      display: none;
    }
  }
</style>
