/** Class representing a task. */
class Task {
    /**
     * Create a task.
     * @param {number} id Number representing id of the task. id must be unique and a positive integer.
     * @param {string} title Name of the task.
     * @param {string} description Description of task or additional notes about the task.
     * @param {Date} start_date Date object representing the start date of the task.
     * @param {Date} due_date Date object representing the due date of the task.
     * @param {number} priority Number representing the priority of the task from highest(0) to lowest(4).
     */
    constructor(id = -1, title = '', description = '', start_date = new Date(), due_date = new Date(), priority = 0) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._dueDate = due_date;
        this._startDate = start_date;
        this._priority = priority;
    }
    /**
     * Getters and setters.
     */
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get dueDate() {
        return this._dueDate;
    }
    get startDate() {
        return this._startDate;
    }
    get priority() {
        return this._priority;
    }

    set title(title) {
        this._title = title;
    }
    set description(description) {
        this._description = description;
    }
    set dueDate(due_date) {
        this._dueDate = due_date;
    }
    set startDate(start_date) {
        this._startDate = start_date;
    }
    set priority(priority) {
        this._priority = priority;
    }
}
export default Task;