//Assign Validate to the onSubmit event of the form
$(document).ready(function() {

	$('#signup').submit(validate);

});

//validate
//validates the data in the sign up form, if good it allows submission of the form. If not it outputs errors
//no parameters
//Returns true if the data passes validation, false otherwise.
function validate()
{

	//setup the data to validate
	var nameInput = $('#name');
	var emailInput = $('#email');
	var passwordInput = $('#password');
	var passwordAgainInput = $('#passwordAgain');
	var pictureInput = $('#picture');

	//error Fields
	var nameError = $('#nameError');
	var emailError = $('#emailError');
	var passwordError = $('#passwordError');
	var pictureError = $('#pictureError');

	//clear any previous errors
	nameError.html('');
	emailError.html('');
	passwordError.html('');
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

	//-----Email Checks-----//

	if(emailInput.val() == "")
	{

		dataPassed = false;
		emailError.html('<p class="alert alert-danger">You left the email field empty.</p>');

	}

	//-----Password Checks-----//

	if(passwordInput.val() == "")
	{

		dataPassed = false;
		passwordError.html('<p class="alert alert-danger">You left the password field empty.</p>');

	}

	if(passwordAgainInput.val() == "")
	{

		dataPassed = false;
		passwordError.html('<p class="alert alert-danger">You left the confirm password field empty.</p>');

	}

	if(passwordInput.val() !== passwordAgainInput.val())
	{
		
		dataPassed = false;
		passwordError.html('<p class="alert alert-danger">Your Passwords do not match.</p>');

	}

	//-----Picture Checks-----//
	/*if(pictureInput[0].files.length > 1)
	{

		dataPassed = false;
		pictureError.html('<p class="alert alert-danger">Please choose only one image.</p>');

	}

	if(pictureInput[0].files.length == 1 && !(pictureInput[0].files[0].type == "image/jpeg" || pictureInput[0].files[0].type == "image/gif" || pictureInput[0].files[0].type == "image/png") )
	{

		dataPassed = false;
		pictureError.html('<p class="alert alert-danger">Please select a jpeg, jpg, gif or png image.</p>');

	}*/

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