const logInForm = {
  makeLogInForm() {
    const inputForm = document.querySelector("#logInFormArticle");
    const data = sessionStorage.getItem("userId")

    inputForm.innerHTML = `<div id="logInField">
                <h4>Email</h4>
                <input id="inputEmail">
                <h4>Password</h4>
                <input type="password" id="inputPassword">
                <div>
                <button id="logInButton">Log In</button>
                <button id="newUserFormButton">New Account</button>
                </div>
                </div>`;
  },
  clearLogInForm() {
    const inputForm = document.querySelector("#logInFormArticle");
    inputForm.innerHTML = "";
  },
  makeRegistrationForm() {
    const newUserInputForm = document.querySelector("#newUserFormArticle")
    newUserInputForm.innerHTML = `<div id="newUserField">
    <h4>Username</h4>
    <input id="newUsername">
    <h4>Email</h4>
    <input id="newEmail">
    <h4>Password</h4>
    <input type="password" id="newPassword">
    <h4>Confirm Password</h4>
    <input type="password" id="newPasswordConfirm">
    <div>
    <button id="newUserButton">Register your account</button>
    </div>
    </div>`
  },
  clearRegistraionForm() {
    const newUserInputForm = document.querySelector("#newUserFormArticle")
    newUserInputForm.innerHTML = "";
    this.clearLogInForm()
  }
};

export default logInForm;
