// Retrieve the form and table elements
const form = document.getElementById('pushupForm');
const table = document.getElementById('progressTable');

// Load existing entries from local storage, if any
const storedEntries = localStorage.getItem('pushupEntries');
const pushupEntries = storedEntries ? JSON.parse(storedEntries) : [];

// Function to add a new push-up entry
function addEntry(date, count) {
    // Create a new entry object
    const entry = {
        date: date,
        count: count
    };

    // Add the entry to the array
    pushupEntries.push(entry);

    // Save the updated entries to local storage
    localStorage.setItem('pushupEntries', JSON.stringify(pushupEntries));
}

// Function to delete a push-up entry
function deleteEntry(index) {
    // Remove the entry from the array
    pushupEntries.splice(index, 1);

    // Save the updated entries to local storage
    localStorage.setItem('pushupEntries', JSON.stringify(pushupEntries));

    // Render the entries
    renderEntries();
}

// Function to render the push-up entries in the table
function renderEntries() {
    // Clear existing table rows
    table.innerHTML = '<tr><th>Date</th><th>Push-Ups</th><th></th></tr>';

    // Iterate over the entries and create table rows
    pushupEntries.forEach((entry, index) => {
        const row = table.insertRow(-1);
        const dateCell = row.insertCell(0);
        const countCell = row.insertCell(1);
        const deleteCell = row.insertCell(2);

        dateCell.textContent = entry.date;
        countCell.textContent = entry.count;
        deleteCell.innerHTML = '<button onclick="deleteEntry(' + index + ')">Delete</button>';
    });
}

// Add event listener to the form for submitting entries
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const date = document.getElementById('date').value;
    const count = document.getElementById('count').value;

    // Add the entry and render the entries
    addEntry(date, count);
    renderEntries();

    // Clear the form inputs
    document.getElementById('date').value = '';
    document.getElementById('count').value = '';
});

// Set today's date as the default value for the date input
const currentDate = new Date().toISOString().slice(0, 10);
document.getElementById('date').value = currentDate;

// Render the entries when the page loads
renderEntries();

// Function to render the push-up entries in the table
function renderEntries() {
    // Clear existing table rows
    table.innerHTML = '<tr><th>Date</th><th>Push-Ups</th><th></th></tr>';

    // Iterate over the entries and create table rows
    pushupEntries.forEach((entry, index) => {
        const row = table.insertRow(-1);
        const dateCell = row.insertCell(0);
        const countCell = row.insertCell(1);
        const deleteCell = row.insertCell(2);

        const entryDate = new Date(entry.date);
        const today = new Date();

        const diffTime = today - entryDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        let formattedDate;
        if (diffDays === 0) {
            formattedDate = 'Today';
        } else if (diffDays === 1) {
            formattedDate = 'Yesterday';
        } else if (diffDays < 7) {
            const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][entryDate.getDay()];
            formattedDate = `${weekday} (${entry.date})`;
        } else {
            formattedDate = entry.date;
        }

        dateCell.textContent = formattedDate;
        countCell.textContent = entry.count;
        deleteCell.innerHTML = `<button onclick="deleteEntry(${index})">Delete</button>`;
    });
}