// function getRandomInt(max) {
// 	return Math.floor(Math.random() * max);
// }

// function generateAns() {
// 	let numAns = new Set();
// 	while(numAns.size != 4) {
// 		numAns.add(getRandomInt(10).toString());
// 	}
// 	// to array
// 	numAns = [...numAns];
// 	console.log("NEW: " + numAns);
// 	return numAns;
// }

// function checkAB(guessArray, ansArray) {
// 	let i = 0;
// 	let a = 0;
// 	let b = 0;
// 	guessArray.forEach(element => {
// 		if(element === ansArray[i])
// 			a++;
// 		else if(ansArray.includes(element))
// 			b++;
		
// 		i++;
// 	});
// 	return { a, b };
// }

// function gamePlay(startPos, inputPos, inputDNA, rotateDeg, depth) {
// 	// Output message
// 	function OutputMessage(message, count) {
// 		// Animation
// 		$(message).hide().prependTo(inputDNA).slideDown(400);
// 		// rotateY
// 		let rotateInfo = 'rotateY(' + rotateDeg*count + 'deg)';
// 		// translateZ
// 		let rad = rotateDeg * (Math.PI/180);
// 		let translateInfo = 'translateZ('+Math.sin(rad*count)*depth+'px)';
// 		// transform
// 		$('#dna'+count).css("transform", rotateInfo+translateInfo);
// 		// rotate inputDNA
// 		$({deg: -rotateDeg*(count-1)}).animate({deg: -rotateDeg*count}, {
// 			step: function(now, fx){
// 				inputDNA.css({
// 					 transform: "rotateY(" + now + "deg)"
// 				});
// 			}
// 		});
// 	}
// 	// Generate Answer!
// 	let ansNum = generateAns();
// 	let round = 0;
// 	let count = 0;
// 	// Input guessing number.
// 	let guessNum = Array(4);
// 	inputPos.bind("input", function() {
// 		let id = $(this).attr('id');
// 		let number = $(this).val();
// 		if(number.length >= 1) {
// 			// Avoid user changing type of input.
// 			if(number.charCodeAt(0) < 48 || 57 < number.charCodeAt(0) ) {
// 				$(this).val('');
// 				alert("Stop hacking!");
// 			// Avoid numbers repeating.
// 			} else if(!guessNum.includes(number)) {
// 				guessNum[id] = number;
// 				$(this).next("input").focus();
// 			} else {
// 				$(this).val('');
// 				// alert("數字不能重複！");
// 			}
// 		}
// 		// Modify Input number
// 		$(this).on('keydown',function(e){
// 			// input 0 ~ 9
// 			if(Array.from({length: 10}, (_, i) => i + 48).includes(e.keyCode)) {
// 				guessNum[id] = undefined;
// 				$(this).val(Event.key);
// 			} else if(e.keyCode == 8) {
// 				guessNum[id] = undefined;
// 			}
// 		})
// 		// Input completed.
// 		while(!guessNum.includes(undefined)) {
// 			round++;
// 			count ++;
// 			// Check AB
// 			let check = checkAB(guessNum, ansNum);
// 			let combineNum = "";
// 			// Combine number.
// 			guessNum.forEach(element => {
// 				combineNum += element;
// 			})
// 			// Output message
// 			let message = '<div id="'+'dna'+count+'">'
// 							+ round + "-"
// 							+ combineNum + "-"
// 							+ check.a + "A" + check.b + "B"
// 							+'<div/>';
// 			OutputMessage(message, count);
// 			// End Game
// 			if(check.a == 4) {
// 				count++;
// 				message = '<div id="'+'dna'+count+'">'
// 							+"Congrats!!!"
// 							+'<div/>';
// 				OutputMessage(message, count);
// 				// Restart
// 				ansNum = generateAns();
// 				round = 0;
// 				count++;
// 				message = '<div id="'+'dna'+count+'">'
// 							+"---RESTART---"
// 							+'<div/>';
// 				OutputMessage(message, count);
// 			}
// 			// Next round.
// 			guessNum = Array(4);
// 			inputPos.val('');
// 			startPos.focus();
// 		}
// 	});
// }