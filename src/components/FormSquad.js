import React from "react";
import intl from 'react-intl-universal';

import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';

export const FormSquad = (props) => {

    return (
        <FormControl>
            <InputLabel>{intl.get("label.squad")}</InputLabel>
            <Select className="select-option" id="squad" value={props.squad} onChange={props.onChangeSquad}>
                {props.squads.map((item, index) => (
                    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};


