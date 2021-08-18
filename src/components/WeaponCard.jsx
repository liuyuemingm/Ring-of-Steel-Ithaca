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
    // position: 'relative',
    // width: '100%',
    margin: '15px 10px',
    padding: '0',
    background: 'black',
    borderRadius: '15px',
    // overflow: 'hidden',
    // breakInside: 'avoid',
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

const styles = {
  size0: {
    gridRowEnd: 'span 28'
  },
  size1: {
    gridRowEnd: 'span 28'
  },
  size2: {
    gridRowEnd: 'span 33'
  },
  size3: {
    gridRowEnd: 'span 40'
  },
}
function WeaponCard(props) {

  const classes = useStyles();

  return (

    <Card className={classes.root} style={{ ...styles[props.size] }}>
      <CardMedia image={props.path} style={{ paddingBottom: '150%', height: '100%' }} />
      {/* <image src={props.path} /> */}
      <div className={classes.content} style={{ position: 'relative', bottom: '70px' }}>
        <h3 style={{ margin: '5px' }}>
          {props.path}
        </h3>
        <p style={{ margin: '10px 0 0 0' }}>
          link1
          link2
        </p>
      </div>
    </Card >

  )
}


export default WeaponCard
