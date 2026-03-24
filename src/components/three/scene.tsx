"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import { agents, type AgentId } from "@/lib/agents";
import { useAgentState } from "@/components/providers/agent-provider";

function AgentBody({ id, color, active }: { id: AgentId; color: string; active: boolean }) {
  const materialProps = {
    color,
    emissive: color,
    emissiveIntensity: active ? 2.2 : 1.15
  };

  if (id === "forge") {
    return (
      <>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial {...materialProps} roughness={0.2} metalness={0.45} />
        </mesh>
        <mesh position={[0, 0.9, 0]} scale={[0.42, 0.42, 0.42]}>
          <sphereGeometry args={[0.55, 24, 24]} />
          <meshStandardMaterial {...materialProps} roughness={0.25} metalness={0.35} />
        </mesh>
      </>
    );
  }

  if (id === "synth") {
    return (
      <>
        <mesh rotation={[0.35, 0.3, 0]}>
          <torusKnotGeometry args={[0.48, 0.16, 128, 18, 2, 3]} />
          <meshStandardMaterial {...materialProps} roughness={0.18} metalness={0.15} />
        </mesh>
        <mesh position={[0, -0.9, 0]} scale={[0.85, 0.12, 0.85]}>
          <torusGeometry args={[0.92, 0.05, 12, 64]} />
          <meshStandardMaterial {...materialProps} transparent opacity={0.6} />
        </mesh>
      </>
    );
  }

  if (id === "curator") {
    return (
      <>
        <mesh>
          <boxGeometry args={[1.05, 1.05, 1.05]} />
          <meshStandardMaterial {...materialProps} roughness={0.3} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]} scale={[1.35, 1.35, 1.35]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial {...materialProps} transparent opacity={0.16} wireframe />
        </mesh>
      </>
    );
  }

  return (
    <>
      <mesh>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial {...materialProps} roughness={0.16} metalness={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
        <torusGeometry args={[1.1, 0.06, 12, 80]} />
        <meshStandardMaterial {...materialProps} transparent opacity={0.65} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}>
        <torusGeometry args={[1.1, 0.06, 12, 80]} />
        <meshStandardMaterial {...materialProps} transparent opacity={0.4} />
      </mesh>
    </>
  );
}

function AgentMesh({
  id,
  color,
  position,
  active,
  offset,
  staticMode
}: {
  id: AgentId;
  color: string;
  position: [number, number, number];
  active: boolean;
  offset: number;
  staticMode: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const auraRef = useRef<THREE.Mesh>(null);
  const { setActiveAgent } = useAgentState();

  useFrame((state) => {
    if (staticMode) {
      return;
    }

    if (!groupRef.current || !auraRef.current) {
      return;
    }

    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.35 + offset;
    groupRef.current.rotation.x = Math.sin(t * 0.4 + offset) * 0.12;
    groupRef.current.position.y = position[1] + Math.sin(t + offset) * 0.12;
    auraRef.current.scale.setScalar(active ? 1.65 : 1.15 + Math.sin(t * 1.3 + offset) * 0.05);
  });

  return (
    <Float
      speed={staticMode ? 0 : 1.8}
      rotationIntensity={staticMode ? 0 : 0.35}
      floatIntensity={staticMode ? 0 : 0.6}
    >
      <group
        ref={groupRef}
        onClick={() => setActiveAgent(id)}
        onPointerOver={(event) => {
          event.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
        position={position}
        scale={active ? 1.15 : 0.95}
      >
        <group>
          <AgentBody active={active} color={color} id={id} />
        </group>
        <mesh ref={auraRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
          <ringGeometry args={[1.08, 1.35, 64]} />
          <meshBasicMaterial color={color} transparent opacity={active ? 0.55 : 0.18} />
        </mesh>
      </group>
    </Float>
  );
}

export function AgentScene({ staticMode = false }: { staticMode?: boolean }) {
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
            id={agent.id}
            offset={index}
            position={agent.position}
            staticMode={staticMode}
          />
        ))}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
          <circleGeometry args={[6.5, 48]} />
          <meshStandardMaterial color="#0d1220" emissive="#08111e" emissiveIntensity={0.2} />
        </mesh>
        <EffectComposer>
          <Bloom luminanceThreshold={0.18} intensity={0.7} mipmapBlur />
        </EffectComposer>
        {!staticMode ? (
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={1.8} minPolarAngle={0.8} />
        ) : null}
      </Canvas>
    </div>
  );
}
