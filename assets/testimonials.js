 const swiper = new Swiper('.custom-testimonial', {
      {%- if section.settings.autoplay %}
      autoplay: {delay: {{section.settings.delay}} },
      {%- endif -%}
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })