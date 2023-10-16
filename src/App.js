import React from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css';

const App = () => {
  const colors = [
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#33FFFF',
    '#FF33AA',
    '#33AAFF',
    '#FFAA33',
    '#33FFAA',
    '#AA33FF',
    '#FF3366',
    '#3366FF',
    '#FF6633',
    '#3366AA',
    '#6633FF',
    '#AA3366',
  ];

  return (
    <div>
      <h1 style={{textAlign: "center"}}> Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
