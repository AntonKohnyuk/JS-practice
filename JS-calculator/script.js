const calculator = document.querySelector(".calculator");
const result = document.querySelector("#result");

calculator.addEventListener("click", function (event) {
  if (!event.target.classList.contains("calc_btn")) return;

  let valueOfBtn = event.target.innerText;

  switch (valueOfBtn) {
    case "Del":
      result.innerText = "";
      break;
    case "C":
      result.innerText = result.innerText.slice(0, -1);
      break;
    case "=":
      if (result.innerText.search(/[^0-9*/+-]%/im) != -1) return;
      result.innerText = eval(result.innerText).toFixed(3);
      break;
    default:
      result.innerText += valueOfBtn;
      break;
  }
});
