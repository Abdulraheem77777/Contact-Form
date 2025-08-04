class ContactForm {
  constructor() {
    this._parentElement = document.querySelector(".form");
    this.inputFirstName = document.getElementById("firstname");
    this.inputLastName = document.getElementById("lastname");
    this.inputEmail = document.getElementById("email");
    this.inputMessage = document.getElementById("message");
    this._handleForm();
  }
  _handleForm() {
    this._parentElement.addEventListener(
      "submit",
      this._onSubmitForm.bind(this)
    );
  }
  _onSubmitForm(e) {
    e.preventDefault();
    this._clearErrors();
    const formData = [...new FormData(this._parentElement)];
    const data = Object.fromEntries(formData);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email validation
    let isValid = true;

    //validating firstName
    if (!data.firstname.trim()) {
      this._showError(this.inputFirstName, "This field is required");
      isValid = false;
    }
    //validating LastName

    if (!data.lastname.trim()) {
      this._showError(this.inputLastName, "This field is required");
      isValid = false;
    }
    //validating email

    if (!emailRegex.test(data.email)) {
      this._showError(this.inputEmail, "Please enter a valid");
      isValid = false;
    }
    //validating selected type

    const selectedType = this._parentElement.querySelector(
      'input[name="query"]:checked'
    );
    if (!selectedType) {
      const radioGroup = this._parentElement.querySelector(".radio-group");

      const markup = `<div class="error-msg"><p>Please select a query type</p></div>`;
      radioGroup.insertAdjacentHTML("beforeend", markup);

      isValid = false;
    }
    //validating message input
    if (!data.message.trim()) {
      this._showError(this.inputMessage, "This field is required");
    }

    //validating checkbox
    const consentBox = document.getElementById("consent");
    if (!consentBox.checked) {
      this._showError(
        consentBox,
        "To submit this form, please consent to being contacted"
      );
      isValid = false;
    }
    if (isValid) {
      this._parentElement.reset();
      this.inputFirstName.focus();
      this._success();
      setTimeout(() => {
        // this._success();// to delay it

        const success = document.querySelector(".success");
        success.innerHTML = "";
      }, 5000);
    }
  }
  _showError(inputEl, message) {
    let parent = inputEl.parentElement;
    if (inputEl.type === "checkbox") {
      parent = parent.parentElement; // go from `.checkbox-row` to `.checkbox-group`
    }
    const errorHTML = `<div class="error-msg"><p>${message}</p></div>`;
    parent.insertAdjacentHTML("beforeend", errorHTML);
    if (inputEl.tagName === "INPUT" || inputEl.tagName === "TEXTAREA") {
      inputEl.style.outline = "1px solid hsl(7, 100%, 60%)"; //put this color
    }
  }
  _success() {
    const success = document.querySelector(".success");
    success.innerHTML = `<div class="success-msg"><p class="centers"><img src="assets/images/icon-success-check.svg" alt="success" class="success-icon" /> <span class="mess">Message Sent!</span></p><span>Thanks for completing the form we'll be in touch soon!</span></div>`;
  }
  _clearErrors() {
    document.querySelectorAll(".error-msg").forEach((el) => el.remove());
    document.querySelectorAll("input,textarea").forEach((input) => {
      input.style.outline = "none";
    });
  }
}
const app = new ContactForm();
