
import React, { useRef } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WeaponCard from './WeaponCard'
import { Paper } from '@material-ui/core';

const appHeight = '64';

const useStyles = makeStyles((theme) => ({

  root: {
    height: `calc(100vh - ${appHeight}px)`,
    textAlign: 'center',
    position: 'relative',
    background: '#222222'
  },

  body: {
    // background: '#555555',
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  eyeframe: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%'
  },

  ring: {
    position: 'relative',
    width: '400px',
    animation: 'rotating 60s linear infinite',
  },

  treasurer: {
    position: 'absolute',
    top: '50%',
    left: '-7%',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
    width: '34%',
    transition: '0.3s',
    '&:hover': {
      top: '30%',
      left: '-35%',
      width: '45%',
      transform: 'rotate(-30deg)'
    },
  },

  president: {
    position: 'absolute',
    top: '6%',
    left: '6%',
    transform: 'translate(-50%, -50%) ',
    width: '29%',
    transition: '0.3s',
    '&:hover': {
      top: '-12%',
      left: '-15%',
      width: '36%',
      transform: 'rotate(45deg)',
    },
  },

  campusgroups: {
    position: 'absolute',
    top: '-5%',
    left: '50%',
    transform: 'translate(-50%, -50%) ',
    width: '19%',
    transition: '0.3s',
    '&:hover': {
      top: '-15%',
      left: '50%',
      width: '30%',
    },
  },

  vicepresident: {
    position: 'absolute',
    top: '7%',
    left: '91%',
    transform: 'translate(-50%, -50%) ',
    width: '35%',
    transition: '0.3s',
    '&:hover': {
      top: '-8%',
      left: '85%',
      width: '40%',
      transform: 'rotate(-135deg)'
    },
  },

  armorer: {
    position: 'absolute',
    top: '48%',
    left: '105%',
    transform: 'translate(-50%, -50%) rotate(90deg)',
    width: '32%',
    transition: '0.3s',
    '&:hover': {
      top: '24%',
      left: '88%',
      width: '43%',
      transform: 'rotate(0deg)'
    },
  },

  eyeball: {
    position: 'absolute',
    top: '51%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '14%',
    transition: '0.2s',
    transformOrigin: '50% 50%'
  }

}));


function ContactAnimation() {

  const classes = useStyles();
  // const ball = document.getElementById('pupil');
  const eyeball = useRef(null)

  function roll(e) {
    var clientX = e.clientX;
    var clientY = e.clientY;

    if (window.innerWidth < 600) {
      var rotateX = clientX / window.innerWidth - 0.5;
    } else {
      var rotateX = (clientX - 200) / (window.innerWidth - 200) - 0.5;
    }

    var rotateY = -(clientY - 64) / (window.innerHeight - 64) + 0.5;
    var deg = Math.sqrt((Math.abs(rotateX) + Math.abs(rotateY))) * 45;
    var translateX = -50 + rotateX * 25 + '%';
    var translateY = -50 - rotateY * 25 + '%';


    eyeball.current.style.transform =
      "translate(" + translateX + ", " + translateY + ") rotate3d(" + rotateY + "," + rotateX + ",0," + deg + "deg)";
    console.log(window.innerWidth)

  };



  return (
    <div className={classes.root} id='root' onMouseMove={(e) => roll(e)} >
      <div className={classes.body}>

        <img src='/images/contact-ringofsteel.png' className={classes.ring} />
        <img src='/images/contact-eyeframe.png' className={classes.eyeframe} />
        <img src='/images/contact-pupil.png' className={classes.eyeball} ref={eyeball} />

        <img src='/images/contact-treasurer.png' className={classes.treasurer} />
        <img src='/images/contact-president.png' className={classes.president} />
        <img src='/images/contact-campusgroups.png' className={classes.campusgroups} />
        <img src='/images/contact-vicepresident.png' className={classes.vicepresident} />
        <img src='/images/contact-armorer.png' className={classes.armorer} />

      </div>
    </div>
  )
}

export default ContactAnimation
