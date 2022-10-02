"use strict";
import Task from "../tasks/tasks";
import projectsRender from "./projectsRender";

export const projects = [];
export default class Project {
  static count = 0;

  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.archivedTasks = [];

    Project.count += 1;
    this.id = `p-${Project.count}`;

    projects.push(this);
  }

  addTask(name) {
    const newTask = new Task(name, this);
    this.tasks.push(newTask);
  }

  archiveTask(id) {
    this.tasks.forEach((e, i) => {
      console.log(e);
      // if id === e.id => {
      //   newArr.push(e) e.archives = true / this.tasks.splice(i, 1)
      // }
    });
  }

  completeTask(id) {
    //currTask = get id from task clicked
    //currTask === e.id ? remove from tasks, send to archived
  }

  delete() {
    projects.forEach((e, i, arr) => {
      e.id === this.id ? arr.splice(i, 1) : null;
    });
  }

  render() {
    this.tasks.projectRender();
  }

  renderProjects() {}
}
