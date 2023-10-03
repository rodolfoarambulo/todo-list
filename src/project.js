const ProjectList = (() => {
  let _projectList = new Array();

  const getProject = (index) => _projectList[index];

  const addProject = (project) => _projectList.push(project);
  const removeProject = (index) => _projectList.splice(index, 1);

  return { getProject, addProject, removeProject };
})();

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

export { Project, ProjectList };