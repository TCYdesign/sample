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
  $('.main-fadeout').addClass('main-fadein');
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