const storageSave = function(totalTodoItems) {

    localStorage.setItem("todoItems", JSON.stringify(totalTodoItems));
}
export default storageSave