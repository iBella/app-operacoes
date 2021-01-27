import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';

import { FormActionPoint } from '../components/executionCheck/actionPoint/FormActionPoint';
import { FormRegister } from '../components/executionCheck/register/FormRegister';
import { FormReview } from '../components/executionCheck/review/FormReview';

import { setActionPoint } from '../functions/executionCheck/ActionPointFunction';
import { setRegister } from '../functions/executionCheck/RegisterFunction';
import { setSteper } from '../functions/SteperFunction';

import { Squad } from '../models/Squad';
import { ActionPoint } from '../models/ActionPoint';

import { ActionPriority, ActionType, ActionResponsability, ActionStatus } from "../enums/enums";

export const CheckExecucaoPage = () => {

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const [actionType, setActionType] = useState(4);
    const [actionResponsability, setActionResponsability] = useState(0);
    const [actionPriority, setActionPriority] = useState(0);
    const [actionDescription, setActionDescription] = useState('');
    
    const [squads, setSquads] = useState(getSquads());
    const [squad, setSquad] = useState(getSquads()[0].name);

    const [actionsReview, setActionReview] = useState(getAcoes());
    const [newActions, setNewActions] = useState([]);
    const [isValidRegister, setIsValidRegister] = useState(true);

    const onChangeStatus = (list, index, event) => {
      let newList = list.slice();
      newList[index].status = event.target.value;
      setActionReview(newList);
      setIsValidRegister(newList.some(item => item.status === ActionStatus.inProgress));
    }

    const { handleBack, handleNext, handleReset } = setSteper(setActiveStep);
    const onChangeSquadHandler = setRegister(setSquad);
    const { onChangeActionTypeHandler, onChangeActionResponsabilitylHandler, onChangeActionPriorityHandler, onChangeActionDescriptionHandler } = 
      setActionPoint(setActionType, setActionResponsability, setActionPriority, setActionDescription, actionDescription);

    return (
        <Container>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                    {index === 0 &&
                      <FormRegister 
                          squad={squad} squads={squads} onChangeSquadHandler={onChangeSquadHandler}>
                      </FormRegister>
                    }
                    {index === 1 &&
                      <FormReview actionsReview={actionsReview} onChangeStatus={onChangeStatus} isValidRegister={isValidRegister}></FormReview>
                    }
                    {index === 2 &&
                      <div>
                        <FormActionPoint
                            actionType={actionType} onChangeActionTypeHandler={onChangeActionTypeHandler}
                            actionResponsability={actionResponsability} onChangeActionResponsabilitylHandler={onChangeActionResponsabilitylHandler}
                            actionPriority={actionPriority} onChangeActionPriorityHandler={onChangeActionPriorityHandler}
                            actionDescription={actionDescription} onChangeActionDescriptionHandler={onChangeActionDescriptionHandler}>
                        </FormActionPoint>
                        <div className="btn-mais">
                          <Fab size="small" color="primary" aria-label="add">
                            <AddIcon />
                          </Fab>
                        </div>
                      </div>
                    }
                    <IconButton disabled={activeStep === 0} onClick={handleBack} color="primary" component="span">
                      <ExpandLessIcon />
                    </IconButton>
                    <IconButton onClick={handleNext} disabled={index === 1 && isValidRegister} color="primary" component="span">
                      {activeStep === steps.length - 1 ? <DoneIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Button onClick={handleReset} variant="outlined" color="primary">
               <AddIcon /> Iniciar novo Check de Execução
            </Button>
          )}
        </Container>
    );
};

function getSteps() {
  return ['Cadastrar', 'Revisar', 'Plano de Ação', 'Finalizar'];
}

function getSquads() {
  const squad1 = new Squad("Contrato Digital");
  const squad2 = new Squad("Gerador de Proposta");
  const squad3 = new Squad("Microsserviços");

  return [squad1, squad2, squad3];
}

function getAcoes() {
  const acao1 = new ActionPoint(ActionType.client, ActionResponsability.company, "Rever atuação PO", 1, ActionPriority.normal, ActionStatus.inProgress);
  const acao2 = new ActionPoint(ActionType.squad, ActionResponsability.squad, "Rever roteiro de teste", 1, ActionPriority.high, ActionStatus.inProgress);
  const acao3 = new ActionPoint(ActionType.sm, ActionResponsability.client, "Revisar OKRs da squad", 1, ActionPriority.veryHigh, ActionStatus.inProgress);

  return [acao1, acao2, acao3];
}