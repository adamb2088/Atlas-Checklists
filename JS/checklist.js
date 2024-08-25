function showChecklist(checklistId) {
    // Hide all checklists
    const checklists = document.querySelectorAll(".checklist");
    checklists.forEach((checklist) => checklist.classList.remove("active"));

    // Show the selected checklist
    const selectedChecklist = document.getElementById(checklistId);
    selectedChecklist.classList.add("active");
}
