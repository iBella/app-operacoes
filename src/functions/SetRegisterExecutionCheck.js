export function setRegisterExecutionCheck(setSquad) {
    return (event) => {
      setSquad(event.target.value);
    };
}