import React, { Suspense, useRef } from 'react'
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import Orbit from './Orbit';
import Floor from './Floor';
import Box from './Box';
import Model from './Model';
import Bulb from './Bulb';
import { Plane } from '@react-three/drei';
// import { Model } from './Parry_1'
import { Slider } from '@material-ui/core'
import PlayAni from './PlayAni';
import { Vector3 } from 'three';
import PlayButton from './PlayButton';
import { Button } from '@material-ui/core';



function Drills() {
  return (
    <div style={{ height: '85vh', width: '100vw', backgroundColor: 'lightgrey' }}>
      <Canvas
        onCreated={({ camera }) => camera.lookAt(0, 5, 0)}
        shadows
        camera={{ position: [2, 5, 10], far: 1000 }}
      >

        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Model scale={new Array(3).fill(10)}
            path='models/animationTest.glb' />
        </Suspense>
        <ambientLight intensity={0.3} shadow />

        <hemisphereLight groundColor="purple" shadow />

        {/* <Slider min={0.5} max={1} step={0.01} value={0.5} /> */}
        <Floor />
        {/* https://www.youtube.com/watch?v=fdtqqyeKRJk&t=2251s*/}
        {/* <Box /> */}
        <Orbit />
        {/* <PlayAni /> */}
        {/* <Model path='mannequin_anatomy_aid_free_download/scene.gltf' /> */}
        {/* <Bulb /> */}
      </Canvas>

    </div >

  )
}

export default Drills
