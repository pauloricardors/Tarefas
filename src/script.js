document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask() {
  let input = document.getElementById("task").value;
  let ul = document.querySelector("ul");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (input === "") {
    Toastify({
      text: 'Digite uma tarefa',
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: '#006EB2',
      },
    }).showToast();;

  } else {
    let li = document.createElement("li");
    li.innerHTML =
      input + `<i onclick="deletarTask(this)" class="fa-solid fa-trash"></i>`;
    ul.appendChild(li);

    tasks.push(input);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  document.getElementById("task").value = "";
}

function deletarTask(li) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let taskText = li.parentElement.textContent.trim();

  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  li.parentElement.remove();
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let ul = document.querySelector("ul");

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML =
      task + `<i onclick="deletarTask(this)" class="fa-solid fa-trash"></i>`;
    ul.appendChild(li);
  });
}
