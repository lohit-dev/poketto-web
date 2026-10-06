<script lang="ts">
  import LottieTile from "./LottieTile.svelte";
</script>

<div class="py-10 md:py-20 max-[900px]:py-6 max-[900px]:pb-14">
  <div
    class="w-full max-w-[1180px] min-[1500px]:max-w-[1320px] mx-auto px-5 max-[620px]:px-4"
  >
    <div
      class="relative overflow-hidden bg-pri text-on-pri rounded-[72px_72px_72px_200px] max-[900px]:rounded-[56px_56px_56px_120px] max-[620px]:rounded-[48px_48px_48px_96px] p-[clamp(28px,5vw,64px)] max-[620px]:p-6.5 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[clamp(20px,4vw,56px)] items-center"
    >
      <!-- Decorative background accent circle -->
      <div
        class="absolute -right-22 -top-22 w-[300px] h-[300px] rounded-[44%_56%_60%_40%/50%_40%_60%_50%] bg-[color-mix(in_srgb,var(--on-pri)_10%,transparent)] pointer-events-none"
      ></div>

      <!-- Animated App Icon Tile -->
      <div
        class="relative w-[clamp(150px,22vw,250px)] h-[clamp(150px,22vw,250px)] max-[900px]:w-[150px] max-[900px]:h-[150px] rounded-[15%] -rotate-4 shadow-[0_20px_40px_rgba(0,0,0,0.28)] overflow-hidden shrink-0"
      >
        <LottieTile />
      </div>

      <!-- Call to Action Text & Button -->
      <div class="min-w-0">
        <h2
          class="text-[clamp(34px,5.4vw,68px)] font-extrabold leading-tight tracking-tight text-balance"
        >
          Keep your money in your pocket.
        </h2>
        <p class="mt-3.5 opacity-88 text-lg max-w-[28em] text-pretty">
          Poketto is on Google Play for Android. Offline, private and colored by
          you.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=com.king_grey.pockit"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-on-pri text-pri px-5 py-2.5 rounded-full hover:rounded-[20px] active:scale-95 transition-all duration-200 mt-6.5 font-bold shadow-md"
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
      </div>
    </div>
  </div>
</div>
