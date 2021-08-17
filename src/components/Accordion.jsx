import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import GlossaryCard from './GlossaryCard';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
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
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 45,
    '&$expanded': {
      minHeight: 45,
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
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>A - E</p>
        </AccordionSummary>
        <AccordionDetails>
          <GlossaryCard />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>F - J</p>
        </AccordionSummary>
        <AccordionDetails>
          <Card />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>K - O</p>
        </AccordionSummary>
        <AccordionDetails>
          <Card />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>P - T</p>
        </AccordionSummary>
        <AccordionDetails>
          <Card />
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '20px', margin: '0' }}>U - Z</p>
        </AccordionSummary>
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
