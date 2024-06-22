import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import zustandLogo from "/zustand.png";
import "./App.scss";
import Counter from "./Counter";

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://docs.pmnd.rs/zustand/getting-started/introduction"
          target="_blank"
        >
          <img src={zustandLogo} className="logo zustand" alt="Zustand logo" />
        </a>
      </div>

      <h1>Vite + React + Zustand</h1>

      <div className="card">
        <Counter />

        <p
          onClick={() => setShowVideo(!showVideo)}
          className="tutorial-display"
        >
          Click to {showVideo ? "hide" : "display"} the tutorial on which th
          current app is based on.
        </p>

        <div
          className="video-container"
          style={{
            display: showVideo ? "block" : "none",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_ngCLZ5Iz-0?si=NanhFEAx_lcDdqZ_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
