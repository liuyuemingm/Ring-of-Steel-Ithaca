import React from 'react'
import PlayAni from './PlayAni'
import { Button } from '@material-ui/core'
import * as THREE from 'three'
// import { sayHi } from './Model'
import ThreeScene from './ThreeScene'
// import testing from './testing'

const PlayButton = props => {

  return (
    <Button
      onClick={() => { console.log(document.getElementsByTagName(ThreeScene)) }}
      style={{
        position: 'absolute',
        bottom: '20vh',
        left: '40vw',
        background: 'purple'
      }}>
      play button
    </Button>
  )
}

export default PlayButton
