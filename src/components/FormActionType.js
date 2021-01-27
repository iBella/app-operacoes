import React from "react";
import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import { ActionType } from "../enums/enums";

export const FormActionType = (props) => {

    return (
        <FormControl>
            <InputLabel>Tipo</InputLabel>
            <Select className="select-opcao" value={props.actionType} onChange={props.onChangeActionTypeHandler}>
                <MenuItem key={ActionType.client} value={ActionType.client}>Cliente</MenuItem>
                <MenuItem key={ActionType.infra} value={ActionType.infra}>Infra</MenuItem>
                <MenuItem key={ActionType.po} value={ActionType.po}>PO</MenuItem>
                <MenuItem key={ActionType.rite} value={ActionType.rite}>Rito</MenuItem>
                <MenuItem key={ActionType.sm} value={ActionType.sm}>SM</MenuItem>
                <MenuItem key={ActionType.squad} value={ActionType.squad}>Squad</MenuItem>
            </Select>
        </FormControl>
    );
};


