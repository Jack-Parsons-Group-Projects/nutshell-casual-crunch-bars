const logInForm = {
  makeLogInForm() {
    const inputForm = document.querySelector("#logInFormArticle");
    inputForm.innerHTML = `<div id="logInField">
                <h4>Email</h4>
                <input id="inputEmail">
                <h4>Password</h4>
                <input type ="password" id="inputPassword">
                <div>
                <button id="logInButton">Log In</button>
                </div>
                </div>`;
  },
  clearLogInForm() {
    const inputForm = document.querySelector("#logInFormArticle");
    inputForm.innerHTML = "";
  }
};

export default logInForm;
