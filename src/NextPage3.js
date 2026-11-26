
import './App.css';
import background from "./images/background.jpg";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

function NextPage3() {

  const images = [img1, img2, img3, img4, img5];

  const rotations = [-7, 4, -3, 6, -5];

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

      <h1 style={{
        fontSize: "45px",
        color: "#ffffff",
        textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
        marginBottom: "50px"
      }}>
        ¡Feliz Cumpleaños!!!
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
        flexWrap: "wrap",
        padding: "20px"
      }}>

        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "12px 12px 35px 12px",
              transform: `rotate(${rotations[index]}deg)`,
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "rotate(0deg) scale(1.1)";
              e.currentTarget.style.zIndex = "10";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                `rotate(${rotations[index]}deg)`;
              e.currentTarget.style.zIndex = "1";
            }}
          >
<img
  src={image}
  alt={`Memories ${index + 1}`}
  style={{
    width: "180px",
    height: "230px",
    objectFit: "cover",
    display: "block"
  }}
/>

          </div>
        ))}

      </div>


       <h3 style={{
        color: "white",
        fontSize: "25px",
        marginTop: "40px",
        textShadow: "2px 2px 5px rgba(0,0,0,0.5)"
      }}>
        Gracias por ser mi novia y por dejarme formar parte de tu vida
        
      </h3>
      <h2 style={{
        color: "white",
        fontSize: "25px",
        marginTop: "40px",
        textShadow: "2px 2px 5px rgba(0,0,0,0.5)"
      }}>
        ❤️ Te quiero mucho 사랑해 루시아 ❤️
      </h2>

    </div>
  );
}

export default NextPage3;
