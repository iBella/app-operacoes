export function setRegister(setSquad) {
    return (valor) => {
      setSquad(valor.target.value);
    };
}