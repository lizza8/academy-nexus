"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei"
import type * as THREE from "three"

function FloatingShape({
  position,
  color,
  shape,
}: { position: [number, number, number]; color: string; shape: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
        {shape === "sphere" && <sphereGeometry args={[0.6, 32, 32]} />}
        {shape === "torus" && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
        <meshStandardMaterial
          color={color}
          wireframe={hovered}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.1}
        />
      </mesh>
    </Float>
  )
}

function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="/fonts/Inter_Bold.json"
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {"LEARN"}
        <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.3} />
      </Text3D>
    </Center>
  )
}

export function Scene3D() {
  return (
    <div className="w-full h-[600px] rounded-3xl overflow-hidden glass-panel border-2 border-primary/30">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={["#0a0a15"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

        <AnimatedText />

        <FloatingShape position={[-3, 2, 0]} color="#7c3aed" shape="box" />
        <FloatingShape position={[3, -1, 0]} color="#06b6d4" shape="sphere" />
        <FloatingShape position={[0, -2, -2]} color="#ec4899" shape="torus" />
        <FloatingShape position={[-2, -1, 2]} color="#8b5cf6" shape="box" />
        <FloatingShape position={[2, 2, -1]} color="#06b6d4" shape="sphere" />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
