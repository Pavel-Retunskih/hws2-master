const initState = {
  isLoading: false,
};

export type initStateType = typeof initState;
type ActionsType = LoadingActionType;
export const loadingReducer = (state: initStateType = initState, action: ActionsType): initStateType => {
  // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    case "CHANGE_LOADING": {
      const newState = { ...state };
      newState.isLoading = action.isLoading;
      return newState;
    }
    default:
      return state;
  }
};

type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType =>
  ({
    type: "CHANGE_LOADING",
    isLoading,
  } as const);
