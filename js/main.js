(function ($) {
  'use strict';

  // Keep the footer copyright year current
  $('#year').text(new Date().getFullYear());

  // Smooth scroll for in-page nav links
  $('a.page-scroll').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 900);
        return false;
      }
    }
  });

  // Affix the navbar after scrolling below the header
  $('#nav').affix({
    offset: {
      top: $('header').height()
    }
  });

  // Lightbox: open <a data-lightbox href="image"> in a native <dialog>
  var lightbox = document.getElementById('lightbox');
  if (lightbox && lightbox.showModal) {
    var lbImg = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('.lightbox-caption');
    $(document).on('click', 'a[data-lightbox]', function (e) {
      e.preventDefault();
      lbImg.src = this.href;
      lbImg.alt = $(this).find('img').attr('alt') || '';
      lbCaption.textContent = this.title || '';
      lightbox.showModal();
    });
    // Close on the X button or on a click outside the image (the backdrop)
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.close();
      }
    });
    lightbox.addEventListener('close', function () {
      if (!lightbox.open) lbImg.removeAttribute('src');
    });
  }

  // Contact form: submit to Formspree in the background, show result inline
  var form = document.getElementById('contactForm');
  if (form && window.fetch) {
    var status = document.getElementById('contactStatus');
    var button = form.querySelector('button[type="submit"]');
    var showStatus = function (text, cls) {
      status.textContent = text;
      status.className = cls;
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      button.disabled = true;
      showStatus('Sending\u2026', '');
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          showStatus('Thanks! Your message has been sent.', 'ok');
        } else {
          return res.json().then(function (data) {
            var msg = data && data.errors ? data.errors.map(function (x) { return x.message; }).join(', ') : '';
            showStatus('Sorry, the message could not be sent' + (msg ? ' (' + msg + ')' : '') + '. Please email me instead.', 'err');
          });
        }
      }).catch(function () {
        showStatus('Network error. Please try again, or email me instead.', 'err');
      }).then(function () {
        button.disabled = false;
      });
    });
  }

  // Lazy autoplay videos (<video data-src>): load and play only when scrolled near,
  // pause when off-screen. Respects "reduce motion" (shows the poster frame only).
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var videos = document.querySelectorAll('video[data-src]');
  if (videos.length && 'IntersectionObserver' in window && !reduceMotion) {
    var vObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          if (!v.src) v.src = v.getAttribute('data-src');
          var p = v.play();
          if (p && p.catch) p.catch(function () { /* autoplay blocked: poster stays */ });
        } else if (v.src) {
          v.pause();
        }
      });
    }, { rootMargin: '200px' });
    Array.prototype.forEach.call(videos, function (v) { vObserver.observe(v); });
  }

  // Portfolio isotope filter
  $(window).on('load', function () {
    var $container = $('.portfolio-items');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    $('.cat a').on('click', function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  });
}(jQuery));
