
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.goose>.accordion').addEventListener('click', function(){
		document.querySelector('.goose>article').classList.toggle('show');
		document.querySelector('.goose span').classList.toggle('rotate');
	});
});

document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.brand>.accordion').addEventListener('click', function(){
		document.querySelector('.brand>article').classList.toggle('show');
		document.querySelector('.brand span').classList.toggle('rotate');
	});
});