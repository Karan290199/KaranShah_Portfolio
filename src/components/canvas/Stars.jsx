import React, { useRef, Suspense } from "react";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  console.log(sphere)
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
  })
  return (
    <group rotation={[0, 0, Math.PI/4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={"#f272c8"}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        ></PointMaterial>
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1], fov: 45, near: 0.1, far: 200}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
