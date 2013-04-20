// Eric Garcia
// VFW 1304
// Project 2

window.addEventListener('DOMContentLoaded', function(){

	//Variables
	var eventMood = ['--Choose Mood--', 'Forgettable', 'Fun', 'Memorable', 'Sad'];
	var	sharedWith;

	// getElementById Function
	// Done
	function $(x){
		var elementRequested = document.getElementById(x);
		return elementRequested;
	};

	// Load Data Function
	// Done
	var loadData = function(){
		// Load from local storage
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute(id, 'memories');
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for (var i=0; i<localStorage.length; i++){
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert sting from local storage to object
			var obj = JSON.parse(value);
			// Creating another list for each entry
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for (var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+' '+obj[n][1];
				makeSubLi.innerHTML = optSubText;
			};
		};
	};

	//Check-box array
	// Done?
	var getCheckedValues = function(){
		var checkboxes = $('form').sharedWith,
			checkedValues = [];
		for (i=0; i<checkboxes.length; i++){
			if(checkboxes[i].checked ){
				checkedValues.push(checkboxes[i].value);
			};
		};
		// Not sure if this is correct?!?!
		return checkedValues
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
			// Need to correct this element
			makeMood.setAttribute('id', 'test');
		for (var i=0; i<eventMood.length; i++){
			var makeOption = document.createElement('option');
			var optText = eventMood[i];
			makeOption.setAttribute('value', optText);
			makeOption.innerHTML = optText;
			makeMood.appendChild(makeOption);
		};
		moodLi.appendChild(makeMood);
	};

	// Save Data Functions (Store memory button)
	var saveForm = function(){
		getCheckedValues();
		var id 				= Math.floor(Math.random()*12345678);
		var item 			= {};
		item.occasion 		= ['Occasion:', $(occasion).value];
		item.date 			= ['Date:', $(date).value];
		item.importance 	= ['Importance:', $(importance).value];
		item.mood 			= ['Mood:', $(addHTML).value];
		item.sharedWith 	= ['Shared With:', checkedValues];
		item.notes 			= ['Notes:', $(notes).value];
		// Save data to local Storage
		localStorage.setItem(id, JSON.stringify(item));
		alert('Your memory is safe!!');
	};

	// Display/Clear data & Submit links
	var loadSavedData = $('loadSavedData');
	var clearSavedData = $('clearSavedData');
	var save = $('save');
	loadSavedData.addEventListener('click', loadData);
	clearSavedData.addEventListener('click', clearData);
	save.addEventListener('click', saveForm);



	creatMoodField();
});