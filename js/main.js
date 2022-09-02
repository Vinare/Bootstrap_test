const rangeRunners = () => {
  const runner = document.getElementById("customRange1");
  const runner2 = document.getElementById("customRange2");
  const blockLeft = document.getElementById("range-span1");
  const blockRight = document.getElementById("range-span2");

  runner.addEventListener("input", (e) => {
    blockLeft.textContent = e.target.value;

    if (runner.value == +runner2.value && runner.value <= 99) {
      runner2.value = +runner2.value + 1;
      blockRight.textContent = runner2.value;
    } else if (e.target.value == 100) {
      runner.value = 99;
      blockLeft.textContent = runner.value;
    }
  });

  runner2.addEventListener("input", (e) => {
    blockRight.textContent = e.target.value;

    if (runner2.value == +runner.value && runner2.value >= 1) {
      runner.value = +runner2.value - 1;
      blockLeft.textContent = runner.value;
    } else if (e.target.value == 0) {
      runner2.value = 1;
      blockRight.textContent = runner2.value;
    }
  });
};

rangeRunners();
