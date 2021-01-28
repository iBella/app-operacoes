import React from "react";
import intl from 'react-intl-universal';

import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import { ActionType } from "../enums/enums";

export const FormActionType = (props) => {

    return (
        <FormControl>
            <InputLabel>{intl.get("select-enums.label.actionType")}</InputLabel>
            <Select className="select-option" value={props.actionType} onChange={props.onChangeActionTypeHandler}>
                <MenuItem key={ActionType.client} value={ActionType.client}>{intl.get("select-enums.actionType.client")}</MenuItem>
                <MenuItem key={ActionType.infra} value={ActionType.infra}>{intl.get("select-enums.actionType.infra")}</MenuItem>
                <MenuItem key={ActionType.po} value={ActionType.po}>{intl.get("select-enums.actionType.po")}</MenuItem>
                <MenuItem key={ActionType.rite} value={ActionType.rite}>{intl.get("select-enums.actionType.rite")}</MenuItem>
                <MenuItem key={ActionType.sm} value={ActionType.sm}>{intl.get("select-enums.actionType.sm")}</MenuItem>
                <MenuItem key={ActionType.squad} value={ActionType.squad}>{intl.get("select-enums.actionType.squad")}</MenuItem>
            </Select>
        </FormControl>
    );
};


