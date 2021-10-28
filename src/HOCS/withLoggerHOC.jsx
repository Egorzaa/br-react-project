export const withLoggerHOC = (Component) => {
  return (props) => {
    console.log("text");
    return <Component {...props} />;
  };
};
