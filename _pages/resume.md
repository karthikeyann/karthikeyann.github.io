---
layout: page
permalink: /resume/
title: Resume
description:
nav: true
nav_order: 5
sitemap: false
---

<div id="resume-embed">
  <p class="text-muted">Loading resume…</p>
</div>

<script>
  (function () {
    // Theme has no per-page robots meta; add noindex at runtime (robots.txt also disallows /resume/).
    var m = document.createElement("meta"); m.name = "robots"; m.content = "noindex"; document.head.appendChild(m);
    // URL is stored split and base64-encoded so it is not in plain text in the page source.
    var maxi = "aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNlFwOVJjcU9Mdy1ydmNVTGJlaEhhZEx1";
    var mapi = "T0hmdEhUd18vdmlldw";
    var view = atob(maxi + mapi);
    var preview = view.replace(/\/view$/, "/preview");
    var box = document.getElementById("resume-embed");
    box.innerHTML = "";
    var btn = document.createElement("a");
    btn.className = "btn btn-sm z-depth-0 mb-3";
    btn.setAttribute("role", "button");
    btn.href = view;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = "Open in Google Drive";
    var frame = document.createElement("iframe");
    frame.src = preview;
    frame.title = "Resume";
    frame.setAttribute("allow", "autoplay");
    frame.style.width = "100%";
    frame.style.height = "90vh";
    frame.style.border = "1px solid var(--global-divider-color, #ddd)";
    frame.style.borderRadius = "4px";
    box.appendChild(btn);
    box.appendChild(frame);
  })();
</script>
