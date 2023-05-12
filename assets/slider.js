const swiper = new Swiper('.swiper-container', {
      {%- if section.settings.autoplay %}
      autoplay: {delay: {{section.settings.delay}} },
      {%- endif -%}
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });