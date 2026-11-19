<script lang="ts">
  import { themeStore } from '../stores/theme.svelte';
  import { router } from '../stores/router.svelte';

  function goHome(e: MouseEvent) {
    e.preventDefault();
    router.navigate('/');
  }
</script>

<div class="tos-page">
  <header class="tos-header">
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
        <h1>Terms of Service</h1>
        <p>Simple, fair terms for using the Poketto app. Please read them before using the app.</p>
        <span class="date">Last updated: November 19, 2026 (v2)</span>
      </div>
    </div>

    <div class="tldr">
      <strong>In short:</strong> Poketto is free to download. A one-time
      <strong>Pro upgrade</strong>
      (purchased through Google Play) unlocks extra features. All billing is handled by Google — I never
      see your payment details. Your data always stays on your device.
    </div>

    <section>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using Poketto ("the App"), you agree to be bound by these
        Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
        These Terms apply to all users of the App worldwide.
      </p>
    </section>

    <section>
      <h2>2. About the App</h2>
      <p>
        Poketto is a personal expense-tracking application for Android, developed by Dinavahi Lohith
        Sai, publishing as King Grey ("I", "me", "Developer"). The App is designed to help you track
        your personal finances entirely offline — no account is required and no data leaves your
        device.
      </p>
    </section>

    <section>
      <h2>3. License to Use</h2>
      <p>
        Subject to these Terms, I grant you a personal, non-exclusive, non-transferable, revocable,
        and limited license to install and use the App on Android devices you own or control, solely
        for your personal, non-commercial purposes.
      </p>
      <p style="margin-top: 10px;">You may <strong>not</strong>:</p>
      <ul>
        <li>
          Copy, modify, or distribute the App or its source code without prior written permission
        </li>
        <li>Reverse-engineer, decompile, or disassemble the App</li>
        <li>Sublicense, sell, or rent the App to any third party</li>
        <li>Use the App for any unlawful or fraudulent purpose</li>
      </ul>
    </section>

    <section>
      <h2>4. Your Data</h2>
      <p>
        All expense data, categories, budgets, and notes you enter into Poketto are stored
        exclusively on your device using Android's local storage. I do not collect, access,
        transmit, or store your personal financial data on any server.
      </p>
      <p style="margin-top: 10px;">
        You are solely responsible for backing up your data. If you uninstall the App or clear its
        storage, your data will be permanently deleted and cannot be recovered by me.
      </p>
    </section>

    <section>
      <h2>5. Pro Upgrade &amp; Payments</h2>
      <p>
        Poketto offers a <strong>one-time, optional Pro upgrade</strong> available as an in-app purchase
        through Google Play. The Pro upgrade unlocks additional features, including but not limited to:
      </p>
      <ul>
        <li>Exporting and importing your data (backup &amp; restore between devices)</li>
        <li>Tracking recurring payments and scheduled expenses</li>
        <li>Any other premium features added in future updates</li>
      </ul>
      <p style="margin-top: 10px;">
        <strong>All payments are processed exclusively by Google Play.</strong> I do not collect,
        store, or process your payment information at any point. Your purchase is subject to
        <a
          href="https://play.google.com/about/play-terms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play's Terms of Service
        </a>
        and billing policies.
      </p>
      <p style="margin-top: 10px;">
        The Pro upgrade is a <strong>one-time purchase</strong> — there is no recurring subscription or
        automatic charge. Once purchased, Pro features are yours permanently on any device linked to the
        same Google Play account.
      </p>
      <p style="margin-top: 10px;">
        Prices are set in Google Play and may vary by region. I reserve the right to change the
        price of the Pro upgrade at any time; existing purchasers are not affected.
      </p>
    </section>

    <section>
      <h2>6. Refund Policy</h2>
      <p>
        Because all purchases are processed by Google Play, refunds are governed by
        <a
          href="https://support.google.com/googleplay/answer/2479637"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play's refund policy
        </a>. You may be eligible for a refund within the window defined by Google Play.
      </p>
      <p style="margin-top: 10px;">
        I do not independently process refunds. If you have a billing issue, please contact Google
        Play support. If you have a question about Pro features, feel free to email me at
        <a href="mailto:kinggreydev@gmail.com">kinggreydev@gmail.com</a> and I'll do my best to help.
      </p>
    </section>

    <section>
      <h2>7. No Warranty</h2>
      <p>
        The App is provided <strong>"as is"</strong> and <strong>"as available"</strong>, without
        warranty of any kind, express or implied. To the fullest extent permitted by law, I disclaim
        all warranties, including but not limited to implied warranties of merchantability, fitness
        for a particular purpose, and non-infringement.
      </p>
      <p style="margin-top: 10px;">
        I do not warrant that the App will be error-free, uninterrupted, or free of bugs. Use of the
        App is at your own risk.
      </p>
    </section>

    <section>
      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, I shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, including but not limited to loss
        of data, loss of profits, or financial loss, arising out of or in connection with your use
        of the App — even if I have been advised of the possibility of such damages.
      </p>
    </section>

    <section>
      <h2>9. Changes to the App</h2>
      <p>
        I may update, modify, or discontinue the App (or any part of it) at any time without notice.
        I am not liable to you or any third party for any modification, suspension, or
        discontinuation of the App.
      </p>
    </section>

    <section>
      <h2>10. Changes to These Terms</h2>
      <p>
        I may update these Terms from time to time. When I do, I will revise the "Last updated" date
        at the top of this page. Continued use of the App after any changes constitutes your
        acceptance of the new Terms. If you disagree with updated Terms, you may stop using the App
        and uninstall it.
      </p>
    </section>

    <section>
      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India, without
        regard to its conflict of law principles. Any disputes arising from these Terms or your use
        of the App shall be subject to the exclusive jurisdiction of the courts located in Andhra
        Pradesh, India.
      </p>
    </section>

    <section>
      <h2>12. Contact</h2>
      <p>
        If you have any questions or concerns about these Terms, feel free to reach out:<br />
        Developer: Dinavahi Lohith Sai (King Grey)<br />
        Email: <a href="mailto:kinggreydev@gmail.com">kinggreydev@gmail.com</a>
      </p>
    </section>
  </main>

  <footer class="tos-footer">
    <div class="wrap">
      <span>© Poketto. Made by King Grey.</span>
      <span>Google Play is a trademark of Google LLC.</span>
    </div>
  </footer>
</div>

<style>
  .tos-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--bg);
    color: var(--fg);
    transition:
      background-color 0.25s ease,
      color 0.25s ease;
  }

  .tos-header {
    padding-block: 16px;
    background: transparent;
  }

  .wrap {
    width: 100%;
    max-width: 760px;
    margin-inline: auto;
    padding-inline: 20px;
  }

  .tos-header .wrap {
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
    line-height: 1.6;
  }

  ul {
    padding-left: 22px;
    margin: 10px 0 0;
    line-height: 1.6;
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

  .tos-footer {
    margin-top: auto;
    padding-block: 32px 56px;
    color: var(--fg2);
    font-size: 14px;
  }

  .tos-footer .wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 600px) {
    .tos-footer .wrap {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
