$(function(){
	let filter = $("[data-filter]");
	 filter.on("click", function(event){
		 event.preventDefault();		 
		 let cat = $(this).data('filter');
		 if(cat == 'all'){
			 $("[data-cat]").removeClass("hide");
		 } else{
		 $("[data-cat]").each(function(){
			 let workCat= $(this).data('cat');
			 if(workCat != cat){
				 $(this).addClass('hide');
			 } else {
				 $(this).removeClass('hide');
			 }
		 });
		 }
	 });
	
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");
	
	modalCall.on("click", function(event){
		event.preventDefault();
		let $this = $(this);
		let modalID = $this.data('modal');
		
		$(modalID).addClass('show');
	});
	modalClose.on("click", function(event){
		event.preventDefault();
		let $this = $(this);
		let modalParent = $this.parents('.modal');
		
		modalParent.removeClass('show');
	});
});

const btn = document.querySelector(".btn-toggle");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});