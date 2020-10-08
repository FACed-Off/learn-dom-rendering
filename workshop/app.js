import dogs from "./dogs.js";

const dogElements = dogs
  .map(
    (dog) => `
    <li class="card">
      <h2>${dog.name}</h2>
      <img src="${dog.image}" alt="" />
    </li>
  `
  )
  .join("\n");

document.querySelector("#app").innerHTML = `
  <h1>All the dogs</h1>
  <ul>
    ${dogElements}
  </ul>
`;
