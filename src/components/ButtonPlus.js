import React from "react";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export const ButtonPlus = (props) => {

    return (
        <div className={props.className}>
            <Fab size={props.size} color={props.color} onClick={props.handleAdd}>
                <AddIcon />
            </Fab>
        </div>
    );
};
