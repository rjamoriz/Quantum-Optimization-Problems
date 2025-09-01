// This file contains functions related to optimization algorithms. 
// It processes the optimization data and prepares it for visualization.

async function fetchOptimizationResults() {
    const response = await fetch('./data/optimization-results.json');
    const data = await response.json();
    return data;
}

function processOptimizationData(data) {
    // Assuming data is an array of results
    return data.map(result => ({
        x: result.local_min_x,
        y: result.local_min_y,
        value: result.local_min_value
    }));
}

export { fetchOptimizationResults, processOptimizationData };