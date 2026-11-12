---
layout: page
title: Contact
permalink: /contact/
description: Send me a message.
nav: true
nav_order: 6
---

<style>
  .contact-form { max-width: 640px; }
  .contact-form .row2 { display: flex; gap: 1rem; flex-wrap: wrap; }
  .contact-form .row2 > div { flex: 1 1 240px; }
  .contact-form label { display: block; font-size: 0.85rem; margin: 0.75rem 0 0.25rem; color: var(--global-text-color-light); }
  .contact-form input, .contact-form textarea {
    width: 100%; padding: 0.6rem 0.75rem; font: inherit; color: var(--global-text-color);
    background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 4px;
  }
  .contact-form input:focus, .contact-form textarea:focus { outline: 2px solid var(--global-theme-color); outline-offset: 1px; }
  .contact-form .hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
  .contact-form button {
    margin-top: 1rem; padding: 0.55rem 1.4rem; font: inherit; cursor: pointer; border-radius: 4px;
    color: var(--global-bg-color); background: var(--global-theme-color); border: 1px solid var(--global-theme-color);
  }
  .contact-form button:disabled { opacity: 0.6; cursor: default; }
  #contactStatus { min-height: 1.5rem; margin-top: 0.75rem; font-weight: 600; }
  #contactStatus.err { color: var(--global-danger-block); }
</style>

I'm based in Austin, Texas. Send me a message below, or connect on [LinkedIn](https://www.linkedin.com/in/karthikeyan90).

<form id="contactForm" class="contact-form" action="https://formspree.io/f/xdegoern" method="POST">
  <div class="row2">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" autocomplete="name" maxlength="100" required>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" autocomplete="email" maxlength="200" required>
    </div>
  </div>
  <label for="message">Message</label>
  <textarea id="message" name="message" rows="6" maxlength="5000" required></textarea>
  <!-- Honeypot: hidden from people; bots fill it and Formspree discards those submissions -->
  <input type="text" name="_gotcha" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
  <input type="hidden" name="_subject" value="New message from karthikeyann.github.io">
  <button type="submit">Send message</button>
  <div id="contactStatus" role="status" aria-live="polite"></div>
</form>

<script>
  (function () {
    var form = document.getElementById("contactForm");
    if (!form || !window.fetch) return;
    var status = document.getElementById("contactStatus");
    var button = form.querySelector('button[type="submit"]');
    function show(text, cls) { status.textContent = text; status.className = cls || ""; }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      button.disabled = true;
      show("Sending…");
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (res) {
          if (res.ok) { form.reset(); show("Thanks! Your message has been sent.", "ok"); return; }
          return res.json().then(function (data) {
            var msg = data && data.errors ? data.errors.map(function (x) { return x.message; }).join(", ") : "";
            show("Sorry, the message could not be sent" + (msg ? " (" + msg + ")" : "") + ". Please try LinkedIn instead.", "err");
          });
        })
        .catch(function () { show("Network error. Please try again.", "err"); })
        .then(function () { button.disabled = false; });
    });
  })();
</script>
