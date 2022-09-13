$(function () {
  $('.testimonials__slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    dots: true,
    variableWidth: true,
    appendDots: $('.testimonials__dots'),
  })
  $(".header__nav-list a, .header__btn").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50
    $('body,html').animate({ scrollTop: top }, 800)
  })
  $(window).on('scroll', function (e) {
  })
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
  })
})