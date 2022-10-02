"use strict";
import Project from "./projects";
import { projects } from "./projects";

const mainContainer = document.querySelector(".main__container");

const projectsContainer = document.querySelector(".projects__container");
const projectsContainerAdd = document.createElement("div");
projectsContainerAdd.setAttribute("class", "projects__container--add");
export const inputProject = document.createElement("input");
inputProject.setAttribute("class", "projects__input");
export const addProjectBtn = document.createElement("button");
addProjectBtn.setAttribute("class", "projects__add");
addProjectBtn.textContent = "Add Project";

mainContainer.prepend(projectsContainer);
projectsContainer.appendChild(projectsContainerAdd);
projectsContainerAdd.appendChild(inputProject);
projectsContainerAdd.appendChild(addProjectBtn);

export const projectsContainerList = document.createElement("div");
projectsContainerList.setAttribute("class", "projects__container--list");
projectsContainer.appendChild(projectsContainerList);
const projectsList = document.createElement("ul");
projectsContainerList.appendChild(projectsList);

export default function projectsRender(id) {
  const projectLi = document.createElement("li");
  projectsList.appendChild(projectLi);

  const projectBtnName = document.createElement("input");
  projectBtnName.setAttribute("type", "button");
  projectBtnName.setAttribute("id", id);
  projectBtnName.setAttribute("class", "projects__button");
  projectLi.appendChild(projectBtnName);
  projectBtnName.value = inputProject.value;
  inputProject.value = "";

  return projectBtnName;
}

function renderProjectsArray() {
  // render projects
}
