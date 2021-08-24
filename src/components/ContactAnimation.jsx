
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
    width: '22%',
    transition: '0.3s',
    '&:hover': {
      top: '-10%',
      left: '85%',
      width: '30%',
      transform: 'rotate(-135deg)'
    },
  },

  armorer: {
    position: 'absolute',
    top: '48%',
    left: '105%',
    transform: 'translate(-50%, -50%) rotate(90deg)',
    width: '17%',
    transition: '0.3s',
    '&:hover': {
      top: '24%',
      left: '98%',
      width: '23%',
      transform: 'rotate(0deg)'
    },
  },

  pupil: {
    position: 'absolute',
    top: '51%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '14%',
    transition: '0.2s'
  }

}));


function ContactAnimation() {

  const classes = useStyles();
  // const ball = document.getElementById('pupil');
  const ball = useRef(null)

  function roll(e) {
    var x = e.clientX / window.innerWidth * 90 - 45;
    var y = e.clientY / window.innerHeight * 90 - 45;
    var deg = Math.abs(x) + Math.abs(y);

    // ball.left = x;
    // ball.top = y;
    ball.current.style.transform = "rotate3d(-" + y + ",-" + x + ",0," + deg + "deg)";
    console.log(ball.current.style)

  };



  return (
    <div className={classes.root} id='root' onMouseMove={(e) => roll(e)} >
      <div className={classes.body}>

        <img src='/images/contact-ringofsteel.png' className={classes.ring} />
        <img src='/images/contact-eyeframe.png' className={classes.eyeframe} />
        <img src='/images/contact-pupil.png' className={classes.pupil} ref={ball} />

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
