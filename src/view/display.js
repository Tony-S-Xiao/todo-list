const displayTimeline = (timeline) => {
    let task_arr = timeline.getTimeline();
    for(let i = 0; i < task_arr.length; ++i) {
        let node = document.createElement('div');
        node.classList = 'task-card';
        let title = document.createElement('h1');
        title.classList = 'task-title';
        title.textContent = task_arr[i].task.title;
        let description = document.createElement('div');
        description.classList = 'task-description';
        description.textContent = task_arr[i].task.description;
        node.appendChild(title);
        node.appendChild(description);
        document.querySelector('body').appendChild(node);
    }
}
export {displayTimeline};