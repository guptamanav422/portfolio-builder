let userImageReducer = (state = null, action) => {
    switch (action.type) {
      case "SET_IMAGE":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default userImageReducer;
  