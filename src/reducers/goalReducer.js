const initialValue = {
  goalsList: [],
  loading: false,
  error: null,
  showNewGoalModal: false
};

export const goalReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCH_GOALS_DATA_LOADING": {
      return { ...state, loading: true };
    }

    case "FETCH_GOALS_DATA_SUCCESS": {
      return {
        ...state,
        goalsList: action.payload,
        loading: false,
        error: null
      };
    }

    case "FETCH_GOALS_DATA_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    case "ADD_NEW_GOAL_SUCCESS": {
      return {
        ...state,
        goalsList: [...state.goalsList, action.payload],
        loading: false,
        error: null
      };
    }

    case "DELETE_GOAL_SUCCESS": {
      return {
        ...state,
        goalsList: action.payload,
        loading: false,
        error: null
      };
    }
    case "SHOW_NEW_GOAL_MODAL": {
      return {
        ...state,
        showNewGoalModal: action.payload
          ? action.payload
          : !state.showNewGoalModal
      };
    }

    default:
      return state;
  }
};
