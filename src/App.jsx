import { Canvas } from "@react-three/fiber";
import "./app.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas camera= {{
      fov: 64,
      position: [.3, 1.5, 2.3],
    }}>
      <Experience />
    </Canvas>
  );
}

export default App;
