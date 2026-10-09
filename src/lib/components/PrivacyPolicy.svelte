<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';
  import { router } from '../stores/router.svelte';

  function goHome(e: MouseEvent) {
    e.preventDefault();
    router.navigate('/');
  }
</script>

<div class="privacy-page">
  <header class="privacy-header">
    <div class="wrap">
      <a class="brand" href="/" onclick={goHome} aria-label="Poketto Home">
        <img src="/img/icon.png" alt="Poketto icon" width="38" height="38" />
        <span>Poketto</span>
      </a>

      <div class="header-actions">
        <button
          type="button"
          class="icon-btn"
          aria-label="Switch light and dark theme"
          title="Switch light and dark"
          onclick={() => themeStore.toggleTheme()}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path
              d="M12 3a9 9 0 1 0 9 9c0-.5-.05-1-.14-1.47A5.5 5.5 0 0 1 13.47 3.14 9.1 9.1 0 0 0 12 3Z"
            />
          </svg>
        </button>

        <a class="back-btn" href="/" onclick={goHome}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to site</span>
        </a>
      </div>
    </div>
  </header>

  <main class="wrap">
    <div class="hero">
      <div class="box">
        <h1>Privacy Policy</h1>
        <p>
          Poketto is an offline expense tracker. Your money data lives on your phone and nowhere
          else.
        </p>
        <span class="date">Last updated: October 9, 2026</span>
      </div>
    </div>

    <div class="tldr">
      <strong>In short:</strong> Poketto does not collect, send or share your personal data. There are
      no accounts, no ads, no tracking and no servers holding your information.
    </div>

    <section>
      <h2>Who we are</h2>
      <p>
        Poketto is an Android app made by Dinavahi Lohith Sai, who publishes as King Grey ("I",
        "me"). If you have any question about this policy, write to
        <a href="mailto:kinggreydev@gmail.com">kinggreydev@gmail.com</a>.
      </p>
    </section>

    <section>
      <h2>Data you enter</h2>
      <p>
        Expenses, categories, budgets, notes and settings you add in Poketto are stored only in the
        app's private storage on your device. I never receive them, and Poketto does not upload or
        sync them anywhere. The app works fully without an internet connection.
      </p>
    </section>

    <section>
      <h2>App lock and biometrics</h2>
      <p>
        If you turn on App lock, Poketto uses Android's built-in biometric or screen-lock prompt.
        Your fingerprint or face data is handled entirely by Android. Poketto only receives a
        "success" or "failed" result and never sees or stores biometric data.
      </p>
    </section>

    <section>
      <h2>Purchases</h2>
      <p>
        Poketto Pro is a one-time in-app purchase processed by Google Play. Google handles your
        payment details and purchase record under
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
          >Google's Privacy Policy</a
        >. I do not see or store your card or payment information. The app only checks with Google
        Play whether the purchase has been made, which is the one moment it needs the internet.
      </p>
    </section>

    <section>
      <h2>What Poketto does not do</h2>
      <ul>
        <li>No account or sign-in is needed.</li>
        <li>No analytics, advertising or tracking tools are included.</li>
        <li>No data is sold or shared with third parties.</li>
        <li>
          No personal data is collected from children, because no personal data is collected from
          anyone.
        </li>
      </ul>
    </section>

    <section>
      <h2>Your control and deleting data</h2>
      <p>
        Since everything is on your device, you are in full control. To delete your data, clear
        Poketto's storage in Android Settings → Apps → Poketto → Storage, or uninstall the app.
        Because I hold no copy, there is nothing to request from me.
      </p>
    </section>

    <section>
      <h2>Changes to this policy</h2>
      <p>
        If Poketto ever starts collecting any data, such as crash reports or usage analytics, I will
        update this page and the "last updated" date before that version is released.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        Developer: Dinavahi Lohith Sai (King Grey)<br />
        Email: <a href="mailto:kinggreydev@gmail.com">kinggreydev@gmail.com</a><br />
        Phone: <a href="tel:+917075753289">+91 70757 53289</a>
      </p>
    </section>
  </main>

  <footer class="privacy-footer">
    <div class="wrap">
      <span>© Poketto. Made by King Grey.</span>
      <span>Google Play is a trademark of Google LLC.</span>
    </div>
  </footer>
</div>

<style>
  .privacy-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--bg);
    color: var(--fg);
    transition:
      background-color 0.25s ease,
      color 0.25s ease;
  }

  .privacy-header {
    padding-block: 16px;
    background: transparent;
  }

  .wrap {
    width: 100%;
    max-width: 760px;
    margin-inline: auto;
    padding-inline: 20px;
  }

  .privacy-header .wrap {
    display: flex;
    align-items: center;
    gap: 14px;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    font-size: 22px;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: var(--fg);
  }

  .brand img {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: block;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 99px;
    background: var(--sec-c);
    color: var(--on-sec-c);
    border: none;
    cursor: pointer;
    transition:
      border-radius 0.25s var(--ease),
      transform 0.15s ease;
  }

  .icon-btn:hover {
    border-radius: 12px;
    transform: translateY(-1px);
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 18px;
    border-radius: 99px;
    background: var(--sec-c);
    color: var(--on-sec-c);
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition:
      border-radius 0.25s var(--ease),
      transform 0.15s ease;
  }

  .back-btn:hover {
    border-radius: 14px;
    transform: translateY(-1px);
  }

  .hero {
    padding-block: 24px 8px;
  }

  .hero .box {
    background: var(--pri-c);
    color: var(--on-pri-c);
    border-radius: 56px 56px 56px 120px;
    padding: clamp(26px, 5vw, 48px);
    box-shadow: 0 8px 32px -16px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: clamp(34px, 7vw, 54px);
    line-height: 1.05;
    letter-spacing: -0.03em;
    font-weight: 800;
    margin: 0;
  }

  .hero p {
    margin-top: 12px;
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 0;
  }

  .date {
    display: inline-block;
    margin-top: 18px;
    background: var(--ter-c);
    color: var(--on-ter-c);
    font-weight: 700;
    font-size: 14px;
    padding: 7px 14px;
    border-radius: 99px;
  }

  .tldr {
    margin-top: 20px;
    background: var(--card2);
    border-radius: 32px 32px 32px 12px;
    padding: 22px 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.55;
    border-left: 4px solid var(--pri);
  }

  .tldr strong {
    font-weight: 700;
    color: var(--pri);
  }

  section {
    margin-top: 14px;
    background: var(--card);
    border-radius: 28px;
    padding: 22px 24px;
  }

  section:nth-of-type(even) {
    border-radius: 12px 28px 28px 28px;
  }

  h2 {
    font-size: 21px;
    letter-spacing: -0.01em;
    font-weight: 750;
    margin-top: 0;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }

  ul {
    padding-left: 22px;
    margin: 0;
  }

  li + li {
    margin-top: 6px;
  }

  a {
    color: var(--pri);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.8;
  }

  .privacy-footer {
    margin-top: auto;
    padding-block: 32px 56px;
    color: var(--fg2);
    font-size: 14px;
  }

  .privacy-footer .wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 600px) {
    .privacy-footer .wrap {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
