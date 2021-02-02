class Project {
    constructor(title) {
        this._tasks = new Array();
        this._title = title;
    }
    /**
     * 
     * @param {Task} task Task object representing the task thats part of the project. 
     */
    appendTask(task) {
        this._tasks.push(task);
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}