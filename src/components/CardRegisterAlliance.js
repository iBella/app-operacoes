import React from "react";
import intl from 'react-intl-universal';

import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

import { FormControl, TextField } from '@material-ui/core';

export const CardRegisterAlliance = (props) => {

    return (
        <Container>
            <Card className="card-register">
                <FormControl className="form-text">
                    <TextField label={intl.get("label.name")} value={props.allianceName} onChange={props.onChangeNameAllianceHandler} multiline variant="outlined"/>
                </FormControl>
            </Card>
        </Container>
    );
};


