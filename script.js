let Data = [
    { name: 'Saurav', age: 22, groupe: 'dev 101' },
    { name: 'Ali', age: 23, groupe: 'dev 201' },
    { name: 'Mohamed', age: 24, groupe: 'dev 201' },
    { name: 'Hassan', age: 25, groupe: 'dev 101' }
];

// Function to display the "Add" form
function ShowForm() {
    document.querySelector('.blockAdd').style.display = 'block';
}

// Function to cancel and hide the forms
function canceled() {
    document.querySelector('.blockAdd').style.display = 'none';
    document.querySelector('.blockedite').style.display = 'none';
}

// Function to add a new stagiaire
function Addstagiaire(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let groupe = document.querySelector('#groupe').value;

    let newStagiaire = {
        name: name,
        age: age,
        groupe: groupe
    };

    Data.push(newStagiaire);
    refreshTable();
    document.querySelector('.blockAdd').style.display = 'none';
    document.querySelector('#addform').reset();

    updateCounter();
}

// Function to delete a stagiaire
function deletestg(index) {
    Data.splice(index, 1);
    refreshTable();
    updateCounter();
}

// Function to show the edit form and populate it with existing data
function Edite(index) {
    document.querySelector('.blockedite').style.display = 'block';

    let stagiaire = Data[index];
    document.querySelector('#editId').value = index;
    document.querySelector('#editname').value = stagiaire.name;
    document.querySelector('#editage').value = stagiaire.age;
    document.querySelector('#editgroupe').value = stagiaire.groupe;
}

// Function to handle the edit form submission and update the stagiaire data
function Editstagiaire(e) {
    e.preventDefault();

    let index = document.querySelector('#editId').value;
    let name = document.querySelector('#editname').value;
    let age = document.querySelector('#editage').value;
    let groupe = document.querySelector('#editgroupe').value;

    Data[index] = {
        name: name,
        age: age,
        groupe: groupe
    };

    refreshTable();
    document.querySelector('.blockedite').style.display = 'none';
    updateCounter();
}

// Function to refresh the stagiaire table
function refreshTable() {
    let content = document.querySelector('.content');
    content.innerHTML = '';  // Clear table content before rendering

    Data.forEach((item, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.groupe}</td>
                <td>
                    <button class="btn btn-danger" onclick="deletestg(${index})">Delete</button>
                    <button class="btn btn-primary" onclick="Edite(${index})">Edit</button>
                </td>
            </tr>
        `;
        content.innerHTML += row;
    });
}

// Function to update the counter of total stagiaires
function updateCounter() {
    document.querySelector(".counter").innerText = `Nombre total de stagiaires: ${Data.length}`;
}

// Initialize the table and counter on page load
refreshTable();
updateCounter();
