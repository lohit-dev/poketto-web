<script lang="ts">
  import { themeStore } from "../stores/theme.svelte";
  import LottieTile from "./LottieTile.svelte";
</script>

<section class="py-7 md:py-16 overflow-hidden">
  <div
    class="w-full max-w-[1180px] min-[1500px]:max-w-[1320px] mx-auto px-5 max-[620px]:px-4 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-6 min-[1500px]:gap-12 items-center"
  >
    <!-- Left Hero Copy -->
    <div class="min-w-0">
      <span
        class="inline-flex items-center gap-2 bg-ter-c text-on-ter-c font-bold text-sm px-4 py-2 rounded-full tracking-wide"
      >
        <svg class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M17.6 9.5 19 7.2a.5.5 0 0 0-.87-.5l-1.4 2.4A8.6 8.6 0 0 0 12 8c-1.7 0-3.3.4-4.7 1.1L5.9 6.7a.5.5 0 0 0-.87.5L6.4 9.5A7.4 7.4 0 0 0 3 15h18a7.4 7.4 0 0 0-3.4-5.5ZM8.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
          />
        </svg>
        Made for Android
      </span>

      <h1
        class="text-[clamp(44px,7.2vw,96px)] max-[400px]:text-[clamp(38px,12.5vw,52px)] font-[850] leading-[0.98] tracking-[-0.04em] my-5 text-balance"
      >
        Know where your <em class="not-italic text-pri">money</em> goes.
      </h1>

      <p class="text-[clamp(18px,2vw,22px)] text-fg2 max-w-[30em] text-pretty">
        Poketto is an offline expense tracker with analytics that make sense.
        Spending, what’s left and your daily average, in one glance.
      </p>

      <div class="flex flex-wrap gap-3 items-center mt-7 w-full">
        <a
          href="https://play.google.com/store/apps/details?id=com.king_grey.pockit"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-pri text-on-pri px-5 py-2.5 rounded-full hover:rounded-[20px] active:scale-95 transition-all duration-200 shrink-0 max-[620px]:flex-1 max-[620px]:justify-center"
        >
          <svg
            class="w-6.5 h-6.5 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M5 3.4v17.2a1 1 0 0 0 1.5.86l14.2-8.6a1 1 0 0 0 0-1.72L6.5 2.54A1 1 0 0 0 5 3.4Z"
            />
          </svg>
          <span class="flex flex-col text-left leading-tight">
            <small
              class="text-[10.5px] uppercase tracking-wider font-semibold opacity-85"
              >Get it on</small
            >
            <b class="text-lg font-bold">Google Play</b>
          </span>
        </a>

        <a
          href="#features"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-sec-c text-on-sec-c font-bold hover:rounded-[18px] transition-all duration-200 max-[620px]:flex-1 max-[620px]:justify-center"
        >
          See what’s inside
        </a>
      </div>

      <p class="mt-4 text-sm text-fg2 flex items-center gap-2">
        <svg
          class="w-4.5 h-4.5 text-pri"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
        </svg>
        Nothing leaves your phone.
      </p>
    </div>

    <!-- Right Interactive Showcase Stage -->
    <div
      class="relative min-h-[600px] max-[900px]:min-h-[520px] max-[620px]:min-h-[480px] max-[400px]:min-h-[430px] w-full max-w-[560px] mx-auto grid place-items-center"
    >
      <!-- Morphing background organic blob -->
      <div
        class="absolute inset-[4%_0_2%_4%] bg-pri-c animate-[morph_14s_ease-in-out_infinite_alternate] rounded-[63%_37%_54%_46%/55%_48%_52%_45%] pointer-events-none"
      ></div>

      <!-- Main Overview Phone -->
      <img
        class="relative w-[min(270px,58%)] min-[1500px]:w-[min(310px,58%)] max-[620px]:w-[min(230px,58%)] drop-shadow-[0_30px_40px_rgba(0,0,0,0.28)] animate-[bob_7s_ease-in-out_infinite_alternate]"
        src="/img/{themeStore.pal}_ov.webp"
        alt="Poketto overview screen showing monthly spending, budget left and daily average"
        width="560"
        height="1184"
      />

      <!-- Secondary Insights Phone -->
      <img
        class="absolute right-0 bottom-0 w-[min(190px,36%)] min-[1500px]:w-[min(220px,36%)] max-[620px]:w-[min(160px,38%)] max-[340px]:hidden rotate-6 drop-shadow-[0_24px_30px_rgba(0,0,0,0.28)]"
        src="/img/{themeStore.pal}_in.webp"
        alt="Poketto insights screen"
        width="560"
        height="1184"
      />

      <!-- Animated Icon Tile -->
      <div
        class="absolute left-0 top-[6%] w-[132px] h-[132px] max-[620px]:w-24 max-[620px]:h-24 rounded-[32px] max-[620px]:rounded-[26px] bg-card3 shadow-[0_14px_30px_rgba(0,0,0,0.2)] grid place-items-center overflow-hidden -rotate-6"
      >
        <LottieTile />
      </div>

      <!-- Floating Stat Badges -->
      <div
        class="absolute left-[-2%] bottom-[24%] max-[400px]:bottom-[2%] bg-card border border-line px-4 py-2.5 max-[620px]:px-3 max-[620px]:py-2 rounded-[22px_22px_22px_6px] font-bold text-[15px] max-[620px]:text-[13px] shadow-[0_10px_24px_rgba(0,0,0,0.14)] whitespace-nowrap"
      >
        ₹60,000 left
        <small
          class="block font-medium text-fg2 text-xs max-[620px]:text-[11px]"
          >12 days to go</small
        >
      </div>

      <div
        class="absolute right-[2%] top-[4%] bg-card border border-line px-4 py-2.5 max-[620px]:px-3 max-[620px]:py-2 rounded-[22px_22px_6px_22px] font-bold text-[15px] max-[620px]:text-[13px] shadow-[0_10px_24px_rgba(0,0,0,0.14)] whitespace-nowrap"
      >
        ₹2,230
        <small
          class="block font-medium text-fg2 text-xs max-[620px]:text-[11px]"
          >Daily average</small
        >
      </div>
    </div>
  </div>
</section>
