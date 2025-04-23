$(function(){
  // メニューボタンのクリックイベント
  $('.c-button__menu').on('click', function(){
    // クローズクラスがある場合、クローズクラスを外す
    if ($('.c-bg__sidebar').hasClass('is-active')) {
      $('.c-bg__sidebar').removeClass('is-active').removeClass('is-close');
    }

    // サイドバー背景に is-active クラスを追加
    $('.c-bg__sidebar').addClass('is-active');

    // 1秒後にサイドバーに is-active クラスを追加
    setTimeout(function(){
      $('.p-sidebar').addClass('is-active');
    }, 1000);
  });

  // クローズボタンのクリックイベント
  $('.c-button__close').on('click', function(){
    // サイドバー背景から is-active クラスを削除
    $('.c-bg__sidebar').removeClass('is-active');

    // サイドバーから is-active クラスを削除
    $('.p-sidebar').removeClass('is-active');
  });
  
  $('.c-button__menu').on('click', function() {
    console.log('メニューボタンがクリックされました');
    $('.c-bg__sidebar').addClass('is-active');
  });
});