import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { EffectComposer, DepthOfField, Bloom, Noise } from '@react-three/postprocessing'

import Testplant from './Testplant'

export const Plant: React.FC = () => {
  function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 2.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[2.2, 0, 0]} /> */}

      <Testplant></Testplant>

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1} height={480} />
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={500} />
        <Noise opacity={0.2} premultiply />
      </EffectComposer>
    </Canvas>
  )
}