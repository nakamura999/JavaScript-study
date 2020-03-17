// jQueryでHTMLのCSS要素を操作しよう
// $(function(){

　　// box.1変更
   // $('.box1').css({
   //  'background-color':'#0000FF',
   //  'height':'100px',
   // });


   // 上から下へ
   // $(function(){
   //  $('.box1').slideDown();
   // });


   // 下から上へ  display: none;入れない
   // $(function(){
   //  $('.box1').slideDown();
   // });


   // カラー変更
   // $(function(){
   //  $('.box1').show();
   //  $('.box1').css({'background-color': '#0000FF'});
   // })


   // box1が最初は非表示になる　display: none;入れない
   // $(function(){
   //    $('.box1').hide();
   // });

    $(function(){
        $('.box1').slideDown(1000,function() {
            $('.box1').css({
                'background-color': '#0000FF',
                'width': '200px',
                'height': '100px'
            }).slideUp(1000);
        });
    });


// });