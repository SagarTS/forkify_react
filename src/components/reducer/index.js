const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FORM_DATA":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "ADD_INGREDIENTS":
      return {
        ...state,
        ingredients: [
          ...state.ingredients.map((ingredient, i) =>
            `${ingredient}${i}` === action.payload.id
              ? action.payload.value
              : ingredient
          ),
        ],
      };

    case "ADD_INGREDIENT_FIELD":
      return {
        ...state,
        ingredients: [...state.ingredients, ""],
      };

    default:
      return state;
  }
};

export default reducer;
