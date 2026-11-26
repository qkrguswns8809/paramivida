
import './App.css';
import { useState } from 'react';
import NextPage3 from './NextPage3';
import background from "./images/background.jpg";

function NextPage2() {
  const [position, setPosition] = useState(null);
  const [correct, setCorrect] = useState(false);

  const moveButton = () => {
    setPosition({
      top: Math.random() * 70 + 10,
      left: Math.random() * 70 + 10
    });
  };

  if (correct) {
    return <NextPage3 />;
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1>Seguro?</h1>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "30px"
      }}>
        <button onClick={() => setCorrect(true)}>
          Sí
        </button>

        <button
          onMouseEnter={moveButton}
          style={position ? {
            position: "fixed",
            top: `${position.top}%`,
            left: `${position.left}%`,
            transform: "translate(-50%, -50%)",
          } : {}}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default NextPage2;
