
$(function(){
// ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  // ハンバーガー開閉
  $('.hamburger').toggleClass('hamu-open');
  // メニューの固定
  $('body').toggleClass('body-overflow');
});


// 画面を開いたらすぐ開始（main-fadein）
$(function(){
  $('.main-fadeout-h1').addClass('main-fadein-h1-p');
  $('.main-fadeout-p').addClass('main-fadein-h1-p');
  });


// スクロールで開始
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  // タイトルスライドイン
  $('.main-fadeout').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout").removeClass("main-fadein");
    }
  });

  $('.main-fadeout2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout2").removeClass("main-fadein");
    }
  });

  $('.main-fadeout3').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout3").removeClass("main-fadein");
    }
  });

  $('.main-fadeout4').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout4").removeClass("main-fadein");
    }
  });

  // ABOUT1行目
  $('.right').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-right');
    }else {
      $(".right").removeClass("fadein-right");
    }
  });
  $('.left').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-left');
    }else {
      $(".left").removeClass("fadein-left");
    }
  });
  // ABOUT2行目
  $('.right-2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-right');
    }else {
      $(".right-2").removeClass("fadein-right");
    }
  });
  $('.left-2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-left');
    }else {
      $(".left-2").removeClass("fadein-left");
    }
  });
  // ABOUT3行目
  $('.right-3').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-right');
    }else {
      $(".right-3").removeClass("fadein-right");
    }
  });
  $('.left-3').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fadein-left');
    }else {
      $(".left-3").removeClass("fadein-left");
    }
  });
  // ボタンフェードイン（btn-1）
  $('.btn-1-fadeout').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('btn-1-fadein');
    }else {
      $(".btn-1-fadeout").removeClass("btn-1-fadein");
    }
  });

  $('.btn-1-fadeout2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('btn-1-fadein');
    }else {
      $(".btn-1-fadeout2").removeClass("btn-1-fadein");
    }
  });
  // PRODUCT画像（img-wrap）
  $('.img-wrap-none').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('img-wrap');
    }else {
      $(".img-wrap-none").removeClass("img-wrap");
    }
  });
  $('.img-wrap-none2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('img-wrap');
    }else {
      $(".img-wrap-none2").removeClass("img-wrap");
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