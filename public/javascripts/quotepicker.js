//----Settings----//

//an array of the people on the team, set by a function to make reseting easier.
var people = makePeopleArray();

var removedPeople = new Array();

//The Output div
var outputDiv = $('#output');

//The div containing the active list
var activeDiv = $('#activeList');

//The div containing the removed list
var removedDiv = $('#removedList');

//the pickerButton
var pickerButton = $('#pickerButton');

//the resetButton
var resetButton = $('#resetButton');

//The timer output div
var timerDiv = $('#timerOutput');

//The pause/resume button
var pauseResume = $('#pauseResume');

//The Quote Object holds quote data
/*var quoteObject = [{"quote":"You stink. You don't smell like [% name %]. You smell like beef and cheese.","image":"http://1.bp.blogspot.com/-OTUdW4cLIM0/VhReK8IUIBI/AAAAAAAAIEE/rRCtl0hIw4g/s1600/gif-elf-you-stink.gif","movie":"Elf"},{"quote":"[% name %], I can't promise i'll try, but I'll try to try.","image":"https://www.pearldrummersforum.com/attachment.php?attachmentid=437000&d=1351480589","movie":"Some Simpsons Episode Somewhere"},{"quote":"They found me. I don't know how, but they found me. RUN FOR IT, [% name %]!","image":"http://frontrowcentral.com/wp-content/uploads/2015/10/libyan.gif","movie":"Back to the Future"},{"quote":"[% name %], we have a problem!","image":"https://moulesonmovies.files.wordpress.com/2014/04/hanks-apollo-13.jpg","movie":"Apollo 13"},{"quote":"My name is Major [% name %] Payne. Killin' is my business, Ladies, and business... is.... goooood!","image":"http://s3.amazonaws.com/rapgenius/8ee74ca6.png","movie":"Major Payne"},{"quote":"[% name %], be excellent to each other!","image":"https://media4.giphy.com/media/mp9pJlZFE8e3K/200_s.gif","movie":"Bill and Ted's Excellent Adventure"},{"quote":"I, [% name %], better known as Blackbeard... was not ALL bad.","image":"http://vignette4.wikia.nocookie.net/disney/images/1/14/Blackbeard's-ghost-screenshot.jpg/revision/latest?cb=20130202201910","movie":"Blackbeard's Ghost"},{"quote":"In the end, Charlie Bucket won a chocolate factory. But [% name %] had something even better, a family. And one thing was absolutely certain - life had never been sweeter. ","image":"http://images4.fanpop.com/image/photos/22600000/Charlie-and-the-Chocolate-Factory-charlie-and-the-chocolate-factory-22689617-951-756.jpg","movie":"Charlie and the Chocolate Factory"},{"quote":"It's a trap. No, wait! [% name %] of the wolf-gods, don't go down there! Go back to the forest! Listen to me, please, don't throw your life away!","image":"http://vignette2.wikia.nocookie.net/p__/images/5/5f/Ashitaka-princess-monon…3062-853-480.jpg/revision/latest?cb=20130429203613&path-prefix=protagonist","movie":"Princess Mononoke"},{"quote":"I am more than man! More than life! I... am... [% name %]!!","image":"http://www.alienmarine2000.com/images/05_picture/originals/07_motu/21_skeletor_gold_gauntlets/02.jpg","movie":"Masters of the Universe"}];*/

//The amount of time in seconds for each turn.
var allotedTime = 180;

//the amount of time left
var timeElapsed = allotedTime;

//the if of the timout element for the timer
var timeOutID = null; //set by the timer function

//the sound that plays when the time is up
var fogHorn = new Audio('/foghorn.wav');

//whether or not the timer is paused
var isPaused = false;

//----Functions----//

/*//makePeopleArray
//sets array of people on the team, used to setup or reset the people array
//no parameters
//no returns
function makePeopleArray()
{

	return ['Ashley Roney', 'Braydon Powell', 'Charles Blomquist', 'David Estes', 'Jacob Carlisle', 'James Crofts', 'Jen Nichols', 'Jocelyn Brady', 'Laura Strader', 'Stanley Johnson'];

}//end makePeopleArray*/

