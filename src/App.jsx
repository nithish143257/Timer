import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      
      <div className="time-display">
        {Math.floor(time / 3600).toString().padStart(2, '0')}:
        {Math.floor((time % 3600) / 60).toString().padStart(2, '0')}:
        {(time % 60).toString().padStart(2, '0')}
      </div>
      <button className="start" onClick={handleStart}>Start</button>
      <button className="stop" onClick={handleStop}>Stop</button>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};
export default App