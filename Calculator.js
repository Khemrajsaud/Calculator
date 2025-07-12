const Calculator = () => {
  const { useState, useEffect } = React;
  const [display, setDisplay] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');
  const [isNewInput, setIsNewInput] = useState(false);

  // Load saved value from localStorage on component mount
  useEffect(() => {
    const savedValue = localStorage.getItem('calculatorValue');
    if (savedValue) {
      setDisplay(savedValue);
    }
  }, []);

  // Save display value to localStorage whenever it changes
  useEffect(() => {
    if (display) {
      localStorage.setItem('calculatorValue', display);
    }
  }, [display]);

  const appendValue = (value) => {
    if (isNewInput) {
      setDisplay(value);
      setIsNewInput(false);
    } else {
      setDisplay(prevDisplay => prevDisplay + value);
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setPreviousValue('');
    setOperation('');
    setIsNewInput(false);
    localStorage.removeItem('calculatorValue');
  };

  const handleOperator = (op) => {
    if (display === '') return;
    
    if (previousValue !== '' && operation !== '' && !isNewInput) {
      calculateResult();
    }
    
    setPreviousValue(display);
    setOperation(op);
    setIsNewInput(true);
  };

  const calculateResult = () => {
    if (previousValue === '' || operation === '' || display === '') return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        if (current === 0) {
          alert('Cannot divide by zero');
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPreviousValue('');
    setOperation('');
    setIsNewInput(true);
  };

  const handleNumber = (num) => {
    appendValue(num);
  };

  const handleDecimal = () => {
    if (isNewInput) {
      setDisplay('0.');
      setIsNewInput(false);
    } else if (display.indexOf('.') === -1) {
      appendValue('.');
    }
  };

  return (
    <div className="calculator">
      <input 
        type="text" 
        id="display" 
        value={display} 
        readOnly 
        placeholder="0"
      />
      <div className="buttons">
        <button className="clear" onClick={clearDisplay}>C</button>
        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button className="operator" onClick={() => handleOperator('/')}>/</button>
        
        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button className="operator" onClick={() => handleOperator('*')}>*</button>
        
        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>
        <button className="operator" onClick={() => handleOperator('-')}>-</button>
        
        <button onClick={() => handleNumber('0')}>0</button>
        <button onClick={handleDecimal}>.</button>
        <button className="equal" onClick={calculateResult}>=</button>
        <button className="operator" onClick={() => handleOperator('+')}>+</button>
      </div>
    </div>
  );
};