import React from "react";
import intl from 'react-intl-universal';

import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import { ActionPriority } from "../enums/enums";

export const FormPriority = (props) => {

    return (
        <FormControl>
            <InputLabel>{intl.get("select-enums.label.actionPriority")}</InputLabel>
            <Select className="select-option" value={props.actionPriority} onChange={props.onChangeActionPriorityHandler}>
                <MenuItem key={ActionPriority.low} value={ActionPriority.low}>Baixa</MenuItem>
                <MenuItem key={ActionPriority.normal} value={ActionPriority.normal}>Média</MenuItem>
                <MenuItem key={ActionPriority.high} value={ActionPriority.high}>Alta</MenuItem>
                <MenuItem key={ActionPriority.veryHigh} value={ActionPriority.veryHigh}>Muito Alta</MenuItem>
            </Select>
        </FormControl>
    );
};


