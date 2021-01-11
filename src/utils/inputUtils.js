export const handleInputKeys = (event, keyConf) => {
  switch (event.code) {
    case keyConf.keyCode:
      keyConf.action();
      break;
    default:
      break;
  }
};
