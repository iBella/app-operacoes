import { SET_USUARIO } from "../actions/usuarioAction";
import { Usuario } from "../models/Usuario";

const initialState = {
    usuario: Usuario
};

export const usuario = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USUARIO:
        return {
            ...state,
            usuario: action.usuario
        };
        default:
        return state;
    }
};