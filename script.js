const PASSWORD_BOX = document.getElementById("password");
const LENGTH = 15;
const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = "abcdefhijklmnopqrstuvwxyz";
const NUMBER = "0123456789";
const SYMBOL = "!@#$%^&*()_+~";
const ALL_CHARS = UPPER_CASE + LOWER_CASE + NUMBER + SYMBOL;
const ELEMENTS_IDS = {
    title: "title",
    headerPrefix: "headerPrefix",
    headerSuffix: "headerSuffix",
    buttonGeneratePassword: "buttonGeneratePassword"
};
const LABELS = {
    [ELEMENTS_IDS.title]: "Random Password Generator",
    [ELEMENTS_IDS.headerPrefix]: "Generate a",
    [ELEMENTS_IDS.headerSuffix]: "RANDOM PASSWORD",
    placeholderPassword: "password",
    [ELEMENTS_IDS.buttonGeneratePassword]: "Generate password"
};
function handleClickButtonGeneratePassword() {
    const CHECKBOXES_CONTAINER_ELEMENT = document.querySelector('#checkboxes-container');
    const checkboxes = CHECKBOXES_CONTAINER_ELEMENT.querySelectorAll('input[type=checkbox]');

    for(let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        const validationInfo = validateCheckbox(checkbox);

        if(!validationInfo.isValidationSuccess) {
            alert(validationInfo.errorMessage);
            break;
        }
    }
}

function createPassword(){
    let password = "";
    password += UPPER_CASE[Math.floor(Math.random() * UPPER_CASE.length)];
    password += LOWER_CASE[Math.floor(Math.random() * LOWER_CASE.length)];
    password += NUMBER[Math.floor(Math.random() * NUMBER.length)];
    password += SYMBOL[Math.floor(Math.random() * SYMBOL.length)];

    while(LENGTH > password.length) {
        password += ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
    }
    PASSWORD_BOX.value = password;
}

function handleClickCopyPassword(){
    PASSWORD_BOX.select();
    document.execCommand('copy');
}

function loadLabels() {
    assignLabelsToTextContentByElementIds();
    assignLabelToPlaceholderById(LABELS.placeholderPassword, "password");
}

function assignLabelToPlaceholderById(label, elementId) {
    const element = document.getElementById(elementId);
    element.placeholder = label;
}

function assignLabelsToTextContentByElementIds() {
    Object.values(ELEMENTS_IDS).forEach((elementId) => {
        assignLabelToTextContentByElementId(LABELS[elementId], elementId);
    });
}

function assignLabelToTextContentByElementId(label, elementId) {
    const element = document.getElementById(elementId);
    element.textContent = label;
}

function checkValidationForCheckboxes() {
    const CHECKBOXES_CONTAINER_ELEMENT = document.querySelector('#checkboxes-container');// checkboxContainerElement etc. TODO
    const CHECKBOXES = CHECKBOXES_CONTAINER_ELEMENT.querySelectorAll('input[type=checkbox]');

}
function validateCheckbox(checkbox) {
        const CHECKBOXES_CONTAINER_ELEMENT = document.querySelector('#checkboxes-container');// checkboxContainerElement etc. TODO
        const CHECKBOXES = CHECKBOXES_CONTAINER_ELEMENT.querySelectorAll('input[type=checkbox]');

        const isValidationSuccess = isAnyCheckboxChecked(CHECKBOXES);
        const errorMessage = isValidationSuccess ? '' : 'At lest one checkbox must be selected.';

        return {
            isValidationSuccess: isValidationSuccess,
            errorMessage: errorMessage
        };
    }

    function isAnyCheckboxChecked(CHECKBOXES) {
        for (let i = 0; i < CHECKBOXES.length; i++) {
            if (CHECKBOXES[i].checked) {
                return true;
            }
        }

        return false;
    }


    loadLabels();
}