import React from "react";
import intl from 'react-intl-universal';

import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { MenuItem, Select } from '@material-ui/core';

import { NotificationWarning } from './NotificationWarning';

import { ActionType, ActionResponsability, ActionPriority, ActionStatus } from '../enums/enums'

export const CardReview = (props) => {
    
    return (
        <Container>
            <Card className="card-register">
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">{intl.get("select-enums.label.actionType")}</TableCell>
                                <TableCell align="center">{intl.get("select-enums.label.actionResponsability")}</TableCell>
                                <TableCell align="center">{intl.get("select-enums.label.actionPriority")}</TableCell>
                                <TableCell>{intl.get("label.description")}</TableCell>
                                <TableCell align="center">{intl.get("label.count")}</TableCell>
                                <TableCell align="center">{intl.get("select-enums.label.actionStatus")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.actionsReview.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{intl.get(`select-enums.actionType.${ActionType[item.actionType]}`)}</TableCell>
                                    <TableCell align="center">{intl.get(`select-enums.actionResponsability.${ActionResponsability[item.responsability]}`)}</TableCell>
                                    <TableCell align="center">{intl.get(`select-enums.actionPriority.${ActionPriority[item.priority]}`)}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell align="center">{item.count}</TableCell>
                                    <TableCell align="center">
                                        <Select className={`select-option-less-${item.status}`} value={item.status} onChange={(event) => props.onChangeStatus(props.actionsReview, index, event)}>
                                            <MenuItem key={ActionStatus.inProgress} value={ActionStatus.inProgress} disabled="true">{intl.get("select-enums.actionStatus.inProgress")}</MenuItem>
                                            <MenuItem key={ActionStatus.repeated} value={ActionStatus.repeated}>{intl.get("select-enums.actionStatus.repeated")}</MenuItem>
                                            <MenuItem key={ActionStatus.canceled} value={ActionStatus.canceled}>{intl.get("select-enums.actionStatus.canceled")}</MenuItem>
                                            <MenuItem key={ActionStatus.completed} value={ActionStatus.completed}>{intl.get("select-enums.actionStatus.completed")}</MenuItem>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <NotificationWarning isValid={props.isValidRegister} message={intl.get("notification.status-inProgress")}></NotificationWarning>
            </Card>
        </Container>
    );
};