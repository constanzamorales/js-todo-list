const todoList = [];

while (true) {
  let command = prompt("What would you like to do?");
  command = command.toLowerCase();
  if (command === "new") {
    let task = prompt("Enter new to-do");
    todoList.push(task);
    console.log(`${task} was added to your list.`);
  } else
  if (command === "list") {
    console.log("**********");
    for (let tasks of todoList) {
      console.log(`${tasks.indexOf(tasks)} ${tasks}`);
    }
    console.log("**********");
  } else
  if (command === "delete") {
    let todoIndex = prompt("What's the index of the to-do you want to delete?")
    todoList.splice(todoIndex, 1);
    console.log("To-do has been removed.");
  } else
  if (command = "quit") {
    console.log("You quit the app.");
    break;
  }
}