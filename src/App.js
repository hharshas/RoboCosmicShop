import {
  Backdrop,
  RoundedBox,
  ScrollControls,
  Scroll,
  Sparkles,
  Float,
  Ring
} from "@react-three/drei";
import { Robot } from "./components/Robot";
import { Robot_copernicus } from "./components/Robot_copernicus";

function App() {
  return (
    <>
      <color attach="background" args={["#333333"]} />

      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      
      <ScrollControls pages={6} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        <Robot_copernicus />
        <Sparkles size={2} scale={[10,10,10]} color = {'#fff'} ></Sparkles>

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
          <meshStandardMaterial color="#2a3a3f" />
        </Ring>
        </Float>
        
        <Scroll>{/* Canvas contents in here will scroll along */}
        </Scroll>
        <Scroll html style={{width: '100%'}}>
          {/* DOM contents in here will scroll along */}
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `65vh`,
              left: "50%",
              fontSize: "13em",
              transform: `translate(-50%,-50%)`,
            }}
          >
            ROBO
          </h1>

          <div className="row" style={{ position: "absolute", top: `132vh` }}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: "400px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto molestias veritatis velit voluptates atque neque dolorum quo pariatur, voluptas dignissimos, accusamus corrupti, minima nihil. Consequatur temporibus quos ratione asperiores! Temporibus, dolor itaque!
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `40px`, width: "540px" }}
            >
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: "440px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum aut voluptatibus ducimus officia quo perspiciatis recusandae libero assumenda sequi quae, veniam iusto nobis voluptate repellat reprehenderit, sapiente exercitationem fugit eos! Soluta.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Please Buy This Phast
          </h2>

          <button
            style={{
              position: "absolute",
              top: `590vh`,
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Buy now
          </button>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
