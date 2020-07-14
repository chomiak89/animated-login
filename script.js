const username_field = document.querySelector("#username-input");
const password_field = document.querySelector("#password-input");
const username_field_before = document.querySelector(".test-selector-1");
const password_field_before = document.querySelector(".test-selector-2");

username_field.addEventListener("focusout", () => {
  username_field.value.length > 0
    ? username_field_before.classList.add("js-field-active")
    : username_field_before.classList.remove("js-field-active");
});
password_field.addEventListener("focusout", () => {
  password_field.value.length > 0
    ? password_field_before.classList.add("js-field-active")
    : password_field_before.classList.remove("js-field-active");
});
