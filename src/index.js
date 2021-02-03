import { getTaskInput, resetTaskInput } from "./controller/controller.js"
import timeline from "./model/timeline.js"
import {displayTimeline} from "./view/display.js"

let curr_timeline = timeline;
document.getElementById("task-submit-button").addEventListener('click', (e) => {
    let curr = getTaskInput();
    curr_timeline.appendTask(curr);
    resetTaskInput();
    displayTimeline(curr_timeline);
});

