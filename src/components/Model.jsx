import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
// https://codesandbox.io/s/gltf-animations-re-used-k8phr?file=/src/Model.js:372-442
import *  as THREE from 'three'

const Model = props => {
  const model = useLoader(
    GLTFLoader,
    props.path
  )

  let mixer
  if (model.animations.length > 0) {
    mixer = new THREE.AnimationMixer(model.scene)
    model.animation.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play()
    })
  }

  useFrame((scene, delta) => {
    mixer?.update(delta)
  })

  console.log(props.path, model)
  model.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
    }
  })

  return (
    <primitive object={model.scene} />
  )
}

export default Model;