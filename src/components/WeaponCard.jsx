import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

  root: {
    position: 'relative',
    width: '100%',
    margin: '0 0 15px',
    padding: '0',
    background: 'black',
    overflow: 'hidden',
    breakInside: 'avoid',
    transition: '0.5s',
    fontSize: '16px',
    color: 'white',

    '&:hover': {

      '& $content': {
        // transition: '0.3s',
        // visibility: 'visible'
        opacity: '1',
      },
    },

  },

  content: {
    transition: '0.5s',
    // visibility: 'hidden'
    opacity: '0'
  }



}));


function WeaponCard(props) {

  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="weapon"
        image={props.path}
      >
      </CardMedia>
      <Paper className={classes.content} style={{ bottom: '0', position: 'absolute', width: '100%' }}>
        <h3 style={{ margin: '5px' }}>
          Weapon 1
        </h3>
        <p style={{ margin: '10px 0 0 0' }}>
          link1
          link2
        </p>
      </Paper>
    </Card >

  )
}


export default WeaponCard
