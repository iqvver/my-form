/**
 * @param {errors} now 
 */

export const inputError = (phoneError, nameError, messageError) => {
    const inputPhone = document.user.phone;
    const inputName = document.user.name;
    const inputMessage = document.user.message;
    if (phoneError) {
        inputPhone.classList.add("inputError");
        setTimeout(() => {
            inputPhone.classList.remove("inputError");
        }, 1000);
    }
    if (nameError) {
        inputName.classList.add("inputError");
        setTimeout(() => {
            inputName.classList.remove("inputError");
        }, 1000);
    }
    if (messageError) {
        inputMessage.classList.add("inputError");
        setTimeout(() => {
            inputMessage.classList.remove("inputError");
        }, 1000);
    }
};