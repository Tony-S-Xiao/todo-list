import { completeButtonHandler } from "../controller/controller.js"

const displayTimeline = (timeline) => {
    let task_arr = timeline.getTimeline();
    for(let i = 0; i < task_arr.length; ++i) {
        displayTask(task_arr[i]);
    }
}
const displayTask = (task) => {
    let node = document.createElement('div');
    node.classList = 'task-card';
    node.id = "task-card-"+task.id;
    let title = document.createElement('h1');
    title.classList = 'task-title';
    title.textContent = task.title;
    let description = document.createElement('div');
    description.classList = 'task-description';
    description.textContent = task.description;
    let complete_button = document.createElement('button');
    complete_button.classList = "complete-button";
    complete_button.textContent = "Complete";
    complete_button.addEventListener('click', completeButtonHandler);
    node.appendChild(title);
    node.appendChild(description);
    node.appendChild(complete_button);
    document.querySelector('body').appendChild(node);
}
const hideTimeline = (timeline) => {

}
const hideTask = (task) => {

}
export {displayTimeline, displayTask};