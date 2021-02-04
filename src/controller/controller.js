import Task from "../model/tasks.js"
/**
 * @return 
 */
let id_unique = 0;
function getTaskInput() {
    let inputs = document.getElementById('task-input');
    let input = inputs.querySelectorAll('input, textarea');
    input = Array.from(input).map((node) => node.value);
    let option = document.getElementById('priority').value;
    let task = new Task(id_unique++, ...input, option);
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
function completeButtonHandler(e) {
    e.target.closest('.task-card').remove();
}

export { getTaskInput, resetTaskInput, completeButtonHandler };