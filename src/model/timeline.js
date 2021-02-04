/**
 * A timeline singleton. 
 */
const timeline = (() => {
    /**
     * Array representing the timeline of tasks.
     */
    let arr = [];
    /**
     * Add a new task to the timeline.
     * @param {Date} date Date object representing the time 
     * on the timeline(usually equals to the start date of task).
     * @param {Task} task Task object representing the task.
     */
    const appendTask = (task) => {
        arr.push(task);
    };
    const getTimeline = () => {
        return arr;
    };
    return {appendTask, getTimeline};
})();
export default timeline;