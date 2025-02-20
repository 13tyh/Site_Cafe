$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header .nav").toggleClass("active");
  });

  $(".nav a").click(function () {
    $(".header .nav").removeClass("active");
    $(".hamburger").removeClass("active");
  });
});
