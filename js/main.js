// Eric Garcia
// VFW 1304
// Project 2

window.addEventListener('DOMContentLoaded', function(){

	//Variables
	var eventMood = ['--Choose Mood--', 'Forgettable', 'Fun', 'Memorable', 'Sad'];

	// getElementById Function
	function $(x){
		var elementRequested = document.getElementById(x);
		return elementRequested;
	};

	// Load Data Function
	var loadData = function(){
		var occasionKey = $('Occasion');
		var occasionValue = localStorage.getItem(occasionKey);
		occasion.value = occasionValue;
	};

	// Clear Local Storage Function
	var clearData = function(){
		localStorage.clear;
	};

	// Create mood field element and populate with options
	function creatMoodField(){
		var formTag = document.getElementsByTagName('form'),
			moodLi = $('addHTML'),
			makeMood = document.createElement('select');
			makeMood.setAttribute('id', 'test');
		for (var i=0; i<eventMood.length; i++){
			var makeOption = document.createElement('option');
			var optText = eventMood[i];
			makeOption.setAttribute('value', optText);
			makeOption.innerHTML = optText;
			makeMood.appendChild(makeOption);
		}
		moodLi.appendChild(makeMood);
	}
creatMoodField();
	// Save Data Functions (Store memory button)
	var saveData = function(){
		localStorage.setItem('Occasion', occasion.value);
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