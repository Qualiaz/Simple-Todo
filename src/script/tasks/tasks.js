"use strict";
import Project from "../projects/projects";

export default class Task {
  static count = 0;
  constructor(name, project) {
    this.name = name;
    this.projectAssociated = project;
    Task.count += 1;
    this.id = `t-${Task.count}`;
  }
}

// when user clicks tasks, open settings
// task settings -> delete, complete, change color, change name
