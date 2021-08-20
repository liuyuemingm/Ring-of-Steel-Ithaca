
import React from 'react'
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
    width: '14%'
  }

}));


function ContactAnimation() {

  const classes = useStyles();
  // const ball = document.getElementById('pupil').style;

  // function roll(e) {
  //   var x = e.clientX * 10 / window.innerWidth + 45 + "%";
  //   var y = e.clientY * 10 / window.innerHeight + 45.5 + "%";

  //   ball.left = x;
  //   ball.top = y;
  //   ball.transform = "translate(-" + x + ",-" + y + ")";

  // };
  // onMouseMove={(e) => roll(e)}

  return (
    <div className={classes.root} id='root'>
      <div className={classes.body}>

        <img src='/images/contact-ringofsteel.png' className={classes.ring} />
        <img src='/images/contact-eyeframe.png' className={classes.eyeframe} />
        <img src='/images/contact-pupil.png' className={classes.pupil} id='pupil' />

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
