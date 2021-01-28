import React, { useState } from "react";
import intl from 'react-intl-universal';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';

import { ButtonPlus } from '../components/ButtonPlus';
import { CardActionPoint } from '../components/CardActionPoint';
import { CardRegisterExecutionCheck } from '../components/CardRegisterExecutionCheck';
import { CardReview } from '../components/CardReview';

import { setActionPoint } from '../functions/SetActionPoint';
import { setRegisterExecutionCheck } from '../functions/SetRegisterExecutionCheck';
import { setSteper } from '../functions/SteperFunction';

import { Squad } from '../models/Squad';
import { ActionPoint } from '../models/ActionPoint';

import { ActionPriority, ActionType, ActionResponsability, ActionStatus } from "../enums/enums";

export const ExecutionCheckPage = () => {

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps(intl.get("step.register"), intl.get("step.review"), intl.get("step.actionPlan"), intl.get("step.finalize"));

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
    const onChangeSquadHandler = setRegisterExecutionCheck(setSquad);
    const { onChangeActionTypeHandler, onChangeActionResponsabilitylHandler, onChangeActionPriorityHandler, onChangeActionDescriptionHandler } = 
      setActionPoint(setActionType, setActionResponsability, setActionPriority, setActionDescription, actionDescription);

    const handleAdd = () => {
      
    };  

    return (
        <Container>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                    {index === 0 &&
                      <CardRegisterExecutionCheck 
                          squad={squad} squads={squads} onChangeSquadHandler={onChangeSquadHandler}>
                      </CardRegisterExecutionCheck>
                    }
                    {index === 1 &&
                      <CardReview actionsReview={actionsReview} onChangeStatus={onChangeStatus} isValidRegister={isValidRegister}></CardReview>
                    }
                    {index === 2 &&
                      <div>
                        <CardActionPoint
                            actionType={actionType} onChangeActionTypeHandler={onChangeActionTypeHandler}
                            actionResponsability={actionResponsability} onChangeActionResponsabilitylHandler={onChangeActionResponsabilitylHandler}
                            actionPriority={actionPriority} onChangeActionPriorityHandler={onChangeActionPriorityHandler}
                            actionDescription={actionDescription} onChangeActionDescriptionHandler={onChangeActionDescriptionHandler}>
                        </CardActionPoint>
                        <ButtonPlus className="btn-plus" size="small" color="primary"  handleAdd={handleAdd}></ButtonPlus>
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
               <AddIcon /> {intl.get("btn.new-executionCheck")}
            </Button>
          )}
        </Container>
    );
};

function getSteps(register, review, actionPlan, finalize) {
  return [register, review, actionPlan, finalize];
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