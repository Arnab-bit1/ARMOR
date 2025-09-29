// src/components/MineViewer.js

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// This component will load your 3D model
// Make sure to place your .glb file in the /public folder of your project
function Model() {
  // The useGLTF hook makes loading glTF files easy
  const { scene } = useGLTF('/80001674-0000-f200-b63f-84710c7967bb.glb');
  return <primitive object={scene} />;
}

const MineViewer = () => {
  return (
    <Canvas
      style={{ background: '#272727', borderRadius: '8px' }}
      camera={{ position: [0, 50, 150], fov: 50 }} // Adjust camera position as needed
    >
      {/* Suspense is used to show a fallback while the model is loading */}
      <Suspense fallback={null}>
        {/* Basic lighting to make the model visible */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* The component that loads and displays your model */}
        <Model />

        {/* OrbitControls allow the user to rotate, pan, and zoom with the mouse */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default MineViewer;