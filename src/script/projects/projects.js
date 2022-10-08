"use strict";
import Task from "../tasks/tasks";
import projectsRender from "./projectsRender";

export const projects = [];
export default class Project {
  static count = 0;

  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.completedTasks = [];

    Project.count += 1;
    this.id = `p-${Project.count}`;

    projects.push(this);
  }

  addTask(name) {
    const newTask = new Task(name, this);
    this.tasks.push(newTask);
  }

  completeTask(id) {
    this.tasks.forEach((task, i, arr) => {
      if (task.id === id) {
        let completedTask = arr.splice(i, 1);
        this.completedTasks.push(...completedTask);
      }
    });
  }

  deleteTask(id) {
    this.tasks.forEach((task, i, arr) => {
      if (task.id === id) arr.splice(i, 1);
    });
  }

  delete() {
    projects.forEach((e, i, arr) => {
      e.id === this.id ? arr.splice(i, 1) : null;
    });
  }

  changeName(name) {
    this.name = name;
  }
}
