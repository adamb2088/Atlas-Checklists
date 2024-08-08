function resetCheckboxes() {
    const checkboxes = document.querySelectorAll(
        '.checklist input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

function checkBoxes() {
    const checkboxes = document.querySelectorAll(
        '.checklist input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
}

document
    .getElementById("reset-button")
    .addEventListener("click", resetCheckboxes);

document.getElementById("check-button").addEventListener("click", checkBoxes);
