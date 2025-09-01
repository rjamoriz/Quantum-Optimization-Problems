# Optimization Visualization App

This project is designed to visualize optimization results using interactive charts and graphs. It leverages Apache E-charts for enhanced visualizations, providing a user-friendly interface to explore optimization data.

## Project Structure

The project consists of the following files and directories:

- **src/**: Contains the source files for the application.
  - **index.html**: The main HTML file that serves as the entry point for the application.
  - **js/**: Contains JavaScript files for application logic.
    - **app.js**: Initializes the application and sets up event listeners.
    - **optimization.js**: Contains functions related to optimization algorithms and processes optimization data.
    - **visualization.js**: Responsible for creating visualizations using the processed data, integrating Apache E-charts.
  - **css/**: Contains styles for the application.
    - **styles.css**: Defines the layout and appearance of the HTML elements.
  - **data/**: Holds the optimization results in JSON format.
    - **optimization-results.json**: Contains the optimization results used for visualization.

- **assets/**: Contains external libraries and assets.
  - **echarts/**: Directory for the Apache E-charts library.
    - **echarts.min.js**: Minified version of the Apache E-charts library.

- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd optimization-visualization-app
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Open the Application**: 
   Open `src/index.html` in a web browser to view the application.

## Usage Guidelines

- The application visualizes optimization results stored in `optimization-results.json`.
- Modify `visualization.js` to create various types of charts (e.g., line charts, bar charts) based on the optimization data.
- Use the Apache E-charts library to enhance the visual representation of the data.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.