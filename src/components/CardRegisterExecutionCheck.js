import React from "react";

import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

import { FormSquad } from "./FormSquad";

export const CardRegisterExecutionCheck = (props) => {

    return (
        <Container>
            <Card className="card-register">
                <FormSquad squad={props.squad} squads={props.squads} onChangeSquad={props.onChangeSquadHandler}></FormSquad>
            </Card>
        </Container>
    );
};