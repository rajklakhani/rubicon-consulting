document.getElementById("menu-icon").addEventListener("click", function () {
  let navigation = document.getElementsByClassName("navigation-list")[0];
  navigation.classList.toggle("active");
});

function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let result = num1 + num2;

  // Display the result
  document.getElementById("display").innerHTML = result;
}
