import Task from "../model/tasks.js"
/**
 * @return 
 */
function getTaskInput() {
    let inputs = document.getElementById('task-input');
    let input = inputs.querySelectorAll('input, textarea');
    input = Array.from(input).map((node) => node.value);

    let option = document.getElementById('priority').value;

    let task = new Task(0, ...input, option);
    resetTaskInput();
    return task;
}
function resetTaskInput() {
    let inputs = document.getElementById('task-input');
    let input = inputs.querySelectorAll('input, textarea');
    for(let node of input) {
        node.value = '';
    }
    document.getElementById('priority').value = '0';
}


export { getTaskInput, resetTaskInput };