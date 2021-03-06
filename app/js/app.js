$(document).ready(function () {
  function overlay(show) {
    if (show) {
      // --------------------------------------
      var top = $(window).scrollTop();
      var left = $(window).scrollLeft();
      $(window).scroll(function () {
        $(this).scrollTop(top).scrollLeft(left);
      });
      // --------------------------------------
    } else {
      // --------------------------------------
      $(window).unbind("scroll");
      // --------------------------------------
    }
  }

  $("#burgerBtn").click((evt) => {
    evt.preventDefault();

    $("#menu").toggleClass("menu--show");

    if ($(window).width() >= 768) {
      if (!$("#menu").hasClass("menu--show")) {
        overlay(false);
      } else {
        overlay(true);
      }
    } else {
      $("html").toggleClass("noscroll");
    }
  });

  $("#closeMenu").click((evt) => {
    evt.preventDefault();
    $("#menu").removeClass("menu--show");
    overlay(false);
    $("html").removeClass("noscroll");
  });

  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    const menu = $("#menu"); // тут указываем ID элемента
    if (
      !menu.is(e.target) &&
      !$("#burgerBtn").is(e.target) &&
      !$(".header__burger__icon").has(e.target) && // если клик был не по нашему блоку
      menu.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      menu.removeClass("menu--show");
      overlay(false);
      $("html").removeClass("noscroll");
    }
  });

  $(document).keydown((evt) => {
    if (evt.keyCode == 27) {
      $("#menu").removeClass("menu--show");
      overlay(false);
      $("html").removeClass("noscroll");
    }
  });

  $("#certificatesSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: false,
      prevArrow: $("#certificatesArrowPrev"),
      nextArrow: $("#certificatesArrowNext"),
      asNavFor: "#certificatesNav",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "200px",
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "109px",
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: false,
          },
        },
      ],
    });

  const certificatesNavCount = $("#certificatesNav .slider__dots__item").length;

  $("#certificatesNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: certificatesNavCount,
    asNavFor: "#certificatesSlider",
    focusOnSelect: true,
  });

  $("#partnersSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: false,
      prevArrow: $("#partnersArrowPrev"),
      nextArrow: $("#partnersArrowNext"),
      asNavFor: "#partnersNav",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: false,
          },
        },
      ],
    });

  const parentsNavCount = $("#partnersNav .slider__dots__item").length;

  $("#partnersNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: parentsNavCount,
    asNavFor: "#partnersSlider",
    focusOnSelect: true,
  });

  console.log(parentsNavCount);

  if ($(window).width() <= 991) {
    $("#headerSearchBtn").click((evt) => {
      if (!$("#headerSearchInput").hasClass("header__search__input--show")) {
        evt.preventDefault();
        $("#headerSearchInput").addClass("header__search__input--show");
      }
    });
  }

  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    const headerSearchForm = $("#headerSearchForm"); // тут указываем ID элемента
    if (
      !headerSearchForm.is(e.target) && // если клик был не по нашему блоку
      headerSearchForm.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      $("#headerSearchInput").removeClass("header__search__input--show");
    }
  });

  $(".menu__body__title").click(function () {
    const menuBodyBox = $(this).parents(".menu__body__box");

    if (menuBodyBox.hasClass("menu__body__box--active")) {
      menuBodyBox.removeClass("menu__body__box--active");
    } else {
      $(".menu__body__box").removeClass("menu__body__box--active");
      menuBodyBox.addClass("menu__body__box--active");
    }
  });

  $("#detailSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: false,
      prevArrow: $("#detailArrowPrev"),
      nextArrow: $("#detailArrowNext"),
      asNavFor: "#detailNav",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "290px",
          },
        },
      ],
    });

  $("#detailNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#detailSlider",
    focusOnSelect: true,
  });
});
