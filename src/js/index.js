$(function () {
  function slider(selector) {
    $(selector).owlCarousel({
      items: 2,
      dots: false,
      smartSpeed: 1000,
      mouseDrag: false,
      touchDrag: false
    })
  }

  slider('.categories')
  slider('.news__slider')

  const heroSliderBtns = [
    '<span class="icon-sl"></span>',
    '<span class="icon-sl inverse"></span>'
  ]

  $('.hero__slider').owlCarousel({
    items: 1,
    nav: true,
    navText: heroSliderBtns,
    dots: false,
    mouseDrag: false,
    touchDrag: false
  })
})
