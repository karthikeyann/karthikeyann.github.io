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
