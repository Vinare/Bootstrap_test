const rangeRunners = () => {
  // const runner = document.getElementById("customRange1");
  // const runner2 = document.getElementById("customRange2");
  // const blockLeft = document.getElementById("range-span1");
  // const blockRight = document.getElementById("range-span2");
  // runner.addEventListener("input", (e) => {
  //   if (+runner.value >= +runner2.value && +runner.value <= 99) {
  //     runner2.value = +runner.value + 1;
  //   } else if (+runner.value === 100) {
  //     runner.value = 99
  //     runner2.value = 100;
  //   }
  //   blockLeft.textContent = runner.value;
  //   blockRight.textContent = runner2.value;
  // });
  // runner2.addEventListener("input", (e) => {
  //   if (+runner2.value <= +runner.value && runner2.value >= 1) {
  //     runner.value = +runner2.value - 1;
  //   } else if (e.target.value == 0) {
  //     runner2.value = 1;
  //     runner.value = 0;
  //   }
  //   blockLeft.textContent = runner.value;
  //   blockRight.textContent = runner2.value;
  // });
};

rangeRunners();

const btnActive = () => {
  const btnGroup = document.querySelector(".btn-group");
  const btns = btnGroup.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btns.forEach((button) => button.classList.remove("btn-active"));

      e.target.classList.toggle("btn-active");
    });
  });
};

btnActive();
