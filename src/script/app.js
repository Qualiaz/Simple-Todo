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

let currProject;
// Create project
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
proj1.addTask("asd");
const proj2 = new Project("workout2");
const proj3 = new Project("workout3");

// Render tasks when user clicks project btn
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects__button")) {
    renderTaskAddContainer();
    const domProjectId = e.target.id;
    projects.forEach((project) => {
      if (project.id === domProjectId) {
        currProject = project;
        tasksRender(currProject);
      }
    });
  }
});

// add task to project
addTaskBtn.addEventListener("click", (e) => {
  currProject.addTask(addTaskInput.value);
  tasksRender(currProject);
  addTaskInput.value = "";
});

// complete task
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("type") === "checkbox") {
    const checkboxTask = e.target;
    const taskLi = checkboxTask.parentElement;
    if (checkboxTask.checked) {
      currProject.completeTask(taskLi.id);
      taskLi.remove();
    }
  }
});

// TODO
// delete task btn
// change task name

// delete project btn
// change project name

projectsRender();
tasksRender(proj1);
renderTaskAddContainer();
