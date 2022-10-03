"use strict";

const tasksContainer = document.querySelector(".tasks__container");

//Project Name
const tasksContainerProjectName = document.createElement("div");
//prettier-ignore
tasksContainerProjectName.setAttribute("class","tasks__container--project-name");
tasksContainer.appendChild(tasksContainerProjectName);

const tasksProjectName = document.createElement("h2");
tasksContainerProjectName.appendChild(tasksProjectName);

//Container Add
const tasksAddContainer = document.createElement("div");
tasksAddContainer.setAttribute("class", "task__container--add");
tasksContainer.appendChild(tasksAddContainer);

const taskInput = document.createElement("input");
const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add task";

tasksAddContainer.appendChild(taskInput);
tasksAddContainer.appendChild(addTaskBtn);

const tasksContainerList = document.createElement("ul");
tasksContainerList.setAttribute("class", "tasks__container--list");
tasksContainer.appendChild(tasksContainerList);

export default function tasksRender(project) {
  tasksProjectName.textContent = project.name;
  tasksContainerList.textContent = "";

  project.tasks.forEach((task) => {
    const taskLi = document.createElement("li");
    taskLi.setAttribute("id", task.id);
    tasksContainerList.appendChild(taskLi);

    const checkBoxTask = document.createElement("input");
    const labelTask = document.createElement("label");
    checkBoxTask.setAttribute("type", "checkbox");
    checkBoxTask.setAttribute("value", task.name);
    checkBoxTask.setAttribute("name", task.name);
    labelTask.setAttribute("for", task.name);
    labelTask.textContent = task.name;
    taskLi.appendChild(checkBoxTask);
    taskLi.appendChild(labelTask);
  });
}
