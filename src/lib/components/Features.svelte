<script lang="ts">
  import { themeStore } from "../stores/theme.svelte";
</script>

<section id="features" class="py-10 md:py-14">
  <div
    class="w-full max-w-[1180px] min-[1500px]:max-w-[1320px] mx-auto px-5 max-[620px]:px-4"
  >
    <!-- Section Title & Subtitle -->
    <div class="max-w-[760px] mb-9">
      <span class="font-bold text-pri text-sm tracking-widest uppercase"
        >Inside Poketto</span
      >
      <h2
        class="text-[clamp(34px,5vw,60px)] max-[400px]:text-[clamp(30px,9.5vw,40px)] leading-[1.03] tracking-[-0.035em] font-extrabold text-balance mt-2.5"
      >
        Small taps. Clear answers.
      </h2>
      <p class="text-fg2 mt-3.5 text-lg text-pretty">
        Add what you spent, watch the picture update, and keep your budget on
        track without digging through menus.
      </p>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <!-- Tile A: Insights Screen -->
      <article
        class="group relative overflow-hidden p-7 md:p-8 min-h-[540px] max-[900px]:min-h-0 md:col-span-7 bg-card2 rounded-[56px_56px_56px_160px] max-[620px]:rounded-[40px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center"
      >
        <div class="flex flex-col gap-3 min-w-0">
          <h3
            class="text-[clamp(26px,3vw,36px)] font-extrabold leading-tight tracking-tight text-balance"
          >
            Know where your money goes
          </h3>
          <p class="opacity-80 max-w-[26em] text-pretty">
            Spending, what’s left and your daily average, in one glance.
          </p>
        </div>
        <img
          class="w-[min(200px,42vw)] max-[900px]:w-[min(190px,34vw)] max-[620px]:w-[min(220px,62vw)] justify-self-center md:justify-self-end drop-shadow-[0_20px_28px_rgba(0,0,0,0.25)] group-hover:-translate-y-2 group-hover:-rotate-2 transition-transform duration-500 ease-out"
          src="/img/{themeStore.pal}_in.webp"
          alt="Insights screen with spending breakdown"
          loading="lazy"
          width="560"
          height="1184"
        />
      </article>

      <!-- Tile B: Add Expense Screen -->
      <article
        class="group relative overflow-hidden p-7 md:p-8 min-h-[540px] max-[900px]:min-h-0 md:col-span-5 bg-ter-c text-on-ter-c rounded-[56px_160px_56px_56px] max-[620px]:rounded-[40px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center"
      >
        <div class="flex flex-col gap-3 min-w-0">
          <h3
            class="text-[clamp(26px,3vw,36px)] font-extrabold leading-tight tracking-tight text-balance"
          >
            Add an expense in seconds
          </h3>
          <p class="opacity-80 max-w-[26em] text-pretty">
            Pick a category, type the amount, done. ₹1,250 added to Food takes a
            moment.
          </p>
        </div>
        <img
          class="w-[min(200px,42vw)] max-[900px]:w-[min(190px,34vw)] max-[620px]:w-[min(220px,62vw)] justify-self-center md:justify-self-end drop-shadow-[0_20px_28px_rgba(0,0,0,0.25)] group-hover:-translate-y-2 group-hover:-rotate-2 transition-transform duration-500 ease-out"
          src="/img/{themeStore.pal}_add.webp"
          alt="Add expense sheet"
          loading="lazy"
          width="560"
          height="1184"
        />
      </article>

      <!-- Tile C: Budgets Screen -->
      <article
        class="group relative overflow-hidden p-7 md:p-8 md:pl-[74px] max-[900px]:pl-7 min-h-[540px] max-[900px]:min-h-0 md:col-span-5 bg-sec-c text-on-sec-c rounded-[160px_56px_56px_56px] max-[620px]:rounded-[40px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center"
      >
        <div class="flex flex-col gap-3 min-w-0">
          <h3
            class="text-[clamp(26px,3vw,36px)] font-extrabold leading-tight tracking-tight text-balance"
          >
            Budgets, set up for you
          </h3>
          <p class="opacity-80 max-w-[26em] text-pretty">
            A monthly budget split across the categories you actually spend on,
            so you see where you stand.
          </p>
        </div>
        <img
          class="w-[min(200px,42vw)] max-[900px]:w-[min(190px,34vw)] max-[620px]:w-[min(220px,62vw)] justify-self-center md:justify-self-end drop-shadow-[0_20px_28px_rgba(0,0,0,0.25)] group-hover:-translate-y-2 group-hover:-rotate-2 transition-transform duration-500 ease-out"
          src="/img/{themeStore.pal}_bud.webp"
          alt="Budgets screen"
          loading="lazy"
          width="560"
          height="1184"
        />
      </article>

      <!-- Tile D: Offline by Design -->
      <article
        id="offline"
        class="relative overflow-hidden p-7 md:p-8 min-h-[600px] max-[900px]:min-h-0 max-[620px]:min-h-[480px] md:col-span-7 bg-pri text-on-pri rounded-[56px_56px_160px_56px] max-[620px]:rounded-[40px] flex flex-col justify-start items-stretch"
      >
        <div class="flex flex-col gap-3 min-w-0">
          <h3
            class="text-[clamp(26px,3vw,36px)] font-extrabold leading-tight tracking-tight text-balance"
          >
            Offline by design
          </h3>
          <p class="opacity-80 max-w-[26em] text-pretty">
            Poketto keeps your numbers on your device.
          </p>
        </div>

        <ul class="list-none mt-5 p-0 grid gap-3 max-w-[380px]">
          <li
            class="flex items-center gap-3.5 font-semibold text-lg max-[620px]:text-[17px] bg-[color-mix(in_srgb,var(--on-pri)_14%,transparent)] p-3.5 md:px-4.5 rounded-[24px_24px_24px_8px]"
          >
            <svg
              class="w-6.5 h-6.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"
              />
              <circle cx="12" cy="19.5" r="1" fill="currentColor" />
              <path d="M3 3l18 18" />
            </svg>
            Works fully offline
          </li>

          <li
            class="flex items-center gap-3.5 font-semibold text-lg max-[620px]:text-[17px] bg-[color-mix(in_srgb,var(--on-pri)_14%,transparent)] p-3.5 md:px-4.5 rounded-[24px_8px_24px_24px]"
          >
            <svg
              class="w-6.5 h-6.5 shrink-0"
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

          <li
            class="flex items-center gap-3.5 font-semibold text-lg max-[620px]:text-[17px] bg-[color-mix(in_srgb,var(--on-pri)_14%,transparent)] p-3.5 md:px-4.5 rounded-[24px_24px_24px_8px]"
          >
            <svg
              class="w-6.5 h-6.5 shrink-0"
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

        <svg
          class="absolute -right-5 -bottom-7 w-[340px] h-[340px] text-[color-mix(in_srgb,var(--on-pri)_16%,transparent)] -rotate-12 pointer-events-none"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
        </svg>
      </article>
    </div>
  </div>
</section>
