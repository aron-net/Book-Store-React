const CHECK = 'bookStore/categories/CHECK';

export const categoriesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK:
      return 'under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK,
});
