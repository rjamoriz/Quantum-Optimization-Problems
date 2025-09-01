// This file is responsible for creating visualizations using Apache E-charts based on the optimization results.

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the chart
    var myChart = echarts.init(document.getElementById('main-chart'));

    // Fetch optimization results from the JSON file
    fetch('../data/optimization-results.json')
        .then(response => response.json())
        .then(data => {
            // Process the data for visualization
            const xData = data.map(item => item.x);
            const yData = data.map(item => item.y);
            const values = data.map(item => item.value);

            // Specify the chart options
            var option = {
                title: {
                    text: 'Optimization Results'
                },
                tooltip: {
                    trigger: 'item'
                },
                xAxis: {
                    type: 'category',
                    data: xData,
                    name: 'X-axis'
                },
                yAxis: {
                    type: 'value',
                    name: 'Y-axis'
                },
                series: [{
                    name: 'Function Value',
                    type: 'line',
                    data: values,
                    smooth: true,
                    itemStyle: {
                        color: '#5470C6'
                    }
                }]
            };

            // Set the options and render the chart
            myChart.setOption(option);
        })
        .catch(error => console.error('Error fetching optimization results:', error));
});