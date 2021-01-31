import taskFactory from "./tasks.js"
import timeline from './timeline.js'
let task = taskFactory.createTask("wow", "wow1");
let task2 = taskFactory.createTask("wow", "wow2");
console.log(task.description);
console.log(task2.description);
console.log(task2.description);
console.log(task.description);
timeline.appendTask(1, task);
timeline.appendTask(3, task2);
timeline.appendTask(4, task);
timeline.appendTask(2, task2);
