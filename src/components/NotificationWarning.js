import React from "react";

import Alert from '@material-ui/lab/Alert';

export const NotificationWarning = (props) => {

    return (
        <div className="notification-warning">
            {props.isValid &&
                <Alert severity="warning">{props.message}</Alert>
            }
        </div>
    );
};
