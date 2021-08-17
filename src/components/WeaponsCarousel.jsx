import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WeaponCard from './WeaponCard'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0',
    padding: '20px',
    columns: '6',
    background: 'purple',

    // responsive
    '@media(max-width:1350px)': {
      columns: '5',
    },
    '@media(max-width:1100px)': {
      columns: '4',
    },
    '@media(max-width:900px)': {
      columns: '3',
    },
    '@media(max-width:500px)': {
      columns: '2',
    },
  },
}));

function WeaponsCarousel() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={3} style={{ height: "520px" }}>hithere1</Paper>
      <Paper square elevation={3} style={{ height: "520px" }}>hithere2</Paper>
      <Paper square elevation={3} style={{ height: "520px" }}>hithere3</Paper>
      <Paper square elevation={3} style={{ height: "520px" }}>hithere4</Paper>
      <Paper square elevation={3} style={{ height: "520px" }}>hithere5</Paper>
      <Paper square elevation={3} style={{ height: "520px" }}>hithere6</Paper> */}
      <WeaponCard path="/images/weapon1.jpg" />
      <WeaponCard path="/images/weapon2.jpg" />
      <WeaponCard path="/images/weapon3.jpg" />
      <WeaponCard path="/images/weapon4.jpg" />
      <WeaponCard path="/images/weapon5.jpg" />
      <WeaponCard path="/images/weapon6.jpg" />
      <WeaponCard path="/images/weapon7.jpg" />
      <WeaponCard path="/images/weapon8.jpg" />
      <WeaponCard path="/images/weapon9.jpg" />
      <WeaponCard path="/images/weapon10.jpg" />
      <WeaponCard path="/images/weapon1.jpg" />
      <WeaponCard path="/images/weapon2.jpg" />
      <WeaponCard path="/images/weapon3.jpg" />
      <WeaponCard path="/images/weapon4.jpg" />



    </div>
  )
}

export default WeaponsCarousel
