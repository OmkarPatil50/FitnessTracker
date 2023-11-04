const initialValue = {
  foodsList: [],
  loading: false,
  error: null,
  showNewFoodModal: false
};

export const foodReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCH_FOOD_DATA_LOADING": {
      return { ...state, loading: true };
    }

    case "FETCH_FOOD_DATA_SUCCESS": {
      return {
        ...state,
        foodsList: action.payload,
        loading: false,
        error: null
      };
    }

    case "FETCH_FOOD_DATA_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    case "ADD_NEW_FOOD_SUCCESS": {
      return {
        ...state,
        foodsList: [...state.foodsList, action.payload],
        loading: false,
        error: null
      };
    }

    case "DELETE_FOOD_SUCCESS": {
      return {
        ...state,
        foodsList: action.payload,
        loading: false,
        error: null
      };
    }

    case "SHOW_NEW_FOOD_MODAL": {
      return {
        ...state,
        showNewFoodModal: action.payload
          ? action.payload
          : !state.showNewFoodModal
      };
    }

    default:
      return state;
  }
};
