import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import GlossaryCard from './GlossaryCard';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    backgroundColor: '#252525',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({

  root: {
    backgroundColor: '#222222',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 60,
    '&$expanded': {
      minHeight: 60,
    },

  },
  content: {
    '&$expanded': {
      margin: '8px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    color: 'white',
    background: '#303030'
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  title0: {
    margin: '7px 30px 0',
    width: '10px',
    position: 'absolute',
    left: '65px'
  },
  title1: {
    margin: '7px 30px 0',
    width: '10px',
    position: 'absolute',
    left: '125px'
  },
  title2: {
    margin: '7px 30px 0',
    width: '10px',
    position: 'absolute',
    left: '175px'
  },

  arwHead: {
    width: '30px',
    position: 'relative',
    top: '4px',
    left: '15px',
    transition: '0.3s',
  },

  arwTail: {
    width: '280px',
    position: 'absolute',
    top: '16px',
    left: '-280px',
    transition: '0.3s',
  },

  summaryBar: {
    textShadow: '0 0 10px #7000ff, 0 0 10px #7000ff',
    color: '#C08FFF',
    fontFamily: 'Zengo',
    fontSize: '45px',
    lineHeight: '20px',
    '&:hover': {
      '& $arwHead': {
        left: '250px',
      },
      '& $arwTail': {
        left: '0px',
      }
    }
  }
}
))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();

  function accorSum(first, last) {
    return (
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className={classes.summaryBar}>
        <img src='images/arwHead.png' className={classes.arwHead} />
        <img src='images/arwTail.png' className={classes.arwTail} />
        <p className={classes.title0}>{first}</p> <p className={classes.title1}>~</p> <p className={classes.title2}>{last}</p>
      </AccordionSummary>)
  }

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        {accorSum('A', 'E')}
        <AccordionDetails>
          <GlossaryCard />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        {accorSum('F', 'J')}
        <AccordionDetails>
          <Card />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        {accorSum('K', 'O')}
        <AccordionDetails>
          <Card />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        {accorSum('P', 'T')}
        <AccordionDetails>
          <Card />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        {accorSum('U', 'Z')}
        <AccordionDetails>
          <GlossaryCard>
            <h2>Volte</h2>
            <p>A rotation about a central point, performed by leading with the foot opposite the direction being turned in and moving the other foot behind.
              Voltes are described by the foot leading the motion; a Volte right turns you left, and leaves your right foot in front afterwards.
              By default, a volte denotes a 90 degree rotation; A demi-volte is a 45 degree rotation, while a grande-volte is a 90 degree rotation.
              Performed correctly, voltes make it possible to rotate without losing balance. Voltes can also be used as evades, or to supplement binds.</p>
          </GlossaryCard>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
