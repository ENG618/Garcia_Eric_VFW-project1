//Eric Garcia
//VFW 1304
//Project2

window.addEventListener('DOMContentLoaded', function(){

	//Variables
	var occasion = document.getElementById('occasion');
	var date = document.getElementById('date');
	var importance = document.getElementById('importance');
	var sharedWith = document.getElementById('form').sharedWith;
	var description = document.getElementById('description');

	//getElementById Function
	function getElement(x){
		var elementRequested = document.getElementById(x);
		return elementRequested
	};

	var saveData = function(){
		localStorage.setItem("Occasion", occasion.value);
	};

	var restoreData = function(){
		var occasionKey = localStorage.key('Occasion');
		var occasionValue = localStorage.getItem(occasionKey);
		occasion.value = occasionValue
	};

	occasion.addEventListener("blur", saveData);


	restoreData();


 
});