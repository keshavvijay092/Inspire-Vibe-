function saveEntry() {
  const entryText = document.getElementById('journalEntry').value;
  if (entryText.trim() === '') {
    alert('Please write something before saving.');
    return;
  }

  // Save entry to local storage (for demonstration purposes)
  const timestamp = new Date().toLocaleString();
  const entry = { timestamp, text: entryText };

  let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  entries.unshift(entry);
  localStorage.setItem('journalEntries', JSON.stringify(entries));

  // Clear the textarea after saving
  document.getElementById('journalEntry').value = '';

  // Refresh the entries list
  displayEntries();
}

function clearEntry() {
  // Clear the textarea
  document.getElementById('journalEntry').value = '';
}

function displayEntries() {
  const entryList = document.getElementById('entryList');
  entryList.innerHTML = '';

  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  entries.forEach((entry) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${entry.timestamp}:</strong> ${entry.text}`;
    entryList.appendChild(listItem);
  });
}

// Display entries on page load
document.addEventListener('DOMContentLoaded', displayEntries);
