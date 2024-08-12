const initState = {
  themeId: 1,
};

export type StateType = {
  themeId: number;
};

export const themeReducer = (state: StateType = initState, action: ReturnType<typeof changeThemeId>): StateType => {
  switch (action.type) {
    case "SET_THEME_ID": {
      return { ...state, themeId: action.id };
    }
    default:
      return state;
  }
};

export const changeThemeId = (id: number): any => ({ type: "SET_THEME_ID", id } as const); // fix any
