import React from "react";
import intl from 'react-intl-universal';

import { FormControl, TextField } from '@material-ui/core';

export const FormDescription = (props) => {

    return (
        <FormControl className="form-text">
            <TextField label={intl.get("label.description")} value={props.actionDescription} onChange={props.onChangeActionDescriptionHandler} multiline variant="outlined"/>
        </FormControl>
    );
};


