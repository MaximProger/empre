$(document).ready(function () {
  $(".nav__item").hover(function () {
    $(this).find(".nav__menu").slideToggle();
  });
});
