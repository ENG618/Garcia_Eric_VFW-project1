//Eric Garcia
//VFW 1304
//Project2

window.addEventListener('DOMContentLoaded', function(){

	//getElementById Function
	function $(x){
		var elementRequested = document.getElementById(x);
		return elementRequested;
	};
/*
	//Variables
	var occasion = document.getElementById('occasion');
	var date = document.getElementById('date');
	var importance = document.getElementById('importance');
	var sharedWith = document.getElementById('form').sharedWith;
	var description = document.getElementById('description');
*/
	

	//Functions
	var saveData = function(){
		localStorage.setItem('Occasion', occasion.value);
	};

	var loadData = function(){
		var occasionKey = $('Occasion');
		var occasionValue = localStorage.getItem(occasionKey);
		occasion.value = occasionValue;
	};

	//Display data, Clear data, submit links
	var displaySavedData = $('displaySavedData');
	var clearSavedData = $('clearData');
	var save = $('save');
	displaySavedData.addEventListener('click', displayData);
	clearSavedData.addEventListener('click', clearData);
	save.addEventListener('click', saveForm)



	loadData();


 
});