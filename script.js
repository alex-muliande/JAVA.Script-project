var century, year, month, dayOfMonth, dayOfWeek, dayNum;

let input = function () {
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("months").value);
  dayOfMonth = parseInt(document.getElementById("day").value);
}
function calculate() {
  input();

  dayOfWeek = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7;
  return (Math.round(dayOfWeek));
}
function checkDayOfWeek() {
  dayNum = calculate();
  checkGender();
}



function checkGender() {
  var gender = document.getElementsByName("gender");
  if (gender[0].checked == true) {
    gender = "male";
  } else if (gender[1].checked == true) {
    gender == "female";
  } else {
    console.log("Failed")
  }
  switch (gender) {
    case "male":
      if (dayNum == 1) {
        //document.getElementById("name").innerHTML = The day is on a sunday." + "  " + "Your akan name is  kwasi";
        document.write("The day is on a sunday." + "  " + "Your akan name is  kwasi");
      } else if (dayNum == 2) {
        document.write("The day is on a monday." + " " + "Your akan name is kwadwo ");
      } else if (dayNum == 3) {
        // document.write("The day is on a tuesday." + " " + "Your akan name is kwabena");
        document.getElementById("name").innerHTML = "The day is on a tuesday. and Your akan name is kwabena";
      } else if (dayNum == 4) {
        document.write("The day is on a wednesday." + " " + "Your akan name is kwaku");
      } else if (dayNum == 5) {
        document.write("The day is on a thursday." + " " + "Your akan name is yaw");
      } else if (dayNum == 6) {
        document.write("The day is on a friday." + " " + "Your akan name is kofi");
      } else if (dayNum == 7) {
        document.write("The day is on a saturday." + " " + "Your akan name is kwame");
      }else{
        console.log("passed male check");
      }
      break