import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

function Introduction() {

  const classes = useStyles();

  return (
    <div
    // style={{
    //   height: "100vh",
    //   background: "url('/images/summer.jpg')",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   backgroundAttachment: "fixed",
    //   width: "calc(100vw-500px)"
    // }}
    >
      {/* <img src='/images/risleysummer.jpg' style={{ height: '100vh', minWidth: '100%', position: 'fixed', right: '0', bottom: '0', transform: '' }} /> */}
    </div>
  )
}

export default Introduction
