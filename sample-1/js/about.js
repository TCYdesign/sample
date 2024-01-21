
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
  $('.main-logo').addClass('main-fadein');
  });

// スクロールで開始
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.main-fadeout').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('main-fadein');
    }else {
      $(".main-fadeout").removeClass("main-fadein");
    }
  });
  // ABOUTの画像とテキストフェードイン
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
  // 2行目
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
  // 3行目
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
  // 青背景部分(blue-back)
  $('.blue1').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $('.blue1').addClass('fadein');
    }else {
      $(".blue1").removeClass("fadein");
    }
    if(scrollAmount > position - windowHeight + 150){
      $('.blue2').addClass('fadein');
    }else {
      $(".blue2").removeClass("fadein");
    }
    if(scrollAmount > position - windowHeight + 200){
      $('.blue3').addClass('fadein');
    }else {
      $(".blue3").removeClass("fadein");
    }
    // 会社概要・沿革タイトル
    if(scrollAmount > position - windowHeight + 300){
      $('.h5-fadeout').addClass('fadein');
    }else {
      $(".h5-fadeout").removeClass("fadein");
    }
    if(scrollAmount > position - windowHeight + 1500){
      $('.h5-fadeout2').addClass('fadein');
    }else {
      $(".h5-fadeout2").removeClass("fadein");
    }
    // 主要銀行・取引先
    if(scrollAmount > position - windowHeight + 1100){
      $('.A8C0D1').addClass('fadein');
    }else {
      $(".A8C0D1").removeClass("fadein");
    }
  });
  // 会社概要写真・スライドイン
  $('.about-pic-fadeout').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('about-pic-fadein');
    }else {
      $(".about-pic-fadeout").removeClass("about-pic-fadein");
    }
  });
  $('.about-pic-fadeout2').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('about-pic-fadein2');
    }else {
      $(".about-pic-fadeout2").removeClass("about-pic-fadein2");
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