const initialValue = {
  exerciseList: [],
  loading: false,
  error: null,
  showNewExerciseModal: false
};

export const exerciseReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCH_EXERCISE_DATA_LOADING": {
      return { ...state, loading: true };
    }

    case "FETCH_EXERCISE_DATA_SUCCESS": {
      return {
        ...state,
        exerciseList: action.payload,
        loading: false,
        error: null
      };
    }

    case "FETCH_EXERCISE_DATA_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    case "ADD_NEW_EXERCISE_SUCCESS": {
      return {
        ...state,
        exerciseList: [...state.exerciseList, action.payload],
        loading: false,
        error: null
      };
    }

    case "DELETE_EXERCISE_SUCCESS": {
      return {
        ...state,
        exerciseList: action.payload,
        loading: false,
        error: null
      };
    }

    case "SHOW_NEW_EXERCISE_MODAL": {
      return {
        ...state,
        showNewExerciseModal: action.payload
          ? action.payload
          : !state.showNewExerciseModal
      };
    }

    default:
      return state;
  }
};
