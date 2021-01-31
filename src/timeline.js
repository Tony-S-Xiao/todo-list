import buckets from 'buckets-js'; //why isnt there a search method for this?
let timeline = (() => {
    let bst = new buckets.BSTree((first, second) => {
        if(first.date < second.date) return -1;
        if(first.date > second.date) return 1;
        return 0;
    });
    const appendTask = (date, task) => {
        bst.add({date, task});
    };
    
    return {appendTask, getTimeline};
})();
export default timeline;