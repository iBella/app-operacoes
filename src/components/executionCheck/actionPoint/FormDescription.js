import React from "react";

import { FormControl, TextField } from '@material-ui/core';

export const FormDescription = (props) => {

    return (
        <FormControl className="form-text">
            <TextField label="Descrição" value={props.actionDescription} onChange={props.onChangeActionDescriptionHandler} multiline variant="outlined"/>
        </FormControl>
    );
};


