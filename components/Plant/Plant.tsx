/* eslint-disable react-hooks/rules-of-hooks */
import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { EffectComposer, DepthOfField, Bloom, Noise } from '@react-three/postprocessing'
import { ContactShadows, PresentationControls } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'

import Testplant from './Testplant'

export const Plant: React.FC = () => {

  function renderPlant() {
    const PlantModel = () => <Testplant castShadow position={[0, -2, 0]} />
    return (
      <PlantModel />
    )
  }
  
  return (
    <Canvas 
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 3, 7] }} 
      dpr={[1, 2]}
      flat={true}
    >
          <PresentationControls
            global={true}
            snap={false}
            speed={1}
            zoom={1} 
            rotation={[0, 0, 0]}
            polar={[0, 0]}
            azimuth={[-Infinity, Infinity]}
            config={{ mass: 0.5, tension: 50, friction: 16}}
          >
            <Suspense fallback={<span>Loading...</span>}>

            {renderPlant()}
            {/* <Bigtree scale={[0.5, 0.5, 0.5]} position={[-5, -1, -5]} castShadow /> */}
            
            <ContactShadows
              frames={10}
              position={[0, -1.05, 0]}
              scale={10}
              blur={10}
              far={1.2}
            />
            
            </Suspense>
          


          </PresentationControls>
        <EffectComposer>
          {/* <Bloom luminanceThreshold={2} luminanceSmoothing={1.9} height={600} /> */}
          <Noise opacity={0.1} premultiply />
        </EffectComposer>

        <ambientLight />
        <pointLight position={[10, 30, 10]} intensity={0.5} />
        <pointLight position={[32, 16, 10]} color={'#e4a227'}  intensity={0.8} />
    </Canvas>
  )
}