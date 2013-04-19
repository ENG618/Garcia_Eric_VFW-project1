// Eric Garcia
// VFW 1304
// Project 2

window.addEventListener('DOMContentLoaded', function(){

	/*
	//Variables
	var occasion = document.getElementById('occasion');
	var date = document.getElementById('date');
	var importance = document.getElementById('importance');
	var sharedWith = document.getElementById('form').sharedWith;
	var description = document.getElementById('description');
	*/
	// var submit = document.getElementById('save');

	// getElementById Function
	function $(x){
		var elementRequested = document.getElementById(x);
		return elementRequested;
	};


	

	// Functions
	var saveData = function(){
		localStorage.setItem('Occasion', occasion.value);
	};

	var loadData = function(){
		var occasionKey = $('Occasion');
		var occasionValue = localStorage.getItem(occasionKey);
		occasion.value = occasionValue;
	};
	var clearData = function(){
		localStorage.clear;
	};
	// var saveForm = function(){};


	// Display data, Clear data, submit links
	var loadSavedData = $('loadSavedData');
	var clearSavedData = $('clearSavedData');
	var save = $('save');
	loadSavedData.addEventListener('click', loadData);
	clearSavedData.addEventListener('click', clearData);
	// save.addEventListener('click', saveForm)

	//Check-box array
	var getCheckedValues = function(){
		var checkboxes = document.getElementById('form').sharedWith;
		for (i=0; i<checkboxes.length; i++){
			if(checkboxes[i].checked ){
				console.log(checkboxes[i].value);
			};
		};
	};

	save.addEventListener('click', getCheckedValues())
 
});