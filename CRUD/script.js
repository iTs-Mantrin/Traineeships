let data = [];

function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const newData = { name, email };
        data.push(newData);
        displayData();
        clearForm();
    } else {
        alert('Please fill out all fields.');
    }
}

function displayData() {
    const tableBody = document.getElementById('dataBody');
    tableBody.innerHTML = '';

    data.forEach((item, index) => {
        const row = `<tr>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td><button onclick="deleteData(${index})">Delete</button></td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function deleteData(index) {
    data.splice(index, 1);
    displayData();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

// You can add update functionality based on your requirements
