<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';
</script>

<section id="features">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker">Inside Poketto</span>
      <h2>Small taps. Clear answers.</h2>
      <p>
        Add what you spent, watch the picture update, and keep your budget on track without digging
        through menus.
      </p>
    </div>
    <div class="bento">
      <article class="tile t-a">
        <div class="txt">
          <h3>Know where your money goes</h3>
          <p>Spending, what’s left and your daily average, in one glance.</p>
        </div>
        <img
          class="shot"
          data-tab="in"
          src="/img/{themeStore.pal}_in.webp"
          alt="Insights screen with spending breakdown"
          loading="lazy"
          width="560"
          height="1184"
        />
      </article>
      <article class="tile t-b">
        <div class="txt">
          <h3>Add an expense in seconds</h3>
          <p>Pick a category, type the amount, done. ₹1,250 added to Food takes a moment.</p>
        </div>
        <img
          class="shot"
          data-tab="add"
          src="/img/{themeStore.pal}_add.webp"
          alt="Add expense sheet"
          loading="lazy"
          width="560"
          height="1184"
        />
      </article>
      <article class="tile t-c">
        <div class="txt">
          <h3>Budgets, set up for you</h3>
          <p>
            A monthly budget split across the categories you actually spend on, so you see where you
            stand.
          </p>
        </div>
        <img
          class="shot"
          data-tab="bud"
          src="/img/{themeStore.pal}_bud.webp"
          alt="Budgets screen"
          loading="lazy"
          width="560"
          height="1184"
        />
      </article>
      <article class="tile t-d" id="offline">
        <h3>Offline by design</h3>
        <p>Poketto keeps your numbers on your device.</p>
        <ul class="offline-list">
          <li>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
              <circle cx="12" cy="19.5" r="1" fill="currentColor" />
              <path d="M3 3l18 18" />
            </svg>
            Works fully offline
          </li>
          <li>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="5" y="3" width="14" height="18" rx="3" />
              <path d="M10 18h4" />
            </svg>
            Nothing leaves your phone
          </li>
          <li>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M12 11v3M8 6.5a6 6 0 0 1 8 0M5.5 10a9 9 0 0 1 13 0M8 14.5c0 3 1 4.5 2 6M16 14c0 3-1 5-3 7"
              />
            </svg>
            App lock with biometrics
          </li>
        </ul>
        <svg class="big" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
        </svg>
      </article>
    </div>
  </div>
</section>
