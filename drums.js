let isPowerOn = true;
let isBankOne = true;
let currentVolume = .50;

const bank1 = {
	'Q': {
		id: 'Heater-1',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
	},
	'W': {
		id: 'Heater-2',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
	},
	'E': {
		id: 'Heater-3',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
	},
	'A': {
		id: 'Heater-4',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
	},
	'S': {
		id: 'Clap',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
	},
	'D': {
		id: 'Open HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
	},
	'Z': {
		id: "Kick n' Hat",
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
	},
	'X': {
		id: 'Kick',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
	},
	'C': {
		id: 'Closed HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
	}
};

const bank2 = {
	'Q': {
		id: 'Chord 1',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
	},
	'W': {
		id: 'Chord 2',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
	},
	'E': {
		id: 'Chord 3',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
	},
	'A': {
		id: 'Shaker',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
	},
	'S': {
		id: 'Open HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
	},
	'D': {
		id: 'Closed HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
	},
	'Z': {
		id: 'Punchy Kick',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
	},
	'X': {
		id: 'Side Stick',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
	},
	'C': {
		id: 'Snare',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
	}
};

function soundDrum(key){
	if(isPowerOn === false){
		return;
	}

	if(isBankOne === true){
		const audioObjectBank1 = bank1[key];
		let audioBank1 = new Audio(audioObjectBank1.url);
		audioBank1.volume = currentVolume;
		audioBank1.play();
		document.querySelector('#sound-name-container').innerText = audioObjectBank1.id;
	} else if(isBankOne === false){
		const audioObjectBank2 = bank2[key];
		let audioBank2 = new Audio(audioObjectBank2.url);
		audioBank2.volume = currentVolume;
		audioBank2.play();
		document.querySelector('#sound-name-container').innerText = audioObjectBank2.id;
	}
}

function togglePower(){
	if(isPowerOn === true){
		isPowerOn = false;
		document.querySelector('#sound-name-container').innerText = '';
		document.querySelector('#off-switch').style.backgroundColor = '#ffd700';
		document.querySelector('#on-switch').style.backgroundColor = 'white';
		document.querySelector('#volume-slider').disabled = true;
	} 
	else if(isPowerOn === false){
		isPowerOn = true;
		document.querySelector('#on-switch').style.backgroundColor = '#ffd700';
		document.querySelector('#off-switch').style.backgroundColor = 'white';
		document.querySelector('#volume-slider').disabled = false;
	}
}

function toggleBank(){
	if(isBankOne === true){
		isBankOne = false;
		document.querySelector('#bank1-switch').style.backgroundColor = 'white';
		document.querySelector('#bank2-switch').style.backgroundColor = '#ffd700';
	} 
	else if(isBankOne === false){
		isBankOne = true;
		document.querySelector('#bank2-switch').style.backgroundColor = 'white';
		document.querySelector('#bank1-switch').style.backgroundColor = '#ffd700';
	}
}

function displayVolume(volume){
	if(isPowerOn === false){
		return;
	}
	document.querySelector('#sound-name-container').innerText = 'Volume: ' + volume;
}

function changeVolume(volume){
	currentVolume = volume/(100);
	displayVolume(volume);
}




const keypadLetters = document.querySelectorAll('.keypad-letters');

for(let i=0; i<keypadLetters.length; i++){
	keypadLetters[i].addEventListener("click", function(){
			changeButtonColor( keypadLetters[i] );
		});
}

document.addEventListener("keydown", function(event){
	const key = event.key.toUpperCase();
	soundDrum(key);
	
	// Loop through all the letters
	for(let i=0; i<keypadLetters.length; i++){
		
		// if the key pressed matches the innerText of one of the elements
		if( key === keypadLetters[i].innerText ){
			
			// Change the button color of that matched element
			changeButtonColor( keypadLetters[i] );
		}
	}
});



function changeButtonColor(element){
	element.style.background = '#ffd700';
	element.style.boxShadow = "0px 0px 0px";
	setTimeout(function(){
		element.style.background = '#9f1d35';
		element.style.boxShadow = '2px 2px 6px #606060'; 
	}, 100);
}
