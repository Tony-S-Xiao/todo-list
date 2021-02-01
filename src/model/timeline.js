import buckets from 'buckets-js';
/**
 * A timeline singleton. 
 */
const timeline = (() => {
    /**
     * BST representing the timeline of tasks. Custom comparator for dates.
     */
    let bst = new buckets.BSTree((first, second) => {
        if(first.date < second.date) return -1;
        if(first.date > second.date) return 1;
        return 0;
    });
    /**
     * Add a new task to the timeline.
     * @param {Date} date Date object representing the time 
     * on the timeline(usually equals to the start date of task).
     * @param {Task} task Task object representing the task.
     */
    const appendTask = (task, date = task.startDate) => {
        bst.add({task, date});
    };
    
    const getTimeline = () => {
        return bst.toArray();
    };
    return {appendTask, getTimeline};
})();
export default timeline;