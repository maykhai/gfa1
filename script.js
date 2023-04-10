var nickname = ("Khai");
var height = parseInt("61.2");  /*height in inches*/
var weight = parseInt("46");  /*weight in kg*/

var height_ft = parseInt(height) / 12;
var weight_lbs = parseInt(weight) * 2.20462;


alert("Name: " + nickname);
alert("Height: " + height_ft + "ft");
alert("Weight: " + weight_lbs + "kg");

var fname = prompt("Enter first name:");
var lname = prompt("Enter last name:");
var byear = prompt("Enter birthyear:");

var age = 2023 - parseInt(byear);


if(confirm("Do you agree to share your information with our site?")){
    var response = ("Hello "+fname+" "+lname+"!"+" How does it feel to be "+age+" years old?");
}else{
	response = "";
    console.log("The user does not wish to share his/her information");

}