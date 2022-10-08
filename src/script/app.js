"use strict";

import "../styles/main.scss";

import Task from "./tasks/tasks";
import tasksRender, { tasksContainer } from "./tasks/tasksRender";
import {
  renderTaskAddContainer,
  completedTasksCountRender,
  addTaskBtn,
  addTaskInput,
  tasksProjectDelete,
  tasksProjectChangeName,
} from "./tasks/tasksRender";

import Project from "./projects/projects";
// import addProjectRender from "./projects/projectsRender";
import { projects } from "./projects/projects";
import {
  projectsRender,
  inputProject,
  addProjectBtn,
} from "./projects/projectsRender";

// main container selection
const mainDOM = document.querySelector(".main__container");

let currProject;
// Create project
addProjectBtn.addEventListener("click", () => {
  // const projectRender = addProjectRender(newProject.id);
  // projectRender.addEventListener("click", (e) => {
  // if (projectRender.id === newProject.id) {
  // newProject.renderTasks()
  // }
  // });
  if (inputProject.value.length > 2) {
    const newProject = new Project(inputProject.value);
    inputProject.value = "";
  } else alert("You need to add a minimum of 3 characters");

  projectsRender();
});

const proj1 = new Project("Workout");
proj1.addTask("Run 2km");
currProject = proj1;

// Render tasks when user clicks project btn
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects__button")) {
    renderTaskAddContainer();
    const domProjectId = e.target.id;
    projects.forEach((project) => {
      if (project.id === domProjectId) {
        currProject = project;
        completedTasksCountRender(currProject);
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
      completedTasksCountRender(currProject);
      taskLi.remove();
    }
  }
});

// delete task
document.addEventListener("click", (e) => {
  if (e.target.textContent === "D") {
    currProject.deleteTask(e.target.parentElement.id);
    e.target.parentElement.remove();
    tasksRender(currProject);
  }
});

// delete project
tasksProjectDelete.addEventListener("click", (e) => {
  // add default project in case is the last project you delete
  if (projects.length === 1) {
    const newProject = new Project("Start Project");
  }

  currProject.delete();
  currProject = projects[0];

  tasksRender(currProject);
  projectsRender();
});

// change project name
tasksProjectChangeName.addEventListener("click", (e) => {
  const newName = prompt("Change the name to:");

  if (newName.length > 2) {
    currProject.changeName(newName);
  } else alert("Name must contain minimum of 3 characters");

  tasksRender(currProject);
  projectsRender();
});

completedTasksCountRender(proj1);
projectsRender();
tasksRender(proj1);
renderTaskAddContainer();
