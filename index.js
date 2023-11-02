

document.addEventListener('DOMContentLoaded', function() {
    const fetchBtn = document.getElementById('fetchBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Existing event listeners
    fetchBtn.addEventListener('click', fetchData);
    clearBtn.addEventListener('click', clearOutput);

    // Hover effect for fetchBtn
    fetchBtn.addEventListener('mouseover', function() {
        fetchBtn.style.backgroundColor = '#eee';  // Change background color on hover
    });
    fetchBtn.addEventListener('mouseout', function() {
        fetchBtn.style.backgroundColor = '';  // Reset background color on mouseout
    });

    // Hover effect for clearBtn
    clearBtn.addEventListener('mouseover', function() {
        clearBtn.style.backgroundColor = '#eee';  // Change background color on hover
    });
    clearBtn.addEventListener('mouseout', function() {
        clearBtn.style.backgroundColor = '';  // Reset background color on mouseout
    });
});

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Clear current rows

            // Append new rows based on fetched data
            data.forEach(item => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = item.id;
                row.insertCell(1).textContent = item.title;
                row.insertCell(2).textContent = item.completed ? 'Yes' : 'No';
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function clearOutput() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear rows
}
