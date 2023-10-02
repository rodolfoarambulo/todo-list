const Project = (name) => {
  let _todoList = new Array();

  const getName = () => name;
  const getTodo = (index) => _todoList[index];
  const getLength = () => _todoList.length;

  const setName = (newName) => name = newName;

  const addTodo = (todo) => _todoList.push(todo);
  const removeTodo = (index) => _todoList.splice(index, 1);

  return { getName, getTodo, getLength, setName, addTodo, removeTodo }
}

export default Project;