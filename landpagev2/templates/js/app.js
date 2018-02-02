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
});