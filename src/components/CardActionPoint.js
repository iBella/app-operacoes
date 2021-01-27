import React from "react";

import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

import { FormDescription } from "./FormDescription";
import { FormActionType } from "./FormActionType";
import { FormResponsability } from "./FormResponsability";
import { FormPriority } from "./FormPriority";

export const CardActionPoint = (props) => {

    return (
        <Container>
            <Card className="card-register">
                <FormActionType actionType={props.actionType} onChangeActionTypeHandler={props.onChangeActionTypeHandler}></FormActionType>
                <FormResponsability actionResponsability={props.actionResponsability} onChangeActionResponsabilitylHandler={props.onChangeActionResponsabilitylHandler}></FormResponsability>
                <FormPriority actionPriority={props.actionPriority} onChangeActionPriorityHandler={props.onChangeActionPriorityHandler}></FormPriority>
                <FormDescription actionDescription={props.actionDescription} onChangeActionDescriptionHandler={props.onChangeActionDescriptionHandler}></FormDescription>
            </Card>
        </Container>
    );
};


