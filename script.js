let number = document.getElementById("nombre");
let mult = document.getElementById("multiplier");
let result = document.getElementById("result");
//gerer la logique
mult.addEventListener("click", function () {
  let NumberValue = parseFloat(number.value);
  result.innerHTML = "";

  for (let i = 0; i <= 10; i++) {
    result.innerHTML += `${NumberValue} ✖️ ${i} = ${NumberValue * i} <br>`;
  }
  number.value = "";
});
