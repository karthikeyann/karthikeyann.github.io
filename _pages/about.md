---
layout: about
title: about
permalink: /
subtitle: Senior Software Engineer at <a href='https://developer.nvidia.com/blog/author/knataraj'>NVIDIA</a> · Austin, TX

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Austin, Texas</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 10 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---
<style>
  /* Venue badges: white text in both light and dark mode. Badge colours in _data/venues.yml are
     chosen for >= 4.5:1 with white text and >= 3:1 against the dark-mode page background. */
  .publications ol.bibliography li .abbr abbr.badge, .publications ol.bibliography li .abbr abbr.badge div,
  .abbr abbr.badge, .abbr abbr.badge div { color: #ffffff !important; }
  /* Year headings: theme default is nearly invisible (1.2:1); use secondary text colour */
  .publications h2.bibliography { color: var(--global-text-color-light); }
</style>

I am a Senior Software Engineer at [NVIDIA](https://developer.nvidia.com/blog/author/knataraj), building GPU-accelerated data processing in CUDA: [RAPIDS cuDF](https://github.com/NVIDIA/cudf) and the [cuDF backend for the Velox query engine](https://github.com/facebookincubator/velox/tree/main/velox/experimental/cudf).
From August 2014 to May 2019, I was a CAD DFT Engineer at NVIDIA, developing deep learning solutions for EDA problems, DFT algorithms, and applied parallel computing.

I did my M.S. (Research) at the [Department of Electrical Engineering](https://www.ee.iitm.ac.in/), [Indian Institute of Technology Madras (IITM)](https://www.iitm.ac.in), where I worked on GPGPU parallel computing, VLSI CAD algorithms, FPGA implementations, and signal processing and communication algorithms.

My research interests include GPU-accelerated Databases, Data Processing, Parallel Computing (CUDA &amp; Multi&#8209;core), Machine Learning, Deep Learning, HW accelerators and EDA Algorithms.

<style>
  .impact { display: flex; flex-wrap: wrap; justify-content: space-between; list-style: none; margin: 1.5rem 0 0.5rem; padding: 1rem 0; border-top: 1px solid var(--global-divider-color); border-bottom: 1px solid var(--global-divider-color); }
  .impact li { flex: 1 1 0; min-width: 120px; padding: 0 0.75rem; text-align: center; border-left: 1px solid var(--global-divider-color); }
  .impact li:first-child { border-left: 0; }
  .impact a, .impact a:hover { display: block; color: inherit; text-decoration: none; border: 0; }
  .impact .impact-num { display: block; font-size: 1.75rem; font-weight: 600; line-height: 1.2; color: var(--global-text-color); }
  .impact a:hover .impact-num { color: var(--global-theme-color); }
  .impact .impact-label { display: block; font-size: 0.8rem; line-height: 1.35; color: var(--global-text-color); opacity: 0.72; }
  .impact, .impact li { box-sizing: border-box; }
  @media (max-width: 576px) {
    .impact { clear: both; width: 100%; }
    .impact li { flex: 0 0 50%; min-width: 0; margin: 0.5rem 0; }
    .impact li:nth-child(odd) { border-left: 0; }
  }
</style>
<ul class="impact">
  <li><a href="https://github.com/NVIDIA/cudf/graphs/contributors"><span class="impact-num">1,000+</span><span class="impact-label">commits to cuDF<br>top-15 contributor</span></a></li>
  <li><a href="/publications/#patents"><span class="impact-num">3</span><span class="impact-label">US patents<br>granted</span></a></li>
  <li><a href="/publications/"><span class="impact-num">6</span><span class="impact-label">publications<br>incl. DAC, VLDB</span></a></li>
  <li><a href="https://scholar.google.com/citations?user=expWuNMAAAAJ"><span class="impact-num">240+</span><span class="impact-label">citations<br>Google Scholar</span></a></li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Karthikeyan Natarajan",
  "url": "https://karthikeyann.github.io/",
  "image": "https://karthikeyann.github.io/assets/img/prof_pic.jpg",
  "jobTitle": "Senior Software Engineer",
  "worksFor": { "@type": "Organization", "name": "NVIDIA", "url": "https://www.nvidia.com" },
  "alumniOf": [
    { "@type": "CollegeOrUniversity", "name": "Indian Institute of Technology Madras", "url": "https://www.iitm.ac.in" },
    { "@type": "CollegeOrUniversity", "name": "Amrita Vishwa Vidyapeetham" }
  ],
  "knowsAbout": ["GPU-accelerated databases", "Data processing", "CUDA", "Parallel computing", "RAPIDS cuDF", "Velox", "Presto", "EDA algorithms"],
  "address": { "@type": "PostalAddress", "addressLocality": "Austin", "addressRegion": "TX", "addressCountry": "US" },
  "sameAs": [
    "https://github.com/karthikeyann",
    "https://www.linkedin.com/in/karthikeyan90",
    "https://scholar.google.com/citations?user=expWuNMAAAAJ",
    "https://orcid.org/0009-0008-6240-2335",
    "https://x.com/lxkarthi",
    "https://developer.nvidia.com/blog/author/knataraj"
  ]
}
</script>
