import { getTaskInput, resetTaskInput } from "./controller/controller.js"
import timeline from "./model/timeline.js"

let curr_timeline = timeline;
document.getElementById("task-submit-button").addEventListener('click', (e) => {
    let curr = getTaskInput();
    curr_timeline.appendTask(curr);
    console.log(curr);
    resetTaskInput();
    console.log(curr_timeline.getTimeline());
});
