

/* eslint-disable max-len */
const classes = {
  overlay: "fixed top-0 left-0 w-screen h-screen bg-gray-600 bg-opacity-80 flex items-center justify-center z-20",
  loader: "inline-block h-8 w-8 animate-spin text-orange-600 rounded-full border-4 b border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  text: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
};
/* eslint-enable max-len */

const LoadingOverlay = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.loader}>
        <span className={classes.text}>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;