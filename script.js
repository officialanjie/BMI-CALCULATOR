var button = document.querySelector(".btn")
button.addEventListener("click", () => {
    var firstname = document.querySelector(".firstname")
    var lastname = document.querySelector(".lastname")
    var mass = document.querySelector(".mass")
    var height = document.querySelector(".height")
    var result = document.querySelector(".result")
    var bmi = mass.value/(height.value*height.value)
    bmi = bmi.toFixed(2)
   // result.innerHTML = bmi

   if(firstname.value == "" || lastname.value == "" || mass.value == "" || height.value == "" ){
    result.innerHTML = "Please fill up all fields completely"
   } else {
    result.innerHTML = "Your BMI value is " + bmi + "kg/m<sup>2</sup>"
    firstname.value = ""
    lastname.value = ""
    mass.value = ""
    height.value = " "
   }

} )