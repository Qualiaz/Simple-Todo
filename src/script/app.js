"use strict";

import "../styles/main.scss";

import Task from "./tasks/tasks";
import tasksRender from "./tasks/tasksRender";
import {
  renderTaskAddContainer,
  addTaskBtn,
  addTaskInput,
} from "./tasks/tasksRender";

import Project from "./projects/projects";
// import addProjectRender from "./projects/projectsRender";
import { projects } from "./projects/projects";
import {
  projectsRender,
  inputProject,
  addProjectBtn,
} from "./projects/projectsRender";

// Create project and render to projects container
addProjectBtn.addEventListener("click", () => {
  const newProject = new Project(inputProject.value);
  // const projectRender = addProjectRender(newProject.id);
  // projectRender.addEventListener("click", (e) => {
  // if (projectRender.id === newProject.id) {
  // newProject.renderTasks()
  // }
  // });
  projectsRender();
});

const proj1 = new Project("workout");
const proj2 = new Project("Ahaha");

const run = proj1.addTask("run");
const eat = proj2.addTask("eat");

// Render tasks when user clicks project btn
let currProject;
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects__button")) {
    renderTaskAddContainer();
    const domProjectId = e.target.id;
    projects.forEach((project) => {
      if (project.id === domProjectId) {
        currProject = project;
        tasksRender(project);
      }
    });
  }
});

// add task to project
addTaskBtn.addEventListener("click", (e) => {
  // take the current project
  // addTaskInput.value
  currProject.addTask(addTaskInput.value);
  tasksRender(currProject);
  addTaskInput.value = "";
});

projectsRender();
