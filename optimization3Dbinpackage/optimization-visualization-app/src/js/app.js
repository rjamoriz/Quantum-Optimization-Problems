// This file initializes the application and sets up event listeners.
// It handles the loading of data and the initialization of visualizations.

document.addEventListener('DOMContentLoaded', function() {
    // Load optimization results from JSON file
    fetch('data/optimization-results.json')
        .then(response => response.json())
        .then(data => {
            // Initialize visualizations with the loaded data
            initializeVisualizations(data);
        })
        .catch(error => console.error('Error loading optimization results:', error));
});

// Function to initialize visualizations
function initializeVisualizations(data) {
    // Call the function from visualization.js to create charts
    createEChartsVisualization(data);
}