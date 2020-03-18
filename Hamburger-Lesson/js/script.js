$(function(){
	$('.menu-trigger').on('click',function(){
	// .menu-triggerクリック時に行われる処理
		$(this).toggleClass('active');
		$('#sp-menu').fadeToggle();
		return false;
	});
});

// .fadeToggle( )は、要素のフェードイン・フェードアウトを切り替えるメソッドこのメソッドを使って、ハンバーガーメニューを開いたときの状態を設定
// .toggleClass( )を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除
// #sp-menuが開いたときに、.fadeToggle( )が処理されるように設定
// ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行される