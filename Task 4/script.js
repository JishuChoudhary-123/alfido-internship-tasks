function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const ul = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    ul.removeChild(li);
  };

  li.appendChild(deleteBtn);
  ul.appendChild(li);
  input.value = "";
}
