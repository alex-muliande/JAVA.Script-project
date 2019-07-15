function day(cc, yy, mm, dd) {
  var cc = document.forms[form1][century]
  var yy = document.forms[form1][year]
  var mm = document.forms[form1][month]
  var dd = document.forms[form1][day]

  return (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
}
  
function sub() {
  var gender = document.form("your gender");
  var result = day(cc, yy, mm, dd);
  alert(result);


  var males = ["Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (gender == "male" && result == 0) {
    alert(males[0]);
  }
<<<<<<< HEAD
  var cc = document.forms[form1][century]
  var yy = document.forms[form1][month]
  var mm = document.forms[form1][year]
  var dd = document.forms[form1][day]
  var gender= document.write("your gender")
  var result=day(cc,yy,mm,dd).toFixed();
  var males=["Kwasi","kwadwo","Kwaben a","Kwaku","Yaw", "Kofi", "Kwame"];
  var females=["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];
  if (gender=="male" && result== 0){
  alert(males[0]);
=======
  else if (gender == "male" && result == 1) {
    alert(males[1]);
>>>>>>> gh-pages
  }
  else if (gender == "male" && result == 2) {
    alert(males[2]);
  }
  else if (gender == "male" && result == 3) {
    alert(males[3]);
  }
  else if (gender == "male" && result == 4) {
    alert(males[4]);
  }
  else if (gender == "male" && result == 5) {
    alert(males[5]);
  }
  else if (gender == "male" && result == 6) {
    alert(males[6]);
  }
  else if (gender == "female" && result == 0) {
    alert(females[0]);
  }
  else if (gender == "female" && result == 1) {
    alert(females[1]);
  }
  else if (gender == "female" && result == 2) {
    alert(females[2]);
  }
  else if (gender == "female" && result == 3) {
    alert(females[3]);
  }
  else if (gender == "female" && result == 4) {
    alert(females[4]);
  }
  else if (gender == "female" && result == 5) {
    alert(females[5]);
  }
  else if (gender == "female" && result == 6) {
    alert(females[6]);
  }
  else {
    alert("null");
  }
}