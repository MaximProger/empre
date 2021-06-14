$(document).ready(function () {
  $(".nav__item").hover(function () {
    $(this).find(".nav__menu").slideToggle();
  });

  $("#burgerBtn").click((evt) => {
    evt.preventDefault();
    // menu.fadeIn();
    $("#menu").addClass("menu--show");
    $("html").addClass("noscroll");
  });

  $("#closeMenu").click((evt) => {
    evt.preventDefault();
    // $("#menu").fadeOut();
    $("#menu").removeClass("menu--show");
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
      // menu.fadeOut(); // скрываем его
      menu.removeClass("menu--show");
      $("html").removeClass("noscroll");
    }
  });

  $(document).keydown((evt) => {
    if (evt.keyCode == 27) {
      // $("#menu").fadeOut();
      $("#menu").removeClass("menu--show");
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
      slidesToShow: 1,
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
