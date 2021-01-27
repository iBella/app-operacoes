import React from "react";
import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';

export const FormSquad = (props) => {

    return (
        <FormControl>
            <InputLabel>Squads</InputLabel>
            <Select className="select-option" id="squad" value={props.squad} onChange={props.onChangeSquad}>
                {props.squads.map((item, index) => (
                    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};


