// React App Entry Point
const { useState, useEffect } = React;

const App = () => {
    return (
        <div>
            <Calculator />
        </div>
    );
};

// Render the React App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
