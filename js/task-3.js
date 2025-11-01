const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const heading = output.closest("h1");

const wrapper = document.createElement("div");

wrapper.appendChild(input);
wrapper.appendChild(heading);

const reference = document.querySelector("p");
reference.insertAdjacentElement("afterend", wrapper);

input.addEventListener("input", () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});