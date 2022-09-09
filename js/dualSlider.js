const dualSlider = () => {
  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(
      fromSlider,
      toSlider,
      "var(--background-range)",
      "var(--input-range-track)",
      toSlider
    );
    if (from > to) {
      fromSlider.value = to;
      fromInput.textContent = to;
    } else {
      fromInput.textContent = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(
      fromSlider,
      toSlider,
      "var(--background-range)",
      "var(--input-range-track)",
      toSlider
    );
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.textContent = to;
    } else {
      toInput.textContent = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
          ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
          ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector("#toSlider");
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector("#fromSlider");
  const toSlider = document.querySelector("#toSlider");
  const fromInput = document.querySelector("#range-span1");
  const toInput = document.querySelector("#range-span2");

  fillSlider(
    fromSlider,
    toSlider,
    "var(--background-range)",
    "var(--input-range-track)",
    toSlider
  );
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
};

dualSlider();
