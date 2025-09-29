// src/components/MineViewer.jsx

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  // Make sure this path points to your model in the /public folder
  const { scene } = useGLTF('scene.gltf');
  return <primitive object={scene} scale={30} />; // You can adjust the scale here if needed
}

const MineViewer = () => {
  return (
    <Canvas
      style={{ background: '#333333' }} // A slightly darker gray
      // --- Step 2: Adjust Camera Position ---
      // Experiment with these values. Increase the last number (Z) to move the camera further away.
      camera={{ position: [0, 50, 10], fov: 50 }}
    >
      {/* --- Step 1: Add Lighting --- */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 20, 5]} intensity={2} />
      
      {/* --- Step 3: Add Debugging Helpers (Optional but very helpful) --- */}

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
};

export default MineViewer;