//Function getMoreQuotes
//gets more quotes from the database
//no parameters
//no returns
function getMoreQuotes()
{

	quoteObject = [{"quote":"You stink. You don't smell like [% name %]. You smell like beef and cheese.","image":"http://1.bp.blogspot.com/-OTUdW4cLIM0/VhReK8IUIBI/AAAAAAAAIEE/rRCtl0hIw4g/s1600/gif-elf-you-stink.gif","movie":"Elf"},{"quote":"[% name %], I can't promise i'll try, but I'll try to try.","image":"https://www.pearldrummersforum.com/attachment.php?attachmentid=437000&d=1351480589","movie":"Some Simpsons Episode Somewhere"},{"quote":"They found me. I don't know how, but they found me. RUN FOR IT, [% name %]!","image":"http://frontrowcentral.com/wp-content/uploads/2015/10/libyan.gif","movie":"Back to the Future"},{"quote":"[% name %], we have a problem!","image":"https://moulesonmovies.files.wordpress.com/2014/04/hanks-apollo-13.jpg","movie":"Apollo 13"},{"quote":"My name is Major [% name %] Payne. Killin' is my business, Ladies, and business... is.... goooood!","image":"http://s3.amazonaws.com/rapgenius/8ee74ca6.png","movie":"Major Payne"},{"quote":"[% name %], be excellent to each other!","image":"https://media4.giphy.com/media/mp9pJlZFE8e3K/200_s.gif","movie":"Bill and Ted's Excellent Adventure"},{"quote":"I, [% name %], better known as Blackbeard... was not ALL bad.","image":"http://vignette4.wikia.nocookie.net/disney/images/1/14/Blackbeard's-ghost-screenshot.jpg/revision/latest?cb=20130202201910","movie":"Blackbeard's Ghost"},{"quote":"In the end, Charlie Bucket won a chocolate factory. But [% name %] had something even better, a family. And one thing was absolutely certain - life had never been sweeter. ","image":"http://images4.fanpop.com/image/photos/22600000/Charlie-and-the-Chocolate-Factory-charlie-and-the-chocolate-factory-22689617-951-756.jpg","movie":"Charlie and the Chocolate Factory"},{"quote":"It's a trap. No, wait! [% name %] of the wolf-gods, don't go down there! Go back to the forest! Listen to me, please, don't throw your life away!","image":"http://vignette2.wikia.nocookie.net/p__/images/5/5f/Ashitaka-princess-monon…3062-853-480.jpg/revision/latest?cb=20130429203613&path-prefix=protagonist","movie":"Princess Mononoke"},{"quote":"I am more than man! More than life! I... am... [% name %]!!","image":"http://www.alienmarine2000.com/images/05_picture/originals/07_motu/21_skeletor_gold_gauntlets/02.jpg","movie":"Masters of the Universe"}]

}//end getMoreQuotes

//Function ready
//Called after the quote object is received. Gets rid of the loading image, adds a pick someone button to the page.
//no parameters
//no returns
function ready()
{

	console.log('Setting up the interface');
	
	updateLists();
	
	//set the onclick handler for the pick button
	pickerButton.click(pickSomeone);
	
	//set the onclick handler for the reset button
	resetButton.click(reset);

	//set the onlick handler for the pause button
	pauseResume.click(pauseToggle);

	//set the timer
	resetTimer();

	//Get rid of the default loading gif, replace it with text that says ready
	output('<p style="font-size: xx-large; text-align: center;">Ready To Go!</p>');

	console.log('Ready!');
	
}//end ready

//updateLists
//updates the active and removed lists
//no parameters
//returns html
function updateLists()
{

		updateActiveList();
		updateRemovedList();

}// end updateLists

//updateActiveList
//returns an html list of people in the queue array
//no parameters
//returns html
function updateActiveList()
{

	var html = '<h3 style="text-align:center">Active Queue:</h3><ul style="list-style-type: none; padding: 0;">';

	for(var i = 0; i < people.length; i++) 
	{
	
		html += '<li style="background-image: url(/' + people[i].picture + '); background-position: center; background-size: contain; background-repeat: no-repeat;" class="well" id="put-back-' + people[i].name.replace(" ","-") + '">' + people[i].name + ' <br /> Submissions: ' + people[i].submissions + '<button id="'+ people[i].name + 'button" onclick="removePerson('+ i +')" type="button">Remove</li>';
	
	}
	
	html += '</li></div>';
	
	activeDiv.html(html);

}//end updateActiveList

//updateRemovedList
//returns an html list of people removed from the queue
//no parameters
//returns html
function updateRemovedList()
{

	var html = '<h3 style="text-align:center">Removed:</h3><ul style="list-style-type: none; padding: 0;">';

	for(var i = 0; i < removedPeople.length; i++) 
	{
	
		html += '<li style="background-image: url(/' + removedPeople[i].picture + '); background-position: center; background-size: contain; background-repeat: no-repeat;" class="well" id="' + removedPeople[i].name.replace(" ","-") + '">' + removedPeople[i].name + ' <br /> Submissions: ' + removedPeople[i].submissions + '<button id="'+ removedPeople[i].name + 'button" onclick="addPerson('+ i +')" type="button">Put Back</li>';
	
	}
	
	html += '</li></div>';
	
	removedDiv.html(html);

}//end updateRemovedList

//pickSomeone
//Uses other functions to pick a person and output it the name to the innerHTML of the element calling it.
//no parameters
//no returns
function pickSomeone()
{

	console.log("Picking Someone")

	//Make sure their are still people in the array;
	if(people.length <= 0)
	{

		output('<p> Nobody is left, Add to the queue or reset.</p>');
		
		console.log("Nobody is left");

	}
	//there are still people so try to get a quote
	else
	{

		console.log("Selecting someone based on the random number");
	
		var random = randomNum();
		
		var name = people[random].name;

		removePerson(random);
	
		var phrase = phraseMaker(name, quotePicker())
	
		console.log('outputing phrase');

		output(phrase);

		resetTimer();

		timer();

	}

}//end pickSomeone

