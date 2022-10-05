"use strict";

export const tasksContainer = document.querySelector(".tasks__container");

//Project Name
const tasksContainerProjectName = document.createElement("div");
//prettier-ignore
tasksContainerProjectName.setAttribute("class","tasks__container--project-name");
tasksContainer.appendChild(tasksContainerProjectName);
const tasksProjectName = document.createElement("h2");
tasksContainerProjectName.appendChild(tasksProjectName);

const tasksAddContainer = document.createElement("div");
tasksAddContainer.setAttribute("class", "tasks__container--add");
tasksContainer.appendChild(tasksAddContainer);

export const addTaskInput = document.createElement("input");
export const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add task";

const tasksContainerList = document.createElement("ul");
tasksContainerList.setAttribute("class", "tasks__container--list");
tasksContainer.appendChild(tasksContainerList);

// Task Add Container
let taskAddContainerDisplay = false;
export function renderTaskAddContainer() {
  if (!taskAddContainerDisplay) {
    tasksAddContainer.appendChild(addTaskInput);
    tasksAddContainer.appendChild(addTaskBtn);

    taskAddContainerDisplay = true;
  }
}

//Tasks
export default function tasksRender(project) {
  tasksProjectName.textContent = project.name;
  tasksContainerList.textContent = "";

  project.tasks.forEach((task) => {
    const taskLi = document.createElement("li");
    taskLi.setAttribute("id", task.id);
    tasksContainerList.appendChild(taskLi);

    const checkBoxTask = document.createElement("input");
    const labelTask = document.createElement("label");
    const btnDeleteTask = document.createElement("button");
    checkBoxTask.setAttribute("type", "checkbox");
    checkBoxTask.setAttribute("id", `${task.id}-cp`);
    checkBoxTask.setAttribute("value", task.name);
    checkBoxTask.setAttribute("name", task.name);
    labelTask.setAttribute("for", task.name);
    labelTask.textContent = task.name;
    btnDeleteTask.textContent = "D";
    taskLi.appendChild(checkBoxTask);
    taskLi.appendChild(labelTask);
    taskLi.appendChild(btnDeleteTask);
  });
}
