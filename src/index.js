import Task from "./model/tasks.js"
import timeline from './model/timeline.js'
let task = new Task('wow', 'wow1');
let task2 = new Task('wow', 'wow2');
timeline.appendTask(task, 2);
timeline.appendTask(task2, 5);
timeline.appendTask(task2, 11);
timeline.appendTask(task, 999);
console.log(timeline.getTimeline());