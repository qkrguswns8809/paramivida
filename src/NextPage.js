
import './App.css';
import { useState } from 'react';
import NextPage2 from './NextPage2';
import background from "./images/background.jpg";

function NextPage() {
  const [position, setPosition] = useState({
    top: 60,
    left: 60
  });

  const [escaped, setEscaped] = useState(false);
  const [correct, setCorrect] = useState(false);

  const moveButton = () => {
    setEscaped(true);

    setPosition({
      top: Math.random() * 70 + 10,
      left: Math.random() * 70 + 10
    });
  };

  if (correct) {
    return <NextPage2 />;
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
      <h1>Te vas a casar con tu novio Hyeonjun?</h1>

      <div style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <button onClick={() => setCorrect(true)}>
          Sí
        </button>

        <button
          onMouseEnter={moveButton}
          style={escaped ? {
            position: "fixed",
            top: `${position.top}%`,
            left: `${position.left}%`,
            transform: "translate(-50%, -50%)"
          } : {
            position: "static"
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default NextPage;
