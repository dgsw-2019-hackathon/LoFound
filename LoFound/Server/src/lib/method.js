/**
 * @description Async Foreach Function
 * @param {Array} array Array
 * @param {Function} callback Callback Function
 */
exports.asyncForeach = async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index]);
  }
};