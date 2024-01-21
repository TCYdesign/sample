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
$('.img01').addClass('img-fadein');
});

// スクロールで開始
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('.img02').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $('.img02').addClass('img-fadein-gray');
    }else {
      $(".img02").removeClass("img-fadein-gray");
    }
    if (scrollAmount > position - windowHeight + 600) {
      $('.img03').addClass('img-fadein');
    }else {
      $(".img03").removeClass("img-fadein");
    }
    if (scrollAmount > position - windowHeight + 1100) {
      $('.img04').addClass('img-fadein-gray');
    }else {
      $(".img04").removeClass("img-fadein-gray");
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
