$(function() {

  $('#back a').on('click',function(){
  // // #back内の<a>タグがクリックされたときの処理
    $('body, html').animate({
    // animate( ) は、アニメーション効果を設定するjQueryの関数
      scrollTop:0
    }, 800);
      return false;
  });

});



//   $('セレクタ名').animate({
//       変化対象のプロパティ名:変化値
//     }, アニメーションの動作時間);
// 「scrollTop:0」を指定しているので、「最上部に移動する」の意味になります。
// また、アニメーションの動作時間を「800」で指定しているので、「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」
// アニメーションの動作時間は、ミリ秒で指定する以外にも、「slow」、「normal」、「fast」で指定することも可能