import h from "./create-element.js";
import dogs from "./dogs.js";

const dogElements = dogs.map((dog) => {
  const h2 = h("h2", {}, dog.name);
  const img = h("img", { src: dog.image, alt: "", width: 500, height: 300 });
  return h("li", { className: "card" }, h2, img);
});

const title = h("h1", {}, "All the dogs");
const list = h("ul", {}, ...dogElements);

document.querySelector("#app").append(title, list);
