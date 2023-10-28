function onSubmit()
{
    if (document.getElementById("surveyForm").checkValidity()) {
        // If the form is valid, gather the input values
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var dob = document.getElementById("dob").value;
        var country = document.getElementById("country").value;
        var gender = document.querySelectorAll('input[name="gender"]:checked').length > 0
            ? document.querySelectorAll('input[name="gender"]:checked')[0].value
            : "Not specified";
        var profession = document.getElementById("profession").value;
        var email = document.getElementById("email").value;
        var mobile = document.getElementById("mobile").value;

        // Display the values in a popup
        var message = "First Name: " + firstName + "\n" +
            "Last Name: " + lastName + "\n" +
            "Date of Birth: " + dob + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n" +
            "Profession: " + profession + "\n" +
            "Email: " + email + "\n" +
            "Mobile Number: " + mobile;

        alert(message);

        // Reset the form
        document.getElementById("surveyForm").reset();
    }
}
function onReset()
{
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("country").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(function (checkbox) {
        checkbox.checked = false;
    });
    document.getElementById("profession").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
}