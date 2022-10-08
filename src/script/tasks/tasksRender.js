"use strict";

export const tasksContainer = document.querySelector(".tasks__container");

// tasks counter
const tasksCompletedCounter = document.createElement("p");
tasksCompletedCounter.textContent = "Completed tasks: ";
tasksCompletedCounter.setAttribute("class", "tasks__completed-count");
tasksContainer.appendChild(tasksCompletedCounter);

//Project Name
const tasksContainerProjectName = document.createElement("div");
//prettier-ignore
tasksContainerProjectName.setAttribute("class","tasks__container__project");
tasksContainer.appendChild(tasksContainerProjectName);
const tasksProjectName = document.createElement("h2");

// project options div
const tasksProjectOptions = document.createElement("div");
tasksProjectOptions.setAttribute("id", "tasksProjectOptions");
tasksProjectOptions.setAttribute("class", "tasks__container__project-options");

// project delete btn
export const tasksProjectDelete = document.createElement("button");
tasksProjectDelete.setAttribute("id", "deleteProjectBtn");
tasksProjectDelete.setAttribute("class", "tasks__project--delete");
tasksProjectDelete.textContent = "Delete";

// project change name btn
export const tasksProjectChangeName = document.createElement("button");
tasksProjectChangeName.textContent = "Change name";
tasksProjectChangeName.setAttribute("id", "changeProjectName");
tasksProjectChangeName.setAttribute("class", "tasks__project--name");

tasksProjectOptions.appendChild(tasksProjectChangeName);
tasksProjectOptions.appendChild(tasksProjectDelete);

tasksContainerProjectName.appendChild(tasksProjectName);
tasksContainerProjectName.appendChild(tasksProjectOptions);

// ADD CONTAINER
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

//Completed Tasks
export function completedTasksCountRender(project) {
  const count = project.completedTasks.length;
  tasksCompletedCounter.textContent = `Completed tasks: ${count}`;
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
    btnDeleteTask.setAttribute("class", `${task.id}-delete`);
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
