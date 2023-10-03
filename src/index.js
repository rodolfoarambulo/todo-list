import Todo from "./todo"
import { Project, ProjectList } from "./project";
import './style.css'

const sidebar = document.querySelector('#sidebar-content');
const project = Project('Default');


// *********** TEST TO DELETE LATER ***************
// project.addTodo(Todo('Eat', 'Best activity', '09-29-23', 'p1'));
// ProjectList.addProject(project);
// console.log(ProjectList.getProject(0).getName());
// ProjectList.removeProject(0);
// console.log(ProjectList.getProject(0));


// const project = Project('Today');
// console.log(project.getName());

// for (let i = 0; i < 3; i++) {
//   project.addTodo(Todo('Eat', 'Best activity', '09-29-23', i));
// }

// for (let i = 0; i < project.getLength(); i++) {
//   console.log(project.getTodo(i).read());
// }

// project.removeTodo(0);

// for (let i = 0; i < project.getLength(); i++) {
//   console.log(project.getTodo(i).read());
// }

