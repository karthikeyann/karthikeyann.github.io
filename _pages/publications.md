---
layout: page
permalink: /publications/
title: publications
description: Publications and patents in reverse chronological order.
nav: true
nav_order: 2
---
<style>
  /* Venue badges: white text in both light and dark mode. Badge colours in _data/venues.yml are
     chosen for >= 4.5:1 with white text and >= 3:1 against the dark-mode page background. */
  .publications ol.bibliography li .abbr abbr.badge, .publications ol.bibliography li .abbr abbr.badge div,
  .abbr abbr.badge, .abbr abbr.badge div { color: #ffffff !important; }
  /* Year headings: theme default is nearly invisible (1.2:1); use secondary text colour */
  .publications h2.bibliography { color: var(--global-text-color-light); }
</style>

<!-- _pages/publications.md -->

See also my [Google Scholar profile](https://scholar.google.com/citations?user=expWuNMAAAAJ).

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<h2 class="mt-5" id="patents">patents</h2>

<div class="publications">

{% bibliography --file patents --group_by none %}

</div>
