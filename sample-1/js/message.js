$(function(){
// ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  // ハンバーガー開閉
  $('.hamburger').toggleClass('hamu-open');
  // メニューの固定
  $('body').toggleClass('body-overflow');
});

// スクロールで開始
$(function () {
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

  $('.fv-fadeout').each(function () {
     const position = $(this).offset().top;
     if (scrollAmount > position - windowHeight + 100) {
     $(this).addClass('fv-fadein');
    }else {
       $(".fv-fadeout").removeClass("fv-fadein");
    }
  });

  $('.message-pic-fadeout').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight) {
    $(this).addClass('message-pic-fadein');
   }else {
      $(".message-pic-fadeout").removeClass("message-pic-fadein");
   }
 });
});

// VOICE
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();

 $('.voicetitle-fadeout').each(function () {
  const position = $(this).offset().top;
  if (scrollAmount > position - windowHeight + 100) {
  $(this).addClass('voicetitle-fadein');
 }else {
    $(".voicetitle-fadeout").removeClass("voicetitle-fadein");
 }
});
// 社員１～３
$('.voice-1-fadeout').each(function () {
  const position = $(this).offset().top;
  if (scrollAmount > position - windowHeight + 100) {
  $(this).addClass('voice-1-fadein');
 }else {
    $(".voice-1-fadeout").removeClass("voice-1-fadein");
 }
});
$('.voice-2-fadeout').each(function () {
  const position = $(this).offset().top;
  if (scrollAmount > position - windowHeight + 150) {
  $(this).addClass('voice-2-fadein');
 }else {
    $(".voice-2-fadeout").removeClass("voice-2-fadein");
 }
});
$('.voice-3-fadeout').each(function () {
  const position = $(this).offset().top;
  if (scrollAmount > position - windowHeight + 100) {
  $(this).addClass('voice-3-fadein');
 }else {
    $(".voice-3-fadeout").removeClass("voice-3-fadein");
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