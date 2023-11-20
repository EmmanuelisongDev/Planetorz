const space = {
  mercury: {
    gravity: 0.38,
    image: "./images/mercury.png",
  },
  venus: {
    gravity: 0.91,
    image: "./images/venus.png",
  },
  earth: {
    gravity: 1.0,
    image: "./images/earth.png",
  },
  mars: {
    gravity: 0.38,
    image: "./images/mars.png",
  },
  jupiter: {
    gravity: 2.34,
    image: "./images/jupiter.png",
  },
  saturn: {
    gravity: 0.93,
    image: "./images/saturn.png",
  },
  uranus: {
    gravity: 0.92,
    image: "./images/uranus.png",
  },
  neptune: {
    gravity: 1.12,
    image: "./images/neptune.png",
  },
};

const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const paragraph = document.querySelector(".Nothing");

const weightCal = () => {
  let weight = Math.floor(input.value * space[select.value].gravity);
  return weight;
};

const UI = () => {
  container.innerHTML = `
    <div class="planets">
        <img src=${space[select.value].image} alt=${select.value}>
    </div>
    <div class="calculate">
        <p>The weight of the object on <span>${select.value}</span></p>
        <p class="num">${weightCal()}N</p>
    </div> `;

  input.value = "";
  select.value = "";
};

button.addEventListener("click", () => {
  if (input.value === "" && select.value === "" && container) {
    paragraph.innerText = "Please Enter Input ";
  } else {
    UI();
  }
});
