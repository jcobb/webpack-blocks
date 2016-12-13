/**
 * Eslint webpack block.
 *
 * @see https://github.com/MoOx/eslint-loader
 */

module.exports = eslint

/**
 * @param {object} [options]
 * @param {RegExp, Function, string}  [options.exclude]   Directories to exclude.
 * @return {Function}
 */
function eslint (options) {
  options = options || {}
  const exclude = options.exclude || /\/node_modules\//

  return (fileTypes) => ({
    module: {
      loaders: [
        {
          test: fileTypes('application/javascript'),
          exclude: Array.isArray(exclude) ? exclude : [ exclude ],
          loaders: [ 'eslint-loader' ]
        }
      ]
    }
  })
}
