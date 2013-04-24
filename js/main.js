// Eric Garcia
// VFW 1304
// Project 2

window.addEventListener('DOMContentLoaded', function(){

	//Variables
	var eventMood = ['--Choose Mood--', 'Forgettable', 'Fun', 'Memorable', 'Sad'];
	var	sharedWith;
	var loadSavedData = $('loadSavedData');
	var clearSavedData = $('clearSavedData');
	var save = $('save');

	// getElementById Function
	function $(x){
		var elementRequested = document.getElementById(x);
		return elementRequested;
	};

	// Create mood field element and populate with options
	function creatMoodField(){
		var formTag = document.getElementsByTagName('form'),
			moodLi = $('addHTML'),
			makeMood = document.createElement('select');
			// Need to correct this element
			makeMood.setAttribute('id', 'mood');
		for (var i=0; i<eventMood.length; i++){
			var makeOption = document.createElement('option');
			var optText = eventMood[i];
			makeOption.setAttribute('value', optText);
			makeOption.innerHTML = optText;
			makeMood.appendChild(makeOption);
		};
		moodLi.appendChild(makeMood);
	};

	//Check-box array
	var getCheckedValues = function(){
		var checkboxes = $('form').sharedWith,
			checkedValues = [];
		for (i=0; i<checkboxes.length; i++){
			if(checkboxes[i].checked ){
				checkedValues.push(checkboxes[i].value);
			};
		};
		// Not sure if this is correct?!?!
		return checkedValues;
	};

	function toggleNav(x){
		switch(x){
			case 'on':
				$('form').style.display = 'none';
				$('clearSavedData').style.display = 'inline';
				$('loadSavedData').style.display = 'none';
				$('addNewMemory').style.displa = 'inline';
				break;
			case 'off':
				$('form').style.display = 'block';
				$('clearSavedData').style.display = 'inline';
				$('loadSavedData').style.display = 'inline';
				$('addNewMemory').style.displa = 'none';
				$('memories').style.display = 'none';
				break;
			default:
				return false;
		};
	};

	// Save Data Functions (Store memory button)
	var saveForm = function(){
		var id 					= Math.floor(Math.random()*12345678);
		var memory 				= {};
		memory.occasion 		= ['Occasion:', $('occasion').value];
		memory.date 			= ['Date:', $('date').value];
		memory.importance 		= ['Importance:', $('importance').value];
		memory.mood 			= ['Mood:', $('mood').value];
		memory.including	 	= ['Shared With:', getCheckedValues()];
		memory.notes 			= ['Notes:', $('notes').value];
		// Save data to local Storage
		localStorage.setItem(id, JSON.stringify(memory));
		alert('Your memory is safe!!');
	};

	// Load Data Function
	var loadData = function(){
		if(localStorage.length === 0){
			alert('There are no memories to display');
		}else{
			toggleNav('on');
			// Load from local storage
			var makeDiv = document.createElement('div');
			makeDiv.setAttribute('id', 'memories');
			var makeList = document.createElement('ul');
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);
			$('memories').style.display = 'block';
			for (var i=0; i<localStorage.length; i++){
				var makeLi = document.createElement('li');
				var linksLi = document.createElement('li');
				makeList.appendChild(makeLi);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				// Convert sting from local storage to object
				var obj = JSON.parse(value);
				// Creating another list for each memory
				var makeSubList = document.createElement('ul');
				makeLi.appendChild(makeSubList);
				for (var n in obj){
					var makeSubLi = document.createElement('li');
					makeSubList.appendChild(makeSubLi);
					var optSubText = obj[n][0]+' '+obj[n][1];
					makeSubLi.innerHTML = optSubText;
					makeSubList.appendChild(linksLi);
				};
				makeItemLinks(localStorage.key(i), linksLi);  
			};
		};
	};

	// Clear Local Storage Function
	var clearData = function(){
		if(localStorage.length === 0){
			alert('There are no memories to clear');
		}else{
			localStorage.clear();
			alert('All memories have been forgotten');
			window.location.reload();
			return false;
		};
	};

	// Function creates links to edit or delete items from local storage
	var makeItemLinks = function(key, linksLi){
		// Edit Link
		var editLink = document.createElement('a');
		editLink.href = '#';
		editLink.key = key;
		var editText = 'Edit Memory';
		editLink.addEventListener('click', editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// All line break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);

		// Delete link
		var deleteLink = document.createElement('a');
		deleteLink.href = '#';
		deleteLink.key = key;
		var deleteText = 'Erase Memory';
		// deleteLink.addEventListener(click, deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	};

	// Edit individual memory in local storage
	var editItem = function(){
		var value = localStorage.getItem(this.key);
		var memory = JSON.parse(value);

		// Show the form
		toggleNav('off');

		// Populate form fields
		$('occasion').value = memory.occasion[1];
		$('date').value = memory.date[1];
		$('importance').value = memory.importance[1];
		$('mood').value = memory.mood[1];
		var checkboxes = $('form').sharedWith;
		for(var i=0; i<checkboxes.length; i++){
			if (checkboxes[i] == 'checked'){
				$('form').sharedWith.setAttribute(checked, checked);
			};
		};
		$('notes').value = memory.notes[1];
	};
	

	// Display/Clear data & Submit links
	loadSavedData.addEventListener('click', loadData);
	clearSavedData.addEventListener('click', clearData);
	save.addEventListener('click', saveForm);

	creatMoodField();
});

