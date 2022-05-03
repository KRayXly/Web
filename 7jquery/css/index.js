/**
 * 
 * @authors Lin
 * @date    2022-04-18
 * @version project8
 */

/**实验一 */
$(".m-b1").children().click(function(){
	var index = $(this).index();
	$(".m-box").show("slow");
	$(".pic1").eq(index).show("slow").siblings().hide();
});
$(".m-box").click(function(){
	$(".m-box").hide();
})

/**实验二 与菜单栏共用函数fun1 */
function fun1(e) {
        $(e).addClass("active").siblings().removeClass("active");
        var index = $(e).index();
        $(e).parent().siblings().children().eq(index).addClass("active")
            .siblings().removeClass("active");
}
/**实验三 */
var count  = 3;
var delet= 0;
$("body").on('click','.delete',function() {
	delet = 0;
	$(this).parent().remove();
	$(".id").each(function() {
		$(this).html(++delet);
	});
});
function fun2() {
	count++;
	$(".m-b4").append('<div><div><span class="pid">'+count+'</span></div><div class="spacing"></div><div class="delete"><span>Delete</span></div></div>');
}