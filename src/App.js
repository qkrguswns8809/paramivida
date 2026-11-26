
import './App.css';
import { useState } from 'react';
import NextPage from './NextPage';
import background from "./images/background.jpg";

function App() {
  const [year, setYear] = useState('2000');
  const [month, setMonth] = useState('1');
  const [day, setDay] = useState('1');
  const [correct, setCorrect] = useState(false);
  const [message, setMessage] = useState('');

  const checkBirthday = () => {
    if (year === '2005' && month === '11' && day === '27') {
      setCorrect(true);
    } else {
      setMessage('que? 너 바보야? XD');
    }
  };

  if (correct) {
    return <NextPage />;
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Introduce tu fecha de nacimiento</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {Array.from({ length: 30 }, (_, i) => 1995 + i).map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select value={day} onChange={(e) => setDay(e.target.value)}>
          {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <button onClick={checkBirthday}>
          Comprobar
        </button>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default App;
