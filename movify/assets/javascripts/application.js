$(function() {
  FastClick.attach(document.body);
  $('.header .navigation li.sub').click(function(event) {
    $(this).toggleClass('opened');
    $('.overlay').toggleClass('active');
  });
  $('.actions .icon-search').click(function(event) {
    $('.header .search-form input').val('');
    $('.actions .icon-menu').removeClass('open');
    $('.header nav').removeClass('active');
    $(this).toggleClass('open');
    $('.overlay').toggleClass('active');
    $('.header .search-form').toggleClass('active');
    if ($(this).hasClass('open')) {
      $(document.body).addClass('active');
    } else {
      $(document.body).removeClass('active');
    }
  });
  $('.actions .icon-menu').click(function(event) {
    $('.header .navigation li.sub').removeClass('opened');
    $('.overlay').removeClass('active');
    $('.actions .icon-search').removeClass('open');
    $('.header .search-form').removeClass('active');
    $(this).toggleClass('open');
    $('.header nav').toggleClass('active');
    if ($(this).hasClass('open')) {
      $(document.body).addClass('active');
    } else {
      $(document.body).removeClass('active');
    }
  });
  $('.overlay').click(function(event) {
    event.preventDefault();
    $(this).removeClass('active');
    $(document.body).removeClass('active');
    $('.header .search-form input').val('');
    $('.actions .icon-search').removeClass('open');
    $('.actions .icon-menu').removeClass('open');
    $('.header .search-form').removeClass('active');
    $('.header .navigation li.sub').removeClass('opened');
  });
  $('.content-video .info .episodes .list').smk_Accordion();
  var banner = new Swiper('.banner .swiper-container', {
    autoplay: false,
    spaceBetween: 0,
    slidesPerView: 1,
    grabCursor: false,
    centeredSlides: true,
    keyboardControl: true,
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    breakpoints: {
      992: {
        pagination: false,
      },
    },
    pagination: '.banner .swiper-pagination',
    nextButton: '.banner .swiper-button-next',
    prevButton: '.banner .swiper-button-prev',
  });
  $('.carousel-videos').each(function(index, element){
    var $this = $(this).find('.swiper-container');
    var carouselVideo = new Swiper($this, {
      grabCursor: true,
      spaceBetween: 10,
      slidesPerView: 5,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1,
        },
      },
      nextButton: $(this).find('.swiper-button-next'),
      prevButton: $(this).find('.swiper-button-prev'),
    });
  });
  var gallery = new Swiper('.gallery .swiper-container', {
    autoplay: false,
    spaceBetween: 15,
    slidesPerView: 1,
    grabCursor: true,
    centeredSlides: true,
    keyboardControl: true,
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    breakpoints: {
      992: {
        pagination: false,
      },
    },
    pagination: '.gallery .swiper-pagination',
  });
});
