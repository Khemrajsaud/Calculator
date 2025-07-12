# React Calculator App

A modern, responsive calculator built with React JS that performs basic arithmetic operations.

## Features

- ✅ Basic arithmetic operations (+, -, *, /)
- ✅ Clear functionality
- ✅ Decimal point support
- ✅ Memory persistence (saves last result in localStorage)
- ✅ Division by zero protection
- ✅ Modern, dark theme UI
- ✅ Responsive design

## Project Structure

```
react-calculator/
├── index.html          # Main HTML file with React CDN setup
├── Calculator.js       # React Calculator component
├── index.js           # React app entry point
├── style.css          # Styling for the calculator
├── package.json       # Project dependencies and scripts
└── README.md         # This file
```

## How to Run

1. Open `index.html` in a web browser, or
2. Use a local server:
   ```bash
   # Using Python (if installed)
   python -m http.server 3000
   
   # Using Node.js live-server (if installed)
   npx live-server --port=3000
   
   # Using the npm script
   npm start
   ```

3. Navigate to `http://localhost:3000` in your browser

## Usage

- Click number buttons (0-9) to input numbers
- Click operator buttons (+, -, *, /) to perform operations
- Click "=" to calculate the result
- Click "C" to clear the display
- Click "." to add decimal points
- The calculator remembers your last result even after refreshing the page

## Technology Stack

- **React 18** - UI library
- **HTML5** - Structure
- **CSS3** - Styling with modern design
- **JavaScript ES6+** - Logic and functionality
- **localStorage** - Data persistence

## Browser Support

Works in all modern browsers that support ES6 and React 18.

## License

MIT License - feel free to use and modify as needed.