import "../styles/main.scss";

import Task from "./tasks/tasks";
import tasksRender from "./tasks/tasksRender";

import Project from "./projects/projects";
import { projects } from "./projects/projects";

import projectsRender from "./projects/projectsRender";

import {
  inputProject,
  addProjectBtn,
  projectsContainerList,
} from "./projects/projectsRender";

// Create project and render to projects container
addProjectBtn.addEventListener("click", () => {
  const newProject = new Project(inputProject.value);
  const projectRender = projectsRender(newProject.id);
  projectRender.addEventListener("click", (e) => {
    if (projectRender.id === newProject.id) {
      // newProject.renderTasks()
    }
  });
});

document.addEventListener("click", (e) => {
  console.log(e.target);
});

// console.log(projects);

const proj1 = new Project("workout");
const proj2 = new Project("Ahaha");
const run = proj1.addTask("run");

proj2.delete();
console.log(projects);
