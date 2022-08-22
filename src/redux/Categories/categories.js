const checkStatusAction = '/src/redux/Categories/checkingStatusAction';

export const categoriesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case checkStatusAction:
      return 'under construction';
    default:
      return state;
  }
};

export const checkStatus = (category) => ({
  type: checkStatusAction,
  category,
});
