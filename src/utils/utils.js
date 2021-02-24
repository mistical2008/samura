export const iterateObject = (obj, callback) => {
  for (let key in obj) {
    // if (typeof obj[key] !== "object") callback(obj, key);
    // iterateObject(obj[key], callback);

    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterateObject(obj[key], callback);
    } else {
      callback(obj, key);
    }
  }
};
