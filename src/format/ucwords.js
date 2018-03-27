
/**
 * 所有单词首字母大写
 * Words first to uppercase
 *
 * @param   {String}    str            string
 * @returns {String}                   string
 */

var ucwords = function(str) {
    return str.toLowerCase().replace(/\b(\w)|\s(\w)/g, function($1) {
        return $1.toUpperCase()
    })
}

module.exports = ucwords
