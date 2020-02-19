import logInForm from "./logInForm.js";
import API from "../tasks/dataHandler.js";
import DOMrender from "../tasks/DOMrender.js";
import articleAPI from "../articles/articleData.js"
import eventAPI from "../events/eventsData.js"
import renderNewsArticle from "../articles/articleDom.js"
import renderEvents from "../events/eventsDom.js"

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
            API.getTasks().then(DOMrender.putTasksOnDom)
            articleAPI.getNewsArticles().then(renderNewsArticle)
            eventAPI.getEvents().then(renderEvents)
            logInForm.clearLogInForm();
          } else {
            const logInField = document.querySelector("#logInField");
            logInField.innerHTML += `<h3>Login information not found</h3>`;
          }
        });
    });
  }
};

export default authEvents;
