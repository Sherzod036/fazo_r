$(function () {
  const BODY = $('body')

  const sliderBtns = [
    `<span class="slider_btn inverse">
      <img src="img/icons/slider_btn.svg" />
    </span>`,
    `<span class="slider_btn">
      <img src="img/icons/slider_btn.svg" />
    </span>`
  ]
  function slider(selector) {
    $(selector).owlCarousel({
      items: 2,
      nav: true,
      navText: sliderBtns,
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

  function popupOpen() {
    $('.popup-video').addClass('popup-video_opened')
  }

  $('.popup-video__close').on('click', () => {
    $('.popup-video').removeClass('popup-video_opened')
  })

  $('.hero__button_colored').on('click', (e) => {
    e.preventDefault()
    popupOpen()
  })
})
