export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_TO_MEMORY = "ADD_TO_MEMORY";
export const RECALL_MEMORY = "RECALL_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => ({
  type: CHANGE_OPERATION,
  payload: operator,
});

export const clearDisplay = () => ({
  type: CLEAR_DISPLAY,
});

export const addToMemory = () => ({
  type: ADD_TO_MEMORY,
});

export const recallMemory = () => ({
  type: RECALL_MEMORY,
});

export const clearMemory = () => ({
  type: CLEAR_MEMORY,
});
