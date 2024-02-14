//your JS code here. If required.
const table = document.querySelector('table');
const loadingRow = document.getElementById('loadingRow');

function getRandomTime() {
    return Math.random() * 2000 + 1000; // Random time between 1 and 3 seconds
}

// Create 3 promises
const promises = [
    new Promise(resolve => setTimeout(() => resolve('Promise 1'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), getRandomTime()))
];

// Display loading text initially
Promise.all(promises)
    .then((results) => {
        loadingRow.remove();

        // Populate the table with the results
        results.forEach((result, index) => {
            const row = table.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            
            cell1.textContent = `Promise ${index + 1}`;
            cell2.textContent = (performance.now() / 1000).toFixed(3); // Convert milliseconds to seconds with 3 decimal places
        });

        // Add a row for the total time
        const totalRow = table.insertRow(-1);
        const totalCell1 = totalRow.insertCell(0);
        const totalCell2 = totalRow.insertCell(1);

        totalCell1.textContent = 'Total';
        totalCell2.textContent = (performance.now() / 1000).toFixed(3);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
