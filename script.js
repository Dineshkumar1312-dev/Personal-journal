

const loginPage = document.getElementById('login-page');
const journalPage = document.getElementById('journal-page');
const loginForm = document.getElementById('login-form');
const journalForm = document.getElementById('journal-form');
const journalEntry = document.getElementById('journal-entry');
const entryList = document.getElementById('entry-list');
const logoutButton = document.getElementById('logout');

// Dummy credentials
const USERNAME = 'vadhani';
const PASSWORD = '2004';


// Load entries from localStorage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.forEach((entry) => addEntryToList(entry));
}

// Save entries to localStorage
function saveEntries(entries) {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
}
// Add a journal entry to the list with a timestamp
function addEntryToList(entryText, timestamp = new Date().toLocaleString()) {
    const li = document.createElement('li');
    li.className = 'entry';
    li.innerHTML = `
        <div>
            <p>${entryText}</p>
            <small>${timestamp}</small>
        </div>
        <button class="delete-btn">Delete</button>
    `;
    entryList.appendChild(li);

    // Delete button functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        saveEntries(entries.filter((entry) => entry.text !== entryText || entry.timestamp !== timestamp));
    });
}

// Event listener for saving journal entries
journalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const entryText = journalEntry.value.trim();
    if (entryText) {
        const timestamp = new Date().toLocaleString();
        addEntryToList(entryText, timestamp);
        const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        entries.push({ text: entryText, timestamp });
        saveEntries(entries);
        journalEntry.value = '';
    }
});

// Load entries from localStorage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.forEach((entry) => addEntryToList(entry.text, entry.timestamp));
}

// Add a journal entry to the list
function addEntryToList(entry) {
    const li = document.createElement('li');
    li.className = 'entry';
    li.innerHTML = `
        <span>${entry}</span>
        <button class="delete-btn">Delete</button>
    `;
    entryList.appendChild(li);

    // Delete button functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        saveEntries(entries.filter((e) => e !== entry));
    });
}




// Event listener for login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === USERNAME && password === PASSWORD) {
        loginPage.style.display = 'none';
        journalPage.style.display = 'block';
        loadEntries();
    } else {
        alert('Invalid credentials!');
    }
});

// Event listener for saving journal entries
journalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const entryText = journalEntry.value.trim();
    if (entryText) {
        addEntryToList(entryText);
        const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        entries.push(entryText);
        saveEntries(entries);
        journalEntry.value = '';
    }
});

// Event listener for logout
logoutButton.addEventListener('click', () => {
    loginPage.style.display = 'block';
    journalPage.style.display = 'none';
    entryList.innerHTML = '';
});
// Add a journal entry to the list with a timestamp
function addEntryToList(entryText, timestamp = new Date().toLocaleString()) {
    const li = document.createElement('li');
    li.className = 'entry';
    li.innerHTML = `
        <div>
            <p>${entryText}</p>
            <small>${timestamp}</small>
        </div>
        <button class="delete-btn">Delete</button>
    `;
    entryList.appendChild(li);

    // Delete button functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        saveEntries(entries.filter((entry) => entry.text !== entryText || entry.timestamp !== timestamp));
    });
}

// Event listener for saving journal entries
journalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const entryText = journalEntry.value.trim();
    if (entryText) {
        const timestamp = new Date().toLocaleString();
        addEntryToList(entryText, timestamp);
        const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        entries.push({ text: entryText, timestamp });
        saveEntries(entries);
        journalEntry.value = '';
    }
});

// Load entries from localStorage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.forEach((entry) => addEntryToList(entry.text, entry.timestamp));
}

