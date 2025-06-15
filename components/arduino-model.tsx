"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, RoundedBox } from "@react-three/drei"
import type * as THREE from "three"

export function ArduinoModel({ position, rotation, scale, ...props }: any) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale} {...props}>
      {/* Arduino Board Base */}
      <RoundedBox args={[2.7, 0.1, 2.1]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#006400" metalness={0.3} roughness={0.7} />
      </RoundedBox>

      {/* USB Connector */}
      <Box args={[0.5, 0.2, 0.3]} position={[-1.1, 0.1, 0.8]}>
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Power Jack */}
      <Box args={[0.3, 0.3, 0.4]} position={[-1.2, 0.1, -0.5]}>
        <meshStandardMaterial color="#000000" />
      </Box>

      {/* Digital Pins */}
      {Array.from({ length: 14 }, (_, i) => (
        <Box key={`digital-${i}`} args={[0.05, 0.3, 0.05]} position={[0.8, 0.15, -0.8 + i * 0.1]}>
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </Box>
      ))}

      {/* Analog Pins */}
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={`analog-${i}`} args={[0.05, 0.3, 0.05]} position={[-0.8, 0.15, -0.3 + i * 0.1]}>
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </Box>
      ))}

      {/* Microcontroller */}
      <Box args={[0.8, 0.15, 0.8]} position={[0, 0.08, 0.2]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>

      {/* LED */}
      <Box args={[0.1, 0.05, 0.1]} position={[0.3, 0.08, -0.3]}>
        <meshStandardMaterial color="#ff4444" emissive="#ff0000" emissiveIntensity={0.5} />
      </Box>

      {/* Reset Button */}
      <Box args={[0.15, 0.1, 0.15]} position={[0.8, 0.08, 0.8]}>
        <meshStandardMaterial color="#ff0000" />
      </Box>
    </group>
  )
}
