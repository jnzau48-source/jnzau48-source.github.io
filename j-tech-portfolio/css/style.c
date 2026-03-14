/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', monospace;
}

body, html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
  color: #00ff00;
}

/* Matrix canvas full screen */
#matrix-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Panels container */
.panels-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
}

/* Panel style */
.panel {
  width: 80vw;
  max-width: 600px;
  height: 300px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid #00ff00;
  border-radius: 15px;
  margin: 40px 0;
  padding: 20px;
  text-align: center;
  color: #00ff00;
  transition: transform 0.8s ease, opacity 0.8s ease;
  opacity: 0.6;
}

/* Center panel active */
.panel.active {
  opacity: 1;
  transform: scale(1.1) translateZ(50px);
  border-color: #00ffff;
  box-shadow: 0 0 20px #00ffff;
}

/* Panel headings */
.panel h1 {
  font-size: 2em;
  background: linear-gradient(90deg, #00ff00, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

/* Subtitle for panel1 */
.subtitle {
  font-size: 1.2em;
  color: #00ffff;
}

/* Far-wall J-TECH logo */
#far-wall-logo {
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5em;
  color: #00ff00;
  opacity: 0.3;
  z-index: 0;
  text-shadow: 0 0 20px #00ff00;
}

