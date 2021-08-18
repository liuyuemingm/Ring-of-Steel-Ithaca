import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '200px',
    height: 'auto',
    maxHeight: '68px',
    margin: '10px',
    display: 'inline-block',
    justifyContent: 'flex-start',
    background: 'purple',
    textAlign: 'center',
    transition: '0.3s',
    color: 'white',
    fontSize: '16px',
    '& $h2': {
      visibility: 'visible'
    },
    '& $p': {
      visibility: 'hidden',
    },

    '&:hover': {
      width: '420px',
      maxHeight: '250px',
      display: 'inline',
      textAlign: 'center',
      '& $h2': {
        visibility: 'hidden',
        display: 'none',
      },
      '& $p': {
        visibility: 'visible',
        textAlign: 'left',
        padding: '20px',
        margin: '0',
      },

      '&:click': {
        width: '420px',
        height: '200px',
      }
    }
  },



}));


function GlossaryCard(props) {

  const classes = useStyles();

  return (

    <Paper elevation={3} className={classes.root} >
      {props.children}
      {/* <h2>Volte</h2>
      <p>A rotation about a central point, performed by leading with the foot opposite the direction being turned in and moving the other foot behind.
        Voltes are described by the foot leading the motion; a Volte right turns you left, and leaves your right foot in front afterwards.
        By default, a volte denotes a 90 degree rotation; A demi-volte is a 45 degree rotation, while a grande-volte is a 90 degree rotation.
        Performed correctly, voltes make it possible to rotate without losing balance. Voltes can also be used as evades, or to supplement binds.</p> */}
    </Paper>

  )
}

export default GlossaryCard
