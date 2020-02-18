const HTMLFactories = {
  makeTaskEntry(task) {
    return `<div class="task" id="task--${task.id}">
    <div id="taskNameDiv">
    <h4 id="taskName--${task.id}">${task.task}</h2>
    <div id="taskEditBar"></div>
    <input id="completeTask--${task.id}" type="checkbox">
    </div>
    <h6 id="expectedComplete--${task.id}">${task.expectedComplete}</h5>
    <div class="buttonDiv">
    <button class="taskButton" id="taskDelete--${task.id}">Delete</button>
    </div>
    </div>`;
  },
  taskMaker(task, expectedComplete, userId) {
    return {
      task: task,
      expectedComplete: expectedComplete,
      isComplete: false,
      userId: userId
    };
  },
  editedTaskMaker(id, userId, task, expectedComplete) {
    return {
      id: id,
      userId: userId,
      task: task,
      expectedComplete: expectedComplete,
      isComplete: false
    };
  },
  makeTaskEntryAddForm() {
    const taskAddForm = document.getElementById("taskAddForm");
    taskAddForm.innerHTML = `
    <div>
    <input type="hidden" id="taskId" value="">
    <h4>Task</h4>
    <input id="taskName">
    <h4>Expected Completion</h4>
    <input id="taskExpectedComplete" type="datetime-local">
    <div>
    <button class="saveTask" id="saveTask">Save Task</button>
    </div>
    </div>`;
  },
  makeEditTaskNameForm() {
    const taskEditBar = document.getElementById("taskEditBar");
    taskEditBar.innerHTML = `
      <div>
      <input type="hidden" id="editTaskId" value="">
      <input type="hidden" id="editTaskUserId" value="">
      <input id="editTaskName">
      <input type="hidden" id="editTaskExpectedComplete" value="">
      </div>`;
  }
};

export default HTMLFactories;
