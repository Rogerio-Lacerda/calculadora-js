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

  _keys.forEach((item) => item.addEventListener("click", setValues));
  _keys.forEach((item) => item.addEventListener("click", resetValues));
}
calculadora();
