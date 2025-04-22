
const submitButton = document.getElementById('submit-button');
let h3Header = document.getElementById('table-header-msg');
let toDoListGlobalScope  = '';

let events = 0;
let completed = 0;
function changeText() {
    if (events > 0) {
       h3Header.textContent = "You have " + events + " tasks to complete."
    }
    else {
        h3Header.textContent = "You have nothing to do today."
    }
}

function addCompleted() {
    const completedTable = document.getElementById("completed-table");
    const completedTableRow = document.createElement("tr");
    const completedTableData = document.createElement("td");
    completedTable.classList.add("to-do-container");
    completedTableRow.textContent = toDoListGlobalScope;
    completedTableRow.append(completedTableData);
    completedTable.append(completedTableRow);
    completed++

    let rows = completedTable.querySelectorAll('tr');
    if(rows.length = 1){
        completedTableData.textContent = "Completed!.";
        completedTableRow.append(completedTableData);
        completedTable.append(completedTableRow);
    }
}


submitButton.addEventListener("click" , () => {
    const newTableRow = document.createElement("tr");
    newTableRow.classList.add("to-do-container");

    const newTableData = document.createElement("td");
    newTableData.classList.add("to-do-item")

    const newDiv = document.createElement("div");
    newDiv.classList.add("container-div")

    const confirmedButton = document.createElement("button");
    confirmedButton.classList.add("completed-button");
    confirmedButton.textContent = "Completed"
    const table = document.getElementById("container-table");
    const toDoListP = document.createElement("p");

    
    toDoListP.textContent = document.getElementById('to-do-display').value;
    newDiv.append(toDoListP, confirmedButton);
    newTableData.append(newDiv);
    newTableRow.append(newTableData);
    table.append(newTableRow); 

    document.getElementById('to-do-display').value = '';

    events++;
    
    confirmedButton.addEventListener("click", () => {
        newTableRow.remove();
        events--;
        changeText();
        toDoListGlobalScope = toDoListP.textContent;
        addCompleted();
    });
    changeText()
});



document.addEventListener("keydown" , (event) => {
    if (event.key === "Enter"){
    const newTableRow = document.createElement("tr");
    newTableRow.classList.add("to-do-container");

    const newTableData = document.createElement("td");
    newTableData.classList.add("to-do-item")

    const newDiv = document.createElement("div");
    newDiv.classList.add("container-div")

    const confirmedButton = document.createElement("button");
    confirmedButton.classList.add("completed-button");
    confirmedButton.textContent = "Completed"
    const table = document.getElementById("container-table");

    
    const toDoListP = document.createElement("p");
    
    table.append(newTableRow);
    toDoListP.textContent = document.getElementById('to-do-display').value;
    newDiv.append(toDoListP, confirmedButton);
    newTableData.append(newDiv);
    newTableRow.append(newTableData);

    document.getElementById('to-do-display').value = '';

    events++;

    confirmedButton.addEventListener("click", () => {
        newTableRow.remove();
        events--;
        changeText()
        toDoListGlobalScope = toDoListP.textContent;
        addCompleted();
    });
    changeText();
    }    
});


