$(function () {
  const BODY = $('body')

  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active')
    $('.header__inner').slideToggle().toggleClass('d-block')
  })

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
      nav: true,
      navText: sliderBtns,
      dots: false,
      smartSpeed: 1000,
      mouseDrag: false,
      touchDrag: false,
      responsive: {
        0: {
          items: 1,
          margin: 25
        },
        768: {
          items: 2
        }
      }
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
    BODY.addClass('body_fixed')
  }

  $('.popup-video__close').on('click', () => {
    $('.popup-video').removeClass('popup-video_opened')
    BODY.removeClass('body_fixed')
  })

  $('.hero__button_colored').on('click', (e) => {
    e.preventDefault()
    popupOpen()
  })

  const subImage = $('.single-page__sub-image')

  subImage.eq(0).addClass('single-page__sub-image_active')

  subImage.on('click', function () {
    subImage.removeClass('single-page__sub-image_active')
    $(this).addClass('single-page__sub-image_active')
  })

  const mainImage = $('.single-page__main-image img')

  $('.single-page__sub-image img').on('click', function () {
    let current = $(this).attr('src')
    mainImage
      .fadeOut(400, () => {
        mainImage.attr('src', current)
        mainImage.attr('srcset', '')
      })
      .fadeIn()
  })

  const pageMediaArrows = [
    '<span class="icon-media-arrow-left"></span>',
    '<span class="icon-media-arrow-right"></span>'
  ]

  $('.page-media__slider').owlCarousel({
    items: 1,
    margin: 50,
    smartSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    nav: true,
    navText: pageMediaArrows
  })

  // TABS
  function tabs(selector, selectorActive, content, contentActive, key) {
    $(selector).on('click', function (e) {
      e.preventDefault()

      const data = $(this).attr(key)

      $(selector).removeClass(selectorActive)
      $(this).addClass(selectorActive)

      $(content).removeClass(contentActive)
      $('#' + data).addClass(contentActive)
    })
  }

  tabs(
    '.tab__link',
    'tab__link_active',
    '.tab__content',
    'tab__content_active',
    'data-tab'
  )

  tabs(
    '.faq__link',
    'faq__link_active',
    '.faq__content',
    'faq__content_active',
    'data-faq'
  )
})
