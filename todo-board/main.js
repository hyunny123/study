let button = document.getElementById("add-button");
let input = document.getElementById("list-input");
let todoContainer = document.getElementById("todoListContainer");

let prevTodoList = JSON.parse(localStorage.getItem("list"));

let allTodoList = [];

if (prevTodoList == null) {
  allTodoList = [];
} else {
  allTodoList = prevTodoList;
  renderList(allTodoList);
}

let list = {
  text: "",
};

button.addEventListener("click", addList);

//생성
function addList() {
  let listValue = { text: input.value };
  allTodoList.push(listValue);
  listData();
  renderList(allTodoList);
  input.value = "";
}
//삭제
function deleteList(index) {
  allTodoList.splice(index, 1);
  let html = "";
  listData();
  renderList(allTodoList);
}

function renderList(lists) {
  let html = "";

  html = lists.reduce((list, item, i) => {
    let textValue = "";
    textValue = `<li>${item.text} <button class="todo-delete-btn" onclick='deleteList(${i})'>삭제</button></li>\n`;
    return list + textValue;
  }, "");
  todoContainer.innerHTML = html;
}

function listData() {
  console.log("here");
  localStorage.setItem("data", JSON.stringify(allTodoList));
}
