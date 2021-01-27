import React from "react";
import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import { ActionPriority } from "../enums/enums";

export const FormPriority = (props) => {

    return (
        <FormControl>
            <InputLabel>Prioridade</InputLabel>
            <Select className="select-option" value={props.actionPriority} onChange={props.onChangeActionPriorityHandler}>
                <MenuItem key={ActionPriority.low} value={ActionPriority.low}>Baixa</MenuItem>
                <MenuItem key={ActionPriority.normal} value={ActionPriority.normal}>Média</MenuItem>
                <MenuItem key={ActionPriority.high} value={ActionPriority.high}>Alta</MenuItem>
                <MenuItem key={ActionPriority.veryHigh} value={ActionPriority.veryHigh}>Muito Alta</MenuItem>
            </Select>
        </FormControl>
    );
};


