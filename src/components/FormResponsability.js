import React from "react";
import intl from 'react-intl-universal';

import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import { ActionResponsability } from "../enums/enums";

export const FormResponsability = (props) => {

    return (
        <FormControl>
            <InputLabel>{intl.get("select-enums.label.actionResponsability")}</InputLabel>
            <Select className="select-option" value={props.actionResponsability} onChange={props.onChangeActionResponsabilitylHandler}>
                <MenuItem key={ActionResponsability.company} value={ActionResponsability.company}>Dti</MenuItem>
                <MenuItem key={ActionResponsability.squad} value={ActionResponsability.squad}>Squad</MenuItem>
                <MenuItem key={ActionResponsability.client} value={ActionResponsability.client}>Cliente</MenuItem>
            </Select>
        </FormControl>
    );
};


