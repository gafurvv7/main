const sentButton = document.querySelector(".btn1");
const inputField = document.querySelector(".input-wrapper input");
const todoBody = document.querySelector(".todo-body");

sentButton.addEventListener("click", () => {
  const inputValue = inputField.value;

  if (inputValue === "") return;

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  todoItem.innerHTML = `
    <div class="item">
      <input type="checkbox" class="checkbox" />
      <p class="text">${inputValue}</p>
    </div>

    <div class="item">
      <img src="./edit.svg" alt="" />
      <button class='delete' />Delete</button>
    </div>
    `;

  todoBody.appendChild(todoItem);

  inputField.value = "";

  // ochrish tugmasini qoshish:

  const trash = todoItem.querySelector(".delete");

  trash.addEventListener("click", () => {
    todoItem.remove();
  });

  // checkbox bosilganda chiziq tortish:
  const checkbox = todoItem.querySelector(".checkbox");
  const text = todoItem.querySelector(".text");

  checkbox.addEventListener("change", () => {
    console.log(checkbox.checked);

    if (checkbox.checked) {
      text.classList.add("chiziq");
    } else {
      text.classList.remove("chiziq");
    }
  });
});
