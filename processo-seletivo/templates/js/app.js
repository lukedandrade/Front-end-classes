//Espera o carregamento do documento.
$(document).ready(function (){
	var $btnToogle = $('#toogle');
	$btnToogle.on('click', function(){
		var formulario = document.getElementById('formulario');
		if (formulario.style.display === 'none'){
			formulario.style.display = 'block';
		} else{
			formulario.style.display = 'none';
		}
	});

	var $btnChangeSrc1 = $('#show-lab1');
	$btnChangeSrc1.on('click', function(){
		var my_iframe = document.getElementById('my_Iframe');
		my_Iframe.src = "https://fs29.formsite.com/1OznQ8/form1/fill?5=1"
	});

	var $btnChangeSrc2 = $('#show-lab2');
	$btnChangeSrc2.on('click', function(){
		var my_iframe = document.getElementById('my_Iframe');
		my_Iframe.src = "https://fs29.formsite.com/1OznQ8/form1/fill?5=2"
	});
});