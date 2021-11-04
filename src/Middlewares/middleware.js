export const middleware = (store) => (next) => (action) => {
  // console.log("i am in middleware");

  return next(action);
};
