import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const keys = [
    "AC", "C", "%","/", 
    "7","8","9","*", 
    "4","5","6","-", 
    "1","2","3","+",
    "0",".", "=",
  ];

  const handleClick = (value) => {
    switch(value) {
      case 'AC':
        setInput('');
        setResult('');
        break;
      case 'C':
        setInput(input.slice(0, -1));
        break;
      case '=':
        handleCalculate();
        break;
      default:
        setInput(input + value);
    }
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            value={result}
            readOnly
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {keys.map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`bg-cyan-300 text-black font-bold p-4 rounded ${key === '=' && 'col-span-2'}`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
