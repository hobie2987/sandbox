/**
 * Remove any character that is not a letter, digit, or whitespace
 * @param value
 * @returns {string|void}
 */
const removeSpecialChars = (value) => {
    return value.replace(/[^\w\s]/gi, '');
};

/**
 * Convert all characters to lowercase
 *
 * @param value
 * @returns {string}
 */
const toLowerCase = (value) => {
    return value.toLowerCase();
};

module.exports = {
    removeSpecialChars,
    toLowerCase
};
