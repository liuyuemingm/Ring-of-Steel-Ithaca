import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
// https://codesandbox.io/s/gltf-animations-re-used-k8phr?file=/src/Model.js:372-442
import *  as THREE from 'three'

const Model = props => {
  const model = useLoader(
    GLTFLoader,
    props.path
  );

  const mixer = new THREE.AnimationMixer(model.scene);
  let modelReady = false;
  let actions = [];
  let activeAction;
  let lastAction;

  actions.push(mixer.clipAction())

  if (model.animations.length > 0) {
    const action = mixer.clipAction;
    model.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play()
    })
  }

  useFrame((scene, delta) => {
    mixer?.update(delta)
  })

  console.log(props.path, model)

  // model.scene.traverse(child => {
  //   if (child.isMesh) {
  //     child.castShadow = true;
  //   }
  // })

  return (
    <primitive
      object={model.scene}
      scale={props.scale} />
  )
}

export default Model;