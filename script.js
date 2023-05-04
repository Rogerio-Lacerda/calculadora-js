function calculadora() {
  const _keys = document.querySelectorAll(".teclas");
  const result = document.querySelector(".resultado");

  const setValues = (event) => {
    const valuesKeys = event.target.dataset.teclas;
    if (
      valuesKeys !== "C" &&
      valuesKeys !== "limpar" &&
      valuesKeys !== "igual"
    ) {
      result.innerHTML += valuesKeys;
    }
    _keys.forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
  };

  const resetValues = (event) => {
    const valuesKeys = event.target.dataset.teclas;
    if (valuesKeys === "C") {
      result.innerHTML = "";
    } else if (valuesKeys === "limpar") {
      result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
    }
  };

  const setResult = (event) => {
    const valuesKeys = event.target.dataset.teclas;
    const resultValues = result.innerText;
    resultValues.split("''").join("");
    if (valuesKeys === "igual" && result.innerHTML !== "") {
      result.innerHTML = eval(resultValues);
    }
  };

  const styleKeys = (event) => {
    setTimeout(() => {
      event.target.classList.remove("active");
    }, 100);
  };

  _keys.forEach((item) => item.addEventListener("click", setValues));
  _keys.forEach((item) => item.addEventListener("click", resetValues));
  _keys.forEach((item) => item.addEventListener("click", setResult));
  _keys.forEach((item) => item.addEventListener("mouseup", styleKeys));
}
calculadora();
