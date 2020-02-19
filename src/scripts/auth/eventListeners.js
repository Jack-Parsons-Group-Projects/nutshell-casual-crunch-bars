import logInForm from "./logInForm.js";
import tasksAPI from "../tasks/dataHandler.js";
import DOMrender from "../tasks/DOMrender.js";
import articleAPI from "../articles/articleData.js";
import eventAPI from "../events/eventsData.js";
import renderNewsArticle from "../articles/articleDom.js";
import renderEvents from "../events/eventsDom.js";

const authEvents = {
  logIn() {
    const logInButton = document.getElementById("logInButton");

    logInButton.addEventListener("click", event => {
      const emailInput = document.querySelector("#inputEmail");
      const passwordInput = document.querySelector("#inputPassword");

      const email = emailInput.value;
      const password = passwordInput.value;

      fetch(`http://localhost:3000/users`)
        .then(resp => resp.json())
        .then(arr => {
          const user = arr.find(
            el => el.email === email && el.password === password
          );

          if (user !== undefined) {
            sessionStorage.setItem("userId", user.id);
            articleAPI.getNewsArticles().then(renderNewsArticle);
            eventAPI.getEvents().then(renderEvents);
            tasksAPI.getTasks().then(DOMrender.putTasksOnDom);
            logInForm.clearLogInForm();
          } else {
            const logInField = document.querySelector("#logInField");
            logInField.innerHTML += `<h3>Login information not found</h3>`;
          }
        });
    });
  },
  newUserForm() {
    const newUserButton = document.getElementById("newUserFormButton");

    newUserButton.addEventListener("click", event => {
      logInForm.clearLogInForm();
      logInForm.makeRegistrationForm();
    });
  },
  addNewUser() {
    const addNewUserForm = document.getElementById("newUserFormArticle");

    addNewUserForm.addEventListener("click", event => {
      if (event.target.id === "newUserButton") {
        console.log("hooray!");
        const newEmail = document.querySelector("#newEmail");
        const newUserName = document.querySelector("#newUsername");
        const newPassword = document.querySelector("#newPassword");
        const newPasswordConfirm = document.querySelector(
          "#newPasswordConfirm"
        );

        if (newPassword.value === newPasswordConfirm.value) {
          const newUserObject = {
            email: newEmail.value,
            userName: newUserName.value,
            password: newPassword.value
          };
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObject)
          });

          logInForm.clearRegistraionForm();
        }
      }
    });
  }
};

export default authEvents;
