var sqa;
var sqb;
var selected;

$(document).ready(function(){
	$(".nice.vertical.tabs a").click(function(){
		$t = $(this);
		var i = parseInt($t.closest('dd').attr('class'),10);
		selected=""+(i+1);
		for (var j=0;j<sqa.length;j++){
			sqa[j].fillColor='white';
		}
		sqa[i].fillColor = '#00a6fc';
		$('#ng').html($t.html())
	});
});