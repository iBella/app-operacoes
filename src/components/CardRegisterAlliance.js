import React from "react";

import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

import { FormControl, TextField } from '@material-ui/core';

export const CardRegisterAlliance = (props) => {

    return (
        <Container>
            <Card className="card-ce">
                <FormControl className="form-text">
                    <TextField label="Nome" value={props.allianceName} onChange={props.onChangeNameAllianceHandler} multiline variant="outlined"/>
                </FormControl>
            </Card>
        </Container>
    );
};


