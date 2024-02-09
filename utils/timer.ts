const timer = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default timer;
