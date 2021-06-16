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
    $("#menu").addClass("menu--show");

    if ($(window).width() >= 768) {
      overlay(true);
    } else {
      $("html").addClass("noscroll");
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
      !menu.is(e.target) && // если клик был не по нашему блоку
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
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

  $("#certificatesNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
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
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

  $("#partnersNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#partnersSlider",
    focusOnSelect: true,
  });

  if ($(window).width() <= 768) {
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
});
