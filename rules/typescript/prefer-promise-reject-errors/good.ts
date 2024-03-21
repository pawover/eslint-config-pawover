Promise.reject(new Error());

class CustomError extends Error {
  // ...
}
Promise.reject(new CustomError());

new Promise((resolve, reject) => reject(new Error()));

new Promise((resolve, reject) => {
  class CustomError extends Error {
    // ...
  }
  return reject(new CustomError());
});
