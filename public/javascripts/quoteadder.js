//----Settings----//

//set the main function
$(document).ready(main)

//the test name.
var name = 'Steve Mcqueen';

//the form
var form = $('#addQuoteForm')

//the quote input
var quoteIn = $('#quote');

var imgURLIn = $('#imgURL');

var sourceIn = $('#source');

//the froms submit button
var submitButton = $('#newQuoteSubmit');

//the output div used for the preview
var outputDiv = $('#output');

//----Functions----//

//main function
//Called when document is ready
//no parameters
//no returns
function main()
{

	//Turn the submit button into a preview button
	changeSubmitToPreview();

}//end main

//changeSubmitToPreview
//changes the submit button to a preview button
//no parameters
//no returns
function changeSubmitToPreview()
{

	submitButton.hide();

	var buttonHTML = '<button id="preview" class="btn" type="button">Preview</button><div id="output"></div>';

	$(buttonHTML).insertBefore(outputDiv);

	$('#preview').click(validate);

}//end changeSubmitToPreview

//validate
//validates the data in the form, if good it calls preview, if not it outputs errors.
//no parameters
//no returns
function validate(event)
{

	//stop the form submission
	event.preventDefault()

	//clear any old errors
	$('#quoteError').html('');
	$('#imgURLError').html('');
	$('#sourceError').html('');

	//setup the data to validate
	var quote = quoteIn.val();
	var source = sourceIn.val();
	var imgURL = imgURLIn.val();

	//this variable will be set to false if any of the checks fail 
	var dataPassed = true;
	
	//make sure input is not blank
	if(quote == "")
	{

		dataPassed = false;
		$('#quoteError').html('All fields are required, you left the quote field empty.</p>');

	}

	if(imgURL == "")
	{

		dataPassed = false;
		$('#imgURLError').html('All fields are required, you left the image URL field empty.');

	}

	if(source == "")
	{

		dataPassed = false;
		$('#sourceError').html('All fields are required, you left the source field empty.');

	}

	//Make sure their are no double quotations
	if(quote.indexOf('"') !== -1)
	{

		dataPassed = false;
		$('#quoteError').html('You have a double quotation symbol in your Quote field. This is not allowed.');
		
	}

	if(imgURL.indexOf('"') !== -1)
	{

		dataPassed = false;
		$('#imgURLError').html('You have a double quotation symbol in your Quote field. This is not allowed.');
		
	}

	if(source.indexOf('"') !== -1)
	{

		dataPassed = false;
		$('#sourceError').html('You have a double quotation symbol in your Quote field. This is not allowed.');
		
	}	

	//Make sure the quote contains at least one instance of [% name %]
	if(quote.indexOf('[% name %]') == -1)
	{

		dataPassed = false;
		$('#quoteError').html('You have not included a [% name %] tag in your quote. Please insert [% name %] anywhere the persons name should appear.');
	
	}

	if(dataPassed)
	{

		//make the preview
		preview(quote, imgURL, source);

	}

}//end validate

//preview
//Generates a Preview of the Quote and image
//takes quote, imgURL and source as parameters
//no returns
function preview(quote, imgURL, source)
{

	//setup the phrase
	var phrase = phraseMaker(quote,imgURL,source);

	//output the preview
	output(phrase);

	submitButton.show();
	$('#preview').html('Generate New Preview');

}//end preview

//phraseMaker
//Inserts the passed name into the quote, adds the source, and an image.
//Takes a quote, movie, and image as a parameter
//Returns the phrase.
function phraseMaker(quote, imgURL, source)
{
	
	var searchString = '[% name %]';

	//replace the names in the quote
	while(quote.indexOf(searchString) != -1)
	{
		
		quote = quote.replace(searchString, '<strong>' + name + '</strong>');

	}

	//the phrase
	return '<blockquote style="text-align: center; font-size: xx-large">"' + quote + '"<br/><br/><footer style="text-align: left;">-'+ source +'</footer><img style="margin: 0 auto 0 auto;" class="img-responsive" src="'+ imgURL +'">';
	
}//end phraseMaker

//output
//Takes the passed string and makes it the html of the outputdiv
//Takes an html string as a parameter
//no retuns
function output(thingToOutput)
{

	outputDiv.html(thingToOutput);

}//end output