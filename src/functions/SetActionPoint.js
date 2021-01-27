export function setActionPoint(setActionType, setActionResponsability, setActionPriority, setActionDescription, actionDescription) {
    
    const onChangeActionTypeHandler = (event) => {
        setActionType(event.target.value);
    };

    const onChangeActionResponsabilityHandler = (event) => {
        setActionResponsability(event.target.value);
    };

    const onChangeActionPriorityHandler = (event) => {
        setActionPriority(event.target.value);
    };

    const onChangeActionDescriptionHandler = (event) => {
        setActionDescription(event.target.value);
    };

    return { onChangeActionTypeHandler, onChangeActionResponsabilityHandler, onChangeActionPriorityHandler, onChangeActionDescriptionHandler };
}