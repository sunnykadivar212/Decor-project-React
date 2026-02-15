import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';

function AnimatedShape() {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#c9a961" : "#1a4d2e"}
          speed={2}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

const ThreeDVisualizer = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <AnimatedShape />
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDVisualizer;
