// TODO: make an iterable logic for an array of keyConf and default keys handling
export const handleInputKeys = (event, keyConf) => {
  event.code === keyConf.keyCode && keyConf.action();
};
