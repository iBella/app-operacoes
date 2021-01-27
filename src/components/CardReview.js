import React from "react";

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
                                <TableCell align="center">Tipo</TableCell>
                                <TableCell align="center">Responsável</TableCell>
                                <TableCell align="center">Prioridade</TableCell>
                                <TableCell>Descrição</TableCell>
                                <TableCell align="center">Ocorrência</TableCell>
                                <TableCell align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.actionsReview.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{ActionType[item.actionType]}</TableCell>
                                    <TableCell align="center">{ActionResponsability[item.responsability]}</TableCell>
                                    <TableCell align="center">{ActionPriority[item.priority]}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell align="center">{item.count}</TableCell>
                                    <TableCell align="center">
                                        <Select className={"select-option-less-"+item.status} id="status" value={item.status} onChange={(event) => props.onChangeStatus(props.actionsReview, index, event)}>
                                            <MenuItem key={ActionStatus.inProgress} value={ActionStatus.inProgress}>Em Andamento</MenuItem>
                                            <MenuItem key={ActionStatus.repeated} value={ActionStatus.repeated}>Refazer</MenuItem>
                                            <MenuItem key={ActionStatus.canceled} value={ActionStatus.canceled}>Cancelado</MenuItem>
                                            <MenuItem key={ActionStatus.completed} value={ActionStatus.completed}>Completo</MenuItem>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <NotificationWarning isValid={props.isValidRegister} message="Aviso: Enquanto houver status 'Em Andamento' não é possível passar para próxima etapa."></NotificationWarning>
            </Card>
        </Container>
    );
};