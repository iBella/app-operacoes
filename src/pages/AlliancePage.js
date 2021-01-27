import React, { useState } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Container from '@material-ui/core/Container';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ButtonPlus } from '../components/ButtonPlus';
import { CardRegisterAlliance } from '../components/CardRegisterAlliance';

import { Alliance } from '../models/Alliance';
import { Tribe } from '../models/Tribe';

export const AlliancePage = () => {

  const [expanded, setExpanded] = useState(false);
  const [isValidRegister, setIsValidRegister] = useState(false);
  const [alliance, setAlliance] = useState(getAlliance());

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAdd = () => {
    setIsValidRegister(!isValidRegister);
  };

  const onChangeNameAllianceHandler = () => {
    console.log("entrei");
  }

  return (
    <Container>
      <h3 className="frase-agil">Cultura só vai existir, se o seu time enxergar valor naquilo que ele vê.</h3>
      <hr></hr>
      { isValidRegister === true &&
        <CardRegisterAlliance allianceName={alliance.name} onChangeNameAllianceHandler={onChangeNameAllianceHandler}></CardRegisterAlliance>
      }
      {getTribos().map((tribo, index) => ( 
        <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {tribo.name}
          </AccordionSummary>
          <AccordionDetails>
            {tribo.clients}
          </AccordionDetails>
        </Accordion>
      ))}
      <ButtonPlus className="btn-plus-end" size="small" color="primary"  handleAdd={handleAdd}></ButtonPlus>
    </Container>
  );
}


function getAlliance() {
  const alianca1 = new Alliance("Origami", "dti");
  const alianca2 = new Alliance("Teste 2", "dti");
  const alianca3 = new Alliance("Teste 3", "dti");

  return [alianca1, alianca2, alianca3];
}

function getTribos() {
  const tribo1 = new Tribe("Andrômeda", "MRV");
  const tribo2 = new Tribe("Aquárius", "MRV");
  const tribo3 = new Tribe("Áquila", "MRV");

  return [tribo1, tribo2, tribo3];
}
