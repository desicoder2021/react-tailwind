import React from "react";

function App() {
	return (
		<>
			<div className="container">
      <h1>Timer</h1>
      <span>0 mins </span>
      <span>0 secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
		</>
	);
}

export default App;
