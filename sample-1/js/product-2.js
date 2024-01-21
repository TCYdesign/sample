$(function(){
  // ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  // ハンバーガー開閉
  $('.hamburger').toggleClass('hamu-open');
  // メニューの固定
  $('body').toggleClass('body-overflow');
});

// 画面を開いたらすぐ開始
$(function(){
  $('.main-slide-h1').addClass('main-slidein');
  $('.main-slide-p').addClass('main-slidein');
  });

// スクロールで開始
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.p01').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight) {
      $('.main-line-fadeout').addClass('main-line-fadein');
    }else {
      $(".main-line-fadeout").removeClass("main-line-fadein");
    }
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('p-div-fadein');
    }else {
      $(".p01").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 200) {
      $(".p02").addClass('p-div-fadein');
    }else {
      $(".p02").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 800) {
      $(".p03").addClass('p-div-fadein');
    }else {
      $(".p03").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 900) {
      $(".p04").addClass('p-div-fadein');
    }else {
      $(".p04").removeClass("p-div-fadein");
    }
    if (scrollAmount > position - windowHeight + 1300) {
      $(".p05").addClass('p-div-fadein');
    }else {
      $(".p05").removeClass("p-div-fadein");
    }
  });
});
// TOPへ戻る
$('a[href^="#"]').click(function () {
  const speed = 600;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});
});