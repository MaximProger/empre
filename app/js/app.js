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
    overlay(true);
  });

  $("#closeMenu").click((evt) => {
    evt.preventDefault();
    $("#menu").removeClass("menu--show");
    overlay(false);
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
    }
  });

  $(document).keydown((evt) => {
    if (evt.keyCode == 27) {
      $("#menu").removeClass("menu--show");
      overlay(false);
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
    });

  $("#partnersNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#partnersSlider",
    focusOnSelect: true,
  });
});
