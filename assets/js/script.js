// Obtendo os elementos
const form = document.querySelector("form");
const task = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btnBin = document.getElementsByClassName("btn-bin");
const alertBox = document.getElementById("alert-container");
const alertCancel = document.getElementById("cancel-btn");

function showAlert() {
  const alertBox = document.getElementById("alert-container");

  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 5000);
}

alertCancel.addEventListener("click", () => {
  alertBox.classList.remove("show");
});

taskList.addEventListener("click", (event) => {
  if (event.target.closest(".btn-bin")) {
    const btn = event.target.closest(".btn-bin");
    btn.parentElement.remove();
    console.log("Item removido!");
    showAlert();
  }
});

form.onsubmit = (event) => {
  event.preventDefault();

  const newTask = document.createElement("li");

  newTask.innerHTML = `
        <label class="checkbox-wrapper">
            <input type="checkbox" name="" id="">
            <span class="custom-checkbox"></span>
            ${task.value}
        </label>
        <button class="btn-bin">
            <img src="assets/images/bin.svg" alt="Ícone de Lixeira">
        </button>
    `;

  taskList.prepend(newTask);
  task.value = "";
};