//phraseMaker
//Inserts the passed name into the quote, adds the source, and an image.
//Takes the name of the person as a string, and the quote object
//Returns the phrase.
function phraseMaker(person, quote)
{

	console.log("Building the phrase");
	
	var searchString = '[% name %]';

	//replace the names in the quote
	while(quote[0].quote.indexOf(searchString) != -1)
	{
		
		quote[0].quote = quote[0].quote.replace(searchString, '<strong>' + person + '</strong>');

	}

	//the phrase
	return '<blockquote style="font-size: xx-large">"' + quote[0].quote + '"<br /><br/><footer style="text-align: left;">-'+ quote[0].movie +'</footer></blockquote><img class="img-responsive center-block" src="'+ quote[0].image +'">';
	
}//end phraseMaker

//randomNum
//Generates a random number within the range of the people array.
//No Parameters
//Returns an integer number within the range of the people array.
function randomNum()
{

	console.log("Generating random number");
	return Math.floor(Math.random() * people.length);

}//end randomNum

//quotePicker
//Picks a random value from the quote object, removes that value from the object.
//no parameters
//Returns the chosen value from the array.
function quotePicker()
{

	console.log("Selecting a quote based on the random number");

	if(quoteObject.length <= 0)
	{

		getMoreQuotes();

	}

	return quoteObject.splice(randomNum(),1);

}//end quotePicker

//hideName
//hides the name of the person passed from the interface
//takes the name of the person as a parameter, this should match the id of the list item.
//no returns
function hideName(name)
{

	console.log('Hiding the name ' + name[0]);
	$('#'+ name[0].replace(" ","-")).fadeOut(1000);

}//end hideName

//showName
//hides the name of the person passed from the interface
//takes the name of the person as a parameter, this should match the id of the list item.
//no returns
function showName(name)
{

	console.log('Showing the name ' + name[0]);
	$('#'+ name[0].replace(" ","-")).fadeIn(1000);

}//end showName

//output
//outputs the passed html to the output div
//Takes an html string as a parameter
//no returns
function output(string)
{

	outputDiv.fadeOut(1000, function(){$(outputDiv).html(string); $(outputDiv).fadeIn(1000);});
	
}//end output

//removePerson
//Removes the person passed from the queue.
//takes the array index of the person to remove 
//no returns.
function removePerson(id)
{

	var name = people.splice(id,1)[0];
	
	console.log("removing " + name);
	
	removedPeople.push(name);

	updateLists();

}//end removePerson

//addPerson
//Removes the person passed from the queue.
//takes the array index of the person to remove 
//no returns.
function addPerson(id)
{

	var name = removedPeople.splice(id,1)[0];
	
	console.log("Adding " + name);
	
	people.push(name);

	updateLists();

}//addPerson

//resets the script, sets the people array back to default, loads a new quote object
//no parameters
//no returns
function reset()
{

	resetTimer();
	pauseResume.html('Pause Timer');
	isPaused = false;
	people = makePeopleArray();
	removedPeople = new Array();
	updateLists();
	output('<p style="font-size: xx-large">Ready to go <strong>AGAIN!</strong></p>');
	
}//end reset

//timer
//Starts a countdown
//no parameters
//no returns
function timer() 
{

	if(timeElapsed > 0)
	{


		if(timeElapsed < allotedTime / 3)
		{

			timerDiv.html('<p class="alert alert-danger" style="font-size: xx-large ;display: block; width: 20%; margin: .5em auto 0 auto;">'+ timeElapsed +'</p>');

		}
		else if (timeElapsed < allotedTime / 2)
		{

			timerDiv.html('<p class="alert alert-warning" style="font-size: xx-large; display: block; width: 20%; margin: .5em auto 0 auto;">'+ timeElapsed +'</p>');
		
		}
		else
		{

			timerDiv.html('<p class="alert alert-success" style="font-size: xx-large; display: block; width: 20%; margin: .5em auto 0 auto;">'+ timeElapsed +'</p>');

		}

		timeElapsed--;

		timeOutID = setTimeout(timer, 1000);

	}
	else
	{
	
		resetTimer()

		timerDiv.html('<p class="alert alert-danger" style="font-size: xx-large; display: block; width: 20%; margin: .5em auto 0 auto;">Time Exceeded</p>');

		fogHorn.play();

	}

}//end timer

//pauseToggle
//pauses or plays the timer, toggles the button text to pause or continue
//no parameters
//no returns
function pauseToggle()
{

	if(isPaused)
	{

		timeOutID = setTimeout(timer, 1000);
	
		pauseResume.html('Pause Timer');

		isPaused = false;

	}
	else
	{

		clearTimeout(timeOutID);

		pauseResume.html('Resume Timer');

		isPaused = true;
		
	}

}//end pauseToggle

//resetTimer
//stops the timer and resets elapsedTime
//no parameters
//no returns
function resetTimer()
{

	clearTimeout(timeOutID);

	timeElapsed = allotedTime;

	timerDiv.html('<p class="alert alert-success" style="font-size: xx-large; display: block; width: 20%; margin: .5em auto 0 auto;">'+ timeElapsed +'</p>');

}//end resetTimer

//Start the flow
$(document).ready(ready);