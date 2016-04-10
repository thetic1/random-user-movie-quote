//Assign Validate to the onSubmit event of the form
$(document).ready(function() {

	$('#save').submit(processForm);

});

//ProcessForm
//gets the form data, makes sure its valid and requests the data be saved
//no parameters
//Returns false
function processForm()
{

	if(validate())
	{

		output('<img src="loading.gif" alt="loading">');

		$.post('/profile', $( "#save" ).serialize(), function(data){

			var response = JSON.parse(data);

			if(response.saved)
			{

				output('<p class=".bg-success">Saved Changes!</p>');
				
				$('#picture').src('data.picture');

				$('#id').val('data.name');

			}
			else
			{

				output('<p class="alert alert-danger">Could not save changes!</p>');

			}


		});

	}

	return false;

}//end processForm


//validate
//validates the data in the sign up form, if good it allows submission of the form. If not it outputs errors
//no parameters
//Returns true if the data passes validation, false otherwise.
function validate()
{

	//setup the data to validate
	var nameInput = $('#name');
	var pictureInput = $('#picture');

	//error Fields
	var nameError = $('#nameError');


	var pictureError = $('#pictureError');

	//clear any previous errors
	nameError.html('');
	pictureError.html('');

	//this variable will be set to false if any of the checks fail 
	var dataPassed = true;
	
	//-----NAME CHECKS-----//

	//make name is not blank
	if(nameInput.val() == "")
	{

		dataPassed = false;
		nameError.html('<p class="alert alert-danger">You left the name field empty.</p>');

	}

	//-----Picture Checks-----//
	if(pictureInput[0].files.length > 1)
	{

		dataPassed = false;
		pictureError.html('<p class="alert alert-danger">Please choose only one image.</p>');

	}

	if(pictureInput[0].files.length == 1 && !(pictureInput[0].files[0].type == "image/jpeg" || pictureInput[0].files[0].type == "image/gif" || pictureInput[0].files[0].type == "image/png") )
	{

		dataPassed = false;
		pictureError.html('<p class="alert alert-danger">Please select a jpeg, jpg, gif or png image.</p>');

	}

	if(dataPassed)
	{

		//allow submission
		return true;

	}
	else
	{

		return false;

	}

}//end validate

function output(stuffToOutput)
{

	$('#output').html(stuffToOutput);

}