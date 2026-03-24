"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import { agents } from "@/lib/agents";
import { useAgentState } from "@/components/providers/agent-provider";

function AgentMesh({
  color,
  position,
  active,
  offset
}: {
  color: string;
  position: [number, number, number];
  active: boolean;
  offset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.y = state.clock.elapsedTime * 0.35 + offset;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + offset) * 0.12;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={active ? 1.15 : 0.95}>
        <icosahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 2.1 : 1.1} />
      </mesh>
    </Float>
  );
}

export function AgentScene() {
  const { activeAgent } = useAgentState();

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 2.3, 8.5], fov: 42 }}>
        <color attach="background" args={["#05060a"]} />
        <fog attach="fog" args={["#05060a", 8, 18]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[0, 8, 6]} intensity={1.6} color="#ffffff" />
        <pointLight position={[0, 2, 0]} intensity={1.2} color="#7c3aed" />
        {agents.map((agent, index) => (
          <AgentMesh
            key={agent.id}
            active={activeAgent === agent.id}
            color={agent.accent}
            offset={index}
            position={agent.position}
          />
        ))}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
          <circleGeometry args={[6.5, 48]} />
          <meshStandardMaterial color="#0d1220" emissive="#08111e" emissiveIntensity={0.2} />
        </mesh>
        <EffectComposer>
          <Bloom luminanceThreshold={0.18} intensity={0.7} mipmapBlur />
        </EffectComposer>
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={1.8} minPolarAngle={0.8} />
      </Canvas>
    </div>
  );
}
