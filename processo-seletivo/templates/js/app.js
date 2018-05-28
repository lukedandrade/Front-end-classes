//Espera o carregamento do documento.
$(document).ready(function (){
	var $btnConhecaMe = $('#conheca-me');
	$btnConhecaMe.on('click', function(){
		var conf = confirm('Você deseja continuar ?');
		if (conf){
			alert('Muito obrigado!');
		} else{
			alert(':(');
		}
		console.log(conf);
	});

	$('.scroll-animate').on('click', function (event) {
		var $element, options, duration;
		//evita que a ação padrão do botão seja chamada.
		event.preventDefault();
		//pega o elemento clicado
		$element = $($.attr(this, 'href'));
		//opções da animação
		options = {
			scrollTop: $element.offset().top
		};
		//duração em ms
		duration = 500;
		//adiciona o efeito de animação
		$('html, body').animate(options, duration);
	});

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