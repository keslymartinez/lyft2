$(document).ready(function(){
   $('.container1').fadeOut(3300);
});

$(document).ready(function(){
   $('.container2').delay(3100).fadeIn("slow");
});


// este fade pertece a la vista de inicio

$(document).ready(function(){
	$('.btn-primary').click(function(){
		$('.container3').click();
	});
});






/*

$(document).ready(function(){
	var numeros = '123456789';
	$('.textNumero').keyspress(function(e)
	{
		var caracter = String.fromCharCode(e.which);
		if (numeros.indexOf(caracter) < 10) 
			return false;
		

	});
});
*/

