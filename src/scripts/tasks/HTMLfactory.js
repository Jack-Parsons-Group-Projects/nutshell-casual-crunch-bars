const HTMLFactories = {
  makeTaskEntry(task) {
    return `<div class="task" id="task--${task.id}">
    <div id="taskNameDiv">
    <h2 id="task--Name">${task.task}</h2>
    <input id="completeTask--${task.id}" type="checkbox">
    </div>
    <h5 id="task--expectedComplete">${task.expectedComplete}</h5>
    <div class="buttonDiv">
    <button class="taskButton" id="taskEdit--${task.id}">Edit</button>
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
      }
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
  }
};

export default HTMLFactories;
